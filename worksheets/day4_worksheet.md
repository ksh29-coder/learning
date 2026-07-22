# Day 4 Worksheet: Loops - Doing Things Over and Over

## Name: _________________  Date: _________________

---

## Part 1: Understanding Loops

### Question 1
What is a loop used for?
- [ ] Storing a single value
- [ ] Repeating an action multiple times
- [ ] Checking if something is True or False
- [ ] Printing text only once

### Question 2
How many times does `range(5)` loop?
- [ ] 4 times
- [ ] 5 times
- [ ] 6 times
- [ ] It depends

### Question 3
What will this code print?
```python
for i in range(1, 4):
    print(i)
```
**Answer:** _________________________________

### Question 4
What's the difference between a `for` loop and a `while` loop?
**Answer:** _________________________________

### Question 5
What does `break` do inside a loop?
- [ ] It pauses the loop for one second
- [ ] It stops the loop immediately and jumps past it
- [ ] It skips one turn and keeps looping
- [ ] It restarts the loop from the beginning

### Question 6
What does `10 % 3` give you? (Hint: `%` is the remainder!)
- [ ] 3
- [ ] 3.33
- [ ] 1
- [ ] 0

---

## Part 2: For Loop Practice

### Exercise 1: Count to Ten
Write a `for` loop that prints the numbers 1 through 10.

**Your code:**
```python
# Write your code here
```

---

### Exercise 2: Print Your Name 5 Times
Write a `for` loop that prints your name 5 times.

**Your code:**
```python
# Write your code here
```

---

### Exercise 3: Even Numbers
Write a `for` loop that prints only the even numbers from 2 to 20.

**Your code:**
```python
# Write your code here
```

---

## Part 3: While Loop Practice

### Exercise 1: Countdown
Write a `while` loop that counts down from 10 to 1, then prints "Blast off!".

**Your code:**
```python
# Write your code here
```

---

### Exercise 2: Guess Until Right
Write a `while` loop that keeps asking the user to type "stop" until they actually type it.

**Your code:**
```python
# Write your code here
```

---

### Exercise 3: Break and Continue 🚪⏭️
Write a program that:
1. Uses `while True:` and `break` — keep asking for a word, and break out when the user types "quit"
2. Then uses a `for` loop with `continue` to print the numbers 1 to 10 but SKIP the number 5

**Your code:**
```python
# Write your code here
```

---

## Part 4: Challenge Problems

### Challenge 1: Multiplication Table
Ask the user for a number, then use a loop to print its multiplication table from 1x to 12x.

**Your code:**
```python
# Write your code here
```

---

### Challenge 2: Sum of Numbers
Use a loop to add up all the numbers from 1 to 100 and print the total.

**Your code:**
```python
# Write your code here
```

---

### Challenge 3: Infinite Loop Detective
Explain in your own words why this loop never stops, and rewrite it so it does:
```python
count = 5
while count > 0:
    print(count)
```

**Your explanation:**
_________________________________

**Fixed code:**
```python
# Write your fixed code here
```

---

### Challenge 4: FizzBuzz! 🎉
The world's most famous coding challenge — grown-up programmers get asked this in job interviews! Write a program that counts from 1 to 30, and for each number:
1. If it divides evenly by 3 AND 5 → print "FizzBuzz!"
2. If it divides evenly by 3 only → print "Fizz"
3. If it divides evenly by 5 only → print "Buzz"
4. Otherwise → just print the number

💡 Remember: `number % 3 == 0` means "divides evenly by 3". And think carefully about which check goes FIRST!

💡 Starter code: `projects/templates/day4_fizzbuzz_template.py`

**Your code:**
```python
# Write your FizzBuzz here
```

---

## Part 5: Reflection

### What I Learned Today:
1. A `for` loop is used when: _________________________________
2. A `while` loop is used when: _________________________________
3. One thing I found easy: _________________________________
4. One thing I found challenging: _________________________________

### What I Want to Learn Next:
_________________________________
_________________________________

---

## Bonus Challenge!

Build your own "Loop Art" program (see `projects/templates/day4_loop_art_template.py`) that draws at least two different shapes using loops. Be creative! 🎨

**Your code:**
```python
# Write your loop art here
```

---

## Notes Section
Use this space to write down any questions or ideas:

_________________________________
_________________________________
_________________________________
