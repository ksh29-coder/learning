# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

"Python Adventures for Kids" — a 9-day beginner Python course for children (built to teach the maintainer's two kids, Michael and Isabella). It is primarily an **educational content repository** (markdown lessons, standalone `.py` examples, worksheets, project templates) plus one real application: an **interactive React worksheet UI** in `worksheets/react-ui/` that runs Python in the browser.

The teaching material is authored day-by-day (Day 1–9), all days have full content: 1 print/first-program, 2 variables, 3 if/else, 4 loops, 5 functions, 6 lists, 7 classes & objects, 8 polymorphism & inheritance, 9 final project (Adventure RPG) + a Bonus Arcade of games (the arcade `.py` files live under `code_examples/day9/bonus_*.py` and `projects/templates/day9_bonus_*`).

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

- **`DaySelector.js`** is the root component (mounted by `index.js`). It holds `selectedDay` state and switches between `App` (Day 1) and `Day2App`…`Day9App`. It also holds the active **kid profile** (`michael` / `isabella`), rendered as a switcher, persisted to `localStorage` under `active_profile`, and passed down as a `profile` prop (with `key={profile}` so switching remounts and reloads that kid's data). Day buttons show a per-day progress badge computed via `getDayProgress`.
- **Each `DayNApp.js` is a self-contained clone of the same pattern** (`App.js` is Day 1). Each one:
  - takes a `profile` prop and calls the shared **`hooks/useWorksheetStorage.js`** hook — `useWorksheetStorage(profile, dayNumber, initialAnswers, initialCheckedQuestions)` — which returns `{ answers, checkedQuestions, updateAnswer, updateCheckedQuestion }` and handles load-on-mount / save-on-change to a **profile-namespaced key** (`${profile}_day${N}_worksheet_answers`). Do **not** hand-roll localStorage `useState`/`useEffect` in a DayNApp — use the hook.
  - renders a tab bar over `DayNPartX` components plus `DayNHeader`, `DayNBonus`, and (most days) `ScoreDisplay`. Days 6–9 also have dedicated `DayNQuiz` and `DayNExercise` tabs; Days 1–5 gained an Exercise tab too (`Exercise.js` for Day 1, `DayNExercise.js` for 2–4; Day 5's practice already used `ExerciseCard`).
- **Adding/editing a day means editing that day's `DayNApp.js` + its `components/DayN*.js` files, and wiring it into `DaySelector.js` (import, `DAYS` array entry, `renderDay` case).** There is no shared data-driven config — content is duplicated per day by design, so changes to one day do not automatically apply to others.
- Shared/reusable components live in `components/` without a `DayN` prefix: `CodeRunner`, `CodeEditor`, `ScoreDisplay`, `ExerciseCard` (which now has a built-in upload-your-`.py`-file → run-via-`CodeRunner` → self-check flow), `GameCard`, `VSCodeInstructions` (takes an `exerciseFilename` prop). Shared CSS (`Part1.css`, `Part2.css`, `Bonus.css`, `Header.css`, …) is imported by class name across days — don't create per-day CSS files.

### In-browser Python execution (`components/CodeRunner.js`)

- Runs Python via **Pyodide**, loaded from a CDN `<script>` tag in `public/index.html` (`window.loadPyodide`, pinned to `v0.24.1`). Pyodide is initialized once per `CodeRunner` mount and can take a moment on first load.
- stdout is captured by redirecting `sys.stdout` to a `StringIO` before running user code.
- `input()` does not work natively in the browser. `CodeRunner` **regex-scans the code for `input(...)` calls**, prompts the user for each value in a form, then overrides `builtins.input` in Pyodide to feed those values in order. Code with `input()` still behaves best in a real terminal.

### AI teacher (`api/` + `src/lib`, `src/hooks/useCheckAnswer.js`)

An optional AI tutor. **The whole feature is gated on `REACT_APP_AI_ENABLED=1`; with it off, or with no API key, the app behaves exactly as it did before it existed.** That is a hard requirement, not a nicety — never let a change make a quiz depend on the network.

- **`api/chat.js`, `api/grade.js`** — Vercel serverless functions, the only server-side code in the repo. They exist because CRA inlines `REACT_APP_*` into the public bundle at build time, so an API key cannot live in `src/`. **CommonJS** (`package.json` has no `"type":"module"`), plain Node, zero dependencies. CRA does not compile `api/`, so nothing lints it — `node --check` it by hand.
- Provider-agnostic over any **OpenAI-compatible** `/chat/completions` endpoint. Model, base URL, and key are env vars (see `.env.example`); nothing hardcodes a model.
- Both endpoints **return HTTP 200 with a fallback payload on upstream failure**, so the client has one success path.
- **System prompts live on the backend**, never in `src/` — a client-side guardrail is editable in devtools. Clients cannot supply a `system` message; handlers filter roles and prepend their own.
- **`src/hooks/useCheckAnswer.js`** — shared grading for all 9 days. Returns `{ feedback, pending, checkAnswer }` where `feedback` keeps the historic `'✓'`-prefixed string shape, so quiz **JSX is untouched by design**. Policy is *local-first*: `mode:'choice'` never hits the network, a local keyword match that says correct settles immediately, and only an apparent miss asks the AI (which can overturn it to correct, never the reverse). Question content and hints stay duplicated per day; the hook supplies only mechanism.
- **`src/data/curriculumMap.js`** — the one piece of deliberately shared cross-day config. It renders nothing and exists so the AI never teaches ahead of the day the student has reached.
- **`src/lib/mistakeLog.js`** — per-profile history under its own key, snapshotting question text (storage only keys questions as `q1`/`q2`, and past days' components aren't mounted later).

> ⚠️ **Never write a non-question key into `checkedQuestions`.** `ScoreDisplay` computes `total` from `Object.keys(checkedQuestions).length` and `getDayProgress` counts the same object — a stray key silently corrupts both scores and the day progress badges. Chat history, mistakes, and the passphrase each use their own `localStorage` key.

> ⚠️ Some Day 2/3/4 choice buttons call `checkAnswer` with **hardcoded literals** (e.g. `checkAnswer('q2','wrong')`) rather than the kid's input. Those questions must stay `mode:'choice'` so the literal never reaches a model. Grep call sites before changing a question's mode.

### Deployment

The app deploys to **Vercel** from the GitHub repo (`ksh29-coder/learning`) with **Root Directory = `worksheets/react-ui`** (the CRA app is not at repo root). Framework auto-detects as Create React App. `vercel.json` sets the API functions' timeout; the `api/` directory must sit **inside** the root directory or Vercel will never see it (a misplaced `api/` 404s into the SPA rewrite and returns HTML with a 200 — check `curl -i /api/grade` returns **405**, not HTML).

Worksheet progress is browser-`localStorage` only (per-device, per-profile, no login).

## Conventions

- Code examples target **Python 3** and are deliberately simple/beginner-level — keep new examples in the same numbered, incremental teaching style, and avoid introducing concepts before the day that teaches them.
- The intended student IDE is **Cursor / VS Code** (referenced throughout the READMEs); terminal instructions assume `python`/`python3`.
- Course is aimed at the maintainer's two kids (Michael & Isabella) — keep tone warm, encouraging, emoji-friendly, and kid-appropriate.
