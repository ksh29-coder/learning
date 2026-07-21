// Server-side backfill for the AI teacher's context, sourced from the Supabase
// events table instead of the kid's own browser. Without this, a kid who
// switches devices (or clears storage) looks brand new to the AI even though
// their whole history is sitting in Supabase from telemetry.
//
// Best-effort only: telemetry is optional and this must never be able to break
// a chat reply, so every call site treats a failure here as "nothing extra to add".

const { isConfigured, selectEvents } = require('./supabase');

const LOOKBACK_EVENTS = 300; // most-recent events scanned per profile; bounds cost/latency

async function fetchRecentEvents(profile) {
  if (!isConfigured() || !profile) return [];
  const rows = await selectEvents(
    {
      profile: `eq.${profile}`,
      type: 'in.(chat_message,answer_attempt)',
      order: 'id.desc',
      limit: String(LOOKBACK_EVENTS),
      select: 'id,type,day,payload,created_at'
    },
    { timeoutMs: 4000 }
  );
  return rows.reverse(); // chronological, oldest first
}

// Reconstructs chat turns in order - the same shape chatHistory.js keeps locally.
function extractMessages(rows) {
  return rows
    .filter((r) => r.type === 'chat_message')
    .map((r) => r.payload || {})
    .filter((p) => (p.role === 'user' || p.role === 'assistant') && typeof p.content === 'string')
    .map((p) => ({ role: p.role, content: p.content }));
}

// Reconstructs a mistake log equivalent to src/lib/mistakeLog.js, but from the
// server's copy of every answer_attempt - so it survives a wiped browser.
function extractMistakes(rows) {
  const byKey = new Map();

  rows
    .filter((r) => r.type === 'answer_attempt')
    .forEach((r) => {
      const p = r.payload || {};
      const key = `${r.day}:${p.questionId}`;

      if (p.isCorrect) {
        const cur = byKey.get(key);
        if (cur && !cur.resolvedAt) cur.resolvedAt = r.created_at;
        return;
      }

      const cur = byKey.get(key) || {
        day: r.day,
        questionId: p.questionId,
        attempts: 0,
        resolvedAt: null
      };
      cur.attempts += 1;
      cur.questionText = p.questionText || cur.questionText;
      cur.studentAnswer = p.answer || cur.studentAnswer;
      cur.conceptTags = Array.isArray(p.conceptTags) ? p.conceptTags : cur.conceptTags;
      cur.ts = r.created_at;
      byKey.set(key, cur);
    });

  return Array.from(byKey.values()).sort((a, b) => {
    const aOpen = a.resolvedAt ? 0 : 1;
    const bOpen = b.resolvedAt ? 0 : 1;
    if (aOpen !== bOpen) return bOpen - aOpen;
    return String(b.ts).localeCompare(String(a.ts));
  });
}

// Returns { priorMessages, mistakes }. Never throws - a Supabase blip must
// degrade to "nothing extra to add", not break the chat reply.
async function fetchServerHistory(profile) {
  try {
    const rows = await fetchRecentEvents(profile);
    return { priorMessages: extractMessages(rows), mistakes: extractMistakes(rows) };
  } catch (err) {
    console.error('server history fetch failed', err.code, err.message, err.detail || '');
    return { priorMessages: [], mistakes: [] };
  }
}

module.exports = { fetchServerHistory };
