# Day 6 Worksheet: Collections - Lists & Dictionaries

## Name: _________________  Date: _________________

---

## Part 1: Understanding Lists

### Question 1
What is a list?
- [ ] A single number stored in a variable
- [ ] A way to store many values together in one variable
- [ ] A type of if/else statement
- [ ] A loop that never ends

### Question 2
What symbol do we use to create a list?
- [ ] `( )` parentheses
- [ ] `{ }` curly braces
- [ ] `[ ]` square brackets
- [ ] `< >` angle brackets

### Question 3
What will this code print?
```python
pets = ["dog", "cat", "fish"]
print(pets[1])
```
**Answer:** _________________________________

### Question 4
What does `len(my_list)` do?
**Answer:** _________________________________

### Question 5
What does `pets[-1]` give you if `pets = ["dog", "cat", "fish"]`?
**Answer:** _________________________________

---

## Part 2: List Practice

### Exercise 1: Make a List
Create a list called `favorites` with 4 of your favorite things (games, animals, foods - your choice!). Print the whole list, then print how many items it has using `len()`.

**Your code:**
```python
# Write your code here
```

---

### Exercise 2: Indexing Practice
Using your `favorites` list from Exercise 1, print the FIRST item using positive indexing and the LAST item using negative indexing.

**Your code:**
```python
# Write your code here
```

---

### Exercise 3: Loop Over a List
Write a `for` loop that goes through your `favorites` list and prints each item with the message "I really like " in front of it.

**Your code:**
```python
# Write your code here
```

---

### Exercise 4: Append and Remove
Start with a list called `chores = ["dishes", "laundry"]`. Use `.append()` to add `"vacuuming"` to the list, then use `.remove()` to take `"laundry"` off the list. Print the list after each change.

**Your code:**
```python
# Write your code here
```

---

## Part 3: Dictionaries, enumerate() & the Safety Net

### Question 6
Which one of these creates a DICTIONARY (labeled cubbies)?
- [ ] `["Isabella", 12]`
- [ ] `("Isabella", 12)`
- [ ] `{"name": "Isabella", "age": 12}`
- [ ] `"Isabella: 12"`

### Question 7
What will this code print?
```python
player = {"name": "Michael", "age": 14}
print(player["name"])
```
**Answer:** _________________________________

### Question 8
How do you add a brand-new key `"hobby"` with the value `"coding"` to the `player` dictionary?
- [ ] `player.append("coding")`
- [ ] `player["hobby"] = "coding"`
- [ ] `player.add("hobby", "coding")`
- [ ] `hobby in player`

### Question 9
What number gets printed next to `apple`?
```python
fruits = ["apple", "banana"]
for number, fruit in enumerate(fruits, 1):
    print(f"{number}. {fruit}")
```
**Answer:** _________________________________

### Question 10
Our program uses `int(input("Score: "))`. What does `try:` / `except ValueError:` do for us when the player types `banana` instead of a number?
**Answer:** _________________________________

---

### Exercise 5: The "Me Dictionary"
Create a dictionary called `me` with at least 4 pairs about yourself (like `"name"`, `"age"`, `"favorite_food"`, `"hobby"`). Print one value using its key, change one value, add one NEW pair, then print the whole thing as a profile card using `for key, value in me.items():` and an f-string.

**Your code:**
```python
# Write your code here
```

---

### Exercise 6: Numbered Top 4
Take your `favorites` list from Exercise 1 and print it as a numbered "Top 4" countdown using `enumerate(favorites, 1)` - no `range(len(...))` allowed!

**Your code:**
```python
# Write your code here
```

---

### Exercise 7: The Safety Net
Ask the user how old they are with `int(input(...))`. Wrap the conversion in `try:` / `except ValueError:` so typing "banana" prints a friendly message instead of crashing. Bonus: put it in a `while True:` loop that keeps asking until it gets a real number!

**Your code:**
```python
# Write your code here
```

---

## Part 4: Challenge Problems

### Challenge 1: Class Roster
Build a program that starts with an empty list, uses a loop with `input()` to collect student names until the user types `"done"`, then prints the whole roster numbered 1, 2, 3, and so on.

**Your code:**
```python
# Write your code here
```

---

### Challenge 2: Membership Checker
Write a program with a list of at least 5 items. Ask the user to type something with `input()`, then use `in` to tell them whether that item is in the list or not.

**Your code:**
```python
# Write your code here
```

---

### Challenge 3: Name → Score Dictionary
Build a mini scoreboard! Ask the user for player names and scores until they type `"done"`, storing them in a dictionary as `scoreboard[name] = score`. Use `try`/`except ValueError` so a bad score doesn't crash the program. At the end, print every player and their score using `.items()`.

**Your code:**
```python
# Write your code here
```

---

## Part 5: Reflection

### What I Learned Today:
1. A list is used when: _________________________________
2. The first item in a list has index number: _________________________________
3. `.append()` is different from `.remove()` because: _________________________________
4. A dictionary is better than a list when: _________________________________
5. `try` / `except ValueError` saves my program from: _________________________________
6. One thing I found easy: _________________________________
7. One thing I found challenging: _________________________________

### What I Want to Learn Next:
_________________________________
_________________________________

---

## Bonus Challenge!

Build a "High Score Tracker" that collects a list of scores from the player, then reports the highest score, the lowest score, and how many scores were entered. Be creative with emojis and messages! 🏆

**Your code:**
```python
# Write your bonus program here
```

---

## Notes Section
Use this space to write down any questions or ideas:

_________________________________
_________________________________
_________________________________
