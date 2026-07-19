# Day 3: Making Decisions - If/Else Statements

## Overview
**Duration:** 2-3 hours  
**Goal:** Teach students how to make programs that can make decisions and respond differently based on conditions

---

## Learning Objectives
By the end of this lesson, students will be able to:
- Understand what conditional statements are and why we use them
- Write `if` statements to check conditions
- Use `else` to handle alternative cases
- Use `elif` for multiple conditions
- Compare values using comparison operators (==, !=, <, >, <=, >=)
- Create interactive programs that respond to user input
- Combine conditions with `and` and `or`

---

## Materials Needed
- Cursor IDE (already set up)
- Python installed on the computer
- Code examples (provided)
- Worksheet (provided)
- Project template (provided)

---

## Lesson Structure

### Part 1: Introduction to Making Decisions (25 minutes)

#### What are Decisions in Programming? (15 minutes)
**Teaching Approach:** Use real-world analogies and examples

**Key Points:**
1. **Programs can make decisions**
   - Analogy: Like choosing what to wear based on the weather
   - Example: "If it's raining, bring an umbrella. Otherwise, don't."
   - Programs check conditions and do different things based on the answer

2. **Why make decisions?**
   - Make programs interactive and smart
   - Respond differently to different situations
   - Create games and quizzes
   - Validate user input

3. **Real-world examples:**
   - "If you're 18 or older, you can vote"
   - "If it's your birthday, you get cake"
   - "If you score 100%, you get an A+"

**Activity:** 
- Ask kids: "What decisions do you make every day?"
- Discuss: "If it's sunny, what do you do? If it's raining, what do you do?"
- Show how programs can make similar decisions

#### Introduction to `if` Statements (10 minutes)
**Teaching Approach:** Hands-on coding

**Code to write together:**
```python
# Simple if statement
age = 10

if age >= 10:
    print("You are 10 or older!")
```

**Teaching Points:**
- `if` checks a condition
- If the condition is True, the code inside runs
- If the condition is False, the code is skipped
- Indentation is VERY important (4 spaces or 1 tab)
- The colon `:` is required after the condition
- In Cursor, you'll see the output in the terminal

**Experiment Together:**
- Change the age value and see what happens
- Try different conditions
- Show them what happens with wrong indentation (error!)

---

### Part 2: If/Else Statements (30 minutes)

#### Activity 1: Basic If/Else (10 minutes)
**Goal:** Understand alternative actions

**Code to write together:**
```python
# If/else statement
age = 8

if age >= 10:
    print("You are 10 or older!")
else:
    print("You are younger than 10!")
```

**Teaching Points:**
- `else` means "otherwise"
- If the condition is True, do the `if` part
- If the condition is False, do the `else` part
- Only one part runs, never both
- Indentation must match!

**Let them customize:**
- Change the age value
- Change the messages
- Try different conditions

#### Activity 2: Comparison Operators (10 minutes)
**Goal:** Learn how to compare values

**Code to write together:**
```python
# Different ways to compare
number = 5

if number == 5:  # equals
    print("The number is 5")

if number != 3:  # not equals
    print("The number is NOT 3")

if number > 3:   # greater than
    print("The number is greater than 3")

if number < 10:  # less than
    print("The number is less than 10")

if number >= 5:  # greater than or equal
    print("The number is 5 or more")

if number <= 5:  # less than or equal
    print("The number is 5 or less")
```

**Teaching Points:**
- `==` means "equals" (two equals signs!)
- `!=` means "not equals"
- `>` means "greater than"
- `<` means "less than"
- `>=` means "greater than or equal"
- `<=` means "less than or equal"
- One `=` is for assigning, two `==` is for comparing

**Important:** Emphasize that `==` (comparison) is different from `=` (assignment)!

#### Activity 3: Interactive If/Else (10 minutes)
**Goal:** Combine with input()

**Code example:**
```python
# Interactive decision
print("Welcome! Let's check your age.")
age = int(input("How old are you? "))

if age >= 13:
    print("You are a teenager!")
else:
    print("You are not a teenager yet!")
```

**Teaching Points:**
- Can use input() with if/else
- Remember to convert to int() for numbers
- Programs can respond differently to different users
- Makes programs interactive and personal

---

### Part 3: Multiple Conditions with Elif (35 minutes)

#### Introduction to `elif` (15 minutes)
**Goal:** Handle multiple conditions

**Code to write together:**
```python
# Multiple conditions with elif
score = 85

if score >= 90:
    print("Grade: A - Excellent!")
elif score >= 80:
    print("Grade: B - Great job!")
elif score >= 70:
    print("Grade: C - Good work!")
elif score >= 60:
    print("Grade: D - Keep practicing!")
else:
    print("Grade: F - Study more!")
```

**Teaching Points:**
- `elif` means "else if"
- Checks conditions in order
- Stops at the first True condition
- Can have many `elif` statements
- `else` comes last (if nothing else matches)

**Experiment Together:**
- Change the score value
- Add more grade levels
- Try different conditions

#### Activity: Weather Decision Maker (10 minutes)
**Goal:** Practice with multiple conditions

**Code example:**
```python
# Weather decision maker
print("What's the weather like?")
weather = input("Enter: sunny, rainy, or snowy: ")

if weather == "sunny":
    print("Great day for the beach! ☀️")
elif weather == "rainy":
    print("Don't forget your umbrella! ☔")
elif weather == "snowy":
    print("Time to build a snowman! ⛄")
else:
    print("That's an interesting weather type!")
```

**Teaching Points:**
- Can check text (strings) with `==`
- Must match exactly (case-sensitive)
- Can have many different options
- `else` catches anything that doesn't match

**Let them customize:**
- Add more weather types
- Change the messages
- Add emojis

#### Activity: Number Guessing Helper (10 minutes)
**Goal:** Practice with number comparisons

**Code example:**
```python
# Number guessing helper
secret_number = 7
guess = int(input("Guess a number between 1 and 10: "))

if guess == secret_number:
    print("🎉 Correct! You guessed it!")
elif guess < secret_number:
    print("Too low! Try a higher number.")
else:
    print("Too high! Try a lower number.")
```

**Teaching Points:**
- Can compare numbers
- Can give hints based on the comparison
- Makes games interactive
- Users can try multiple times

---

### Part 4: Combining Conditions (30 minutes)

#### Activity 1: Using `and` (10 minutes)
**Goal:** Check multiple conditions at once

**Code to write together:**
```python
# Using 'and' - both must be True
age = 12
has_permission = True

if age >= 10 and has_permission:
    print("You can go to the party!")
else:
    print("Sorry, you can't go.")
```

**Teaching Points:**
- `and` means both conditions must be True
- If either is False, the whole thing is False
- Useful for checking multiple things

#### Activity 2: Using `or` (10 minutes)
**Goal:** Check if any condition is True

**Code example:**
```python
# Using 'or' - at least one must be True
day = "Saturday"

if day == "Saturday" or day == "Sunday":
    print("It's the weekend! 🎉")
else:
    print("It's a weekday.")
```

**Teaching Points:**
- `or` means at least one condition must be True
- If either is True, the whole thing is True
- Useful for checking multiple options

#### Activity 3: Complex Conditions (10 minutes)
**Goal:** Combine and/or

**Code example:**
```python
# Complex conditions
age = 15
has_ticket = True
is_weekend = True

if (age >= 13 or has_ticket) and is_weekend:
    print("You can watch the movie!")
else:
    print("Sorry, you can't watch the movie.")
```

**Teaching Points:**
- Can combine `and` and `or`
- Use parentheses to group conditions
- Think carefully about what you want to check
- Test with different values

---

### Part 5: Guided Practice - Interactive Quiz (30 minutes)

#### Step-by-Step Project
**Goal:** Create a simple quiz with feedback

**Together, build:**
```python
print("=" * 40)
print("   FUN QUIZ TIME!")
print("=" * 40)
print()

score = 0

# Question 1
print("Question 1: What is 2 + 2?")
answer1 = int(input("Your answer: "))

if answer1 == 4:
    print("Correct! ✅")
    score = score + 1
else:
    print("Wrong! The answer is 4. ❌")

print()

# Question 2
print("Question 2: What is the capital of France?")
answer2 = input("Your answer: ")

if answer2.lower() == "paris":
    print("Correct! ✅")
    score = score + 1
else:
    print("Wrong! The answer is Paris. ❌")

print()

# Show results
print("=" * 40)
print("   YOUR SCORE")
print("=" * 40)
print("You got", score, "out of 2 correct!")

if score == 2:
    print("Perfect score! 🌟")
elif score == 1:
    print("Good job! Keep practicing!")
else:
    print("Don't worry, try again!")
```

**Teaching Points:**
- Structure: ask question, get answer, check answer
- Use variables to track score
- Give feedback based on answer
- Show final results with if/else
- `.lower()` makes comparison case-insensitive

**Let them customize:**
- Add more questions
- Change the questions
- Add different feedback messages
- Make it more creative

---

### Part 6: Independent Practice (30 minutes)

#### Practice Exercises
1. **Create a "Can I Vote?" checker**
   - Ask for age
   - Check if age >= 18
   - Give appropriate message
   - Save as `vote_checker.py`

2. **Create a password checker**
   - Ask for password
   - Check if it matches a secret password
   - Give success or failure message
   - Save as `password_checker.py`

3. **Create a grade calculator**
   - Ask for a score (0-100)
   - Use if/elif/else to assign grade
   - Display the grade
   - Save as `grade_calculator.py`

**Instructor Role:**
- Circulate and help
- Encourage experimentation
- Help with indentation issues
- Celebrate creativity
- Help debug errors

**Common Errors to Watch For:**
- Using `=` instead of `==` for comparison
- Missing colons `:`
- Wrong indentation (must be consistent!)
- Forgetting to convert input to int() for numbers
- Case sensitivity with strings
- Missing `else` when needed

**Cursor-Specific Help:**
- Show them how indentation works in Cursor
- Show them the error messages for indentation
- Explain that Python is very picky about indentation
- Show them how to use Tab key for indentation

---

### Part 7: Main Project - Adventure Game (40 minutes)

#### Project Introduction
**Goal:** Create an interactive text-based adventure game

**Requirements:**
- Must ask the user to make choices
- Must use if/elif/else to handle different choices
- Must have at least 3 decision points
- Must give different outcomes based on choices
- Must be creative and fun!
- Must be saved as `adventure_game.py`

**Starter Template Provided:**
- Basic structure
- They fill in the choices
- They create the story branches
- They add creativity

**Example Structure:**
```python
print("Welcome to the Adventure Game!")
print("=" * 40)

print("\nYou are walking in a forest...")
print("You come to a fork in the path.")
choice1 = input("Do you go LEFT or RIGHT? ")

if choice1.lower() == "left":
    print("\nYou go left and find a treasure chest!")
    # Continue story...
elif choice1.lower() == "right":
    print("\nYou go right and meet a friendly bear!")
    # Continue story...
else:
    print("\nYou stand there confused and go home.")
```

**Encourage:**
- Creative storylines
- Multiple endings
- Funny outcomes
- Their own style
- Save often!

**Cursor Tips:**
- Use `Ctrl+S` / `Cmd+S` to save quickly
- Run the program frequently to test
- Type answers in the terminal when prompted
- If there's an error, read the red error message
- Check indentation carefully!

---

### Part 8: Show and Tell (15 minutes)

#### Sharing Time
- Each student shares their adventure game
- Show the code in Cursor
- Run the program and play it together
- Ask: "What was the most creative choice you added?"
- Ask: "What was challenging?"
- Celebrate everyone's work!

**Questions to Discuss:**
- "What did you learn about making decisions in code?"
- "What was your favorite part?"
- "What would you like to learn next?"

---

## Key Concepts Summary

### If Statements
- `if` checks a condition
- If True, runs the code inside
- If False, skips the code
- Syntax: `if condition:`
- Must have colon `:` and indentation

### Else Statements
- `else` means "otherwise"
- Runs when the `if` condition is False
- Syntax: `else:`
- Must have colon `:` and indentation

### Elif Statements
- `elif` means "else if"
- Checks another condition if the first is False
- Can have many `elif` statements
- Syntax: `elif condition:`
- Must have colon `:` and indentation

### Comparison Operators
- `==` equals (two equals signs!)
- `!=` not equals
- `>` greater than
- `<` less than
- `>=` greater than or equal
- `<=` less than or equal
- **Important:** `==` is for comparing, `=` is for assigning

### Logical Operators
- `and` - both conditions must be True
- `or` - at least one condition must be True
- Can combine with parentheses

### Indentation
- **CRITICAL** in Python!
- Must be consistent (4 spaces or 1 tab)
- Code inside if/else must be indented
- Cursor helps with automatic indentation

### Using Cursor
- Write code in the editor
- Run program to see output in terminal
- When `input()` runs, type answer in terminal
- Errors appear in red
- Check indentation carefully!

---

## Assessment Checkpoints

### Can they:
- [ ] Explain what an if statement does in their own words?
- [ ] Write a simple if statement correctly?
- [ ] Use else to handle alternative cases?
- [ ] Use elif for multiple conditions?
- [ ] Use comparison operators (==, !=, <, >, etc.)?
- [ ] Understand the difference between `=` and `==`?
- [ ] Use proper indentation in if/else blocks?
- [ ] Create an interactive program with decisions?
- [ ] Debug a simple if/else error?

### Engagement Indicators:
- [ ] Are they excited to test their decision-making programs?
- [ ] Are they experimenting with different conditions?
- [ ] Are they asking "what if" questions?
- [ ] Are they comfortable with indentation?
- [ ] Are they helping each other?

---

## Extension Activities (for fast learners)

1. **Create a calculator with operations** (ask for two numbers and operation, use if/elif to calculate)
2. **Build a "Would You Rather" game** (multiple choices, different outcomes)
3. **Create a password strength checker** (check length, has numbers, etc.)
4. **Build a rock-paper-scissors game** (compare user choice vs computer choice)
5. **Create a temperature converter** (ask for unit, convert accordingly)
6. **Build a simple chatbot** (respond differently based on keywords)
7. **Experiment with nested if statements** (if inside if)

---

## Troubleshooting Guide

### Common Issues:

**Issue:** "SyntaxError: invalid syntax" with if statement
- **Cause:** Missing colon `:` after condition
- **Solution:** Always add `:` after `if`, `elif`, and `else`
- **In Cursor:** The error will be highlighted in red

**Issue:** "IndentationError: expected an indented block"
- **Cause:** Code inside if/else is not indented
- **Solution:** Indent code inside if/else blocks (4 spaces or 1 tab)
- **In Cursor:** Use Tab key or 4 spaces, be consistent

**Issue:** Code doesn't run as expected
- **Cause:** Using `=` instead of `==` for comparison
- **Solution:** Use `==` (two equals) to compare, `=` (one equals) to assign
- **Example:** `if age == 10:` not `if age = 10:`

**Issue:** String comparison not working
- **Cause:** Case sensitivity or extra spaces
- **Solution:** Use `.lower()` to ignore case: `if answer.lower() == "yes":`
- **Or:** Make sure strings match exactly

**Issue:** Multiple conditions not working
- **Cause:** Wrong use of `and`/`or` or missing parentheses
- **Solution:** Think about what you want to check, use parentheses to group
- **Example:** `if (age >= 13 or has_ticket) and is_weekend:`

**Issue:** Else block always runs
- **Cause:** Condition is always False, or logic error
- **Solution:** Check your condition, test with different values
- **Debug:** Add print statements to see what values you're checking

**Issue:** Indentation looks wrong in Cursor
- **Solution:** 
  - Make sure you're using consistent indentation (all spaces or all tabs)
  - Cursor shows indentation guides (vertical lines)
  - Use Tab key for indentation, Shift+Tab to unindent
  - Check that all code in the same block has the same indentation

---

## Homework/Preview (Optional)

**For next time:**
- Think about things you do over and over (like counting to 10)
- What would you like your program to repeat?
- Preview: Tomorrow we'll learn about "loops" - doing things over and over in code!

---

## Notes for Instructor

- **Pace:** If/else can be tricky - take time to ensure understanding
- **Energy:** Keep it fun and interactive - kids love decision-making programs!
- **Mistakes:** Celebrate them as learning opportunities
- **Individual Help:** Some kids may need extra support with:
  - Understanding indentation
  - Difference between `=` and `==`
  - String comparison (case sensitivity)
  - Logical operators (and/or)
- **Fast Learners:** Have extension activities ready
- **Cursor Navigation:** Make sure kids know how to:
  - See indentation in the editor
  - Use Tab for indentation
  - Read error messages
  - Run Python files
- **Indentation:** Emphasize that:
  - Python is VERY picky about indentation
  - Must be consistent (all spaces or all tabs)
  - Code inside if/else must be indented
  - Cursor helps with automatic indentation
- **End Goal:** Kids should understand how to make programs that make decisions and respond to different situations!





