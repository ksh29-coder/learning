# Day 6: Collections - Lists & Dictionaries

## Overview
**Duration:** 2.5–3.5 hours  
**Goal:** Teach students how to create, access, and change lists AND dictionaries so they can store and work with collections of information instead of just one value at a time. Along the way, learn the `enumerate()` numbered-list trick and the `try`/`except` safety net for user input.

---

## Learning Objectives
By the end of this lesson, students will be able to:
- Explain what a list is in simple, kid-friendly language
- Create a list using square brackets `[ ]`
- Access items in a list using indexing (including negative indexing)
- Use slicing to grab part of a list
- Find how many items are in a list with `len()`
- Loop over every item in a list with `for item in my_list:`
- Add items to a list with `.append()`
- Remove items from a list with `.remove()`
- Check whether something is inside a list using `in`
- Number the items while looping using `enumerate()` (the "numbered-list trick")
- Catch bad input with `try:` / `except ValueError:` (the "safety net")
- Create a dictionary using curly braces `{key: value}`
- Read a value with `d["name"]`, and add or change one with `d["age"] = 12`
- Check whether a key is in a dictionary using `in`
- Loop over a dictionary with `for key in d:` and `for key, value in d.items():`

---

## Materials Needed
- Cursor IDE (already set up)
- Python installed on the computer
- Code examples (Day 6 folder)
- Worksheet (Day 6)
- Project template (Day 6)

---

## Lesson Structure

### Part 1: Introduction to Lists (25 minutes)

#### What Is a List? (15 minutes)
**Teaching Approach:** Analogies + whiteboard

**Key Points:**
1. **A list is like a row of labeled cubbies or a backpack that can hold many things at once**
   - Analogy: A backpack – you can put many items inside it, take items out, and check what's in there
   - Analogy: A row of mailboxes/cubbies – each spot holds one item, and each spot has a number so we can find it again
   - In code: We use square brackets `[ ]` to hold a group of values together in one variable

2. **Why use lists?**
   - So far, we've stored one piece of information per variable (`name = "Sam"`)
   - What if we want to remember 5 friends, or 10 favorite games? One variable for each would be a LOT of typing!
   - A list lets us store many related values in a single variable

3. **Real-world examples:**
   - A grocery list (many items, one list)
   - A class roster (many student names, one list)
   - A high score board (many scores, one list)

**Quick no-code activity:**
- Ask the class to name 5 favorite animals out loud.
- Write them on the whiteboard inside square brackets, separated by commas, like a list: `["dog", "cat", "elephant", "owl", "fox"]`
- Say: "This whole row is ONE list. It has one name, but it holds 5 things!"

#### First List in Python (10 minutes)
**Teaching Approach:** Simple example in Cursor

**Code to write together:**
```python
fruits = ["apple", "banana", "cherry"]
print(fruits)
print("I have", len(fruits), "fruits!")
```

**Teaching Points:**
- Square brackets `[ ]` start and end a list
- Items inside the list are separated by commas
- A list can hold text (strings), numbers, or even a mix of both
- `len(fruits)` tells us how many items are in the list
- The whole list can be printed at once, just like any variable

**Experiment Together:**
- Add a 4th fruit to the list and run again
- Make a list of numbers instead: `scores = [10, 25, 8, 40]`
- Try `print(len(scores))`

---

### Part 2: Indexing, Negative Indexing & Slicing (35 minutes)

#### Activity 1: Getting One Item With Indexing (15 minutes)
**Goal:** Understand that each item in a list has a position number (an "index"), and that Python starts counting at 0.

**Analogy:**
- Think of the cubbies again, but this time each cubby has a number taped on it starting at **0**, not 1.
- The FIRST cubby is cubby number 0, the second is cubby number 1, and so on.

**Code to write together:**
```python
fruits = ["apple", "banana", "cherry"]

print(fruits[0])   # apple - the FIRST item
print(fruits[1])   # banana - the SECOND item
print(fruits[2])   # cherry - the THIRD item
```

**Teaching Points:**
- `fruits[0]` means "give me the item at position 0" (the first one!)
- Counting starts at 0, not 1 - this trips everyone up at first, and that's okay!
- If you ask for a position that doesn't exist (like `fruits[5]` on a 3-item list), Python gives an error

**Experiment Together:**
- Try printing `fruits[1]`, then `fruits[2]`
- Try `fruits[3]` on purpose and read the error message together - what does "index out of range" mean?

#### Activity 2: Negative Indexing (10 minutes)
**Goal:** Learn the shortcut for counting from the END of a list.

**Analogy:**
- If positive numbers count cubbies from the left, negative numbers count cubbies from the RIGHT.
- `-1` always means "the last one."

**Code example:**
```python
fruits = ["apple", "banana", "cherry"]

print(fruits[-1])   # cherry - the LAST item
print(fruits[-2])   # banana - the SECOND TO LAST item
```

**Teaching Points:**
- `fruits[-1]` is a handy shortcut for "the last item" - no need to count how long the list is!
- `-2` is the second-to-last, `-3` would be third-to-last, and so on

#### Activity 3: Slicing (10 minutes)
**Goal:** Grab a chunk of a list, not just one item.

**Code example:**
```python
numbers = [10, 20, 30, 40, 50]

print(numbers[1:3])   # [20, 30] - starts at index 1, stops BEFORE index 3
print(numbers[:2])    # [10, 20] - everything from the start up to index 2
print(numbers[2:])    # [30, 40, 50] - everything from index 2 to the end
```

**Teaching Points:**
- `list[start:stop]` gives back a smaller list (a "slice")
- The `stop` number is NOT included - just like `range()` from Day 4!
- Leaving `start` or `stop` blank means "go all the way to the beginning/end"
- Keep this light - slicing is a nice-to-know, not something to drill on

---

### Part 3: Looping Over Lists (35 minutes)

#### Activity 1: The `for item in list` Pattern (15 minutes)
**Goal:** Visit every item in a list without needing to know its index.

**Analogy:**
- Instead of checking cubby 0, then cubby 1, then cubby 2 one at a time, a loop lets us say "open every cubby, one after another, and show me what's inside."

**Code to write together:**
```python
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print("I like", fruit)
```

**Teaching Points:**
- `for fruit in fruits:` means "for each item in the fruits list, call it fruit, and do the stuff below"
- `fruit` is a variable we made up - it could be called anything (`f`, `item`, `snack`)
- The indented code runs once for EVERY item in the list
- This is different from Day 4's `for i in range(...)` - here we loop over the list itself, not a range of numbers!

**Experiment Together:**
- Rename the loop variable from `fruit` to something else and see it still works
- Try looping over a list of numbers and printing each one doubled: `print(number * 2)`

#### Activity 2: Combining Loops with Indexes (10 minutes)
**Goal:** Show how to number the items while looping (a common, useful trick).

**Code example:**
```python
fruits = ["apple", "banana", "cherry"]

for index in range(len(fruits)):
    print(index, "-", fruits[index])
```

**Teaching Points:**
- `range(len(fruits))` makes a range of numbers from 0 up to (but not including) the list's length
- This lets us use both the position AND the item inside the loop
- This is optional/advanced - only cover it if the group is moving quickly

#### Activity 3: The Numbered-List Trick - `enumerate()` (10 minutes)
**Goal:** Learn the friendlier way Python numbers items for us while looping.

**Analogy:**
- Imagine a helper walking down the row of cubbies with you, calling out "Number 1... number 2... number 3..." while you look at what's inside each one. That helper is `enumerate()`!

**Code to write together:**
```python
fruits = ["apple", "banana", "cherry"]

for number, fruit in enumerate(fruits, 1):
    print(f"{number}. {fruit}")
```

**Output:**
```
1. apple
2. banana
3. cherry
```

**Teaching Points:**
- `enumerate(fruits, 1)` hands us TWO things each time around the loop: the number AND the item - so we write two loop variables, `number, fruit`
- The `1` tells Python to start counting at 1 (perfect for menus and rosters) - leave it out and counting starts at 0, like indexes
- This does the same job as `range(len(...))` + `index + 1`, but with no math and no chance of an off-by-one mistake
- Remember this one! The Day 9 final project uses `enumerate()` to print its inventory menu

**Experiment Together:**
- Print a "Top 3 Favorite Games" countdown using `enumerate(games, 1)`
- Take the `, 1` out and see the numbering start at 0 instead

---

### Part 4: Changing Lists - `.append()`, `.remove()`, and `in` (30 minutes)

#### Activity 1: Adding Items with `.append()` (10 minutes)
**Goal:** Learn how to grow a list after it's created.

**Analogy:**
- `.append()` is like putting one more item into the backpack, at the very end.

**Code example:**
```python
snacks = ["chips", "pretzels"]
print(snacks)

snacks.append("cookies")
print(snacks)
```

**Teaching Points:**
- `.append(item)` adds `item` to the END of the list
- The list changes in place - we don't need to say `snacks = snacks.append(...)`
- We can `.append()` inside a loop to build up a list piece by piece

#### Activity 2: Removing Items with `.remove()` (10 minutes)
**Goal:** Learn how to take something out of a list.

**Code example:**
```python
snacks = ["chips", "pretzels", "cookies"]
snacks.remove("pretzels")
print(snacks)
```

**Teaching Points:**
- `.remove(item)` takes the FIRST matching item out of the list
- If the item isn't in the list, Python gives an error - it's good to check first!

#### Activity 3: Checking Membership with `in` (10 minutes)
**Goal:** Ask "is this thing inside my list?" and get a True/False answer.

**Code example:**
```python
snacks = ["chips", "pretzels", "cookies"]

print("chips" in snacks)      # True
print("candy" in snacks)      # False

if "cookies" in snacks:
    print("Yes! We have cookies!")
else:
    print("No cookies here.")
```

**Teaching Points:**
- `in` checks membership and gives back `True` or `False`
- This is a great combo with `if` statements from Day 3 - "if this thing is in the list, do something"
- This is a safe way to check before using `.remove()`, so we don't cause an error

---

### Part 5: The Safety Net - `try` / `except` (10-15 minutes)

**Goal:** Stop programs from crashing when the user types something unexpected (like "banana" when we asked for a number).

**Set-up (do this live!):**
- Run this tiny program and type `banana` when it asks:
```python
age = int(input("How old are you? "))
print(f"Next year you will be {age + 1}!")
```
- Watch it crash with `ValueError: invalid literal for int()...` - read the error together and don't panic!
- Say: "Our program fell off the tightrope. Let's give it a SAFETY NET so it lands softly instead of crashing."

**Code to write together:**
```python
entry = input("How old are you? ")

try:
    age = int(entry)
    print(f"Next year you will be {age + 1}!")
except ValueError:
    print("Oops! That wasn't a number. 😅")
```

**Teaching Points:**
- `try:` means "attempt the risky code below" - here, the risky part is `int(entry)`
- `except ValueError:` means "if that specific error happens, don't crash - run this instead"
- The program keeps going either way - the safety net catches the fall!
- Only put the risky line(s) inside `try:` - keep it small and focused
- We're catching `ValueError` by name because that's exactly the error `int()` gives for non-numbers

**Experiment Together:**
- Type a real number and confirm the `try` path runs normally
- Type "banana", "12.5", and even nothing at all - what happens each time?
- Wrap it in a `while True:` loop that keeps asking until a real number arrives, then `break`

---

### Part 6: Guided Practice - "Class Roster / High Score Tracker" (30 minutes)

**Goal:** Build a small program that uses a list from start to finish: creating it, growing it with input, looping over it, and reporting something back - with a safety net on the number conversion!

**Step-by-step idea:**
1. Start with an empty list: `scores = []`
2. Use a loop with `input()` to ask the player to enter scores, one at a time, and `.append()` each one
3. Stop collecting when the player types `"done"`
4. Loop over the final list and print every score
5. Report the total number of scores using `len()`

**Code to write together:**
```python
scores = []

print("Enter scores one at a time. Type 'done' when finished.")

while True:
    entry = input("Score (or 'done'): ")
    if entry.lower() == "done":
        break
    try:
        scores.append(int(entry))
    except ValueError:
        print("That's not a number! Try again. 😅")

print()
print("Here are all the scores you entered:")
for number, score in enumerate(scores, 1):
    print(f"{number}. {score}")

print()
print("You entered", len(scores), "scores!")
```

**Teaching Points:**
- This combines a `while` loop (Day 4), `input()` (Day 2), `if` (Day 3), a list, `enumerate()`, and the `try`/`except` safety net (all Day 6) - everything fits together!
- `scores.append(int(entry))` shows converting text input into a number before storing it - and the safety net means typing "banana" no longer crashes the program!
- The `enumerate(scores, 1)` line prints a tidy numbered report - the numbered-list trick in action
- This is exactly the pattern used in the Day 6 project template - point that out!

---

### Part 7: Dictionaries - Labeled Cubbies (30-35 minutes)

**Goal:** Meet the second big collection type: the dictionary. Lists are NUMBERED cubbies; dictionaries are LABELED cubbies. This is the most important data structure for the machine learning course coming up, so take it gently and make it stick!

#### Activity 1: What Is a Dictionary? (10 minutes)
**Teaching Approach:** Analogies + whiteboard

**Key Points:**
1. **Lists = numbered cubbies, dictionaries = LABELED cubbies**
   - A list finds things by position number: `fruits[0]`
   - A dictionary finds things by a label (called a **key**): `player["name"]`
   - Analogy: lockers with name tags instead of numbers - you don't care WHERE Isabella's locker is, you just look for the tag that says "Isabella"

2. **Why use dictionaries?**
   - Some information comes in PAIRS: a name and an age, a word and its meaning, a player and their score
   - With a list you'd have to remember "age is at position 2"... yuck! With a dictionary you just ask for `"age"`

3. **Real-world examples:**
   - An actual dictionary (word → definition!)
   - A contact list on a phone (name → phone number)
   - A menu (dish → price)

**Quick no-code activity:**
- On the whiteboard, draw two cubbies side by side: one row numbered 0, 1, 2 (list) and one row labeled "name", "age", "loves" (dictionary)
- Fill both with the same info about one of the kids and ask: "Which one is easier to read back?"

#### Activity 2: Creating and Reading a Dictionary (10 minutes)

**Code to write together:**
```python
player = {"name": "Isabella", "age": 12, "favorite_game": "Minecraft"}

print(player)
print(player["name"])            # Isabella
print(f"{player['name']} is {player['age']} years old!")
```

**Teaching Points:**
- Curly braces `{ }` create a dictionary (square brackets `[ ]` made a list!)
- Each entry is a `key: value` pair, separated by commas - the key is the LABEL, the value is what's stored in that cubby
- `player["name"]` means "give me whatever is in the cubby labeled name"
- Asking for a key that doesn't exist (like `player["height"]`) gives a `KeyError` - just like a list's `IndexError`, it's Python saying "no cubby with that label!"

**Experiment Together:**
- Add a fourth pair to the dictionary and print it
- Try `player["height"]` on purpose and read the `KeyError` together

#### Activity 3: Adding and Changing Entries (5 minutes)

**Code example:**
```python
player = {"name": "Michael", "age": 13}

player["age"] = 14              # CHANGE an existing value
player["hobby"] = "coding"      # ADD a brand-new key
print(player)
```

**Teaching Points:**
- `d[key] = value` does BOTH jobs: if the label exists it changes the value, if not it makes a new labeled cubby
- No `.append()` needed - dictionaries don't have an "end", they have labels!

#### Activity 4: `in` and Looping Over a Dictionary (10 minutes)

**Code example:**
```python
player = {"name": "Michael", "age": 14, "hobby": "coding"}

print("age" in player)       # True - checks the KEYS
print("Michael" in player)   # False - values don't count!

for key in player:
    print(key)

for key, value in player.items():
    print(f"{key} → {value}")
```

**Teaching Points:**
- `in` on a dictionary checks the KEYS (the labels), not the values - great for avoiding a `KeyError` before reading
- `for key in player:` visits every label, one at a time
- `for key, value in player.items():` hands us BOTH the label and what's inside - two loop variables, just like `enumerate()` gave us two!
- Keep it gentle: creating, reading, adding, `in`, and the two loops are all they need today - dictionaries will come back again and again (three of the Day 9 bonus games use them!)

**Experiment Together:**
- Build a `favorite_things` dictionary together (`"color"`, `"food"`, `"animal"`...) and loop over `.items()` to print a profile card
- Use `if "food" in favorite_things:` before printing it

---

## Common Mistakes & Troubleshooting

**Issue:** `IndexError: list index out of range`
- **Cause:** Trying to access an index that doesn't exist (often off-by-one, forgetting lists start at 0)
- **Solution:** Use `len(my_list)` to check how many items there are; remember the last valid index is `len(my_list) - 1`

**Issue:** Forgetting to use `.append()` and instead trying `my_list = my_list + item`
- **Cause:** Not yet comfortable with list methods
- **Solution:** Remind them `.append(item)` is the simple way to add one item to the end

**Issue:** `ValueError` when using `.remove()`
- **Cause:** Trying to remove something that isn't in the list
- **Solution:** Check first with `if item in my_list:` before removing

**Issue:** Mixing up `range(len(my_list))` with looping directly over the list
- **Cause:** Both are valid, but students may not be sure which to use
- **Solution:** Teach `for item in my_list:` as the default, `enumerate(my_list, 1)` when they want numbering, and only reach for `range(len(...))` when the raw index itself is needed

**Issue:** `KeyError` when reading a dictionary
- **Cause:** Asking for a label that doesn't exist (often a typo, or wrong capitalization - `"Name"` vs `"name"`)
- **Solution:** Print the whole dictionary to see the real keys; check first with `if key in my_dict:`

**Issue:** Using square brackets to CREATE a dictionary, or curly braces to create a list
- **Cause:** Two collection types in one day - easy to mix up
- **Solution:** Chant it: "square brackets = numbered cubbies (list), curly braces = labeled cubbies (dictionary)". Reading uses square brackets for BOTH (`fruits[0]`, `player["name"]`)

**Issue:** `try`/`except` wrapped around too much code, hiding real bugs
- **Cause:** Once kids discover the safety net they want to wrap everything in it
- **Solution:** Only the risky line (like `int(entry)`) goes inside `try:`, and always catch a NAMED error (`except ValueError:`), never a bare `except:`

---

## Homework/Preview (Optional)

**For next time:**
- Build a dictionary about a family member or pet (at least 4 key: value pairs) and print it as a profile card using `.items()` and f-strings
- Preview: Next lesson we'll learn to build our OWN types of things with classes and objects - like designing the blueprint for the cubbies themselves!

---

## Notes for Instructor

- **Pace:** Indexing and negative indexing feel strange at first - go slowly and use the cubby/backpack analogy often
- **Energy:** Lists open the door to much more fun/realistic programs (rosters, scoreboards, todo lists) - lean into that excitement
- **Mistakes:** `IndexError` is extremely common here - treat it as a normal, expected learning moment, not a big deal
- **Individual Help:** Some students may need extra support with:
  - Remembering that counting starts at 0
  - The difference between `for item in my_list:` and `for i in range(len(my_list)):`
  - Knowing when to use `.append()` vs `.remove()`
  - Unpacking two loop variables (`for number, item in enumerate(...)`, `for key, value in d.items()`)
  - Square brackets vs curly braces when CREATING a list vs a dictionary
- **Fast Learners:** Offer extension activities (sorting a list with `sorted()`, finding the biggest score with `max()`, combining two lists, a dictionary of dictionaries like `players["michael"]["score"]`)
- **Cursor Navigation:** Make sure kids know how to:
  - Read `IndexError`, `KeyError`, and `ValueError` messages without panicking
  - Print a whole list or dictionary to check its contents while debugging
  - Save and run files repeatedly while experimenting
- **Why dictionaries matter:** This is the single most important data structure for the upcoming machine learning course - datasets, model settings, and results are all dictionary-shaped. It's worth going slowly here.
- **End Goal:** Students should leave feeling that lists and dictionaries let them keep track of many things at once - numbered cubbies AND labeled cubbies - that they can number any list with `enumerate()`, and that `try`/`except` means bad input never has to crash their program again.
