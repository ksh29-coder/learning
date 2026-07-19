# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

"Python Adventures for Kids" — a 7-day beginner Python course for children. It is primarily an **educational content repository** (markdown lessons, standalone `.py` examples, worksheets, project templates) plus one real application: an **interactive React worksheet UI** in `worksheets/react-ui/` that runs Python in the browser.

The teaching material is authored day-by-day (Day 1–7). Days 1–5 currently have full content; Days 6–7 are planned in `01_BASIC_PLAN.md`.

## Repository layout

- `lesson_plans/dayN_*.md` — instructor-facing lesson plans (concepts, pacing).
- `code_examples/dayN/*.py` — runnable standalone example scripts, numbered `01_`, `02_`, … in teaching order. Many use `input()` and are meant to be run in a terminal.
- `projects/templates/dayN_*_template.py` — starter code for the day's project; `projects/solutions/` holds reference solutions.
- `worksheets/dayN_worksheet.md` — traditional markdown worksheets (fallback to the React UI).
- `worksheets/react-ui/` — the interactive web app (see below).
- `01_BASIC_PLAN.md` / `README.md` — course plan and student-facing getting-started guide.

## React worksheet UI (`worksheets/react-ui/`)

Standard Create React App (react-scripts 5). Commands run from inside `worksheets/react-ui/`:

```bash
npm install      # first time only
npm start        # dev server at http://localhost:3000
npm run build    # production build
npm test         # react-scripts test runner (no tests authored yet)
```

### Architecture

- **`DaySelector.js`** is the root component (mounted by `index.js`). It holds `selectedDay` state and switches between `App` (Day 1), `Day2App`, `Day3App`, `Day4App`, `Day5App`.
- **Each `DayNApp.js` is a self-contained clone of the same pattern** (`App.js` is Day 1). Each one:
  - owns its own `answers` and `checkedQuestions` state,
  - persists to `localStorage` under a **per-day key** (`day1_worksheet_answers`, `day2_worksheet_answers`, …) via a save-on-change `useEffect`,
  - renders a tab bar over `DayNPartX` components plus `DayNHeader`, `DayNBonus`, and `ScoreDisplay`.
- **Adding/editing a day means editing that day's `DayNApp.js` + its `components/DayN*.js` files.** There is no shared data-driven config — content is duplicated per day by design, so changes to one day do not automatically apply to others.
- Shared/reusable components live in `components/` without a `DayN` prefix: `CodeRunner`, `CodeEditor`, `ScoreDisplay`, `ExerciseCard`, `GameCard`, `VSCodeInstructions`.

### In-browser Python execution (`components/CodeRunner.js`)

- Runs Python via **Pyodide**, loaded from a CDN `<script>` tag in `public/index.html` (`window.loadPyodide`, pinned to `v0.24.1`). Pyodide is initialized once per `CodeRunner` mount and can take a moment on first load.
- stdout is captured by redirecting `sys.stdout` to a `StringIO` before running user code.
- `input()` does not work natively in the browser. `CodeRunner` **regex-scans the code for `input(...)` calls**, prompts the user for each value in a form, then overrides `builtins.input` in Pyodide to feed those values in order. Code with `input()` still behaves best in a real terminal.

## Conventions

- Code examples target **Python 3** and are deliberately simple/beginner-level — keep new examples in the same numbered, incremental teaching style, and avoid introducing concepts before the day that teaches them.
- The intended student IDE is **Cursor** (referenced throughout the READMEs); terminal instructions assume `python`/`python3`.
