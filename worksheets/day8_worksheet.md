# Day 8 Worksheet: Inheritance & Polymorphism - Families of Objects

## Name: _________________  Date: _________________

---

## Part 1: Understanding Inheritance

### Question 1
What is inheritance?
- [ ] A way to delete a class
- [ ] A way for one class to reuse everything from another class
- [ ] A type of loop
- [ ] A built-in Python function

### Question 2
In `class Dog(Pet):`, which class is the **parent** (the one being reused)?
- [ ] `Dog`
- [ ] `Pet`
- [ ] Both
- [ ] Neither

### Question 3
What does this code print?
```python
class Pet:
    def __init__(self, name):
        self.name = name
    def make_sound(self):
        print(self.name, "makes a sound!")

class Dog(Pet):
    def make_sound(self):
        print(self.name, "says: Woof!")

d = Dog("Buddy")
d.make_sound()
```
**Answer:** _________________________________

### Question 4
What does `super().__init__(...)` do?
**Answer:** _________________________________

### Question 5
What does it mean to **override** a method?
**Answer:** _________________________________

### Question 6
What is **polymorphism** (same command, different result)? Give an example.
**Answer:** _________________________________

---

## Part 2: Inheritance & super()

### Exercise 1: Your First Subclass
Starting from a `Pet` class (with `name` and `animal_type`), write a subclass `class Dog(Pet):` that just says `pass`. Create a `Dog` object and call an inherited method on it.

**Your code:**
```python
# Write your code here
```

---

### Exercise 2: Use super().__init__()
Write a `Dog(Pet)` subclass with its own `__init__` that calls `super().__init__(name, "dog")` and then adds one extra attribute of your choice (like `self.trick`). Create a Dog and print both an inherited attribute and your new one.

**Your code:**
```python
# Write your code here
```

---

## Part 3: Overriding Methods

### Exercise 1: Override make_sound()
Write a `Cat(Pet)` subclass that overrides `make_sound()` so it prints a meow message using `self.name`. Create a cat and call `make_sound()`.

**Your code:**
```python
# Write your code here
```

---

### Exercise 2: Three Different Sounds
Write three subclasses — `Dog`, `Cat`, and `Bird` — that each override `make_sound()` differently. Create one of each and call `make_sound()` on all three.

**Your code:**
```python
# Write your code here
```

---

## Part 4: Polymorphism

### Exercise 1: One Loop, Many Sounds
Create a list holding a `Dog`, a `Cat`, and a `Bird`. Write ONE loop that calls `make_sound()` on each animal in the list.

**Your code:**
```python
# Write your code here
```

**Explanation:** Why does each animal make a different sound, even though you called the exact same method in the loop?
_________________________________

---

### Exercise 2: Add a New Animal Type
Add a brand-new subclass (like `Cow` or `Duck`) that overrides `make_sound()`. Add one to your list from Exercise 1 and run the loop again. Notice you did NOT have to change the loop!

**Your code:**
```python
# Write your code here
```

---

## Part 5: Challenge Problems

### Challenge 1: Interactive Animal Shelter
Build a program with a `Pet` parent class and `Dog`, `Cat`, `Bird` subclasses (each overriding `make_sound()`). Keep a list of animals. Use a menu loop with `input()` that lets the player add animals of different types, then "hear all animals" by looping and calling `make_sound()` on each.

**Your code:**
```python
# Write your code here
```

---

### Challenge 2: A Special Method
Give ONE of your subclasses an extra method that the others don't have (for example, `Dog.fetch()`). Create objects of each type, and call your special method only on the one that has it.

**Your code:**
```python
# Write your code here
```

**What it does:** _________________________________

---

## Part 6: Reflection

### What I Learned Today:
1. Inheritance is useful when: _________________________________
2. `super().__init__()` is needed because: _________________________________
3. Overriding a method means: _________________________________
4. Polymorphism lets me: _________________________________
5. One thing I found easy: _________________________________
6. One thing I found challenging: _________________________________

### What I Want to Learn Next:
_________________________________
_________________________________

---

## Bonus Challenge!

Design your OWN family of classes — NOT animals! Maybe shapes (a `Shape` parent with `Circle` and `Square`), or vehicles (a `Vehicle` parent with `Car` and `Boat`), or game characters (a `Character` parent with `Wizard` and `Knight`). Give the parent a method, override it in each child, then put the children in a list and loop over them calling that method. 🎮

**Your code:**
```python
# Write your bonus classes here
```

---

## Notes Section
Use this space to write down any questions or ideas:

_________________________________
_________________________________
_________________________________
