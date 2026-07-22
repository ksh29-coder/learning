import { useState, useEffect } from 'react';

export const DEFAULT_PROFILE = 'michael';

export function getStorageKey(profile, day) {
  return `${profile}_day${day}_worksheet_answers`;
}

// Reads a profile+day's saved state once, merged over the defaults.
function loadSaved(storageKey, initialAnswers, initialCheckedQuestions) {
  const saved = localStorage.getItem(storageKey);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      return {
        answers: { ...initialAnswers, ...parsed.answers },
        checkedQuestions: { ...initialCheckedQuestions, ...parsed.checkedQuestions }
      };
    } catch (e) {
      console.error('Error loading saved answers:', e);
    }
  }
  return { answers: initialAnswers, checkedQuestions: initialCheckedQuestions };
}

// Loads/saves a day's worksheet answers under a profile-namespaced localStorage
// key, so each kid's progress lives in its own slot.
//
// The initial state is read from localStorage in the useState initializer (not a
// mount effect) so the FIRST render already has the saved data. That avoids a
// mount-time race where a save effect would otherwise write the empty initial
// state over real saved answers (which StrictMode's double-mount also triggers).
//
// storageKey is effectively constant for an instance's lifetime: `day` is fixed
// per DayNApp, and DaySelector passes key={profile} so a profile switch remounts
// the whole app and re-runs the initializer for the new profile.
export function useWorksheetStorage(profile, day, initialAnswers, initialCheckedQuestions) {
  const storageKey = getStorageKey(profile, day);
  const [answers, setAnswers] = useState(
    () => loadSaved(storageKey, initialAnswers, initialCheckedQuestions).answers
  );
  const [checkedQuestions, setCheckedQuestions] = useState(
    () => loadSaved(storageKey, initialAnswers, initialCheckedQuestions).checkedQuestions
  );

  useEffect(() => {
    const saveData = {
      answers,
      checkedQuestions,
      lastSaved: new Date().toISOString()
    };
    localStorage.setItem(storageKey, JSON.stringify(saveData));
  }, [answers, checkedQuestions, storageKey]);

  const updateAnswer = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const updateCheckedQuestion = (questionId, isCorrect) => {
    setCheckedQuestions(prev => ({ ...prev, [questionId]: isCorrect }));
  };

  return { answers, checkedQuestions, updateAnswer, updateCheckedQuestion };
}

// Read-only access to a day's raw saved blob ({ answers, checkedQuestions,
// lastSaved }), for features that need to inspect past work without mounting
// that day's components - e.g. building context for the AI teacher.
// Returns null when nothing is saved. Never writes.
export function readDayState(profile, day) {
  const saved = localStorage.getItem(getStorageKey(profile, day));
  if (!saved) return null;
  try {
    return JSON.parse(saved);
  } catch (e) {
    return null;
  }
}

// Shared by getDayProgress and getMergedDayProgress so both badges agree on
// what "completed" means from a { questionId: isCorrect } map.
function classify(checked) {
  const values = Object.values(checked);
  if (values.length === 0) return 'not-started';
  const correctCount = values.filter(Boolean).length;
  if (correctCount === 0) return 'not-started';        // opened but nothing correct yet
  if (correctCount === values.length) return 'completed';
  return 'in-progress';
}

function readLocalChecked(profile, day) {
  const saved = localStorage.getItem(getStorageKey(profile, day));
  if (!saved) return {};
  try {
    return JSON.parse(saved).checkedQuestions || {};
  } catch (e) {
    return {};
  }
}

// Cheap synchronous read for progress badges - does not subscribe to changes.
export function getDayProgress(profile, day) {
  const checked = readLocalChecked(profile, day);
  return Object.keys(checked).length === 0 ? 'not-started' : classify(checked);
}

// Same as getDayProgress, but ORs in a server-side { questionId: isCorrect }
// map (from /api/progress) so a question answered correctly on ANY device
// counts - lets the badge reflect cross-device history instead of only what
// this browser's localStorage has seen.
export function getMergedDayProgress(profile, day, serverQuestions) {
  const merged = { ...readLocalChecked(profile, day) };
  Object.keys(serverQuestions || {}).forEach((qid) => {
    merged[qid] = Boolean(merged[qid]) || Boolean(serverQuestions[qid]);
  });
  return classify(merged);
}
