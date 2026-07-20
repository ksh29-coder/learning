// Local persistence for the AI teacher conversation, per kid.
//
// Before this, the chat lived only in React state and was wiped on every refresh
// or profile switch. Parents asked to keep it, so we now snapshot it under a
// per-profile key (its OWN key - never the worksheet blob, so it cannot perturb
// ScoreDisplay totals or the day badges). The remote copy that the parent
// dashboard reads comes from `chat_message` telemetry events; this local copy is
// what lets a kid's own conversation survive a reload.

const MAX_MESSAGES = 100;
const keyFor = (profile) => `${profile}_chat_history`;

export function readChat(profile) {
  if (!profile) return [];
  try {
    const raw = localStorage.getItem(keyFor(profile));
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

export function writeChat(profile, messages) {
  if (!profile) return;
  try {
    const trimmed = (Array.isArray(messages) ? messages : []).slice(-MAX_MESSAGES);
    localStorage.setItem(keyFor(profile), JSON.stringify(trimmed));
  } catch (e) {
    /* quota or storage disabled - non-fatal, chat just won't persist */
  }
}

export function clearChat(profile) {
  try {
    localStorage.removeItem(keyFor(profile));
  } catch (e) {
    /* non-fatal */
  }
}
