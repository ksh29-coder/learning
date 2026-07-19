// Assembles everything the AI teacher should know about a student before it
// answers: where they are, what they've finished, what they're currently
// getting wrong, and what they've struggled with before.
//
// Read-only. It touches localStorage exclusively through readDayState /
// getDayProgress and never writes, so it cannot perturb ScoreDisplay's
// Object.keys(checkedQuestions).length totals or the day progress badges.

import { readDayState, getDayProgress } from './useWorksheetStorage';
import { readMistakes } from '../lib/mistakeLog';
import {
  conceptsThroughDay,
  conceptsAfterDay,
  topicForDay,
  misconceptionsForDay,
  LAST_DAY
} from '../data/curriculumMap';

const DISPLAY_NAMES = { michael: 'Michael', isabella: 'Isabella' };

const MAX_ANSWER_CHARS = 300;
const MAX_QUESTION_CHARS = 200;

const trim = (v, max) => String(v == null ? '' : v).slice(0, max);

function displayName(profile) {
  if (DISPLAY_NAMES[profile]) return DISPLAY_NAMES[profile];
  return profile ? profile.charAt(0).toUpperCase() + profile.slice(1) : 'friend';
}

// Per-day tally. Mirrors ScoreDisplay's arithmetic but never mutates anything.
function tallyDay(profile, day) {
  const state = readDayState(profile, day);
  const checked = (state && state.checkedQuestions) || {};
  const values = Object.values(checked);
  return {
    day,
    status: getDayProgress(profile, day),
    correct: values.filter(Boolean).length,
    total: values.length
  };
}

// Questions on the CURRENT day that are presently marked wrong, paired with
// what the kid actually typed - that text is what makes a hint specific.
function currentDayWork(profile, day, questionText = {}) {
  const state = readDayState(profile, day);
  if (!state) return [];

  const checked = state.checkedQuestions || {};
  const answers = state.answers || {};

  return Object.keys(checked)
    .filter((qid) => checked[qid] === false)
    .slice(0, 10)
    .map((qid) => ({
      questionId: qid,
      isCorrect: false,
      studentAnswer: trim(answers[qid], MAX_ANSWER_CHARS),
      questionText: trim(questionText[qid], MAX_QUESTION_CHARS)
    }));
}

/**
 * Build the context payload sent alongside a chat turn.
 *
 * @param {string} profile      'michael' | 'isabella'
 * @param {number} currentDay   the day they are looking at
 * @param {object} [options]
 * @param {object} [options.questionText]  { q1: 'the question...' } for the current day
 * @param {number} [options.maxMistakes]
 */
export function buildStudentContext(profile, currentDay, options = {}) {
  const { questionText = {}, maxMistakes = 20 } = options;
  const day = Math.min(Math.max(Number(currentDay) || 1, 1), LAST_DAY);

  const progress = [];
  for (let d = 1; d <= LAST_DAY; d += 1) {
    progress.push(tallyDay(profile, d));
  }

  const recentMistakes = readMistakes(profile, { limit: maxMistakes }).map((m) => ({
    day: m.day,
    questionId: m.questionId,
    questionText: trim(m.questionText, MAX_QUESTION_CHARS),
    studentAnswer: trim(m.studentAnswer, MAX_ANSWER_CHARS),
    conceptTags: m.conceptTags || [],
    attempts: m.attempts || 1,
    resolvedAt: m.resolvedAt || null
  }));

  return {
    studentName: displayName(profile),
    profile,
    day,
    topic: topicForDay(day),
    allowedConcepts: conceptsThroughDay(day),
    notYetTaught: conceptsAfterDay(day),
    commonMisconceptions: misconceptionsForDay(day),
    progress,
    currentDayWork: currentDayWork(profile, day, questionText),
    recentMistakes
  };
}

// Compact context for a grading call - the grader only needs to know where the
// student is, not their whole history. Keeps the request small and cheap.
export function buildGradingContext(profile, day) {
  const d = Math.min(Math.max(Number(day) || 1, 1), LAST_DAY);
  return `Day ${d}: ${topicForDay(d)} (student: ${displayName(profile)})`;
}
