// Fire-and-forget event queue for parent monitoring.
//
// HARD RULE (from CLAUDE.md): nothing a child does may depend on the network.
// So every function here is best-effort and swallows its own errors - a caller
// on the quiz path calls track() and moves on in the same tick. Events buffer in
// their OWN localStorage key (never the worksheet blob, so they cannot corrupt
// ScoreDisplay totals or the day badges), flush on a timer and on page-hide, and
// stay queued through a failure so a blip never loses history.
//
// The whole feature is gated on REACT_APP_TELEMETRY_ENABLED. With it off, track()
// is a no-op, no timer is armed, and nothing is written - the app behaves exactly
// as it did before this existed.

import { invalidateServerProgress } from './serverProgress';

const QUEUE_KEY = 'telemetry_queue';
const SESSION_KEY = 'telemetry_session';
const ENDPOINT = '/api/track';

const MAX_QUEUE = 500; // hard cap so a long offline stretch can't grow unbounded
const MAX_PER_FLUSH = 100; // matches the server's MAX_EVENTS per request
const FLUSH_INTERVAL_MS = 15000;

export function isTelemetryEnabled() {
  return process.env.REACT_APP_TELEMETRY_ENABLED === '1';
}

// --- session id: stable across a tab's lifetime, new per tab/reload ----------
function makeId() {
  try {
    if (window.crypto && window.crypto.randomUUID) return window.crypto.randomUUID();
  } catch (e) {
    /* fall through */
  }
  return `s-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

let sessionId = '';
function getSessionId() {
  if (sessionId) return sessionId;
  try {
    sessionId = sessionStorage.getItem(SESSION_KEY) || '';
    if (!sessionId) {
      sessionId = makeId();
      sessionStorage.setItem(SESSION_KEY, sessionId);
    }
  } catch (e) {
    sessionId = sessionId || makeId();
  }
  return sessionId;
}

// --- queue persistence -------------------------------------------------------
function loadQueue() {
  try {
    const raw = localStorage.getItem(QUEUE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

let queue = loadQueue();

function saveQueue() {
  try {
    if (queue.length > MAX_QUEUE) queue = queue.slice(-MAX_QUEUE);
    localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
  } catch (e) {
    // Quota exceeded or storage disabled - drop the oldest half and carry on.
    try {
      queue = queue.slice(-Math.floor(MAX_QUEUE / 2));
      localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
    } catch (e2) {
      /* give up silently - telemetry is never allowed to be fatal */
    }
  }
}

// --- public API --------------------------------------------------------------

/**
 * Record one event. Never throws.
 * @param {string} type   one of the server's KNOWN_TYPES
 * @param {object} props  must include `profile`; `day` and any extra fields are
 *                        stored in the event's jsonb payload.
 */
export function track(type, props = {}) {
  if (!isTelemetryEnabled()) return;
  try {
    if (!props.profile) return; // an event with no owner is useless
    queue.push({
      type,
      ts: new Date().toISOString(),
      sessionId: getSessionId(),
      ...props
    });
    saveQueue();
    armTimer();
  } catch (e) {
    /* non-fatal by design */
  }
}

function groupByProfile(events) {
  const map = new Map();
  events.forEach((e) => {
    const key = e.profile || '';
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(e);
  });
  return map;
}

async function postBatch(profile, events, { keepalive = false } = {}) {
  // No passphrase: /api/track is origin+rate-limit gated, deliberately, so a
  // browser that never opened the AI teacher still records the child's work.
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    keepalive, // lets the request survive a page unload
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ profile, events })
  });
  // Any 2xx means the server took (or knowingly dropped) the batch - either way
  // we stop retrying it. A non-2xx (401 no passphrase yet, 502 DB blip) leaves
  // the events queued for the next attempt.
  return res.ok;
}

let flushing = false;

export async function flush({ keepalive = false } = {}) {
  if (!isTelemetryEnabled() || flushing || queue.length === 0) return;
  flushing = true;

  const batch = queue.slice(0, MAX_PER_FLUSH);
  const delivered = new Set();

  try {
    const groups = groupByProfile(batch);
    for (const [profile, events] of groups) {
      if (!profile) {
        events.forEach((e) => delivered.add(e)); // unattributable - drop it
        continue;
      }
      try {
        // eslint-disable-next-line no-await-in-loop
        const ok = await postBatch(profile, events, { keepalive });
        if (ok) events.forEach((e) => delivered.add(e));
      } catch (e) {
        /* leave this group queued for retry */
      }
    }
  } finally {
    if (delivered.size) {
      queue = queue.filter((e) => !delivered.has(e));
      saveQueue();
      // New attempts just landed server-side, so the cached progress snapshot
      // is stale - drop it rather than let a later mount read a stale copy.
      const profiles = new Set(Array.from(delivered).map((e) => e.profile).filter(Boolean));
      profiles.forEach((p) => invalidateServerProgress(p));
    }
    flushing = false;
  }
}

// --- lifecycle: a single shared timer + page-hide flush ----------------------
let timer = null;
let listenersBound = false;

function armTimer() {
  if (!isTelemetryEnabled() || typeof window === 'undefined') return;

  if (!listenersBound) {
    listenersBound = true;
    // pagehide/visibilitychange are the reliable "leaving" signals on mobile;
    // keepalive:true lets the final batch outlive the page.
    const leave = () => flush({ keepalive: true });
    window.addEventListener('pagehide', leave);
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') leave();
    });
    // Retry queued events when connectivity returns.
    window.addEventListener('online', () => flush());
  }

  if (!timer) {
    timer = setInterval(() => {
      if (queue.length) flush();
    }, FLUSH_INTERVAL_MS);
  }
}

// Arm immediately on import so buffered events from a previous load get sent
// even if nothing calls track() this session.
if (isTelemetryEnabled() && typeof window !== 'undefined') {
  armTimer();
  // A microtask so it doesn't race React's first paint.
  setTimeout(() => flush(), 2000);
}
