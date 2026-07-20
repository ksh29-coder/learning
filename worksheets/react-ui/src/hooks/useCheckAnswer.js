import { useState, useCallback, useRef } from 'react';
import { gradeAnswer, isAiEnabled } from '../lib/aiClient';
import { buildGradingContext } from './useStudentContext';
import { appendMistake, markResolved } from '../lib/mistakeLog';
import { track } from '../lib/telemetry';

// Shared "Check Answer" mechanism for every day.
//
// It returns `feedback` in exactly the shape the existing quizzes already
// render - a map of questionId -> string, where a leading '✓' means correct.
// That is the whole trick: the ~200 lines of JSX in each quiz file stay
// untouched, and only the grading logic is replaced.
//
// Grading policy is LOCAL-FIRST:
//   1. choice questions (radio buttons) never touch the network - they have one
//      fixed correct value, so an LLM call would be pure cost.
//   2. if the local matcher says CORRECT, we accept immediately. This means an
//      already-earned check mark can never be taken away by a model, and it
//      halves the token spend.
//   3. only an apparent MISS is sent to the AI, which can overturn it to
//      correct. So you pay exactly when a kid would otherwise have been
//      wrongly failed - which is the value being bought.
//   4. any failure (offline, no key, timeout, bad response) settles to the
//      exact local behaviour the app had before this feature existed.

export const CORRECT_FEEDBACK = '✓ Correct! Great job! 🎉';

const THINKING = 'Let me think about that... 🤔';
const EMPTY = 'Please enter an answer first! 😊';

// Never trust the model to emit the glyph, and strip any it emitted itself -
// the existing JSX decides correct/incorrect via feedback.includes('✓').
function format(isCorrect, body) {
  const clean = String(body || '').replace(/[✓✗]/g, '').trim();
  if (isCorrect) return clean ? `✓ ${clean}` : CORRECT_FEEDBACK;
  return `✗ ${clean || 'Not quite right.'}`;
}

// Reproduces the four comparison styles the quizzes used before, so a fallback
// verdict is identical to the app's previous behaviour.
function runLocalMatch(question, answer) {
  const { correct, match, mode } = question;
  if (typeof match === 'function') return !!match(answer, correct);

  const given = String(answer);

  if (Array.isArray(correct)) {
    const lower = given.toLowerCase();
    // 'exact' compares whole strings; the default is the historic substring test.
    if (question.arrayMatch === 'exact') {
      return correct.some((c) => lower.trim() === String(c).toLowerCase());
    }
    return correct.some((c) => lower.includes(String(c).toLowerCase()));
  }

  // Radio buttons were compared strictly; free text was trimmed and lowercased.
  if (mode === 'choice') return given === correct;
  return given.trim().toLowerCase() === String(correct).toLowerCase();
}

/**
 * @param {object}   config
 * @param {string}   config.profile
 * @param {number}   config.day
 * @param {object}   config.questions  map of questionId -> {
 *                     mode: 'choice' | 'text',
 *                     correct: string | string[],
 *                     hint: string,
 *                     prompt?: string,        // question text, for AI + mistake log
 *                     match?: fn,             // custom local matcher
 *                     compose?: fn(answers),  // build the answer from several fields
 *                     arrayMatch?: 'exact'
 *                   }
 * @param {function} config.updateCheckedQuestion
 * @param {object}   [config.answers]  needed only when a question uses compose()
 */
export function useCheckAnswer({ profile, day, questions, updateCheckedQuestion, answers }) {
  const [feedback, setFeedback] = useState({});
  const [pending, setPending] = useState({});

  // Kept in a ref so compose() always sees current values without making
  // checkAnswer's identity churn on every keystroke.
  const answersRef = useRef(answers);
  answersRef.current = answers;

  const settle = useCallback(
    (questionId, isCorrect, message, extra = {}) => {
      setFeedback((prev) => ({ ...prev, [questionId]: message }));
      updateCheckedQuestion(questionId, isCorrect);

      // The one place that records history, so it can't drift from the verdict.
      const q = questions[questionId] || {};
      if (isCorrect) {
        markResolved(profile, day, questionId);
      } else {
        appendMistake(profile, {
          day,
          questionId,
          questionText: q.prompt || '',
          studentAnswer: extra.answer,
          conceptTags: extra.conceptTags || [],
          gradedBy: extra.gradedBy || 'local'
        });
      }

      // Parent monitoring: every attempt, in order (right or wrong). This is the
      // one verdict chokepoint, so the remote log can never disagree with what
      // the child actually saw. Fire-and-forget - track() never throws.
      track('answer_attempt', {
        profile,
        day,
        questionId,
        isCorrect,
        answer: extra.answer,
        gradedBy: extra.gradedBy || 'local',
        conceptTags: extra.conceptTags || [],
        questionText: q.prompt || ''
      });
    },
    [profile, day, questions, updateCheckedQuestion]
  );

  const checkAnswer = useCallback(
    async (questionId, userAnswer) => {
      const question = questions[questionId];
      // Structurally cannot invent a key that isn't in the config - which keeps
      // stray ids out of checkedQuestions, where they would corrupt
      // ScoreDisplay's total and the day progress badges.
      if (!question) return;

      const answer = question.compose
        ? question.compose(answersRef.current || {})
        : userAnswer;

      if (!answer) {
        // Preserved exactly: an empty answer gives feedback but does NOT mark
        // the question wrong.
        setFeedback((prev) => ({ ...prev, [questionId]: EMPTY }));
        return;
      }

      const localCorrect = runLocalMatch(question, answer);
      const wrongMessage = `✗ Not quite right. ${question.hint || ''} 💪`.replace(/\s+/g, ' ').trim();

      // Fixed-option questions and locally-correct answers settle offline.
      if (question.mode === 'choice' || localCorrect) {
        settle(questionId, localCorrect, localCorrect ? CORRECT_FEEDBACK : wrongMessage, {
          answer
        });
        return;
      }

      if (!isAiEnabled() || !navigator.onLine) {
        settle(questionId, false, wrongMessage, { answer });
        return;
      }

      setPending((prev) => ({ ...prev, [questionId]: true }));
      setFeedback((prev) => ({ ...prev, [questionId]: THINKING }));

      try {
        const result = await gradeAnswer({
          profile,
          day,
          questionId,
          question: question.prompt || questionId,
          expected: Array.isArray(question.correct) ? question.correct : [question.correct],
          answer,
          context: buildGradingContext(profile, day)
        });

        // 'partial' is encouragement, not a pass - it must not tick the box.
        const isCorrect = result.verdict === 'correct';
        settle(questionId, isCorrect, format(isCorrect, result.hint), {
          answer,
          conceptTags: result.conceptTags,
          gradedBy: 'ai'
        });
      } catch (err) {
        // Offline, no key, timeout, rate limited, bad payload - all identical
        // to how the app behaved before the AI existed.
        settle(questionId, false, wrongMessage, { answer });
      } finally {
        setPending((prev) => ({ ...prev, [questionId]: false }));
      }
    },
    [questions, profile, day, settle]
  );

  return { feedback, pending, checkAnswer };
}
