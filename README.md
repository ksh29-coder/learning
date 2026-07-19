# Python Adventures for Kids

A fun, engaging 9-day course to teach children the fundamentals of programming using Python.

## Course Overview

This course introduces children to programming through hands-on projects and fun activities. Each day builds on previous concepts, making learning progressive and enjoyable.

## Getting Started

### Prerequisites
- **Cursor IDE** (already set up!)
- Python 3.x installed on your computer
- Basic familiarity with using Cursor (opening files, saving, running code)

### Using Cursor for This Course

**Opening Files:**
- Use the file explorer on the left side
- Click on any `.py` file to open it
- You can have multiple files open in tabs

**Creating a New File (you'll do this a lot!):**
- Click **File → New File** (or `Ctrl+N` / `Cmd+N`)
- Save it with a `.py` name, e.g. `my_program.py` (`Ctrl+S` / `Cmd+S`)
- Type your Python code, save again, then run it (see below)
- From Day 5 onward, most exercises ask you to create your own `.py` file this way

**Running Python Code:**
- Right-click in the editor → "Run Python File in Terminal"
- Or open the terminal (`` Ctrl+` `` or `View > Terminal`) and type:
  - `python filename.py` or
  - `python3 filename.py`

**Seeing Output:**
- Output appears in the terminal at the bottom of Cursor
- Errors will be highlighted in red in the editor
- Error messages appear in the terminal

**Saving Files:**
- `Ctrl+S` (Windows/Linux) or `Cmd+S` (Mac)
- Or `File > Save`

### Course Structure
- **Day 1:** Introduction to Programming & Your First Program
- **Day 2:** Variables - The Memory Boxes
- **Day 3:** Making Decisions - If/Else Statements
- **Day 4:** Loops - Doing Things Over and Over
- **Day 5:** Functions - Your Own Commands
- **Day 6:** Lists - Collections of Things
- **Day 7:** Classes & Objects - Your Own Blueprints
- **Day 8:** Polymorphism & Inheritance - Same Command, Different Result
- **Day 9:** Final Project - The Adventure RPG (+ Bonus Arcade)

## File Structure

```
learning/
├── README.md (this file)
├── 01_BASIC_PLAN.md
├── lesson_plans/
│   ├── day1_introduction.md
│   ├── day2_variables.md
│   ├── day3_if_else.md
│   ├── day4_loops.md
│   ├── day5_functions.md
│   ├── day6_lists.md
│   ├── day7_classes_and_objects.md
│   ├── day8_polymorphism.md
│   └── day9_final_project.md
├── code_examples/
│   ├── day1/ ... day9/   (numbered 01_, 02_, ... example scripts per day)
│   └── day9/             (also holds the bonus_*.py arcade games)
├── projects/
│   ├── templates/        (dayN_*_template.py starter code, incl. day9 bonus games)
│   └── solutions/
└── worksheets/
    ├── day1_worksheet.md ... day9_worksheet.md   (markdown fallbacks)
    ├── react-ui/ (Interactive React UI for all 9 days!)
    │   ├── src/
    │   │   ├── App.js (Day 1), Day2App.js ... Day9App.js
    │   │   ├── DaySelector.js (day tabs + Michael/Isabella profile switcher)
    │   │   ├── hooks/useWorksheetStorage.js (per-kid progress saving)
    │   │   └── components/ (shared: CodeRunner, ExerciseCard, ScoreDisplay, ...)
    │   └── package.json
    └── README_REACT_UI.md
```

## How to Use This Course

1. **Start with the Basic Plan** - Read `01_BASIC_PLAN.md` for course overview
2. **Follow the Lesson Plan** - Use `lesson_plans/day1_introduction.md` for detailed teaching guide
3. **Use Code Examples** - Open files in `code_examples/day1/` to see examples
4. **Complete Worksheets** - Use the interactive React UI (`worksheets/react-ui/`) or the markdown version (`worksheets/day1_worksheet.md`) for practice
5. **Build Projects** - Start with `projects/templates/day1_greeting_card_template.py`

## Day 1 Quick Start

1. Open `lesson_plans/day1_introduction.md` in Cursor to read the lesson plan
2. Open and run `code_examples/day1/01_hello_world.py`:
   - Right-click in the file → "Run Python File in Terminal"
   - See the output in the terminal at the bottom
3. Work through the examples in order (01, 02, 03, 04)
4. Complete the worksheet:
   - **Interactive React UI:** Navigate to `worksheets/react-ui/` and run `npm start`, then select Day 1
   - **Or use:** `worksheets/day1_worksheet.md` for the traditional version
5. Open `projects/templates/day1_greeting_card_template.py` and build your greeting card

## Day 2 Quick Start

1. Open `lesson_plans/day2_variables.md` in Cursor to read the lesson plan
2. Open and run `code_examples/day2/01_basic_variables.py`:
   - Right-click in the file → "Run Python File in Terminal"
   - See the output in the terminal at the bottom
3. Work through the examples in order (01, 02, 03, 04)
   - **Important:** For examples 03 and 04, you'll need to type answers in the terminal when prompted!
4. Complete the worksheet:
   - **Interactive React UI:** Navigate to `worksheets/react-ui/` and run `npm start`, then select Day 2
   - **Or use:** `worksheets/day2_worksheet.md` for the traditional version
5. Open `projects/templates/day2_mad_libs_template.py` and build your Mad Libs game
   - **Tip:** When you run programs with `input()`, type your answers in the terminal and press Enter!

## Day 3 Quick Start

1. Open `lesson_plans/day3_if_else.md` in Cursor to read the lesson plan
2. Open and run `code_examples/day3/01_basic_if.py`:
   - Right-click in the file → "Run Python File in Terminal"
   - See the output in the terminal at the bottom
3. Work through the examples in order (01, 02, 03, 04)
   - **Important:** For examples 02, 03, and 04, you'll need to type answers in the terminal when prompted!
4. Complete the worksheet:
   - **Interactive React UI:** Navigate to `worksheets/react-ui/` and run `npm start`, then select Day 3
   - **Or use:** `worksheets/day3_worksheet.md` for the traditional version
5. Open `projects/templates/day3_adventure_game_template.py` and build your adventure game
   - **Tip:** Remember to use `==` (two equals) for comparison, not `=` (one equals)!
   - **Tip:** Pay attention to indentation - Python is very picky about it!

## Tips for Success

- **Take your time** - Don't rush through concepts
- **Experiment** - Try changing code and see what happens
- **Save often** - Use `Ctrl+S` / `Cmd+S` frequently
- **Check the terminal** - Output and errors appear there
- **Ask questions** - There are no silly questions!
- **Have fun** - Programming should be enjoyable!

## Interactive Worksheet UI 🎨

**Try the fun interactive React worksheet!**

Navigate to `worksheets/react-ui/` and run `npm start` to get:
- ✨ Colorful, kid-friendly web interface
- 👦👧 **Two profiles — Michael and Isabella** — pick who's learning at the top; each kid's progress saves separately and never overwrites the other's
- 📅 Switch between all 9 days with buttons at the top (with ✅ / ✏️ progress badges per day)
- 💾 Auto-save your answers (saved in the browser, per profile)
- 🧪 Test your code right in the UI with live Python execution
- 📤 **Upload your VS Code `.py` file** on Exercise tabs to run it and compare against the expected output
- 🎯 Organized by tabs (Understanding, Practice, Quiz, Exercise, Bonus)
- ✅ Quizzes with instant feedback and scoring

See `worksheets/README_REACT_UI.md` for detailed instructions!

> **Note on profiles:** Progress is stored in the browser's local storage, so each kid's saved answers live on **whichever device/browser they use**. They won't follow a kid from one computer to another. For two kids sharing one course, just have each pick their name at the top when they sit down.

## Deploying the Worksheet App (Vercel)

The interactive app can be hosted online (free) so the kids can open it from any browser:

1. Push this repo to GitHub (already connected to `ksh29-coder/learning`).
2. At [vercel.com](https://vercel.com), **Add New → Project** and import the repo.
3. **Important:** set **Root Directory** to `worksheets/react-ui` (the app isn't at the repo root). Vercel auto-detects Create React App — build command `npm run build`, output directory `build`.
4. Deploy. Every push to `main` re-deploys automatically; branches get preview URLs.

No `vercel.json` is needed for this plain CRA app.

## Cursor Shortcuts (Helpful for Kids)

- **Save:** `Ctrl+S` (Windows/Linux) or `Cmd+S` (Mac)
- **New File:** `Ctrl+N` (Windows/Linux) or `Cmd+N` (Mac)
- **Open Terminal:** `` Ctrl+` `` (backtick key)
- **Run Python File:** Right-click → "Run Python File in Terminal"

## Next Steps

- **Days 1–5:** Print, variables, if/else, loops, and functions — the building blocks.
- **Day 6:** Lists — collections that hold many things at once.
- **Days 7–8:** Classes & objects, then inheritance & polymorphism — real object-oriented programming!
- **Day 9:** Put it ALL together in a text-based Adventure RPG, then relax with the Bonus Arcade. 🏆

---

**Happy Coding! 🎉**

