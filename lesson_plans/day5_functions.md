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
