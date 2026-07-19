// Access control for a public endpoint that fronts a paid API.
//
// Honest about what each layer buys you:
//   - origin check    : stops browser-based abuse from other sites; trivially
//                       forged with curl. Cheap, so worth having.
//   - passphrase      : THE real gate. It never ships in the JS bundle (the kid
//                       types it once), so a stranger who finds the URL can't
//                       use it. Rotating it is a one-line env edit.
//   - rate limit      : best-effort ONLY. This Map is per-lambda-instance and
//                       resets on cold start, and Vercel fans out to several
//                       instances. It stops refresh-spam, not an attacker.
//
// The control that actually bounds your spend is a prepaid balance / hard
// budget cap at the provider. Don't let the 429 below create false confidence.

const crypto = require('crypto');

const hits = new Map();
const WINDOW_MS = 60000;
const MAX_PER_WINDOW = 20;

const sha = (s) => crypto.createHash('sha256').update(String(s)).digest();

// Hash both sides first so the buffers are always equal length, which
// timingSafeEqual requires (it throws on a length mismatch).
const safeEqual = (a, b) => crypto.timingSafeEqual(sha(a), sha(b));

function guard(req, res) {
  const allowed = (process.env.AI_ALLOWED_ORIGINS || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  const origin = req.headers.origin || '';
  if (allowed.length && origin && !allowed.includes(origin)) {
    res.status(403).json({ error: 'forbidden_origin' });
    return true;
  }

  const expected = process.env.AI_FAMILY_PASSPHRASE;

  // Fail closed. An unprotected endpoint is only tolerable while it cannot
  // spend anything; the moment a key is configured, a missing passphrase would
  // mean anyone who finds this URL can run up the bill. This is a very easy
  // mistake to make when adding env vars one at a time in a dashboard.
  if (!expected && process.env.AI_API_KEY) {
    console.error('refusing to serve: AI_API_KEY is set but AI_FAMILY_PASSPHRASE is not');
    res.status(503).json({ error: 'not_configured' });
    return true;
  }

  if (expected) {
    const supplied = req.headers['x-family-key'] || '';
    if (!safeEqual(supplied, expected)) {
      // 401 must stay distinguishable from a generic failure so the client can
      // re-prompt for the passphrase instead of silently degrading forever.
      res.status(401).json({ error: 'bad_passphrase' });
      return true;
    }
  }

  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
  const now = Date.now();
  const rec = hits.get(ip);

  if (!rec || now - rec.start > WINDOW_MS) {
    hits.set(ip, { start: now, n: 1 });
  } else {
    rec.n += 1;
    if (rec.n > MAX_PER_WINDOW) {
      res.status(429).json({
        error: 'rate_limited',
        retryAfterMs: WINDOW_MS - (now - rec.start)
      });
      return true;
    }
  }

  // Crude bound; this is a two-kid app, not a service.
  if (hits.size > 500) hits.clear();

  return false;
}

// Client sends only user/assistant turns. Letting a client supply a `system`
// message would let a curious 11-year-old repurpose the teacher on your bill.
function sanitizeMessages(raw, { maxTurns = 12, maxChars = 800 } = {}) {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .slice(-maxTurns)
    .map((m) => ({ role: m.role, content: m.content.slice(0, maxChars) }));
}

module.exports = { guard, sanitizeMessages };
