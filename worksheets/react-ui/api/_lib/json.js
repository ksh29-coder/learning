// Defensive parsing of model output.
//
// We ask for JSON three ways (system prompt, response_format, and this), because
// no single layer is reliable across providers. Anything unusable returns null
// so the caller can fall back to local grading rather than showing a child
// something broken.

function extractJson(text) {
  if (!text) return null;

  let s = String(text).trim();
  // Models love wrapping JSON in markdown fences despite being told not to.
  s = s.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '');

  const start = s.indexOf('{');
  const end = s.lastIndexOf('}');
  if (start === -1 || end <= start) return null;

  try {
    return JSON.parse(s.slice(start, end + 1));
  } catch (e) {
    return null;
  }
}

const VERDICTS = new Set(['correct', 'partial', 'incorrect']);

// Validate AND coerce. We're lenient about shape but strict about the verdict,
// because the verdict is the only field that changes a child's score.
function validateGrade(obj) {
  if (!obj || typeof obj !== 'object') return null;

  const verdict = String(obj.verdict || '').toLowerCase().trim();
  if (!VERDICTS.has(verdict)) return null;

  let hint = typeof obj.hint === 'string' ? obj.hint.trim().slice(0, 240) : '';
  if (verdict === 'correct' && !hint) hint = 'Correct! Nice work!';
  // A wrong verdict with no hint is useless to a kid - treat as unusable.
  if (!hint) return null;

  let confidence = Number(obj.confidence);
  if (!Number.isFinite(confidence) || confidence < 0 || confidence > 1) {
    confidence = 0.5;
  }

  const conceptTags = Array.isArray(obj.conceptTags)
    ? obj.conceptTags.filter((t) => typeof t === 'string').slice(0, 4)
    : [];

  return { verdict, hint, confidence, conceptTags };
}

module.exports = { extractJson, validateGrade };
