# Day 6: Lists - Storing Lots of Things Together

## Overview
**Duration:** 2–3 hours  
**Goal:** Teach students how to create, access, and change lists so they can store and work with collections of information instead of just one value at a time.

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

### Part 3: Looping Over Lists (25 minutes)

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

### Part 5: Guided Practice - "Class Roster / High Score Tracker" (30 minutes)

**Goal:** Build a small program that uses a list from start to finish: creating it, growing it with input, looping over it, and reporting something back.

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
    scores.append(int(entry))

print()
print("Here are all the scores you entered:")
for score in scores:
    print("-", score)

print()
print("You entered", len(scores), "scores!")
```

**Teaching Points:**
- This combines a `while` loop (Day 4), `input()` (Day 2), `if` (Day 3), and a list (Day 6) - everything fits together!
- `scores.append(int(entry))` shows converting text input into a number before storing it
- This is exactly the pattern used in the Day 6 project template - point that out!

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
- **Solution:** Teach `for item in my_list:` as the default, and only reach for `range(len(...))` when the index number itself is needed

---

## Homework/Preview (Optional)

**For next time:**
- Think about information that comes in PAIRS, like a name and a matching age, or a word and its definition
- Preview: Soon we'll see how to store even richer information using other data types built on top of what we know now!

---

## Notes for Instructor

- **Pace:** Indexing and negative indexing feel strange at first - go slowly and use the cubby/backpack analogy often
- **Energy:** Lists open the door to much more fun/realistic programs (rosters, scoreboards, todo lists) - lean into that excitement
- **Mistakes:** `IndexError` is extremely common here - treat it as a normal, expected learning moment, not a big deal
- **Individual Help:** Some students may need extra support with:
  - Remembering that counting starts at 0
  - The difference between `for item in my_list:` and `for i in range(len(my_list)):`
  - Knowing when to use `.append()` vs `.remove()`
- **Fast Learners:** Offer extension activities (sorting a list with `sorted()`, finding the biggest score with `max()`, combining two lists)
- **Cursor Navigation:** Make sure kids know how to:
  - Read `IndexError` messages without panicking
  - Print a whole list to check its contents while debugging
  - Save and run files repeatedly while experimenting
- **End Goal:** Students should leave feeling that lists let them keep track of many things at once, and that they can create, grow, shrink, and search through a list with confidence.
