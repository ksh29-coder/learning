# Day 5: Functions - Your Own Commands

## Overview
**Duration:** 2–3 hours  
**Goal:** Teach students how to create and use their own functions so they can organize code and reuse it easily.

---

## Learning Objectives
By the end of this lesson, students will be able to:
- Explain what a function is in simple, kid-friendly language
- Define a function using `def` and a name
- Call a function to make it run
- Write functions that:
  - Take no parameters
  - Take one or more parameters (inputs)
  - Optionally return a value (light introduction)
- Use functions to avoid repeating code
- Break a small program into multiple functions
- Explain what a **library** is and what `import` does
- Use `random.randint()`, `random.choice()`, and `from time import sleep` / `sleep()`

---

## Materials Needed
- Cursor IDE (already set up)
- Python installed on the computer
- Code examples (Day 5 folder)
- Worksheet (Day 5)
- Project template (Day 5)

---

## Lesson Structure

### Part 1: Introduction to Functions (25 minutes)

#### What Are Functions? (15 minutes)
**Teaching Approach:** Analogies + whiteboard

**Key Points:**
1. **Functions are like your own commands or mini-machines**  
   - Analogy: A "make sandwich" button that always does the same steps  
   - Analogy: A dance move – you learn it once, then say "do the move!"  
   - In code: We give a function a name, write steps inside, then use that name to run those steps.

2. **Why use functions?**  
   - Avoid writing the same code many times  
   - Organize programs into small pieces  
   - Make code easier to read ("this part says `greet_user()`")  
   - Let us build our own commands on top of Python

3. **Real-world examples:**  
   - A microwave "start" button (inside: lots of steps, outside: just press once)  
   - A game button: "jump", "attack", "pause"  

**Quick no-code activity:**
- On the board, list steps for "make hot chocolate".  
- Then say: "Let's call this function `make_hot_chocolate()`."  
- Ask: "If we want hot chocolate 3 times, do we rewrite all steps, or just say `make_hot_chocolate()` three times?"

#### First Function in Python (10 minutes)
**Teaching Approach:** Simple example in Cursor

**Code to write together:**
```python
def say_hello():
    print("Hello!")
    print("Welcome to Day 5: Functions!")

# Calling (using) the function
say_hello()
```

**Teaching Points:**
- `def` starts a function definition
- `say_hello` is the function name (choose good names!)
- Parentheses `()` after the name are required
- The colon `:` and indentation show what’s inside the function
- The function does nothing until we call it (`say_hello()`)

**Experiment Together:**
- Comment out `say_hello()` and run → nothing happens  
- Call `say_hello()` two or three times → code inside runs each time

---

### Part 2: Functions Without Parameters (30 minutes)

#### Activity 1: Multiple Greeting Functions (10 minutes)
**Goal:** Get comfortable defining and calling simple functions.

**Code to write together:**
```python
def greet_morning():
    print("Good morning! ☀️")

def greet_afternoon():
    print("Good afternoon! 😎")

def greet_night():
    print("Good night! 🌙")

greet_morning()
greet_afternoon()
greet_night()
```

**Teaching Points:**
- Each function is a different mini-program
- We can call them in any order
- Indentation still matters (all lines inside the function are indented)

**Let them customize:**
- Change messages / emojis  
- Add their own `greet_birthday()`, `greet_new_year()`, etc.

#### Activity 2: Using Functions to Avoid Repetition (10 minutes)
**Goal:** Show how functions reduce repeated code.

**Before (repeated code):**
- Show 3–4 similar blocks that print a simple "decorated" message (like borders, titles).

**After (using a function):**
```python
def print_border():
    print("=" * 30)

print_border()
print("Welcome to the game!")
print_border()
print("Choose your character")
print_border()
```

**Teaching Points:**
- If we want to change the border, we change the function once
- Functions help keep code DRY ("Don’t Repeat Yourself")

#### Activity 3: Tiny "Helper" Functions (10 minutes)
**Goal:** Think in small, meaningful chunks.

**Code example:**
```python
def show_title():
    print("=" * 40)
    print("   MY COOL PROGRAM")
    print("=" * 40)

def show_goodbye():
    print("Thanks for using my program! Bye! 👋")

show_title()
print("Some program stuff here...")
show_goodbye()
```

**Teaching Points:**
- Functions can be very small but still helpful
- They make the main part of the program read like a story

---

### Part 3: Functions With Parameters (Inputs) (35 minutes)

#### Introduction to Parameters (15 minutes)
**Goal:** Understand that functions can take information as input.

**Analogy:**
- A vending machine: you press different buttons (inputs) and get different snacks.  
- A "say hello to NAME" function needs to know which name.

**Code to write together:**
```python
def greet_person(name):
    print("Hello,", name, "!")
    print("Nice to meet you, " + name + "!")

greet_person("Alex")
greet_person("Jordan")
```

**Teaching Points:**
- `name` inside `()` is a parameter (like a variable only for that function)
- When we call `greet_person("Alex")`, `"Alex"` gets stored in `name`
- Same function, different inputs → different output

**Experiment Together:**
- Call `greet_person("Mom")`, `greet_person("Dad")`, etc.

#### Activity 2: Functions With Two Parameters (10 minutes)
**Goal:** Practice multiple inputs.

**Code example:**
```python
def describe_pet(pet_name, animal_type):
    print("I have a", animal_type, "named", pet_name + ".")

describe_pet("Buddy", "dog")
describe_pet("Whiskers", "cat")
```

**Teaching Points:**
- Order matters: `describe_pet("dog", "Buddy")` is different
- Function calls should match the function definition (2 parameters → 2 arguments)

#### Activity 3: Using Input With Functions (10 minutes)
**Goal:** Combine `input()` with functions.

**Code example:**
```python
def greet_user(name):
    print("Hello,", name, "!")
    print("Welcome to our program!")

user_name = input("What is your name? ")
greet_user(user_name)
```

**Teaching Points:**
- Get data from user → pass it into the function
- Functions can work with any input the user gives

---

### Part 4: Gentle Intro to Return Values (Optional, 20–25 minutes)

#### What Does "Return" Mean? (5 minutes)
**Explain simply:**
- A function can give back an answer, like a calculator.
- Example: A "double number" machine: put in 4, get back 8.

#### Activity: Simple Math Functions (15–20 minutes)

**Code example:**
```python
def add_two_numbers(a, b):
    result = a + b
    return result

sum_result = add_two_numbers(3, 5)
print("The sum is:", sum_result)
```

**Teaching Points:**
- `return` sends a value back to where the function was called
- We often store it in a variable
- Keep it simple: "functions that give back answers"

**Optional input version:**
```python
def square_number(n):
    return n * n

number = int(input("Enter a number: "))
answer = square_number(number)
print("The square is:", answer)
```

---

### Part 5: Guided Practice – "Function Toolbox" (30 minutes)

**Goal:** Build a small file full of helpful functions, then use them.

**Step-by-step idea:**
1. Create a file like `function_toolbox.py`.
2. Define:
   - `print_border()` – prints a line of `=` characters
   - `greet_user(name)` – prints a welcome message
   - `cheer(times)` – prints "Hooray!" multiple times using a loop
   - `add_excitement(message)` – prints the message with extra excitement
3. Write a main program that uses them:

```python
def print_border():
    print("=" * 30)

def greet_user(name):
    print_border()
    print("Hello,", name, "!")
    print("Welcome to the Function Toolbox!")
    print_border()


def cheer(times):
    for i in range(times):
        print("Hooray! 🎉")


def add_excitement(message):
    print(message + "!!! 🎉")

# Main program
user_name = input("What is your name? ")
print()

greet_user(user_name)
print()

cheer(3)
print()

add_excitement("You just used functions")
```

**Teaching Points:**
- The "toolbox" idea: define your helpers first, then the main program *uses* them
- The main program reads like a story: greet → cheer → celebrate
- Functions can call other functions (`greet_user` uses `print_border`!)
- This matches `code_examples/day5/04_function_toolbox.py`

**Let them customize:**
- Add their own tool to the toolbox (a `sing()`, a `countdown()`, a `robot_voice(message)`)
- Change how many cheers happen
- Make `print_border()` fancier (different characters, longer lines)

---

### Part 6: Libraries – Functions Other People Wrote! (25–30 minutes)

**This part is essential prep for the upcoming AI & Machine Learning course — its recap list explicitly includes "Libraries."**

#### The Big Idea (5 minutes)
**Teaching Approach:** Connect directly to what they just did

**Key framing (say it almost exactly like this):**
> "You've been WRITING functions all day. Here's a secret: programmers everywhere share their functions in **libraries** — boxes full of functions other people already wrote for you. The word `import` opens the box!"

**Analogies:**
- A library is like a **toolbox someone else packed** — you don't build the hammer, you just grab it
- Or an **app store for code**: `import` = install, `random.randint(...)` = tap the app
- Python comes with lots of these boxes built in (`random`, `time`, `math`, ...)

#### Activity 1: The `random` Library (10 minutes)
**Code to write together:**
```python
import random

# random.randint(low, high) gives a random whole number from low to high
dice = random.randint(1, 6)
print(f"You rolled a {dice}!")

# random.choice(a_list) picks ONE random item from a list
snack = random.choice(["pizza", "sushi", "tacos", "ice cream"])
print(f"Tonight we eat: {snack}")
```

**Teaching Points:**
- `import random` goes at the **top of the file** — open the box before you use the tools
- The dot means "look inside": `random.randint` = "the `randint` function inside the `random` box"
- `random.randint(1, 6)` **includes both ends** — it really can roll a 1 or a 6
- `random.choice(...)` needs a **list** in the parentheses
- These are function calls just like the ones they wrote — someone else wrote the `def`!

**Experiment Together:**
- Run the dice line several times — different number (almost) every run! 🎲
- Change to a 20-sided dice: `random.randint(1, 20)`
- Make `random.choice` pick from their own list (favorite games, class names)

#### Activity 2: A Second Way to Import – `from time import sleep` (5–10 minutes)
**Code to write together:**
```python
from time import sleep

print("Get ready...")
sleep(1)   # the program waits 1 second
print("Get set...")
sleep(1)
print("GO! 🏁")
```

**Teaching Points:**
- `from time import sleep` grabs **one function** out of the `time` box
- After that, we can write just `sleep(1)` — no `time.` needed
- `sleep(seconds)` pauses the program — perfect for drama and countdowns!
- Both import styles are fine; `import random` style is the most common

#### Activity 3: Mini Magic 8-Ball (5–10 minutes)
**Combine everything** (matches `code_examples/day5/05_using_libraries.py`):
```python
import random
from time import sleep

question = input("Ask the Magic 8-Ball a yes/no question: ")
answer = random.choice(["Yes, definitely! ✨", "No way! 🙅", "Maybe... 🤔"])

print("The Magic 8-Ball says...")
sleep(1)
print(answer)
```

**Teaching Points:**
- Libraries + their own code = real programs fast
- This is exactly how the bonus arcade games work — no more "read-only magic"!

---

### Part 7: Main Project – Rock Paper Scissors vs the Computer! (35–40 minutes)

**Goal:** Build a complete game using functions **and** the `random` library.

**Template:** `projects/templates/day5_rock_paper_scissors_template.py`

**Requirements:**
- Must use at least 3 functions (get player choice, get computer choice, decide winner)
- The computer must choose with `random.choice(["rock", "paper", "scissors"])`
- Must play 3 rounds with a `for` loop and keep score
- Must announce the final winner
- Must be saved and run from Cursor

**How to run it:**
1. Open the template and **play it first** — notice the two `TODO`s in `decide_winner()`
2. Fill in the paper and scissors branches (the rock branch shows the pattern)
3. Test all three choices — try to beat the computer!
4. Pick challenges from the bottom of the file (best of 5, suspense with `sleep`, emojis)

**Teaching Points:**
- Each function has ONE job — that's why the game is easy to read
- `decide_winner` **returns** who won; the main program decides what to print
- `random.choice` is what makes the computer feel alive

**Alternative/extra project:** `projects/templates/day5_monster_battle.py` — a bigger
turn-based battle game that reviews everything from Days 1–5. Great for fast finishers:
they play it first, then follow the numbered enhancement steps inside the file
(HP bars, random damage, critical hits).

---

### Part 8: Show and Tell (15 minutes)

#### Sharing Time
- Each student demos their Rock Paper Scissors game (or Monster Battle enhancements)
- Play a round against their program!
- Ask: "Which function are you most proud of?"
- Ask: "What does `random.choice` do in your game?"

**Questions to Discuss:**
- "What is a function in your own words?"
- "What's the difference between a function you write and a library function?"
- "Where have you seen randomness in real games?" (loot drops, dice, shuffled cards)

---

## Key Concepts Summary

### Functions
- A function is a **named block of code** you can run whenever you call it
- `def function_name():` defines it; `function_name()` calls it
- Defining ≠ running — nothing happens until you **call** the function
- Functions keep code DRY ("Don't Repeat Yourself") and organized

### Parameters
- Parameters are **inputs** a function receives: `def greet(name):`
- Arguments are the values you pass in: `greet("Sam")`
- Order matters with multiple parameters: `describe_pet("Buddy", "dog")`

### Return Values
- `return` **sends an answer back** to where the function was called
- `print` shows something; `return` gives something back — they're different!
- Store returned values in variables: `answer = add_two_numbers(3, 5)`

### Libraries and `import`
- A **library** is a box of functions other people wrote for you
- `import random` opens the box; `random.randint(1, 6)` uses a tool inside it
- `random.randint(low, high)` → random whole number (both ends included)
- `random.choice(a_list)` → one random item from a list
- `from time import sleep` grabs one function; then `sleep(1)` pauses 1 second

### Using Cursor
- Define functions at the top, main program below
- Watch indentation — everything inside a function is indented
- Run often; call your function right away to test it

---

## Assessment Checkpoints

### Can they:
- [ ] Explain what a function is in their own words?
- [ ] Define a function with `def` and call it correctly?
- [ ] Explain the difference between defining and calling?
- [ ] Write a function with one or two parameters and pass arguments in order?
- [ ] Write a function that returns a value and store the result in a variable?
- [ ] Explain the difference between `return` and `print`?
- [ ] Explain what `import` does in their own words?
- [ ] Use `random.randint()` and `random.choice()` correctly?
- [ ] Complete the `decide_winner()` TODOs in Rock Paper Scissors?

### Engagement Indicators:
- [ ] Are they inventing their own functions without being asked?
- [ ] Are they excited when the computer's random choice surprises them?
- [ ] Are they combining functions with loops and if/else on their own?
- [ ] Are they playing (and replaying!) their own games?

---

## Extension Activities (for fast learners)

1. **Monster Battle Enhancements**
   - Open `projects/templates/day5_monster_battle.py`, play it, then follow the
     numbered enhancement steps (HP bars, random damage, critical hits, play again)

2. **Loaded Dice Detector**
   - Roll `random.randint(1, 6)` 20 times in a loop and count how many 6s appear

3. **Password Generator**
   - Use `random.choice` on a list of words/characters several times to build a silly password

4. **Countdown Launcher**
   - Use `sleep(1)` in a `while` loop to make a real-time rocket countdown

5. **Best-of-5 Championship**
   - Upgrade Rock Paper Scissors: first to 3 wins, with a running score after each round

---

## Troubleshooting Guide

### Common Issues:

**Issue:** "NameError: name 'say_hello' is not defined"
- **Cause:** Calling the function **above** where it's defined, or a typo in the name
- **Solution:** Define functions at the top; check spelling matches exactly

**Issue:** Function does nothing when the program runs
- **Cause:** The function is defined but never **called**
- **Solution:** Add `function_name()` (with parentheses!) after the definition

**Issue:** "TypeError: greet_person() missing 1 required positional argument"
- **Cause:** Called a function without the input it needs: `greet_person()`
- **Solution:** Pass an argument: `greet_person("Alex")` — one value per parameter

**Issue:** Printed `None` instead of an answer
- **Cause:** The function prints instead of returning (or forgot `return`)
- **Solution:** Use `return result` inside the function, then `print()` the stored value outside

**Issue:** "NameError: name 'random' is not defined"
- **Cause:** Used `random.randint(...)` without `import random` at the top
- **Solution:** Add `import random` as the first line of the file

**Issue:** "AttributeError: module 'random' has no attribute ..."
- **Cause:** Typo in the function name (`random.randit`, `random.Choice`)
- **Solution:** Check spelling and lowercase: `randint`, `choice`

**Issue:** `random.choice("rock", "paper", "scissors")` crashes
- **Cause:** `random.choice` needs ONE list, not several separate values
- **Solution:** Put the options in a list: `random.choice(["rock", "paper", "scissors"])`

**Issue:** "IndentationError" inside a function
- **Cause:** Code inside the function isn't indented (or is indented unevenly)
- **Solution:** Indent everything inside the function by 4 spaces — Cursor helps with this

---

## Homework/Preview (Optional)

**For next time:**
- Keep playing your Rock Paper Scissors game — can anyone in the family beat it 3 times in a row?
- Think: your game stores the computer's options in `["rock", "paper", "scissors"]` — a **list**!
- Preview: next lesson is all about **lists** — storing many things in one variable and looping over them

---

## Notes for Instructor

- **Pace:** Parts 1–3 (defining, calling, parameters) are the heart of the day — don't rush them.
  Part 4 (return) can stay light; it gets reinforced on Days 6–8.
- **Timing:** The full plan is generous. To stay inside 2–3 hours, keep Part 4 short,
  trim Part 5 to ~20 minutes, and treat the Monster Battle as an extension, not a requirement.
  **Do not skip Part 6 (Libraries)** — it's a named prerequisite for the ML course.
- **The one sentence to repeat all day:** "You've been writing functions — libraries are
  functions other people wrote." It makes `import` feel earned, not magic.
- **Mistakes to expect:**
  - Forgetting parentheses when calling: `say_hello` vs `say_hello()`
  - Confusing `return` with `print` (use the calculator analogy: the screen *shows*, the answer *comes back*)
  - Forgetting `import random` at the top
- **Individual Help:** Michael tends to experiment inside the example files — steer
  experiments to `sandbox/michael/` so the reference examples stay clean.
- **Fast Learners:** Monster Battle enhancement steps are self-guided — perfect for
  independent work while you help the other student.
- **Cursor Navigation:** Make sure kids can run a file repeatedly, read `NameError`/`TypeError`
  messages out loud, and use Ctrl+S before every run.
- **End Goal:** Students should leave knowing they can **build their own commands** and
  **borrow anyone else's** — that combination is what makes real programs (and the
  upcoming ML course's `import` lines) feel within reach. 🚀
