// POST /api/parent - read side of the monitoring feature, for a parent only.
//
// Gated by its OWN secret (PARENT_PIN), separate from the kids' family
// passphrase, so a child cannot reach their sibling's data or their own raw
// history. Fails closed: with no PARENT_PIN set, the endpoint refuses to serve
// rather than expose everything. The PIN travels in a header/body of a POST, so
// it is never written into a URL or a server access log line.

const crypto = require('crypto');
const { isConfigured, selectEvents } = require('./_lib/supabase');

const KNOWN_PROFILES = ['michael', 'isabella'];
const MAX_ROWS = 8000;

const sha = (s) => crypto.createHash('sha256').update(String(s)).digest();
// Hash both sides so the buffers are equal length (timingSafeEqual throws
// otherwise) and the comparison stays constant-time.
const safeEqual = (a, b) => crypto.timingSafeEqual(sha(a), sha(b));

function originAllowed(req) {
  const allowed = (process.env.AI_ALLOWED_ORIGINS || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  const origin = req.headers.origin || '';
  return !(allowed.length && origin && !allowed.includes(origin));
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  if (!originAllowed(req)) {
    return res.status(403).json({ error: 'forbidden_origin' });
  }

  const expected = process.env.PARENT_PIN;
  if (!expected) {
    console.error('refusing to serve /api/parent: PARENT_PIN is not set');
    return res.status(503).json({ error: 'not_configured' });
  }

  const body = req.body || {};
  const supplied = req.headers['x-parent-pin'] || body.pin || '';
  if (!supplied || !safeEqual(String(supplied), expected)) {
    // Distinguishable so the dashboard can re-prompt for the PIN.
    return res.status(401).json({ error: 'bad_pin' });
  }

  if (!isConfigured()) {
    return res.status(200).json({ ok: true, profiles: {}, reason: 'telemetry_off' });
  }

  // Optional scope: only events from the last N days. Defaults to everything.
  const sinceDays = Number(body.sinceDays);
  const params = {
    order: 'id.desc',
    limit: String(MAX_ROWS),
    select: 'id,profile,type,day,session_id,client_ts,created_at,payload'
  };
  if (Number.isFinite(sinceDays) && sinceDays > 0) {
    const since = new Date(Date.now() - sinceDays * 86400000).toISOString();
    params.created_at = `gte.${since}`;
  }

  let rows;
  try {
    rows = await selectEvents(params);
  } catch (err) {
    console.error('parent read failed', err.code, err.message, err.detail || '');
    return res.status(502).json({ error: 'read_failed' });
  }

  // Group by profile so the dashboard can render one panel per kid. Aggregation
  // (scores, time-per-day, transcripts) is done client-side from these events.
  const profiles = {};
  KNOWN_PROFILES.forEach((p) => {
    profiles[p] = [];
  });
  rows.forEach((r) => {
    const p = r.profile || 'unknown';
    if (!profiles[p]) profiles[p] = [];
    profiles[p].push(r);
  });

  return res.status(200).json({ ok: true, profiles });
};
