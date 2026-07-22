// POST /api/progress - read-side for a kid's OWN cross-device day progress.
//
// The day picker's badges are localStorage-only by default (one browser, one
// device). This lets a kid who switches devices still see what they already
// finished, by reconstructing the latest verdict per (day, question) from the
// same telemetry /api/track already writes. Gated by the family passphrase
// (not PARENT_PIN) - this is the kid's own history, same trust boundary as
// /api/track's write side.

const { guard } = require('./_lib/guard');
const { isConfigured, selectEvents } = require('./_lib/supabase');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  if (isConfigured() && !process.env.AI_FAMILY_PASSPHRASE) {
    console.error('refusing to serve /api/progress: SUPABASE configured but AI_FAMILY_PASSPHRASE is not');
    return res.status(503).json({ error: 'not_configured' });
  }

  if (guard(req, res)) return;

  const profile = String((req.body || {}).profile || '').slice(0, 60);
  if (!profile) {
    return res.status(400).json({ error: 'bad_request' });
  }

  if (!isConfigured()) {
    return res.status(200).json({ ok: true, dayQuestions: {}, reason: 'telemetry_off' });
  }

  let rows;
  try {
    rows = await selectEvents({
      profile: `eq.${profile}`,
      type: 'eq.answer_attempt',
      order: 'id.desc',
      limit: '5000',
      select: 'day,payload,created_at'
    });
  } catch (err) {
    console.error('progress read failed', err.code, err.message, err.detail || '');
    return res.status(502).json({ error: 'read_failed' });
  }

  // Latest verdict per (day, questionId) - rows arrive newest-first, so the
  // first time a key is seen is already its latest state.
  const dayQuestions = {};
  rows.forEach((r) => {
    const qid = r.payload && r.payload.questionId;
    if (r.day == null || qid == null) return;
    const day = String(r.day);
    if (!dayQuestions[day]) dayQuestions[day] = {};
    if (!(qid in dayQuestions[day])) {
      dayQuestions[day][qid] = Boolean(r.payload.isCorrect);
    }
  });

  return res.status(200).json({ ok: true, dayQuestions });
};
