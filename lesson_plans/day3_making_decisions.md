# Day 3: Making Decisions - If/Else Statements

## Overview
**Duration:** 2-3 hours  
**Goal:** Teach students how to make programs that can make decisions and respond differently based on conditions

---

## Learning Objectives
By the end of this lesson, students will be able to:
- Understand what conditional statements are and why we use them
- Write `if` statements to check conditions
- Use `else` statements for alternative actions
- Use comparison operators (`==`, `!=`, `<`, `>`, `<=`, `>=`)
- Combine conditions with `and` and `or`
- Create interactive programs that respond to user input
- Build simple decision-making games

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
**Teaching Approach:** Use real-life analogies and examples

**Key Points:**
1. **Programs can make decisions**
   - Analogy: Like choosing what to wear based on the weather
   - Example: "If it's raining, bring an umbrella. Otherwise, don't."
   - Programs can check conditions and do different things

2. **Why make decisions?**
   - Make programs interactive and smart
   - Respond differently to different situations
   - Create games and quizzes
   - Make programs more useful

3. **Real-life examples:**
   - "If I'm hungry, I'll eat. Otherwise, I'll play."
   - "If it's my birthday, I get cake. Otherwise, I don't."
   - "If my score is 100, I win! Otherwise, I try again."

**Activity:** 
- Ask kids: "What decisions do you make every day?"
- Discuss: "If you could program a robot to make one decision, what would it be?"
- Show examples: weather decisions, game decisions, quiz decisions

#### Your First If Statement (10 minutes)
**Teaching Approach:** Hands-on coding

**Code to write together:**
```python
# Check if a number is positive
number = 5

if number > 0:
    print("The number is positive!")
```

**Teaching Points:**
- `if` means "check if this is true"
- The condition goes after `if`
- Use `:` (colon) after the condition
- Indent the code that runs if the condition is true
- In Cursor, you'll see the output in the terminal

**Experiment Together:**
- Change the number and run again
- Try different conditions
- Show them how indentation matters
- Show them how to save and run in Cursor

---

### Part 2: If/Else Statements (30 minutes)

#### Activity 1: Simple If/Else (10 minutes)
**Goal:** Understand if/else structure

**Code to write together:**
```python
# Check if someone can vote
age = 10

if age >= 18:
    print("You can vote!")
else:
    print("You're too young to vote.")
```

**Teaching Points:**
- `if` checks a condition
- `else` means "otherwise" or "if the condition is false"
- Only one path runs (either if or else, never both)
- Both use colons and indentation

**Let them customize:**
- Change the age value
- Try different conditions
- Add more print statements

#### Activity 2: Multiple Conditions (10 minutes)
**Goal:** Use elif for multiple choices

**Code to write together:**
```python
# Grade checker
score = 85

if score >= 90:
    print("Grade: A - Excellent!")
elif score >= 80:
    print("Grade: B - Great job!")
elif score >= 70:
    print("Grade: C - Good work!")
else:
    print("Grade: F - Keep practicing!")
```

**Teaching Points:**
- `elif` means "else if" - check another condition
- Can have multiple `elif` statements
- Checks conditions in order (top to bottom)
- Only the first true condition runs

**Experiment Together:**
- Change the score value
- Add more grade levels
- Try different ranges

#### Activity 3: Interactive Decision (10 minutes)
**Goal:** Combine input with if/else

**Code example:**
```python
# Weather decision maker
weather = input("What's the weather like? (sunny/rainy): ")

if weather == "sunny":
    print("Great! Let's go to the park!")
else:
    print("Let's stay inside and read a book.")
```

**Teaching Points:**
- Can use `input()` with `if/else`
- Use `==` to check if two things are equal
- The program responds differently based on user input
- Makes programs interactive and smart

**Let them customize:**
- Add more weather options
- Add more activities
- Use `elif` for multiple options

---

### Part 3: Comparison Operators (35 minutes)

#### Introduction to Comparison Operators (15 minutes)
**Goal:** Learn how to compare values

**Code to write together:**
```python
# Different ways to compare
age = 12

# Equal to
if age == 12:
    print("You are 12 years old")

# Not equal to
if age != 10:
    print("You are not 10 years old")

# Greater than
if age > 10:
    print("You are older than 10")

# Less than
if age < 18:
    print("You are younger than 18")

# Greater than or equal to
if age >= 12:
    print("You are at least 12 years old")

# Less than or equal to
if age <= 15:
    print("You are 15 or younger")
```

**Teaching Points:**
- `==` means "is equal to" (two equals signs!)
- `!=` means "is not equal to"
- `>` means "greater than"
- `<` means "less than"
- `>=` means "greater than or equal to"
- `<=` means "less than or equal to"
- **Important:** `=` assigns a value, `==` compares values!

**Common Mistake:**
- Using `=` instead of `==` in conditions
- Show them the error message
- Explain the difference clearly

#### Activity: Number Guessing Game (10 minutes)
**Goal:** Practice with comparisons

**Code example:**
```python
# Simple number checker
number = int(input("Enter a number: "))

if number > 100:
    print("That's a big number!")
elif number > 50:
    print("That's a medium number!")
elif number > 0:
    print("That's a small number!")
else:
    print("That's zero or negative!")
```

**Teaching Points:**
- Combine input with comparisons
- Use `int()` to convert input to number
- Multiple conditions with `elif`
- Logical flow from big to small

**Let them customize:**
- Change the number ranges
- Add more categories
- Make it more fun with emojis

#### Activity: Password Checker (10 minutes)
**Goal:** Practice string comparisons

**Code example:**
```python
# Simple password checker
password = input("Enter the password: ")

if password == "python123":
    print("Access granted! Welcome!")
else:
    print("Access denied. Wrong password!")
```

**Teaching Points:**
- Can compare strings (text) too
- Must match exactly (case-sensitive)
- Useful for games and quizzes
- Can check multiple passwords with `elif`

**Let them customize:**
- Change the password
- Add multiple passwords
- Make it more creative

---

### Part 4: Combining Conditions (30 minutes)

#### Introduction to `and` and `or` (15 minutes)
**Goal:** Learn to combine conditions

**Code to write together:**
```python
# Using 'and' - both must be true
age = 15
has_permission = True

if age >= 13 and has_permission:
    print("You can watch the movie!")
else:
    print("Sorry, you can't watch the movie.")

# Using 'or' - at least one must be true
weather = "sunny"
is_weekend = True

if weather == "sunny" or is_weekend:
    print("Let's go outside!")
else:
    print("Let's stay inside.")
```

**Teaching Points:**
- `and` means both conditions must be true
- `or` means at least one condition must be true
- Can combine multiple conditions
- Use parentheses for clarity if needed

**Real-life Analogy:**
- `and`: "If I'm hungry AND I have food, I'll eat"
- `or`: "If it's sunny OR it's the weekend, I'll play outside"

#### Activity: Smart Decision Maker (15 minutes)
**Goal:** Create a program with combined conditions

**Code example:**
```python
# Activity decision maker
weather = input("What's the weather? (sunny/rainy): ")
time = input("What time is it? (morning/afternoon/evening): ")
energy = input("Do you have energy? (yes/no): ")

if weather == "sunny" and time == "afternoon" and energy == "yes":
    print("Perfect! Let's go play soccer!")
elif weather == "sunny" or energy == "yes":
    print("Let's do something fun!")
else:
    print("Let's relax and read a book.")
```

**Teaching Points:**
- Can combine multiple conditions
- Makes programs smarter
- More realistic decision-making
- Practice with `and` and `or`

**Let them customize:**
- Add more conditions
- Change the activities
- Make it more creative

---

### Part 5: Guided Practice - Interactive Quiz (30 minutes)

#### Step-by-Step Project
**Goal:** Create a simple quiz with if/else

**Together, build:**
```python
print("=" * 40)
print("   FUN QUIZ GAME")
print("=" * 40)
print()

score = 0

# Question 1
print("Question 1: What is 2 + 2?")
answer1 = input("Your answer: ")

if answer1 == "4":
    print("Correct! 🎉")
    score = score + 1
else:
    print("Wrong! The answer is 4.")

print()

# Question 2
print("Question 2: What is the capital of France?")
answer2 = input("Your answer: ")

if answer2.lower() == "paris":
    print("Correct! 🎉")
    score = score + 1
else:
    print("Wrong! The answer is Paris.")

print()
print("=" * 40)
print("Your score:", score, "out of 2")
print("=" * 40)
```

**Teaching Points:**
- Structure: ask question, get answer, check answer
- Use a score variable to track points
- Can use `.lower()` to ignore case
- Display final score at the end

**Let them customize:**
- Add more questions
- Change the questions
- Add different scoring
- Make it more fun

---

### Part 6: Independent Practice (30 minutes)

#### Practice Exercises
1. **Create a "Can I?" program**
   - Ask for age and permission
   - Check if they can do various activities
   - Use if/else to give answers
   - Save as `can_i.py`

2. **Create a simple calculator with operations**
   - Ask for two numbers and an operation (+, -, *, /)
   - Use if/elif/else to perform the right operation
   - Display the result
   - Save as `calculator.py`

3. **Create a "What should I do?" program**
   - Ask multiple questions (weather, mood, time, etc.)
   - Use `and`/`or` to make decisions
   - Suggest activities based on answers
   - Save as `what_should_i_do.py`

**Instructor Role:**
- Circulate and help
- Encourage experimentation
- Help with condition logic
- Celebrate creativity
- Help debug errors

**Common Errors to Watch For:**
- Using `=` instead of `==` in conditions
- Forgetting colons after `if`, `else`, `elif`
- Forgetting indentation
- Not converting input to numbers when needed
- Case sensitivity in string comparisons

**Cursor-Specific Help:**
- Show them how indentation works in Cursor
- Show them how to see errors
- Explain that `=` and `==` are different
- Show them how to test different conditions

---

### Part 7: Main Project - Adventure Game (40 minutes)

#### Project Introduction
**Goal:** Create an interactive text adventure game

**Requirements:**
- Must have at least 3 decision points
- Must use if/elif/else statements
- Must respond to user choices
- Must be creative and fun!
- Must be saved as `adventure_game.py`

**Starter Template Provided:**
- Basic structure
- They fill in the story
- They add decision points
- They add creativity

**Example Structure:**
```python
print("Welcome to the Adventure Game!")
print("=" * 40)

print("\nYou're walking in a forest and come to a fork in the path.")
choice1 = input("Do you go LEFT or RIGHT? ")

if choice1.lower() == "left":
    print("\nYou go left and find a treasure chest!")
    choice2 = input("Do you OPEN it or LEAVE it? ")
    
    if choice2.lower() == "open":
        print("You found gold! You win! 🏆")
    else:
        print("You leave the chest and continue walking.")
        
elif choice1.lower() == "right":
    print("\nYou go right and meet a friendly dragon!")
    # Continue the story...
else:
    print("Invalid choice! Please try again.")
```

**Steps:**
1. Open template file in Cursor (10 min)
2. Plan the story and decision points (10 min)
3. Write the code with if/else statements (15 min)
4. Test and customize (5 min)

**Encourage:**
- Creative stories
- Multiple paths
- Fun endings
- Their own style
- Save often!

**Cursor Tips:**
- Use `Ctrl+S` / `Cmd+S` to save quickly
- Run the program frequently to test
- Type choices in the terminal when prompted
- If there's an error, read the red error message

---

### Part 8: Show and Tell (15 minutes)

#### Sharing Time
- Each student shares their adventure game
- Show the code in Cursor
- Play the game together
- Ask: "What was the coolest decision point you created?"
- Ask: "What was challenging?"
- Celebrate everyone's work!

**Questions to Discuss:**
- "What did you learn about making decisions in code?"
- "What was your favorite part?"
- "What would you like to learn next?"

---

## Key Concepts Summary

### If Statements
- `if` checks if a condition is true
- Syntax: `if condition:`
- Must use colon `:` after condition
- Code inside must be indented
- Only runs if condition is true

### Else Statements
- `else` runs when the `if` condition is false
- Syntax: `else:`
- Must use colon `:`
- Code inside must be indented
- Alternative path

### Elif Statements
- `elif` means "else if" - check another condition
- Syntax: `elif condition:`
- Used for multiple choices
- Checks in order (top to bottom)
- Only first true condition runs

### Comparison Operators
- `==` means "is equal to" (two equals!)
- `!=` means "is not equal to"
- `>` means "greater than"
- `<` means "less than"
- `>=` means "greater than or equal to"
- `<=` means "less than or equal to"
- **Important:** `=` assigns, `==` compares!

### Combining Conditions
- `and` - both conditions must be true
- `or` - at least one condition must be true
- Can combine multiple conditions
- Use parentheses for clarity

### Using Cursor
- Write code in the editor
- Indentation matters! (Cursor helps with this)
- Run program to see output in terminal
- Type answers in terminal when prompted
- Errors appear in red

---

## Assessment Checkpoints

### Can they:
- [ ] Explain what an if statement does in their own words?
- [ ] Write a simple if/else statement?
- [ ] Use comparison operators correctly?
- [ ] Understand the difference between `=` and `==`?
- [ ] Use `elif` for multiple conditions?
- [ ] Combine conditions with `and` and `or`?
- [ ] Create an interactive program with decisions?
- [ ] Debug a simple conditional error?

### Engagement Indicators:
- [ ] Are they excited to test different conditions?
- [ ] Are they experimenting with different scenarios?
- [ ] Are they asking "what if" questions?
- [ ] Are they creating their own decision-making programs?
- [ ] Are they helping each other?

---

## Extension Activities (for fast learners)

1. **Create a multi-level quiz** (track score, give feedback based on score)
2. **Build a "Choose Your Own Adventure" book** (multiple pages, many decision points)
3. **Create a rock-paper-scissors game** (use if/elif/else to determine winner)
4. **Build a simple chatbot** (responds differently based on user input)
5. **Create a grade calculator** (input multiple scores, calculate average, assign grade)
6. **Build a weather-based activity planner** (multiple conditions, multiple suggestions)
7. **Experiment with nested if statements** (if inside if)

---

## Troubleshooting Guide

### Common Issues:

**Issue:** "SyntaxError: invalid syntax" with if statements
- **Cause:** Missing colon `:` after condition
- **Solution:** Always use colon after `if`, `else`, `elif`
- **In Cursor:** The error will be highlighted in red

**Issue:** "IndentationError: expected an indented block"
- **Cause:** Forgot to indent code inside if/else
- **Solution:** Code inside if/else must be indented (usually 4 spaces)
- **In Cursor:** Cursor usually auto-indents, but check if it's correct

**Issue:** Code doesn't run as expected
- **Cause:** Using `=` instead of `==` in condition
- **Solution:** Use `==` to compare, `=` to assign
- **Example:** `if age == 10:` not `if age = 10:`

**Issue:** String comparison not working
- **Cause:** Case sensitivity or extra spaces
- **Solution:** Use `.lower()` to ignore case: `if answer.lower() == "yes":`
- **Or:** Make sure strings match exactly

**Issue:** Multiple conditions not working
- **Cause:** Wrong use of `and`/`or` or missing parentheses
- **Solution:** 
  - `and` means both must be true
  - `or` means at least one must be true
  - Use parentheses for clarity: `if (age > 10) and (age < 20):`

**Issue:** All elif conditions run
- **Cause:** Not understanding that only first true condition runs
- **Solution:** Explain that Python checks top to bottom and stops at first true condition
- **Example:** If first `elif` is true, later ones won't check

**Issue:** Program seems to skip if/else
- **Cause:** Condition is never true, or wrong comparison operator
- **Solution:** 
  - Check the condition value
  - Print the value to debug: `print("Value is:", value)`
  - Check you're using the right operator

---

## Homework/Preview (Optional)

**For next time:**
- Think about things you do repeatedly (counting, repeating actions)
- What would you like your program to do over and over?
- Preview: Tomorrow we'll learn about "loops" - doing things over and over again!

---

## Notes for Instructor

- **Pace:** Conditionals can be abstract - use lots of real-life examples
- **Energy:** Keep it fun with games and interactive examples
- **Mistakes:** Celebrate them as learning opportunities
- **Individual Help:** Some kids may need extra support with:
  - Understanding the difference between `=` and `==`
  - Understanding indentation
  - Logic of conditions
  - Combining conditions with `and`/`or`
- **Fast Learners:** Have extension activities ready
- **Cursor Navigation:** Make sure kids know how to:
  - See indentation in Cursor
  - Understand that indentation matters
  - Run Python files
  - Type answers in terminal
- **Common Confusions:**
  - `=` vs `==` - emphasize this repeatedly!
  - Indentation - show them how it works visually
  - String vs number comparisons
  - Case sensitivity in strings
- **End Goal:** Kids should understand how to make programs that make decisions and respond to different situations!

