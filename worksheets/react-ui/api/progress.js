// POST /api/progress - the SERVER's copy of a kid's worksheet progress.
//
// This is what makes progress follow the child instead of the browser. The
// client still writes localStorage (instant, offline-safe), but treats this as
// the source of truth on load: whatever a kid has answered on ANY device is
// replayed back into that day's state, so scores, ticks and the day badges are
// the same everywhere.
//
// Uses publicGuard (origin + rate limit, no passphrase) for the same reason
// /api/track does - a device that never opened the AI teacher has no passphrase,
// and a child's own history must not be hidden behind a secret that browser was
// never given.

const { publicGuard } = require('./_lib/guard');
const { isConfigured, selectEvents } = require('./_lib/supabase');

const MAX_ROWS = 5000;

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  if (publicGuard(req, res)) return;

  const profile = String((req.body || {}).profile || '').slice(0, 60);
  if (!profile) {
    return res.status(400).json({ error: 'bad_request' });
  }

  if (!isConfigured()) {
    return res.status(200).json({ ok: true, days: {}, reason: 'telemetry_off' });
  }

  let rows;
  try {
    rows = await selectEvents({
      profile: `eq.${profile}`,
      type: 'eq.answer_attempt',
      order: 'id.desc',
      limit: String(MAX_ROWS),
      select: 'day,payload,client_ts,created_at'
    });
  } catch (err) {
    console.error('progress read failed', err.code, err.message, err.detail || '');
    return res.status(502).json({ error: 'read_failed' });
  }

  // Rows arrive newest-first, so the first sighting of a (day, questionId) is
  // already its latest verdict - later (older) rows for the same key are the
  // earlier attempts and must not overwrite it.
  const days = {};
  rows.forEach((r) => {
    const p = r.payload || {};
    const qid = p.questionId;
    if (r.day == null || qid == null) return;

    const day = String(r.day);
    if (!days[day]) days[day] = { checkedQuestions: {}, answers: {} };
    if (qid in days[day].checkedQuestions) return;

    days[day].checkedQuestions[qid] = Boolean(p.isCorrect);
    // The child's own words, so a device that never saw them still shows the
    // answer box filled in rather than blank next to a green tick.
    if (typeof p.answer === 'string') days[day].answers[qid] = p.answer;
  });

  return res.status(200).json({ ok: true, days });
};
