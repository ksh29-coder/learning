# Day 7 Worksheet: Classes & Objects - Building Your Own Blueprints

## Name: _________________  Date: _________________

---

## Part 1: Understanding Classes and Objects

### Question 1
What is a class?
- [ ] A single value stored in a variable
- [ ] A blueprint/template used to create objects
- [ ] A type of loop
- [ ] A built-in Python function

### Question 2
What is an object (instance)?
- [ ] The same thing as a class
- [ ] One actual "thing" created from a class
- [ ] A comparison operator
- [ ] A kind of error message

### Question 3
What keyword do you use to define a class?
- [ ] `object`
- [ ] `def`
- [ ] `class`
- [ ] `new`

### Question 4
What will this code print?
```python
class Pet:
    def __init__(self, name, animal_type):
        self.name = name
        self.animal_type = animal_type

my_pet = Pet("Buddy", "dog")
print(my_pet.name)
```
**Answer:** _________________________________

### Question 5
What does `self` refer to inside a class's methods?
**Answer:** _________________________________

### Question 6
What is the difference between an **attribute** and a **method**?
**Answer:** _________________________________

---

## Part 2: Attributes

### Exercise 1: Define a Class with `__init__`
Write a class called `Pet` with an `__init__` method that sets three attributes: `name`, `animal_type`, and `hunger_level`.

**Your code:**
```python
# Write your code here
```

---

### Exercise 2: Create and Print Attributes
Create a `Pet` object and print each of its attributes.

**Your code:**
```python
# Write your code here
```

---

## Part 3: Methods

### Exercise 1: Add a Method
Add a `feed()` method to your `Pet` class that lowers `hunger_level` and prints a message.

**Your code:**
```python
# Write your code here
```

---

### Exercise 2: Add a Method with a Parameter
Add a `greet(person_name)` method to your `Pet` class that prints a message using both `self.name` and `person_name`.

**Your code:**
```python
# Write your code here
```

---

## Part 4: Multiple Objects

### Exercise 1: Create Several Pets
Create three different `Pet` objects, each with a different name and animal type. Call `describe()` (or print their attributes) for each one.

**Your code:**
```python
# Write your code here
```

---

### Exercise 2: Independent Attributes
Call `feed()` on only ONE of your three pets. Then print all three pets' `hunger_level`. Explain in a sentence why only one pet's hunger level changed.

**Your code:**
```python
# Write your code here
```

**Explanation:** _________________________________

---

## Part 5: Challenge Problems

### Challenge 1: Interactive Pet Simulator
Build a small program with a `Pet` class (name, animal_type, hunger_level, happiness attributes; `feed()`, `play()`, `make_sound()`, `describe()` methods) and a menu loop using `input()` that lets the player choose an action to perform on one pet.

**Your code:**
```python
# Write your code here
```

---

### Challenge 2: New Method
Add a new method of your own design to the `Pet` class (for example: `nap()`, `rename(new_name)`, or `is_hungry()`). Explain what it does.

**Your code:**
```python
# Write your code here
```

**What it does:** _________________________________

---

## Part 6: Reflection

### What I Learned Today:
1. A class is used when: _________________________________
2. An object is different from a class because: _________________________________
3. `self` is needed inside a method because: _________________________________
4. One thing I found easy: _________________________________
5. One thing I found challenging: _________________________________

### What I Want to Learn Next:
_________________________________
_________________________________

---

## Bonus Challenge!

Design your own class from scratch (not a `Pet`!) — maybe a `Character`, a `Car`, or a `Robot`. Give it at least 3 attributes and 2 methods, then create two objects from it and show that they behave independently. 🎮

**Your code:**
```python
# Write your bonus class here
```

---

## Notes Section
Use this space to write down any questions or ideas:

_________________________________
_________________________________
_________________________________
