// A per-kid record of questions they got wrong, so the AI teacher can connect
// today's confusion to last week's ("you mixed up = and == before too").
//
// Deliberately plain functions, not a hook: no React coupling, and structurally
// no access to the worksheet blob. That matters because ScoreDisplay computes
// `total` from Object.keys(checkedQuestions).length and getDayProgress counts
// the same object - any stray key written there silently corrupts both scores
// and the day progress badges. This log lives under its OWN storage key and
// never touches that blob.

const MAX_ENTRIES = 100;
const MAX_ANSWER_CHARS = 300;
const MAX_QUESTION_CHARS = 200;

const keyFor = (profile) => `${profile}_mistake_log`;

function readAll(profile) {
  try {
    const raw = localStorage.getItem(keyFor(profile));
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    // A corrupt or unreadable log must never break Check Answer.
    return [];
  }
}

function writeAll(profile, entries) {
  try {
    localStorage.setItem(keyFor(profile), JSON.stringify(entries.slice(-MAX_ENTRIES)));
  } catch (e) {
    // Quota exceeded or storage disabled - non-fatal by design.
  }
}

const trim = (value, max) => String(value == null ? '' : value).slice(0, max);

// Record a wrong answer.
//
// Dedups on day+questionId: a kid mashing "Check Answer" thirty times bumps
// `attempts` instead of appending thirty entries, so one bad afternoon can't
// evict a month of history.
//
// questionText is SNAPSHOT here on purpose. Storage keys questions as bare
// q1/q2, and past days' components aren't mounted when we later build context -
// so this snapshot is the only thing that makes an old mistake legible.
export function appendMistake(profile, entry) {
  if (!profile || !entry || entry.questionId == null) return;

  const entries = readAll(profile);
  const idx = entries.findIndex(
    (e) => e.day === entry.day && e.questionId === entry.questionId && !e.resolvedAt
  );

  const record = {
    ts: new Date().toISOString(),
    day: entry.day,
    questionId: entry.questionId,
    questionText: trim(entry.questionText, MAX_QUESTION_CHARS),
    studentAnswer: trim(entry.studentAnswer, MAX_ANSWER_CHARS),
    conceptTags: Array.isArray(entry.conceptTags) ? entry.conceptTags.slice(0, 4) : [],
    gradedBy: entry.gradedBy === 'ai' ? 'ai' : 'local',
    attempts: 1,
    resolvedAt: null
  };

  if (idx >= 0) {
    record.attempts = (entries[idx].attempts || 1) + 1;
    entries[idx] = record;
  } else {
    entries.push(record);
  }

  writeAll(profile, entries);
}

// Stamp rather than delete, so the AI can say "you got stuck on this before -
// and then you figured it out", which is a much better thing to tell a kid.
export function markResolved(profile, day, questionId) {
  if (!profile) return;

  const entries = readAll(profile);
  let changed = false;

  for (let i = 0; i < entries.length; i += 1) {
    if (entries[i].day === day && entries[i].questionId === questionId && !entries[i].resolvedAt) {
      entries[i] = { ...entries[i], resolvedAt: new Date().toISOString() };
      changed = true;
    }
  }

  if (changed) writeAll(profile, entries);
}

// Newest first. Unresolved mistakes are the interesting ones, so they sort ahead.
export function readMistakes(profile, { limit = 20 } = {}) {
  const entries = readAll(profile);
  return entries
    .slice()
    .sort((a, b) => {
      const aOpen = a.resolvedAt ? 0 : 1;
      const bOpen = b.resolvedAt ? 0 : 1;
      if (aOpen !== bOpen) return bOpen - aOpen;
      return String(b.ts).localeCompare(String(a.ts));
    })
    .slice(0, limit);
}

export function clearMistakes(profile) {
  try {
    localStorage.removeItem(keyFor(profile));
  } catch (e) {
    /* non-fatal */
  }
}
