// Thin wrapper over any OpenAI-compatible /chat/completions endpoint.
// Deliberately provider-agnostic: the model id, base URL and key are all env
// vars, so swapping providers is an env change, never a code change.
//
// CommonJS on purpose - package.json has no "type": "module", so `export`
// syntax in a .js file would fail at runtime in the Vercel Node lambda.

// Some OpenAI-compatible providers reject response_format outright. We find out
// by trying, then remember for the lifetime of this warm lambda instance.
let jsonModeBroken = false;

async function callLLM({ messages, maxTokens, temperature = 0.6, json = false, model }) {
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

  const controller = new AbortController();
  // Hard wall below the function's maxDuration (15s) so we fail on our own
  // terms rather than being killed mid-flight.
  const timer = setTimeout(() => controller.abort(), 12000);

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

    // Provider doesn't understand response_format - drop it and retry once.
    if (res.status === 400 && body.response_format) {
      jsonModeBroken = true;
      delete body.response_format;
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
    return {
      text: (data && data.choices && data.choices[0] && data.choices[0].message
        && data.choices[0].message.content) || '',
      usage: (data && data.usage) || null,
      model: body.model
    };
  } finally {
    clearTimeout(timer);
  }
}

module.exports = { callLLM };
