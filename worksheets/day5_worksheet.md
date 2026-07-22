# Day 5 Worksheet: Functions - Your Own Commands

## Name: _________________  Date: _________________

---

## Part 1: Understanding Functions

### Question 1
What is a function?
- [ ] A variable that stores a number
- [ ] A named block of code you can run whenever you call it
- [ ] A type of loop
- [ ] A comparison operator

### Question 2
What keyword do you use to define a function?
- [ ] `func`
- [ ] `function`
- [ ] `def`
- [ ] `run`

### Question 3
What will this code print?
```python
def greet(name):
    print("Hello,", name)

greet("Sam")
```
**Answer:** _________________________________

### Question 4
What does `return` do inside a function?
**Answer:** _________________________________

---

## Part 2: Functions Without Parameters

### Exercise 1: Say Hello
Write a function called `say_hello()` that prints two lines welcoming someone to Day 5.

**Your code:**
```python
# Write your code here
```

---

### Exercise 2: Print Border
Write a function called `print_border()` that prints a line of 30 `=` characters, then call it 3 times with different messages in between.

**Your code:**
```python
# Write your code here
```

---

## Part 3: Functions With Parameters

### Exercise 1: Greet a Friend
Write a function `greet_person(name)` that prints a personalized greeting, then call it with 3 different names.

**Your code:**
```python
# Write your code here
```

---

### Exercise 2: Describe a Pet
Write a function `describe_pet(pet_name, animal_type)` that prints a sentence describing the pet, then call it with two different pets.

**Your code:**
```python
# Write your code here
```

---

## Part 4: Return Values

### Exercise 1: Add Two Numbers
Write a function `add_two_numbers(a, b)` that returns the sum, then print the result.

**Your code:**
```python
# Write your code here
```

---

### Exercise 2: Square a Number
Write a function `square_number(n)` that returns `n * n`. Ask the user for a number with `input()`, then print its square.

**Your code:**
```python
# Write your code here
```

---

## Part 5: Libraries - Functions Other People Wrote! 📦

You've been WRITING functions all day. A **library** is a box of functions
other people already wrote for you - `import` opens the box!

### Question 1
What does `import random` do?
- [ ] It creates a random number right away
- [ ] It opens the `random` library so we can use the functions inside it
- [ ] It makes our own functions random
- [ ] It deletes the random library

### Question 2
Which of these could `random.randint(1, 6)` give you?
- [ ] Only 2, 3, 4, or 5
- [ ] Any whole number from 1 to 6, including 1 and 6
- [ ] Any number from 0 to 6
- [ ] Always 6

### Question 3
What could this code print?
```python
import random
pet = random.choice(["cat", "dog", "hamster"])
print(pet)
```
**Answer:** _________________________________

### Question 4
After `from time import sleep`, what does `sleep(2)` do?
**Answer:** _________________________________

---

### Exercise 1: Dice Roller 🎲
Write a program that uses `import random` and `random.randint(1, 6)` to roll
a dice 3 times (use a `for` loop!) and print each roll with an f-string.

**Your code:**
```python
# Write your code here
```

---

### Exercise 2: Magic 8-Ball 🎱
Write a program that asks the user a yes/no question with `input()`, waits 1
second using `from time import sleep`, then prints a random answer using
`random.choice([...])` with at least 4 possible answers.

**Your code:**
```python
# Write your code here
```

---

## Part 6: Challenge Problems

### Challenge 1: Function Toolbox
Build a small `function_toolbox.py` with at least 3 functions (for example `print_border()`, `greet_user(name)`, `cheer(times)`) and a main program that uses all of them together.

**Your code:**
```python
# Write your code here
```

---

### Challenge 2: Temperature Converter
Write a function `celsius_to_fahrenheit(celsius)` that returns the Fahrenheit temperature, then use it to convert a temperature the user types in.

**Your code:**
```python
# Write your code here
```

---

## Part 7: Reflection

### What I Learned Today:
1. A function is used when: _________________________________
2. A parameter is: _________________________________
3. `return` is different from `print` because: _________________________________
4. A library is: _________________________________
5. One thing I found easy: _________________________________
6. One thing I found challenging: _________________________________

### What I Want to Learn Next:
_________________________________
_________________________________

---

## Bonus Challenge!

Build your own game (Rock-Paper-Scissors or Number Guessing) where every major step is its own function. Make the computer unpredictable with `random.choice([...])` or `random.randint(...)` - there's a starter file in `projects/templates/day5_rock_paper_scissors_template.py`! Be creative! 🎮

**Your code:**
```python
# Write your bonus game here
```

---

## Notes Section
Use this space to write down any questions or ideas:

_________________________________
_________________________________
_________________________________
