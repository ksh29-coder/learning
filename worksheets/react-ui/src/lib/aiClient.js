// Browser-side client for /api/chat and /api/grade.
//
// Every call is best-effort: callers must treat a rejection as "carry on
// without the AI", never as an error to show a child.

const PASSPHRASE_KEY = 'ai_family_key';
const GRADE_CACHE_KEY = 'ai_grade_cache';
const MAX_CACHE_ENTRIES = 200;

// Feature flag. CRA inlines REACT_APP_* at build time; this one is only a
// boolean, so exposing it is harmless (unlike an API key, which must never
// carry that prefix).
export function isAiEnabled() {
  return process.env.REACT_APP_AI_ENABLED === '1';
}

export function getPassphrase() {
  try {
    return localStorage.getItem(PASSPHRASE_KEY) || '';
  } catch (e) {
    return '';
  }
}

export function setPassphrase(value) {
  try {
    localStorage.setItem(PASSPHRASE_KEY, value || '');
  } catch (e) {
    /* non-fatal */
  }
}

export class AiError extends Error {
  constructor(code, message) {
    super(message || code);
    this.code = code;
  }
}

async function postJson(url, payload, { timeoutMs = 12000 } = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-family-key': getPassphrase()
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    // Must stay distinguishable so the UI can re-prompt for the family password
    // instead of silently degrading forever.
    if (res.status === 401) throw new AiError('bad_passphrase');
    if (res.status === 429) throw new AiError('rate_limited');
    if (!res.ok) throw new AiError('http_' + res.status);

    // A misplaced api/ directory makes Vercel serve index.html with a 200,
    // which would otherwise fail here as a confusing JSON parse error.
    const contentType = res.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) throw new AiError('not_json');

    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}

// --- grade cache: re-checking the same answer should be free ---------------

function readCache() {
  try {
    const raw = sessionStorage.getItem(GRADE_CACHE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function writeCache(cache) {
  try {
    const keys = Object.keys(cache);
    if (keys.length > MAX_CACHE_ENTRIES) {
      const trimmed = {};
      keys.slice(-MAX_CACHE_ENTRIES).forEach((k) => {
        trimmed[k] = cache[k];
      });
      cache = trimmed;
    }
    sessionStorage.setItem(GRADE_CACHE_KEY, JSON.stringify(cache));
  } catch (e) {
    /* non-fatal */
  }
}

const cacheKey = (day, questionId, answer) =>
  `${day}|${questionId}|${String(answer).trim().toLowerCase()}`;

/**
 * Ask the server to grade a free-text answer on meaning.
 * Resolves to { verdict, hint, confidence, conceptTags, source }.
 * Rejects on any failure - the caller falls back to local matching.
 */
export async function gradeAnswer(
  { profile, day, questionId, question, expected, answer, context },
  options = {}
) {
  if (!isAiEnabled()) throw new AiError('disabled');

  const key = cacheKey(day, questionId, answer);
  const cache = readCache();
  if (cache[key]) return { ...cache[key], source: 'cache' };

  const data = await postJson(
    '/api/grade',
    { profile, day, questionId, question, expected, answer, context },
    options
  );

  if (!data || !data.verdict) throw new AiError('bad_response');

  cache[key] = {
    verdict: data.verdict,
    hint: data.hint,
    confidence: data.confidence,
    conceptTags: data.conceptTags || []
  };
  writeCache(cache);

  return data;
}

/**
 * Send a chat turn. Resolves to { reply } on success.
 * A server-side upstream failure resolves with { reply: null, fallback }.
 */
export async function sendChat({ profile, messages, context }, options = {}) {
  if (!isAiEnabled()) throw new AiError('disabled');
  return postJson('/api/chat', { profile, messages, context }, options);
}
