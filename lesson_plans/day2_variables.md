# Day 2: Variables - The Memory Boxes

## Overview
**Duration:** 2-3 hours  
**Goal:** Introduce variables as containers for storing information, and learn how to get input from users

---

## Learning Objectives
By the end of this lesson, students will be able to:
- Understand what variables are and why we use them
- Create and use variables to store information
- Recognize different data types (strings, numbers)
- Use `input()` to get information from users
- Combine variables with print statements
- Create interactive programs

---

## Materials Needed
- Cursor IDE (already set up)
- Python installed on the computer
- Code examples (provided)
- Worksheet (provided)
- Project template (provided)

---

## Lesson Structure

### Part 1: Introduction to Variables (25 minutes)

#### What are Variables? (15 minutes)
**Teaching Approach:** Use analogies and hands-on examples

**Key Points:**
1. **Variables are like labeled boxes**
   - Analogy: Like a box with a label that holds something
   - Example: A box labeled "my_name" that holds "Sarah"
   - The label (variable name) tells you what's inside
   - You can look inside (use the variable) or put something new in (change the value)

2. **Why use variables?**
   - Store information to use later
   - Make code easier to read and understand
   - Change values in one place instead of many
   - Get information from users

3. **Variable rules:**
   - Must start with a letter or underscore
   - Can contain letters, numbers, and underscores
   - Cannot use spaces (use underscores instead)
   - Are case-sensitive (myName is different from myname)
   - Should have descriptive names

**Activity:** 
- Ask kids: "If you had a box labeled 'favorite_color', what would you put in it?"
- Discuss: "What would you name a box that holds your age?"
- Show examples: `my_name`, `my_age`, `favorite_food`

#### Creating Your First Variable (10 minutes)
**Teaching Approach:** Hands-on coding

**Code to write together:**
```python
# Creating a variable is like putting something in a labeled box
my_name = "Sarah"
print(my_name)
```

**Teaching Points:**
- `=` means "put this value into this variable"
- Variable name goes on the left
- Value goes on the right
- We can use the variable in print statements
- In Cursor, you'll see the output in the terminal

**Experiment Together:**
- Change the value and run again
- Create multiple variables
- Print multiple variables
- Show them how to save and run in Cursor

---

### Part 2: Different Types of Variables (30 minutes)

#### Activity 1: String Variables (10 minutes)
**Goal:** Understand text variables

**Code to write together:**
```python
# Strings are text - they go in quotes
my_name = "Alex"
favorite_color = "Blue"
favorite_food = "Pizza"

print("My name is", my_name)
print("My favorite color is", favorite_color)
print("My favorite food is", favorite_food)
```

**Teaching Points:**
- Strings are text (words, sentences)
- Must be in quotes (single or double)
- Can combine with print statements using commas
- Variables make it easy to change values

**Let them customize:**
- Change the variable values
- Add more variables
- Print them in different ways

#### Activity 2: Number Variables (10 minutes)
**Goal:** Understand number variables

**Code to write together:**
```python
# Numbers don't need quotes!
my_age = 10
number_of_pets = 2
favorite_number = 7

print("I am", my_age, "years old")
print("I have", number_of_pets, "pets")
print("My favorite number is", favorite_number)
```

**Teaching Points:**
- Numbers don't need quotes
- Can do math with numbers
- Can combine numbers and strings in print

**Experiment Together:**
- Try math: `print(my_age + 5)`
- Try: `print("Next year I'll be", my_age + 1)`
- Show them the difference between `"10"` (string) and `10` (number)

#### Activity 3: Mixing Variables (10 minutes)
**Goal:** Combine different types

**Code example:**
```python
name = "Jordan"
age = 9
favorite_color = "Green"

print("=" * 30)
print("About", name)
print("=" * 30)
print("Age:", age)
print("Favorite Color:", favorite_color)
print("=" * 30)
```

**Teaching Points:**
- Can mix strings and numbers
- Variables make programs flexible
- Easy to update information

---

### Part 3: Getting Input from Users (35 minutes)

#### Introduction to `input()` (15 minutes)
**Goal:** Make programs interactive

**Code to write together:**
```python
# Ask the user for their name
name = input("What is your name? ")
print("Hello,", name, "!")
```

**Teaching Points:**
- `input()` asks the user to type something
- The text in quotes is the question
- What the user types gets stored in the variable
- The program waits for the user to press Enter
- In Cursor, you'll type your answer in the terminal

**Important:** 
- Show them where to type in the terminal
- Explain that the program is waiting for their input
- Show them to press Enter after typing

**Experiment Together:**
- Ask for different information
- Use the input in multiple places
- Combine with print statements

#### Activity: Interactive Greeting (10 minutes)
**Goal:** Create an interactive program

**Code example:**
```python
print("Welcome! Let's get to know you!")
print()

name = input("What's your name? ")
age = input("How old are you? ")
color = input("What's your favorite color? ")

print()
print("Nice to meet you,", name, "!")
print("You're", age, "years old and love", color, "!")
```

**Teaching Points:**
- Programs can ask questions
- Users can provide answers
- We use those answers in our program
- Makes programs personal and interactive

**Let them customize:**
- Add more questions
- Change the output format
- Make it more fun with emojis

#### Activity: Simple Calculator (10 minutes)
**Goal:** Use input with numbers

**Code example:**
```python
print("Simple Calculator")
print("=" * 20)

number1 = input("Enter first number: ")
number2 = input("Enter second number: ")

# Convert to numbers for math
num1 = int(number1)
num2 = int(number2)

result = num1 + num2
print("The sum is:", result)
```

**Teaching Points:**
- `input()` always gives us a string
- To do math, we need to convert to numbers
- `int()` converts string to integer (whole number)
- `float()` converts string to decimal number
- Show them what happens without conversion

**Important Note:**
- Explain that `input()` gives text, even if you type numbers
- We need `int()` or `float()` to do math
- This is a common source of confusion - be patient!

---

### Part 4: Guided Practice - Personal Info Card (30 minutes)

#### Step-by-Step Project
**Goal:** Create an interactive program that asks for information and displays it

**Together, build:**
```python
print("=" * 40)
print("   PERSONAL INFO CARD")
print("=" * 40)
print()

# Get information from user
name = input("What's your name? ")
age = input("How old are you? ")
favorite_color = input("What's your favorite color? ")
favorite_food = input("What's your favorite food? ")
hobby = input("What's your favorite hobby? ")

print()
print("=" * 40)
print("   YOUR INFO CARD")
print("=" * 40)
print("  Name:", name)
print("  Age:", age)
print("  Favorite Color:", favorite_color)
print("  Favorite Food:", favorite_food)
print("  Hobby:", hobby)
print("=" * 40)
```

**Teaching Points:**
- Structure: ask questions, then display answers
- Use variables to store all the information
- Format the output nicely
- Save the file with a good name like `info_card.py`

**Let them customize:**
- Add more questions
- Change the border style
- Add emojis
- Make it more creative

---

### Part 5: Independent Practice (30 minutes)

#### Practice Exercises
1. **Create a "Get to Know Me" program**
   - Ask 5 questions about the user
   - Display all answers in a nice format
   - Save as `get_to_know_me.py`

2. **Create a simple quiz**
   - Ask questions with right/wrong answers
   - Store answers in variables
   - Display the answers at the end
   - Save as `simple_quiz.py`

3. **Create a story starter**
   - Ask for a name, place, animal, etc.
   - Store in variables
   - Print a simple story using those variables
   - Save as `story_starter.py`

**Instructor Role:**
- Circulate and help
- Encourage experimentation
- Help with input/output in terminal
- Celebrate creativity
- Help debug errors

**Common Errors to Watch For:**
- Forgetting quotes around strings
- Using quotes around numbers (when you want to do math)
- Forgetting to convert input to numbers for math
- Typos in variable names
- Not typing in the terminal when program asks for input
- Forgetting to save before running

**Cursor-Specific Help:**
- Show them where the terminal is (bottom of screen)
- Explain that when `input()` runs, they type in the terminal
- Show them to press Enter after typing
- Show them how to run the program again

---

### Part 6: Main Project - Mad Libs Game (40 minutes)

#### Project Introduction
**Goal:** Create an interactive Mad Libs game

**Requirements:**
- Must ask for at least 5 different words (noun, verb, adjective, etc.)
- Must store all answers in variables
- Must create a funny story using those words
- Must be creative and fun!
- Must be saved as `mad_libs.py`

**Starter Template Provided:**
- Basic structure
- They fill in the questions
- They create the story
- They add creativity

**Steps:**
1. Open template file in Cursor (10 min)
2. Add questions to ask the user (15 min)
3. Create the story using variables (10 min)
4. Test and customize (5 min)

**Example Story Structure:**
```python
print("Let's play Mad Libs!")
print()

noun1 = input("Enter a noun: ")
adjective1 = input("Enter an adjective: ")
verb1 = input("Enter a verb: ")

print()
print("Here's your story:")
print("Once upon a time, there was a", adjective1, noun1)
print("that loved to", verb1, "every day!")
```

**Encourage:**
- Creative questions
- Funny stories
- Multiple sentences
- Their own style
- Save often!

**Cursor Tips:**
- Use `Ctrl+S` / `Cmd+S` to save quickly
- Run the program frequently to test
- Type answers in the terminal when prompted
- If there's an error, read the red error message

---

### Part 7: Show and Tell (15 minutes)

#### Sharing Time
- Each student shares their Mad Libs game
- Show the code in Cursor
- Run the program and play it together
- Ask: "What was the funniest story you created?"
- Ask: "What was challenging?"
- Celebrate everyone's work!

**Questions to Discuss:**
- "What did you learn about variables today?"
- "What was your favorite part?"
- "What would you like to learn next?"

---

## Key Concepts Summary

### Variables
- Variables are like labeled boxes that store information
- Syntax: `variable_name = value`
- Use descriptive names (my_name, not x)
- Can store text (strings) or numbers

### Data Types
- **Strings:** Text in quotes (`"Hello"`, `"Python"`)
- **Numbers:** Integers (whole numbers) or floats (decimals)
- `input()` always gives strings, even for numbers

### The `input()` Function
- Asks the user to type something
- Syntax: `variable = input("Question: ")`
- User types answer in terminal and presses Enter
- Always returns a string

### Converting Types
- `int()` converts string to integer: `int("10")` → `10`
- `float()` converts string to decimal: `float("3.14")` → `3.14`
- Needed when doing math with input

### Using Cursor
- Write code in the editor
- Run program to see output in terminal
- When `input()` runs, type answer in terminal
- Press Enter after typing
- Errors appear in red

---

## Assessment Checkpoints

### Can they:
- [ ] Explain what a variable is in their own words?
- [ ] Create a variable and assign it a value?
- [ ] Use a variable in a print statement?
- [ ] Understand the difference between strings and numbers?
- [ ] Use `input()` to get information from users?
- [ ] Convert string input to numbers when needed?
- [ ] Create an interactive program?
- [ ] Debug a simple variable error?

### Engagement Indicators:
- [ ] Are they excited to run their interactive programs?
- [ ] Are they experimenting with different variable names?
- [ ] Are they asking "what if" questions?
- [ ] Are they comfortable using input() in the terminal?
- [ ] Are they helping each other?

---

## Extension Activities (for fast learners)

1. **Create a multi-round Mad Libs** (ask for words, create story, ask for more words, continue story)
2. **Build a simple calculator** (ask for two numbers and operation, calculate result)
3. **Create a password generator** (ask for favorite word and number, combine them)
4. **Build a "Would You Rather" game** (store choices in variables, display questions)
5. **Create a character creator** (ask for name, age, superpower, etc., display character card)
6. **Experiment with string methods** (`.upper()`, `.lower()`, `.title()`)

---

## Troubleshooting Guide

### Common Issues:

**Issue:** "NameError: name 'my_name' is not defined"
- **Cause:** Variable name typo or variable created after it's used
- **Solution:** Check spelling, make sure variable is created before using it
- **In Cursor:** The error will show which line has the problem

**Issue:** "SyntaxError: invalid syntax" with variables
- **Cause:** Missing quotes around strings, or using spaces in variable names
- **Solution:** Strings need quotes, variable names can't have spaces (use underscores)
- **In Cursor:** The error will be highlighted in red

**Issue:** Math doesn't work with input
- **Cause:** `input()` returns a string, not a number
- **Solution:** Convert to number first: `age = int(input("Age: "))`
- **Example:** `result = int(num1) + int(num2)`

**Issue:** Program seems stuck/frozen
- **Cause:** Program is waiting for input, but user doesn't know where to type
- **Solution:** 
  - Look at the terminal at the bottom of Cursor
  - Type your answer there and press Enter
  - The program is waiting for you!

**Issue:** Can't see where to type answer
- **Solution:** 
  - Look at the terminal at the bottom of the screen
  - Click in the terminal to make sure it's active
  - Type your answer and press Enter
  - The question appears in the terminal

**Issue:** Variable value doesn't change
- **Cause:** Forgot to save file, or running old version
- **Solution:** Save the file (Ctrl+S / Cmd+S) and run again

---

## Homework/Preview (Optional)

**For next time:**
- Think about decisions you make every day (if it's sunny, I'll play outside)
- What choices would you like your program to make?
- Preview: Tomorrow we'll learn about "if/else" statements - making decisions in code!

---

## Notes for Instructor

- **Pace:** Variables can be tricky - take time to ensure understanding
- **Energy:** Keep it fun and interactive - kids love input()!
- **Mistakes:** Celebrate them as learning opportunities
- **Individual Help:** Some kids may need extra support with:
  - Understanding the terminal for input
  - Converting strings to numbers
  - Variable naming
- **Fast Learners:** Have extension activities ready
- **Cursor Navigation:** Make sure kids know how to:
  - See the terminal at the bottom
  - Type in the terminal when prompted
  - Press Enter after typing
  - Run Python files
- **Input/Output:** Emphasize that:
  - Questions appear in terminal
  - Answers are typed in terminal
  - Press Enter to submit
- **End Goal:** Kids should understand variables as containers and be excited about interactive programs!

