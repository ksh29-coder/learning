import { createContext, useContext } from 'react';

// Lets any component (a quiz question, an exercise card) pop the teacher panel
// open, optionally pre-loaded with the question the kid is stuck on.
//
// The default is a working no-op so components can call useAiTeacher()
// unconditionally - no provider needed in tests, and no crash if the widget is
// disabled by the feature flag.
const NOOP = {
  isOpen: false,
  available: false,
  open: () => {},
  close: () => {},
  openWithQuestion: () => {}
};

export const AiTeacherContext = createContext(NOOP);

export function useAiTeacher() {
  return useContext(AiTeacherContext) || NOOP;
}
