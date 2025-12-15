# Day 4: Loops - Doing Things Over and Over

## Overview
**Duration:** 2–3 hours  
**Goal:** Teach students how to make the computer repeat actions using loops instead of writing the same code many times.

---

## Learning Objectives
By the end of this lesson, students will be able to:
- Explain what a loop is in simple terms
- Understand why loops are useful
- Write basic `for` loops using `range()`
- Use loops to repeat print statements and simple patterns
- Use loops with user input (repeat questions)
- Understand and write simple `while` loops
- Avoid common loop mistakes (like infinite loops)

---

## Materials Needed
- Cursor IDE (already set up)
- Python installed on the computer
- Code examples (provided)
- Worksheet (provided)
- Project template (provided)

---

## Lesson Structure

### Part 1: Introduction to Loops (25 minutes)

#### What Are Loops? (15 minutes)
**Teaching Approach:** Use strong real-life analogies and physical actions

**Key Points:**
1. **Loops are for repeating actions**  
   - Analogy: Doing jumping jacks 10 times, or writing your name 5 times  
   - Instead of writing the same instruction over and over, we tell the computer: "Do this 10 times."

2. **Why use loops?**  
   - Save time and avoid copying the same code  
   - Make programs easier to change (change one number instead of many lines)  
   - Do actions many times quickly (like counting, drawing patterns, playing game rounds)

3. **Real-life examples:**  
   - "Take 10 steps forward" (instead of saying "step" 10 times)  
   - "Practice piano for 20 minutes" (repeat playing songs)  
   - "Roll the dice 3 times" in a board game

**Activity (No Code Yet):**
- Ask students to stand up. Say: "Clap 3 times" (they clap 3 times).  
- Ask: "Did I tell you to clap once, or did I tell you a loop: clap 3 times?"  
- Do: "Jump 5 times" and count together.  
- Explain: "In code, we use **loops** to tell the computer to repeat actions like this."

#### First Look at a `for` Loop (10 minutes)
**Teaching Approach:** Simple, visual example in Cursor

**Code to write together:**
```python
# A simple loop that says hello 5 times
for i in range(5):
    print("Hello!")
```

**Teaching Points:**
- `for` and `in` are special loop words
- `i` is a **loop variable** (a counter) that changes each time
- `range(5)` means: "do this 5 times" (from 0 up to 4)
- The indented code under the `for` line runs over and over
- In Cursor, you'll see "Hello!" printed 5 times in the terminal

**Experiment Together:**
- Change `5` to `10` or `2` and run again  
- Change the message text  
- Ask: "What do you think will happen if we use `range(1)`? `range(0)`?"

---

### Part 2: Counting and Number Loops with `for` (30 minutes)

#### Activity 1: Counting Up (10 minutes)
**Goal:** Use a loop to count numbers

**Code to write together:**
```python
# Count from 1 to 5
for number in range(1, 6):
    print(number)
```

**Teaching Points:**
- `range(start, stop)` counts from `start` **up to but not including** `stop`  
  - So `range(1, 6)` gives: 1, 2, 3, 4, 5
- The loop variable (`number`) takes each value in turn
- Indentation shows what is **inside** the loop

**Experiment Together:**
- Change the range: `range(1, 11)` to count to 10
- Try counting from 3 to 7
- Ask: "What happens if we forget the indentation?" (show the error)

#### Activity 2: Repeated Messages (10 minutes)
**Goal:** Practice repeating messages and using the loop variable

**Code example:**
```python
# Repeat a message with numbers
for i in range(1, 6):
    print("Loop number:", i)
```

**Teaching Points:**
- You can use the loop variable inside `print()`  
- Each loop run is sometimes called a **"iteration"** (optional term)
- Loops make it easy to add numbers to messages

**Let them customize:**
- Change message to: "Push-up number:", "Jump number:", etc.  
- Use emojis: `print("🎉 Round", i)`

#### Activity 3: Simple Patterns (10 minutes)
**Goal:** Show how loops can build patterns

**Code example:**
```python
# Print a line of stars
for i in range(10):
    print("*")
```

Then show a slightly more advanced one:
```python
# Print numbers on one line (intro idea)
for i in range(1, 6):
    print(i)
```
(Explain that by default, each `print()` goes to a new line; we will keep it simple for now.)

**Teaching Points:**
- Loops can repeat shapes or text  
- This idea will help later for drawing bigger patterns

**Challenge (verbal):**
- "How would we print 20 stars?" (change the range)

---

### Part 3: Loops with Input and Simple `while` Loops (35 minutes)

#### Activity 1: Ask the User Many Times (15 minutes)
**Goal:** Combine `input()` with `for` loops

**Code to write together:**
```python
print("Let's practice your favorite animals!")

for i in range(3):
    animal = input("Name a favorite animal: ")
    print("You chose:", animal)
    print("That's a great choice! 🐾")
    print()
```

**Teaching Points:**
- The loop repeats the questions 3 times  
- Each time, `animal` holds a new answer  
- The program feels more interactive

**Let them customize:**
- Change the questions (favorite food, color, game)  
- Change the number of repeats

#### Activity 2: Introduction to `while` (10 minutes)
**Goal:** Show a simple loop that runs **while** something is true

**Code example:**
```python
# Count down from 5 to 1 using a while loop
count = 5

while count > 0:
    print("Counting down:", count)
    count = count - 1

print("Blast off! 🚀")
```

**Teaching Points:**
- `while` means: "keep doing this **while** the condition is true"  
- Here, as long as `count > 0`, the loop continues  
- We **must** change `count` inside the loop, or it will never stop
- When the condition becomes False, the loop stops and the program continues

**Experiment Together:**
- Change the starting value of `count`  
- Ask: "What happens if we forget `count = count - 1`?" (explain infinite loop concept; don't actually run forever)

#### Activity 3: Simple Repeater (10 minutes)
**Goal:** Use a `while` loop with user choice

**Code example:**
```python
# Repeat until the user says "stop"
print("Type 'stop' to end the loop.")

word = ""  # start with an empty string

while word != "stop":
    word = input("Type a word (or 'stop'): ")
    print("You typed:", word)

print("Loop ended. Goodbye!")
```

**Teaching Points:**
- `word` changes each time based on user input  
- The loop keeps going while `word` is **not** `"stop"`  
- When the user types `stop`, the condition becomes False and the loop ends

**Important Notes:**
- Talk about using loops **carefully** so they always have a way to stop  
- Reinforce: "We never want a loop that runs forever by accident."

---

### Part 4: Guided Practice – Repeating Patterns and Timers (30 minutes)

#### Step-by-Step Project: "Countdown and Cheer" Program
**Goal:** Use both `for` and `while` ideas in a structured way

**Together, build:**
```python
print("Get ready for the big cheer!")

# Ask how many seconds to count down
seconds = int(input("How many seconds should we count down? "))

print()
print("Starting countdown!")

# Count down using a while loop
while seconds > 0:
    print(seconds)
    seconds = seconds - 1

print("Time to cheer!!! 🎉🎉🎉")

# Cheer 5 times using a for loop
for i in range(5):
    print("Hooray! 🎉")
```

**Teaching Points:**
- Combine input, `while`, and `for` loops  
- Show how loops can control **timing-like** behavior (even if not real-time seconds)  
- Reinforce: updating the variable inside `while` and using `range()` in `for`

**Let them customize:**
- Change the number of cheers  
- Change the message (sports team, birthday cheer, etc.)  
- Add emojis or text art

---

### Part 5: Independent Practice (30 minutes)

#### Practice Exercises
1. **Repeat My Name**  
   - Ask for the user's name  
   - Ask how many times to repeat it  
   - Use a `for` loop to print their name that many times  
   - Save as `repeat_name.py`

2. **Multiplication Helper**  
   - Ask for a number (like `5`)  
   - Use a `for` loop to print the multiplication table (1×, 2×, ..., 10×)  
   - Example: `5 x 1 = 5`, `5 x 2 = 10`, etc.  
   - Save as `times_table.py`

3. **Keep Asking Until Correct**  
   - Ask a simple question (like "What is 3 + 4?")  
   - Use a `while` loop to keep asking until they answer correctly  
   - Print a special message when they get it right  
   - Save as `math_quiz_loop.py`

**Instructor Role:**
- Circulate and help with:
  - Understanding `range()`
  - Off-by-one issues (why `range(1, 6)` stops at 5)
  - Updating variables inside `while` loops
- Encourage experimentation and creativity
- Celebrate when students "see" how powerful loops are

**Common Errors to Watch For:**
- Forgetting the colon `:` after `for` or `while`
- Forgetting to indent the code inside the loop
- Changing the wrong variable (or not changing it at all in `while`)
- Using `range(1, 5)` and expecting it to include 5
- Typing `range(1, 10)` but thinking it counts to 11

**Cursor-Specific Help:**
- Show how Cursor auto-indents inside loops  
- Show error messages for `IndentationError` and `SyntaxError`  
- Remind them to save (`Ctrl+S` / `Cmd+S`) before running  
- Remind them that output appears in the terminal at the bottom

---

### Part 6: Main Project – "Loop Art" or "Workout Generator" (40 minutes)

#### Project Option A: Loop Art
**Goal:** Use loops to create text-based art or patterns

**Requirements:**
- Must use at least one `for` loop
- Must repeat some pattern (stars, numbers, shapes, etc.)
- Must be creative and fun
- Must be saved as `loop_art.py`

**Starter idea:**
```python
print("Welcome to Loop Art!")

height = int(input("How tall should the triangle be? "))

for i in range(1, height + 1):
    print("*" * i)
```

**Encourage:**
- Different shapes (triangles, rectangles, steps)
- Different characters (`#`, `+`, emojis)
- Multiple patterns in one program

#### Project Option B: Workout Generator
**Goal:** Use loops to create a simple "workout" or activity list

**Requirements:**
- Must use at least one loop
- Must repeat some actions ("jumping jacks", "push-ups", etc.)
- Must be saved as `workout_generator.py`

**Starter idea:**
```python
print("Welcome to the Workout Generator!")

exercise = input("Enter an exercise (like 'jumping jack'): ")
count = int(input("How many times should we do it? "))

for i in range(1, count + 1):
    print(i, exercise)

print("Great job! Workout complete! 💪")
```

**Encourage:**
- Multiple exercises  
- Fun messages and emojis  
- Asking if they want to repeat another round (optional `while`)

**Cursor Tips:**
- Save often  
- Run the program frequently to test  
- Read red error messages carefully  
- Watch indentation levels inside loops

---

### Part 7: Show and Tell (15 minutes)

#### Sharing Time
- Each student shares one of their loop programs (art or workout or another exercise)
- Show the code in Cursor
- Run the program and watch the repeated output
- Ask: "What did your loop make easier?"  
- Ask: "How many lines of code would you need **without** loops?"

**Questions to Discuss:**
- "What is a loop in your own words?"  
- "What did you like most about loops?"  
- "Where else could loops be useful in programs?"

---

## Key Concepts Summary

### Loops
- Loops let the computer **repeat** actions
- We use loops when we want to do something many times
- They save time and prevent copying the same code over and over

### `for` Loops
- Syntax: `for variable in range(...):`  
- Indent the code you want to repeat
- `range(n)` repeats `n` times (from 0 to `n - 1`)
- `range(start, stop)` counts from `start` up to but not including `stop`

### `while` Loops
- Syntax: `while condition:`  
- Runs **while** the condition is True
- You **must** change something inside the loop so the condition can become False
- Be careful to avoid infinite loops

### Combining Loops with Input
- You can use loops to:
  - Ask questions many times
  - Repeat games or quizzes
  - Keep asking until the user gets it right
- Example pattern: "Ask → check → repeat or stop"

### Using Cursor
- Write code in the editor
- Indentation is very important in loops (Cursor helps with this)
- Run the file to see repeated output in the terminal
- Errors appear in red – read them and fix indentation or syntax

---

## Assessment Checkpoints

### Can they:
- [ ] Explain what a loop is in their own words?
- [ ] Write a simple `for` loop with `range()`?
- [ ] Use `range(start, stop)` correctly (and know that `stop` is not included)?
- [ ] Use a loop variable inside `print()`?
- [ ] Write a simple `while` loop that stops correctly?
- [ ] Combine loops with `input()` to make interactive programs?
- [ ] Avoid or fix a simple infinite loop mistake?
- [ ] Debug an `IndentationError` in loop code?

### Engagement Indicators:
- [ ] Are they excited to see many lines printed quickly?
- [ ] Are they experimenting with different `range()` values?
- [ ] Are they creating their own loop patterns or activities?
- [ ] Are they asking "what if" loop questions ("what if I change this number?")?
- [ ] Are they helping each other debug loops?

---

## Extension Activities (for fast learners)

1. **Nested Shapes (Optional)**  
   - Use a loop inside a loop to make a grid of characters  
   - Example: rows and columns of `*`

2. **Number Guessing with Limited Tries**  
   - Let the user try to guess a number 3 times using a loop

3. **Simple Progress Bar**  
   - Print a growing line like `#`, `##`, `###`, ... using loops

4. **Skip Counting**  
   - Use `range(start, stop, step)` to count by 2s, 5s, or 10s

5. **Simple Menu Loop**  
   - Show a menu and use a `while` loop to keep asking until they choose "quit"

---

## Troubleshooting Guide

### Common Issues:

**Issue:** "SyntaxError: invalid syntax" on a `for` or `while` line  
- **Cause:** Missing colon `:` at the end of the line  
- **Solution:** Always add `:` after `for ...` and `while ...`  
- **In Cursor:** The error will be highlighted in red

**Issue:** "IndentationError: expected an indented block"  
- **Cause:** Code inside the loop is not indented  
- **Solution:** Indent code inside the loop (4 spaces or 1 tab)  
- **In Cursor:** Use Tab to indent, Shift+Tab to unindent

**Issue:** Loop never stops (or prints too many lines)  
- **Cause:** Condition never becomes False, or variable not updated  
- **Solution:** Check that the variable in the condition changes inside the loop  
- **Example:** `count = count - 1` in a countdown

**Issue:** Loop runs the wrong number of times  
- **Cause:** Misunderstanding `range()` end value  
- **Solution:** Remember that `range(start, stop)` stops **before** `stop`  
- **Tip:** Test small ranges (like 1 to 5) to see how it works

**Issue:** Program seems to "freeze" on input  
- **Cause:** Program is waiting for input in the terminal  
- **Solution:** Click in the terminal, type an answer, and press Enter

---

## Homework/Preview (Optional)

**For next time:**
- Think about groups of things you use every day (shopping lists, favorite games, animals)  
- How could we store a **bunch** of related items in one variable?  
- Preview: Soon we'll learn about **lists** – collections of things we can also loop over!

---

## Notes for Instructor

- **Pace:** Loops are powerful but can be confusing – go slowly, especially with `while`  
- **Energy:** Keep it fun by using loops for art, games, and silly repetition  
- **Mistakes:** Use infinite-loop mistakes as teaching moments (explain, then fix quickly)  
- **Individual Help:** Some students may need extra support with:
  - Understanding how `range()` works
  - Off-by-one errors
  - Remembering to update variables in `while` loops
  - Indentation inside loops
- **Fast Learners:** Offer extension activities (nested loops, skip counting, simple menus)
- **Cursor Navigation:** Make sure kids know how to:
  - See and fix indentation in the editor
  - Read terminal output
  - Stop a running program if needed (close terminal / stop button)
  - Save and run files repeatedly while experimenting
- **End Goal:** Students should leave feeling that loops are a **superpower** for repeating actions in their programs without writing the same code again and again.
