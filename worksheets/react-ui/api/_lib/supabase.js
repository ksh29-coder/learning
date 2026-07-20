// Minimal Supabase (PostgREST) client over plain fetch.
//
// Same spirit as _lib/llm.js: zero npm dependencies, CommonJS, provider config
// entirely in env vars. The serverless functions run SERVER-SIDE, so they use
// the service_role key, which bypasses row-level security. That key must NEVER
// carry a REACT_APP_ prefix and must never reach the browser bundle - it is
// read here, in api/, which CRA does not compile.

const TABLE = 'events';

function config() {
  const url = (process.env.SUPABASE_URL || '').replace(/\/+$/, '');
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
  return { url, key };
}

// Missing config is a normal state (e.g. a deploy before env vars are set).
// Callers decide whether that is fatal for their endpoint.
function isConfigured() {
  const { url, key } = config();
  return Boolean(url && key);
}

function headers() {
  const { key } = config();
  return {
    apikey: key,
    authorization: `Bearer ${key}`,
    'content-type': 'application/json'
  };
}

async function withTimeout(run, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await run(controller.signal);
  } finally {
    clearTimeout(timer);
  }
}

// Bulk insert. `rows` is an array of plain objects matching the table columns.
// Prefer: return=minimal keeps the response tiny - the ingest path never needs
// the written rows back.
async function insertEvents(rows, { timeoutMs = 8000 } = {}) {
  const { url } = config();
  if (!isConfigured()) {
    const err = new Error('supabase_not_configured');
    err.code = 'not_configured';
    throw err;
  }
  if (!Array.isArray(rows) || rows.length === 0) return { inserted: 0 };

  return withTimeout(async (signal) => {
    const res = await fetch(`${url}/rest/v1/${TABLE}`, {
      method: 'POST',
      headers: Object.assign({}, headers(), { prefer: 'return=minimal' }),
      body: JSON.stringify(rows),
      signal
    });
    if (!res.ok) {
      const err = new Error(`supabase_insert_${res.status}`);
      err.code = 'insert_failed';
      err.status = res.status;
      err.detail = (await res.text()).slice(0, 500);
      throw err;
    }
    return { inserted: rows.length };
  }, timeoutMs);
}

// Read events for the parent dashboard. `params` is a PostgREST query object,
// e.g. { profile: 'eq.michael', order: 'client_ts.asc', limit: '2000' }.
// Returns a parsed array (possibly empty); throws on transport/HTTP failure.
async function selectEvents(params = {}, { timeoutMs = 10000 } = {}) {
  const { url } = config();
  if (!isConfigured()) {
    const err = new Error('supabase_not_configured');
    err.code = 'not_configured';
    throw err;
  }

  const qs = new URLSearchParams(params).toString();

  return withTimeout(async (signal) => {
    const res = await fetch(`${url}/rest/v1/${TABLE}?${qs}`, {
      method: 'GET',
      headers: headers(),
      signal
    });
    if (!res.ok) {
      const err = new Error(`supabase_select_${res.status}`);
      err.code = 'select_failed';
      err.status = res.status;
      err.detail = (await res.text()).slice(0, 500);
      throw err;
    }
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  }, timeoutMs);
}

module.exports = { isConfigured, insertEvents, selectEvents, TABLE };
