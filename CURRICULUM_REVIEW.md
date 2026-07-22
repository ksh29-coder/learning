# 📋 Curriculum Review — Gap Analysis vs FunTech Python 1 & 2

*Review date: July 2026. Goal: Michael (14) and Isabella (12) should be able to skip FunTech's
Python Coder Level 1 and Level 2 and go straight into the FunTech AI & Machine Learning course.*

---

## 1. The target: what FunTech expects

**FunTech Python Coder Level 1** covers: flowcharts/pseudocode, data types, variables, user
input, branching (if/elif/else), iteration (for/while), functions, strings & lists,
**randomness (`random` module)**, and simple search/sort thinking. Signature projects:
calculators, quizzes, Rock Paper Scissors, Hangman, FizzBuzz, password checkers, score trackers.

**FunTech Python Coder Level 2** covers: **file handling**, functions in depth, classes &
objects, **inheritance & polymorphism**, GUI with Tkinter, and simple data structures
(stacks/queues, "search a database" programs).

**FunTech AI & Machine Learning course** (ages 12–16) requires coding "to the standard of
Python L2" and opens with a **Rapid Recap** of exactly these topics:

> Variables · Conditional Statements · Loops · Functions · **Libraries** · Inputs ·
> **Substring operations** · **OOP**

That Rapid Recap list is the real bar. If the kids are fluent in all eight items, they are
ready for the ML course.

## 2. Scorecard: our 9-day course vs the ML-course Rapid Recap

| FunTech recap topic | Our coverage | Verdict |
|---|---|---|
| Variables | Day 2 | ✅ Solid |
| Conditionals | Day 3 (all 6 comparisons, `and`/`or`) | ✅ Solid (missing `not`) |
| Loops | Day 4 (`for`, `range` incl. step, `while`) | ✅ Solid (missing `break`/`continue`) |
| Functions | Day 5 (params, `return`) | ✅ Solid (lesson plan file is truncated — see §4) |
| Inputs | Days 2–9, everywhere | ✅ Solid |
| **Libraries / `import`** | **Never taught** | ❌ **Critical gap** |
| **Substring / string operations** | **Never taught** (only `.lower()` in passing) | ❌ **Critical gap** |
| OOP | Days 7–8 (`__init__`, `self`, `super()`, overriding, polymorphism) | ✅ **Strong** — matches L2 depth |

Also missing relative to L1/L2 (in priority order for ML prep):

1. **Dictionaries** — never taught, yet three Day 9 bonus games *use* them. For ML this is the
   single most important missing data structure.
2. **`random` module** — an L1 staple (RPS, guessing games). Our bonus games use it, but no
   lesson ever explains `import random`.
3. **f-strings** — never taught; Days 1–8 use comma-`print`, then Day 9's own templates
   suddenly switch to f-strings. Modern Python default; the ML course will use them.
4. **Error handling (`try`/`except`)** — absent; our own `int(input())` pattern crashes on bad
   input. L2-level topic.
5. **File handling** — L2's opening topic; absent here. Nice-to-have for ML prep.
6. Small operator gaps: `not`, `%`, `//`, `**`, `break`/`continue`, tuples.

**Deliberately fine to skip:** Tkinter GUI, stacks/queues — L2 topics that the ML course does
not lean on. Our OOP depth already covers L2's most important half.

## 3. What's already good

- **Format matches the goal**: every day is question-and-exercise based (MCQs → fill-in code →
  challenges → reflection → bonus), in both the markdown worksheets and the React UI, with
  per-kid progress tracking.
- **OOP scaffolding (Days 7–8) is genuinely strong** — Day 8 reuses Day 7's exact `Pet` class
  as the parent, and sequences inheritance → `super()` → overriding → polymorphism with a
  clear payoff. This is the hardest part of FunTech L2 and it's well handled.
- **Day 9 capstone** correctly introduces no new concepts and integrates everything.
- Days 6–8 numbered examples and templates are clean and bug-free.
- Volume is right: ~10–15 exercises/day.

## 4. Defects to fix (found during review)

**Broken / buggy files** (several `code_examples` were edited by Michael during practice and
now contain bugs presented as reference code):

| File | Problem |
|---|---|
| `lesson_plans/day5_functions.md` | **Truncated mid-code-block at line 293** — missing project, summary, assessment, troubleshooting sections that every other day has |
| `code_examples/day4/04_interactive_loop_quiz.py:63` | `answer.lower != "michael"` (missing `()`) → infinite loop |
| `code_examples/day3/04_interactive_quiz.py:12` | `score = 1` should be `0` — off-by-one vs "out of 4" |
| `code_examples/day1/04_name_tag.py` | Border width mismatch; uses a `for`/`range` loop 3 days before loops are taught |
| `code_examples/day2/02_string_vs_numbers.py` | Defines a function on Day 2 (Day 5 concept) |
| `code_examples/day5/02`, `03` | Missing-space bug; typos ("liberary", "Denenomater") |
| `code_examples/day9/bonus_*.py` (all 5) | Headers all say "Day 6 - Example N" — mislabeled |
| `code_examples/day9/bonus_personal_assistant.py` | `make_money()` is `while True` + `sleep(1)` with **no exit** — hangs the program |
| `code_examples/day9/bonus_story_builder.py:53` | Leftover debug `print(story_parts)` |
| `code_examples/day9/bonus_rock_paper_scissors.py` | Comment claims "we don't use random" directly above `random.choices(...)`; best score gets the weakest praise message |
| `projects/templates/day9_bonus_tic_tac_toe.py` | Debug prints, `decsion` typo, no stop when computer wins; uses sets/dicts far beyond course scope |
| `projects/templates/day3_adventure_game_template.py` | Only 2 decision points; lesson requires 3 |
| `projects/templates/day5_monster_battle.py` | Difficulty spike: f-strings, `//`, tuples, `random`, `global`, `__name__` — none taught by Day 5 |

**Consistency issue:** Day 9 templates/walkthrough use f-strings, `enumerate()`, and a
generator expression (`any(...)`) that no lesson teaches — students are asked to extend code
written in a style they've never seen.

## 5. Intensity review & redistribution (implemented)

Every day is budgeted at 2–3 hours (Day 9: 3–4). Measured against a 12- and 14-year-old,
the load was front-light and back-heavy: Days 1–2 were pitched at ~8–11-year-olds and would
be finished fast, while Days 7–8 (OOP) were the genuinely full days. The redistribution
therefore blends all new content into Days 1–6 and leaves Days 7–9 untouched:

| Day | Load before | Blended in | Load after |
|---|---|---|---|
| 1 — First Program | 🟢 Light (print only) | Python-as-calculator: `+ - * /` with numbers | 🟢→🟡 comfortable |
| 2 — Variables | 🟢 Light-medium | **f-strings**, string methods (`.upper/.lower/.title/.strip`), `len()`, **string indexing & slicing** | 🟡 Medium |
| 3 — If/Else | 🟡 Medium | `not`; **password-checker** challenge | 🟡 Medium |
| 4 — Loops | 🟡 Medium | `break`/`continue`, `%` & `//`, **FizzBuzz** challenge | 🟡 Medium |
| 5 — Functions | 🟡 Medium (plan was truncated) | Lesson plan completed + **Libraries** (`import random`, `time.sleep`) + **Rock-Paper-Scissors** project | 🟠 Medium-full |
| 6 — Lists | 🟡 Medium | **Dictionaries**, `enumerate()`, `try/except` input guard | 🟠 Medium-full |
| 7 — Classes | 🔴 Full | — (already at L2 depth) | 🔴 Full |
| 8 — Inheritance | 🔴 Full | — | 🔴 Full |
| 9 — Capstone | 🔴 Full | No new concepts; bonus-arcade bugs fixed, untaught syntax removed | 🔴 Full |

Rationale for placement: strings ride with variables (Day 2's natural theme); `not` joins
`and`/`or` (Day 3); `%` enables FizzBuzz on loops day; libraries land on functions day
("libraries are boxes of functions other people wrote"); dictionaries extend lists into a
"collections" day, right where `int(input())` in loops makes `try/except` immediately useful.
Days 7–8 stay dedicated to OOP — the hardest material gets no added load.

All §4 defects were fixed in the same pass; Michael's in-file experiments were preserved in
`sandbox/michael/` instead of living inside the reference examples. The AI teacher's
`curriculumMap.js` was updated so it may discuss the newly placed topics on the right days.

With this, the course covers all eight FunTech Rapid Recap topics plus L2's OOP core —
comfortably enough to skip FunTech Python 1 and 2.
