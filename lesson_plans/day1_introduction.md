# Day 1: Introduction to Programming & Your First Program

## Overview
**Duration:** 2-3 hours  
**Goal:** Introduce programming concepts and get kids excited about coding with their first Python programs

---

## Learning Objectives
By the end of this lesson, students will be able to:
- Explain what programming is in simple terms
- Write and run a Python program in Cursor
- Use `print()` to display messages
- Create personalized text output
- Understand basic program structure

---

## Materials Needed
- Cursor IDE (already set up)
- Python installed on the computer
- Code examples (provided)
- Worksheet (provided)
- Project template (provided)

---

## Lesson Structure

### Part 1: Introduction to Programming (20 minutes)

#### What is Programming? (10 minutes)
**Teaching Approach:** Use analogies and visual aids

**Key Points:**
1. **Programming is giving instructions to a computer**
   - Analogy: Like giving directions to a friend, but very specific
   - Example: "Make a sandwich" vs. "Take bread, open jar, spread peanut butter..."

2. **Programs are sequences of instructions**
   - Show a simple recipe analogy
   - Programs follow steps in order

3. **Python is a programming language**
   - Like learning Spanish or French, but for computers
   - Python is friendly and readable (show simple example)

**Activity:** 
- Ask kids: "If you could program a robot to do one thing, what would it be?"
- Discuss how you'd give instructions step-by-step

#### Setting Up Cursor (10 minutes)
**Teaching Approach:** Hands-on setup

**Steps:**
1. Open Cursor IDE
2. Show the interface:
   - File explorer (left side)
   - Code editor (middle)
   - Terminal/Output (bottom)
3. Explain: "This is where we write our code"
4. Create a new file: `File > New File` or `Ctrl+N` (Windows) / `Cmd+N` (Mac)
5. Save it as `hello.py` in the project folder
6. Show how to run Python code in Cursor:
   - Right-click in the editor → "Run Python File in Terminal"
   - Or use the terminal: `python hello.py` or `python3 hello.py`

**First Program Together:**
```python
print("Hello, Python!")
```

**Key Questions:**
- "What do you think will happen when we run this?"
- "What does `print` mean?"

**Cursor Tips for Kids:**
- Show them how to see the output in the terminal at the bottom
- Explain that errors will appear in red
- Show them how to save files (Ctrl+S / Cmd+S)

---

### Part 2: Your First Print Statements (30 minutes)

#### Activity 1: Hello, World! Variations (10 minutes)
**Goal:** Understand `print()` function

**Code to write together:**
```python
print("Hello, World!")
print("Hello, Python!")
print("Hello, Mom and Dad!")
```

**Teaching Points:**
- `print()` displays text on screen
- Text goes inside quotes (strings)
- Each `print()` is a new line
- Parentheses are important!
- In Cursor, you'll see the output in the terminal at the bottom

**Experiment Together:**
- What happens if you forget quotes?
- What happens if you forget parentheses?
- Try printing numbers: `print(123)`
- Show them the error messages in Cursor (they appear in red)

#### Activity 2: Personalized Greetings (10 minutes)
**Goal:** Make it personal and fun

**Code example:**
```python
print("Hi! My name is [Student Name]")
print("I'm learning Python today!")
print("This is so cool! 🎉")
```

**Let them customize:**
- Change the name
- Add emojis
- Print multiple lines
- Show them how to save and run again

#### Activity 3: ASCII Art Introduction (10 minutes)
**Goal:** Make visual output

**Simple example:**
```python
print("    *")
print("   ***")
print("  *****")
print(" *******")
print("    |")
print("    |")
```

**Teaching Points:**
- We can print anything!
- Spaces matter in Python
- We can create pictures with text
- The output appears in the terminal

**Challenge:** Can they make a smiley face?

---

### Part 3: Guided Practice - Name Tag Creator (30 minutes)

#### Step-by-Step Project
**Goal:** Create a program that makes a name tag

**Together, build:**
```python
print("=" * 20)
print("   NAME TAG")
print("=" * 20)
print("  Name: [Their Name]")
print("  Age: [Their Age]")
print("  Favorite Color: [Color]")
print("=" * 20)
```

**Teaching Points:**
- `"=" * 20` repeats the character (show this magic!)
- Structure and organization
- Comments (optional, but show `#` for notes)
- Save the file with a good name like `name_tag.py`

**Let them customize:**
- Change the border character
- Add more information
- Make it bigger or smaller
- Save and run to see changes

---

### Part 4: Independent Practice (30 minutes)

#### Practice Exercises
1. **Create a greeting card**
   - Print a border
   - Print a message
   - Print their name
   - Save as `greeting_card.py`

2. **Create a simple drawing**
   - Use print statements to make a picture
   - Could be a house, animal, or abstract art
   - Save as `my_drawing.py`

3. **Create an "About Me" poster**
   - Multiple print statements
   - Information about themselves
   - Make it colorful with emojis
   - Save as `about_me.py`

**Instructor Role:**
- Circulate and help
- Encourage experimentation
- Celebrate creativity
- Help debug errors
- Show them how to run their files in Cursor

**Common Errors to Watch For:**
- Missing quotes
- Missing parentheses
- Typos in `print`
- Forgetting to save
- Running the wrong file

**Cursor-Specific Help:**
- Show them how to see which file is open (tab at top)
- Show them how to open multiple files
- Show them the terminal output

---

### Part 5: Main Project - Personalized Greeting Card (40 minutes)

#### Project Introduction
**Goal:** Create a beautiful greeting card program

**Requirements:**
- Must have a border
- Must include a greeting message
- Must be personalized
- Must be creative!
- Must be saved as `greeting_card.py`

**Starter Template Provided:**
- Basic structure
- They fill in the details
- They add creativity

**Steps:**
1. Open template file in Cursor (10 min)
2. Customize the greeting (15 min)
3. Add personal touches (10 min)
4. Save and test (5 min)

**Encourage:**
- Multiple lines
- Different border styles
- Emojis and special characters
- Their own style
- Save often!

**Cursor Tips:**
- Use `Ctrl+S` / `Cmd+S` to save quickly
- Run the program frequently to see changes
- If there's an error, read the red error message

---

### Part 6: Show and Tell (15 minutes)

#### Sharing Time
- Each student shares their greeting card
- Show the code in Cursor
- Run the program to show the output
- Ask: "What was the coolest thing you made?"
- Ask: "What was challenging?"
- Celebrate everyone's work!

**Questions to Discuss:**
- "What did you learn today?"
- "What was your favorite part?"
- "What would you like to learn next?"

---

## Key Concepts Summary

### What is Programming?
- Giving step-by-step instructions to a computer
- Programs are sequences of commands
- Python is a programming language

### The `print()` Function
- Displays text on the screen
- Syntax: `print("your text here")`
- Text must be in quotes (strings)
- Each `print()` creates a new line
- Output appears in the terminal in Cursor

### Program Structure
- Code runs from top to bottom
- Each line is an instruction
- Order matters!

### Using Cursor
- Write code in the editor
- Save files with `.py` extension
- Run code to see output in terminal
- Errors appear in red

---

## Assessment Checkpoints

### Can they:
- [ ] Explain what programming is in their own words?
- [ ] Write a `print()` statement correctly?
- [ ] Create and save a Python file in Cursor?
- [ ] Run a Python program in Cursor?
- [ ] Create a simple program with multiple print statements?
- [ ] Debug a simple error (like missing quotes)?
- [ ] Find the output in the terminal?

### Engagement Indicators:
- [ ] Are they excited to run their programs?
- [ ] Are they experimenting on their own?
- [ ] Are they asking "what if" questions?
- [ ] Are they helping each other?
- [ ] Are they comfortable using Cursor?

---

## Extension Activities (for fast learners)

1. **Create a multi-line poem or story**
2. **Make a calendar or schedule display**
3. **Create a "menu" for a restaurant**
4. **Experiment with different characters for borders**
5. **Try printing special characters: `!@#$%^&*()`**
6. **Create multiple files and run them all**

---

## Troubleshooting Guide

### Common Issues:

**Issue:** "SyntaxError: invalid syntax"
- **Cause:** Missing quotes or parentheses
- **Solution:** Check that all strings have quotes, all functions have parentheses
- **In Cursor:** The error will be highlighted in red

**Issue:** Program doesn't run
- **Cause:** Not saved, wrong file, or Python not in terminal path
- **Solution:** 
  - Make sure file is saved as `.py`
  - Check you're running the correct file
  - Try `python3` instead of `python` (or vice versa)

**Issue:** Nothing appears when running
- **Cause:** Forgot `print()` or program finished
- **Solution:** Make sure using `print()` function
- **In Cursor:** Check the terminal at the bottom for output

**Issue:** Text appears on same line
- **Cause:** Using commas instead of separate print statements
- **Solution:** Use separate `print()` for each line

**Issue:** Can't find the terminal in Cursor
- **Solution:** 
  - Look at the bottom of the screen
  - Go to `View > Terminal` or press `` Ctrl+` `` (backtick)
  - The terminal shows output and errors

---

## Homework/Preview (Optional)

**For next time:**
- Think about what information you'd like to store in a program
- What questions would you like your program to ask?
- Preview: Tomorrow we'll learn about "variables" - like memory boxes for storing information!

---

## Notes for Instructor

- **Pace:** Don't rush! Let kids experiment
- **Energy:** Keep it fun and exciting
- **Mistakes:** Celebrate them as learning opportunities
- **Individual Help:** Some kids may need extra support navigating Cursor
- **Fast Learners:** Have extension activities ready
- **Cursor Navigation:** Make sure kids know how to:
  - Open files
  - Save files
  - Run Python files
  - See terminal output
- **End Goal:** Kids should leave excited and wanting to learn more!

