// Thin wrapper over any OpenAI-compatible /chat/completions endpoint.
// Deliberately provider-agnostic: the model id, base URL and key are all env
// vars, so swapping providers is an env change, never a code change.
//
// CommonJS on purpose - package.json has no "type": "module", so `export`
// syntax in a .js file would fail at runtime in the Vercel Node lambda.

// Some OpenAI-compatible providers reject response_format or `reasoning`
// outright. We find out by trying, then remember for the lifetime of this warm
// lambda instance.
let jsonModeBroken = false;
let reasoningParamBroken = false;

async function callLLM({
  messages,
  maxTokens,
  temperature = 0.6,
  json = false,
  model,
  timeoutMs = 12000
}) {
  const base = (process.env.AI_BASE_URL || '').replace(/\/+$/, '');
  const key = process.env.AI_API_KEY;

  // Missing config is a normal, expected state (e.g. a deploy before the env
  // vars are set). Callers catch this and fall back to local grading.
  if (!base || !key) {
    const err = new Error('not_configured');
    err.code = 'not_configured';
    throw err;
  }

  const body = {
    model: model || process.env.AI_MODEL,
    messages,
    max_tokens: maxTokens,
    temperature,
    stream: false
  };

  const wantsJson = json && !jsonModeBroken && process.env.AI_SUPPORTS_JSON_MODE !== '0';
  if (wantsJson) {
    body.response_format = { type: 'json_object' };
  }

  // Reasoning models (glm-5.2 among them) spend max_tokens on hidden reasoning
  // BEFORE emitting any content. At our small caps that means the whole budget
  // is consumed, finish_reason comes back 'length', and content is null - which
  // looks exactly like a broken key. Neither job here benefits from reasoning:
  // grading is a short classification and chat wants brief, warm replies. So we
  // turn it off, which also happens to be ~9x cheaper.
  if (!reasoningParamBroken && process.env.AI_DISABLE_REASONING !== '0') {
    body.reasoning = { enabled: false };
  }

  const controller = new AbortController();
  // Hard wall kept below the function's maxDuration (30s in vercel.json) so we
  // fail on our own terms, with a usable error, rather than being killed
  // mid-flight. Callers pass a timeout suited to their job: grading is a short
  // classification, a chat reply legitimately takes longer.
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  const headers = {
    'content-type': 'application/json',
    authorization: `Bearer ${key}`
  };

  // OpenRouter-specific, and harmless elsewhere: these identify the app on
  // openrouter.ai and are optional. Set AI_APP_URL / AI_APP_TITLE to use them.
  if (process.env.AI_APP_URL) headers['HTTP-Referer'] = process.env.AI_APP_URL;
  if (process.env.AI_APP_TITLE) headers['X-Title'] = process.env.AI_APP_TITLE;

  const post = (payload) =>
    fetch(`${base}/chat/completions`, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
      signal: controller.signal
    });

  try {
    let res = await post(body);

    // Provider doesn't understand one of our optional params - drop them and
    // retry once, then remember so we stop paying for the round trip.
    if (res.status === 400 && (body.response_format || body.reasoning)) {
      if (body.response_format) {
        jsonModeBroken = true;
        delete body.response_format;
      }
      if (body.reasoning) {
        reasoningParamBroken = true;
        delete body.reasoning;
      }
      res = await post(body);
    }

    if (!res.ok) {
      const err = new Error(`upstream_${res.status}`);
      err.code = 'upstream';
      err.status = res.status;
      err.detail = (await res.text()).slice(0, 500);
      throw err;
    }

    const data = await res.json();
    const choice = (data && data.choices && data.choices[0]) || {};
    const text = (choice.message && choice.message.content) || '';

    // Empty content with finish_reason 'length' means the token budget was
    // consumed before any answer was produced - almost always a reasoning model
    // burning it invisibly. Name it loudly: it is indistinguishable from a bad
    // key at the call site, and that cost real debugging time once already.
    if (!text && choice.finish_reason === 'length') {
      const reasoned =
        (data.usage &&
          data.usage.completion_tokens_details &&
          data.usage.completion_tokens_details.reasoning_tokens) || 0;
      const err = new Error('truncated_before_content');
      err.code = 'truncated';
      err.detail =
        `model ${body.model} returned no content (finish_reason=length, ` +
        `reasoning_tokens=${reasoned}, max_tokens=${maxTokens}). ` +
        'Raise the token cap or keep AI_DISABLE_REASONING unset.';
      throw err;
    }

    return {
      text,
      usage: (data && data.usage) || null,
      model: body.model
    };
  } finally {
    clearTimeout(timer);
  }
}

module.exports = { callLLM };
