// The client's view of the server's copy of a kid's progress (/api/progress).
//
// Why a module-level cache: the day picker needs every day's status for the
// badges, and each DayNApp needs its own day's answers. Those mount at
// different times but want the SAME snapshot, so the fetch is done once per
// profile and every caller shares the promise.
//
// HARD RULE (from CLAUDE.md): nothing a child does may depend on the network.
// Everything here resolves to {} on any failure - callers always have working
// local state first and merge this in only if and when it arrives.

const cache = new Map(); // profile -> Promise<{ [day]: { checkedQuestions, answers } }>

// Read inline rather than imported from telemetry.js: that module imports
// invalidateServerProgress from here, and a circular import would be worse
// than restating a one-line env check.
function isTelemetryEnabled() {
  return process.env.REACT_APP_TELEMETRY_ENABLED === '1';
}

function request(profile) {
  return fetch('/api/progress', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ profile })
  })
    .then((res) => (res.ok ? res.json() : null))
    .then((data) => (data && data.days ? data.days : {}))
    .catch(() => ({}));
}

/**
 * Server-side progress for a profile, as { [day]: { checkedQuestions, answers } }.
 * Shared per profile; never rejects.
 */
export function fetchServerProgress(profile) {
  if (!isTelemetryEnabled() || !profile) return Promise.resolve({});
  if (!cache.has(profile)) cache.set(profile, request(profile));
  return cache.get(profile);
}

// Drops the cached snapshot so the next read re-fetches. Called after a flush
// of new attempts, so a kid's own fresh work isn't masked by a stale snapshot.
export function invalidateServerProgress(profile) {
  if (profile) cache.delete(profile);
  else cache.clear();
}

/**
 * Merge a server snapshot over local state.
 *
 * Correctness is OR-ed: a question answered right on ANY device stays right,
 * so a stale row can never un-tick something the child just got correct here.
 * Local answers win as the text shown, since they are what this browser's
 * input boxes currently hold.
 */
export function mergeDayState(local, remote) {
  if (!remote) return local;

  const checkedQuestions = { ...(local.checkedQuestions || {}) };
  Object.keys(remote.checkedQuestions || {}).forEach((qid) => {
    checkedQuestions[qid] = Boolean(checkedQuestions[qid]) || Boolean(remote.checkedQuestions[qid]);
  });

  const answers = { ...(remote.answers || {}), ...(local.answers || {}) };
  Object.keys(answers).forEach((qid) => {
    // An empty local box should still show what the child typed elsewhere.
    if (!answers[qid] && remote.answers && remote.answers[qid]) answers[qid] = remote.answers[qid];
  });

  return { checkedQuestions, answers };
}
