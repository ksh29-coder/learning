# Interactive Worksheet UI - React Version

## How to Run

### Prerequisites
- Node.js and npm installed on your computer
- Basic terminal/command line knowledge

### Setup and Run

1. **Open Cursor IDE**
2. **Navigate to the worksheets/react-ui folder:**
   ```bash
   cd worksheets/react-ui
   ```

3. **Install dependencies (first time only):**
   ```bash
   npm install
   ```

4. **Start the React app:**
   ```bash
   npm start
   ```

5. **The app will open in your browser automatically!**
   - Usually at `http://localhost:3000`
   - If it doesn't open, copy the URL from the terminal

6. **Select Day 1 or Day 2** from the buttons at the top!

## Features

### 🎓 Day Selector
- **Choose between Day 1 and Day 2** at the top of the page
- Switch between days anytime - your progress is saved!

### 📝 Interactive Worksheets

#### Day 1: My First Python Program
- **Part 1: Understanding Print** - Multiple choice and short answer questions with answer checking
- **Part 2: Code Practice** - Code editor with live testing
- **Part 3: ASCII Art** - Create drawings with code
- **Part 4: Reflection** - Answer reflection questions
- **Bonus Challenge** - Welcome sign challenge

#### Day 2: Variables - The Memory Boxes
- **Part 1: Understanding Variables** - 4 questions about variables with answer checking
- **Part 2: Code Practice** - 3 exercises for creating and using variables
- **Part 3: Input Practice** - Learn to use input() for interactive programs
- **Part 4: Challenge Problems** - 3 fun challenges
- **Part 5: Reflection** - Think about what you learned
- **Bonus Challenge** - Character Creator program

### ✅ Answer Checking & Scoring
- **Check your answers** - Click "✓ Check Answer" button after each question
- **Instant feedback** - See if you're right or wrong immediately
- **Score tracking** - Watch your score update (Score: X/4 🌟)
- **Helpful hints** - Get hints if your answer needs improvement
- **Visual feedback** - Green checkmark for correct, red X for incorrect

### 💾 Auto-Save
- Your answers are **automatically saved** as you type
- Saved to browser's localStorage
- Your work is safe even if you close the browser!
- Your checked answers and score are also saved!

### 🧪 Test Your Code
- Click the **"▶️ Run Code"** button below any code editor
- See the output of your code instantly
- Great for testing exercises and challenges!
- **Note:** Code with `input()` may not work perfectly in the browser - test those in your terminal!

### 📦 Code Editor Features
- **Syntax highlighting** - See your Python code highlighted
- **Tab key** - Press Tab to indent (2 spaces)
- **Shift+Tab** - Press Shift+Tab to unindent
- **Auto-indent** - Automatically indents selected lines

### 🧭 Navigation
- **Click tabs** at the top to move between different parts
- **Scroll down** to see all questions and exercises
- **Switch between Day 1 and Day 2** using the buttons at the very top

## Tips for Kids

1. **Fill in your name and date first** - So you know it's your work!
2. **Work through each tab** - Start with Part 1 and go in order
3. **Check your answers** - Click "✓ Check Answer" after answering each question
4. **Watch your score** - Try to get all questions correct! 🌟
5. **Read the hints** - If you get something wrong, a helpful hint will appear
6. **Test your code often** - Use the "▶️ Run Code" button to see if it works
7. **For input() programs** - The browser can't always handle input() - test those in your terminal!
8. **Don't worry about mistakes** - You can always change your answers and try again
9. **Have fun!** - Be creative with your code!

## Troubleshooting

**Problem:** `npm start` doesn't work
- **Solution:** Make sure you're in the `worksheets/react-ui` folder
- Try: `cd worksheets/react-ui` then `npm start`
- Make sure Node.js is installed: `node --version`

**Problem:** The page doesn't load
- **Solution:** Check the terminal for error messages
- Make sure port 3000 is not being used by another program
- Try closing other programs and running `npm start` again

**Problem:** Code with `input()` doesn't work
- **Solution:** This is normal! The browser can't always handle interactive input
- Test programs with `input()` in your terminal instead:
  - Save your code to a `.py` file
  - Run it with: `python3 your_file.py`

**Problem:** Answers disappeared
- **Solution:** Check your browser's localStorage
- Answers are saved in your browser - they should still be there!
- If you cleared your browser data, answers will be lost

**Problem:** Python code doesn't run
- **Solution:** The first time loading Python may take a minute
- Wait for "Loading Python interpreter..." to finish
- Make sure your code syntax is correct
- Check for error messages in the output

## What Gets Saved?

All your answers are saved in your browser's localStorage:
- Your name and date
- All question answers
- All your code
- Your reflections
- Your notes
- Your score and checked questions

**Note:** Answers are saved per day (Day 1 and Day 2 are separate)

## Testing Code with input()

For programs that use `input()`, the browser-based Python runner may not work perfectly. Here's how to test them:

1. **Copy your code** from the editor
2. **Create a new file** in Cursor: `test_input.py`
3. **Paste your code** into the file
4. **Run it** in the terminal:
   ```bash
   python3 test_input.py
   ```
5. **Type your answers** when prompted in the terminal!

## Keyboard Shortcuts

- **Tab** - Indent code (2 spaces)
- **Shift+Tab** - Unindent code
- **Ctrl+S / Cmd+S** - Save (auto-saves, but good habit!)

---

**Have fun learning Python! 🎉**

