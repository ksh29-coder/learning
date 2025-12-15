# Python Adventures for Kids

A fun, engaging 7-day course to teach children the fundamentals of programming using Python.

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
- **Day 7:** Putting It All Together - Final Project

## File Structure

```
learning/
├── README.md (this file)
├── 01_BASIC_PLAN.md
├── lesson_plans/
│   ├── day1_introduction.md
│   ├── day2_variables.md
│   └── day3_if_else.md
├── code_examples/
│   ├── day1/
│   │   ├── 01_hello_world.py
│   │   ├── 02_personalized_greeting.py
│   │   ├── 03_ascii_art.py
│   │   └── 04_name_tag.py
│   ├── day2/
│   │   ├── 01_basic_variables.py
│   │   ├── 02_string_vs_numbers.py
│   │   ├── 03_getting_input.py
│   │   └── 04_interactive_info_card.py
│   └── day3/
│       ├── 01_basic_if.py
│       ├── 02_if_else.py
│       ├── 03_elif.py
│       └── 04_interactive_quiz.py
├── projects/
│   └── templates/
│       ├── day1_greeting_card_template.py
│       ├── day2_mad_libs_template.py
│       └── day3_adventure_game_template.py
└── worksheets/
    ├── day1_worksheet.md
    ├── day2_worksheet.md
    ├── day3_worksheet.md
    ├── react-ui/ (Interactive React UI for all days!)
    │   ├── src/
    │   │   ├── App.js (Day 1)
    │   │   ├── Day2App.js (Day 2)
    │   │   ├── Day3App.js (Day 3)
    │   │   └── DaySelector.js (Switch between days)
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
- 📦 Switch between Day 1 and Day 2 with buttons at the top
- 💾 Auto-save your answers (saved in browser)
- 🧪 Test your code right in the UI with live Python execution
- 📄 View all your answers
- 🎯 Organized by tabs (Part 1, Part 2, etc.)
- ✅ Answer checking with instant feedback and scoring

See `worksheets/README_REACT_UI.md` for detailed instructions!

## Cursor Shortcuts (Helpful for Kids)

- **Save:** `Ctrl+S` (Windows/Linux) or `Cmd+S` (Mac)
- **New File:** `Ctrl+N` (Windows/Linux) or `Cmd+N` (Mac)
- **Open Terminal:** `` Ctrl+` `` (backtick key)
- **Run Python File:** Right-click → "Run Python File in Terminal"

## Next Steps

- **After Day 1:** You'll be ready for Day 2: Variables!
- **After Day 2:** You'll be ready for Day 3: Making Decisions with If/Else!
- **After Day 3:** You'll be ready for Day 4: Loops - Doing Things Over and Over!

---

**Happy Coding! 🎉**

