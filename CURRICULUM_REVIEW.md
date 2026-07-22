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

## 5. Recommended plan

Given one week before the ML course, add **two short lessons** and fix the defects:

- **New Day 6.5 — "Words & Strings"**: string indexing/slicing (substring operations — named
  explicitly in the ML recap), `.upper()/.lower()/.strip()/.split()/.replace()`, `in` on
  strings, and **f-strings**. Exercises: password checker, name formatter (both FunTech L1
  signature projects).
- **New Day 7.5 (or fold into Day 6) — "Dictionaries & Libraries"**: `{key: value}`, get/set,
  looping `.items()`; then `import random` (+ `random.randint`, `random.choice`) and a peek at
  `math`/`time`. Exercises: Rock Paper Scissors vs computer, number-guessing game — which
  makes the existing Day 9 bonus arcade fully understandable instead of "read-only magic."
- **Small patches to existing days**: `not` (Day 3), `break`/`continue` + `%` for
  FizzBuzz (Day 4 — FizzBuzz is a FunTech staple), a 10-minute `try/except` +
  input-validation segment (Day 6, where `int(input())` first appears in loops).
- **Fix all files in the §4 table**, restore clean canonical examples (keep Michael's
  experiments in a separate `sandbox/` folder rather than inside the reference examples), and
  retrofit f-strings into Days 2+ examples once taught.

With those two additions, the course covers all eight Rapid Recap topics plus L2's OOP core —
comfortably enough to skip FunTech Python 1 and 2.
