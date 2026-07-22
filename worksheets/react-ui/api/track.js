// POST /api/track - ingest a batch of telemetry events from a kid's browser.
//
// This fronts a DATABASE write, not a paid LLM, so it uses publicGuard
// (origin + rate limit, no passphrase). Requiring the family passphrase here
// was actively harmful: a device that had never opened the AI teacher had no
// passphrase stored, so every event it sent was rejected and that kid's work
// silently never reached the server. Recording progress must not depend on a
// secret a given browser may never have been given.
//
// Still best-effort from the client's side: the browser queues events locally
// and retries, so a transient failure here just means the client holds onto the
// batch. The one thing it must never do is let telemetry affect a child's
// lesson - nothing on the quiz path awaits this endpoint.

const { publicGuard } = require('./_lib/guard');
const { isConfigured, insertEvents } = require('./_lib/supabase');

// Bounds so one client can never write unbounded rows or oversized blobs.
const MAX_EVENTS = 100;
const MAX_STR = 2000;
const MAX_PAYLOAD_KEYS = 40;

const KNOWN_TYPES = new Set([
  'session_start',
  'day_view', // active time spent looking at a given day
  'answer_attempt', // every Check Answer, correct or not, in order
  'chat_message' // one turn of the AI teacher conversation
]);

const str = (v, max = MAX_STR) => (v == null ? null : String(v).slice(0, max));

function toIso(v) {
  const t = new Date(v);
  return Number.isNaN(t.getTime()) ? null : t.toISOString();
}

// Split the flat client event into typed columns + a bounded jsonb payload.
function toRow(profile, ev) {
  if (!ev || typeof ev !== 'object') return null;
  const type = str(ev.type, 40);
  if (!type || !KNOWN_TYPES.has(type)) return null;

  const { type: _t, day: _d, sessionId: _s, ts: _ts, ...rest } = ev;

  // Clamp the free-form payload: cap key count and stringify-trim string leaves.
  const payload = {};
  Object.keys(rest)
    .slice(0, MAX_PAYLOAD_KEYS)
    .forEach((k) => {
      const val = rest[k];
      payload[k] = typeof val === 'string' ? val.slice(0, MAX_STR) : val;
    });

  const dayNum = Number(ev.day);

  return {
    profile,
    type,
    day: Number.isFinite(dayNum) ? Math.trunc(dayNum) : null,
    session_id: str(ev.sessionId, 60),
    client_ts: toIso(ev.ts),
    payload
  };
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  if (publicGuard(req, res)) return;

  if (!isConfigured()) {
    // Telemetry is optional. Tell the client to stop trying rather than have it
    // retry forever against an endpoint that will never store anything.
    return res.status(200).json({ ok: true, stored: false, reason: 'telemetry_off' });
  }

  const body = req.body || {};
  const profile = str(body.profile, 60);
  const events = Array.isArray(body.events) ? body.events.slice(0, MAX_EVENTS) : [];

  if (!profile || events.length === 0) {
    return res.status(400).json({ error: 'bad_request' });
  }

  const rows = events.map((ev) => toRow(profile, ev)).filter(Boolean);
  if (rows.length === 0) {
    // Nothing recognisable - accept it so the client drops the batch instead of
    // retrying junk forever.
    return res.status(200).json({ ok: true, stored: false, inserted: 0 });
  }

  try {
    const { inserted } = await insertEvents(rows);
    return res.status(200).json({ ok: true, stored: true, inserted });
  } catch (err) {
    // A NON-200 here is intentional: the client keeps the batch queued and
    // retries later, so a blip in the DB never loses events.
    console.error('track insert failed', err.code, err.message, err.detail || '');
    return res.status(502).json({ error: 'store_failed' });
  }
};
