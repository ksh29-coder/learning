# Day 7: Classes & Objects - Building Your Own Blueprints

## Overview
**Duration:** 2–3 hours
**Goal:** Introduce students to the basics of object-oriented programming — classes, objects, attributes, and methods — using a friendly `Pet` class as the running example.

---

## Learning Objectives
By the end of this lesson, students will be able to:
- Explain what a class is and what an object is, in kid-friendly language
- Explain the difference between a class (the blueprint) and an object (a thing made from it)
- Define a simple class using `class` and `__init__`
- Add attributes (data) to an object inside `__init__`
- Add methods (actions) to a class and call them on an object
- Create multiple objects from the same class, each with their own separate attribute values
- Read and predict the output of small programs that use classes and objects

---

## Materials Needed
- Cursor IDE (already set up)
- Python installed on the computer
- Code examples (Day 7 folder)
- Worksheet (Day 7)
- Project template (Day 7)

---

## Lesson Structure

### Part 1: Introduction to Classes and Objects (25 minutes)

#### What Is a Class? What Is an Object? (15 minutes)
**Teaching Approach:** Analogies + whiteboard

**Key Points:**
1. **A class is a blueprint or template.**
   - Analogy: A cookie cutter isn't a cookie — it's the *shape* used to make cookies.
   - Analogy: The character-creation screen in a video game isn't your character — it's the *template* for making one.
   - In code: We describe what every "thing" of this kind will have (its data) and what it can do (its actions).

2. **An object is one actual thing made from that blueprint.**
   - Analogy: Each cookie you cut out is an object. They all came from the same cutter (class), but they're separate cookies — you could give one extra sprinkles without changing the others.
   - Analogy: Your specific game character (with its own name, health, level) is an object made from the character class.
   - In code: We call making an object "creating an instance" of the class.

3. **Why use classes?**
   - Group related data and actions together in one place
   - Make many similar "things" without rewriting the same code
   - Model real-world (or game-world!) things naturally: a `Pet`, a `Player`, a `Car`

**Quick no-code activity:**
- On the board, draw a cookie cutter shaped like a star, then draw 3 star cookies next to it.
- Ask: "Is the cutter a cookie? Are the cookies different from each other, even though they came from the same cutter?"
- Say: "The cutter is our **class**. Each cookie is an **object** — its own instance, with its own icing and sprinkles."

#### First Look at a Class in Python (10 minutes)
**Teaching Approach:** Simple example in Cursor

**Code to write together:**
```python
class Pet:
    pass

# Creating an object (an instance) of the Pet class
my_pet = Pet()
print(my_pet)
print(type(my_pet))
```

**Teaching Points:**
- `class` starts a class definition, followed by the class name
- **Class names are capitalized by convention** (`Pet`, not `pet`) — this helps tell classes apart from variables
- The colon `:` and indentation show what's inside the class, just like functions
- `pass` just means "nothing here yet" (a placeholder)
- `Pet()` — calling the class name like a function — creates a new object (instance) of that class
- `type(my_pet)` shows Python knows `my_pet` is a `Pet`

**Experiment Together:**
- Create a second pet: `second_pet = Pet()` and print it too — notice the two objects print differently (different memory addresses), proving they're two separate things

---

### Part 2: Attributes — Giving Objects Their Own Data (30 minutes)

#### Introducing `__init__` (15 minutes)
**Goal:** Understand that `__init__` sets up an object's starting attributes when it's created.

**Analogy:**
- `__init__` is like the character-creation screen: the moment the object is "born," it fills in its name, its type, its starting stats.
- It's a special method that Python calls automatically every time we make a new object.

**Code to write together:**
```python
class Pet:
    def __init__(self, name, animal_type):
        self.name = name
        self.animal_type = animal_type

my_pet = Pet("Buddy", "dog")
print(my_pet.name)
print(my_pet.animal_type)
```

**Teaching Points:**
- `__init__` always starts with two underscores, the word "init", and two more underscores
- The first parameter of every method is `self` — it means "this particular object". We never pass a value for it ourselves; Python fills it in
- `self.name = name` stores the value in an **attribute** that belongs to this object
- `Pet("Buddy", "dog")` — the arguments we pass line up with `__init__`'s parameters (after `self`)
- Attributes are accessed with a dot: `my_pet.name`, `my_pet.animal_type`

**Common mistake to point out:** Forgetting `self` in `__init__`'s parameter list, or forgetting `self.` when storing/reading an attribute — both cause errors. Show the error message so students recognize it later.

#### Activity: More Attributes (15 minutes)
**Goal:** Practice adding several attributes, including ones with default values.

**Code example:**
```python
class Pet:
    def __init__(self, name, animal_type, hunger_level=5):
        self.name = name
        self.animal_type = animal_type
        self.hunger_level = hunger_level
        self.happiness = 5

my_pet = Pet("Buddy", "dog")
print(my_pet.name, "is a", my_pet.animal_type)
print("Hunger level:", my_pet.hunger_level)
print("Happiness:", my_pet.happiness)
```

**Teaching Points:**
- A parameter can have a default value (`hunger_level=5`) so you don't have to pass it every time
- Attributes don't all need to come from parameters — `happiness` is set to `5` for every new pet, no parameter needed
- Attributes can be changed later: `my_pet.happiness = 10`

**Let them customize:**
- Add their own attribute, like `favorite_toy` or `age`

---

### Part 3: Methods — Giving Objects Actions (35 minutes)

#### What Is a Method? (10 minutes)
**Analogy:**
- A method is an action the object can *do*. If attributes are what the object **has**, methods are what the object **does**.
- A game character can `jump()` or `attack()`. A pet can `feed()`, `play()`, or `make_sound()`.

**Key Points:**
- A method is just a function defined inside a class
- It always takes `self` as its first parameter, so it can read and change that object's own attributes
- We call a method on an object using dot notation: `my_pet.feed()`

#### Activity 1: Adding Methods to Pet (15 minutes)

**Code to write together:**
```python
class Pet:
    def __init__(self, name, animal_type, hunger_level=5):
        self.name = name
        self.animal_type = animal_type
        self.hunger_level = hunger_level
        self.happiness = 5

    def feed(self):
        self.hunger_level = max(0, self.hunger_level - 3)
        print(self.name, "happily eats! Yum! 🍖")

    def play(self):
        self.happiness = min(10, self.happiness + 2)
        print(self.name, "plays and has a blast! 🎾")

    def make_sound(self):
        print(self.name, "makes a sound!")

    def describe(self):
        print(self.name, "is a", self.animal_type + ".")
        print("Hunger:", self.hunger_level, "/ 10   Happiness:", self.happiness, "/ 10")

my_pet = Pet("Buddy", "dog")
my_pet.describe()
my_pet.feed()
my_pet.play()
my_pet.describe()
```

**Teaching Points:**
- Methods can read attributes (`describe` prints them)
- Methods can also change attributes (`feed` lowers `hunger_level`, `play` raises `happiness`)
- Calling a method — `my_pet.feed()` — runs the code inside `feed`, using `self` to know *which* pet to change
- Note that `make_sound()` here is pretty plain — later (Day 8), we'll see how different kinds of pets can make this method do something more specific for them!

#### Activity 2: Methods That Use Parameters (10 minutes)
**Goal:** Practice methods that take extra input, not just `self`.

**Code example:**
```python
class Pet:
    def __init__(self, name, animal_type):
        self.name = name
        self.animal_type = animal_type

    def greet(self, person_name):
        print(self.name, "wags excitedly at", person_name + "!")

my_pet = Pet("Buddy", "dog")
my_pet.greet("Michael")
my_pet.greet("Isabella")
```

**Teaching Points:**
- `self` refers to the object; any parameters *after* `self` work just like normal function parameters
- Same method, different argument, different output — just like functions from Day 5!

#### Activity 3: Predict the Output (10 minutes)
**Goal:** Read code carefully and reason about attributes changing over time.

Put a short Pet program on the board (create a pet, call `feed()` twice, call `describe()`) and have students predict the printed hunger level *before* running it. This checks that they understand attributes are stored per-object and change when methods run.

---

### Part 4: Multiple Objects From the Same Class (25 minutes)

#### Activity: A Whole Litter of Pets (15 minutes)
**Goal:** Show that each object keeps its own separate attribute values.

**Code example:**
```python
class Pet:
    def __init__(self, name, animal_type, hunger_level=5):
        self.name = name
        self.animal_type = animal_type
        self.hunger_level = hunger_level
        self.happiness = 5

    def feed(self):
        self.hunger_level = max(0, self.hunger_level - 3)
        print(self.name, "happily eats! Yum! 🍖")

    def describe(self):
        print(self.name, "is a", self.animal_type + ".")
        print("Hunger:", self.hunger_level, "/ 10   Happiness:", self.happiness, "/ 10")

dog = Pet("Buddy", "dog")
cat = Pet("Whiskers", "cat")
bird = Pet("Tweety", "bird", hunger_level=2)

dog.feed()
dog.describe()

cat.describe()  # Whiskers was never fed - still hungry!

bird.describe()
```

**Teaching Points:**
- `dog`, `cat`, and `bird` are three separate objects — three separate "cookies" from the same "cutter"
- Feeding `dog` only changes `dog`'s `hunger_level`. It does **not** affect `cat` or `bird` — each object has its own copy of the attributes
- We can put objects in a list and loop over them, just like any other value:
```python
pets = [dog, cat, bird]
for pet in pets:
    pet.describe()
```

#### Activity: Comparing Objects (10 minutes)
**Goal:** Reinforce that objects are independent even when built the same way.

Have students create three `Pet` objects of their own choosing, call different methods on each in a different order, then `describe()` all three to see how they diverged. Ask: "Why do the two dogs end up with different happiness even though we used the exact same class?"

---

### Part 5: Guided Practice – Interactive Pet Simulator (30 minutes)

**Goal:** Combine everything — classes, `__init__`, attributes, methods, multiple objects, input, and loops — into one small interactive program.

**Step-by-step idea:**
1. Define the `Pet` class with `__init__`, `feed()`, `play()`, `make_sound()`, and `describe()`.
2. Create one pet using input from the user (name and animal type).
3. Show a simple menu (feed / play / describe / quit) in a loop, using `input()` to choose an action and calling the matching method.
4. Print a friendly message and the pet's final stats when the player quits.

This mirrors `code_examples/day7/05_interactive_pet_simulator.py` — walk through it together, then let students tweak the menu options or add a new method (like `nap()`).

---

## Key Concepts Summary

### Class
A blueprint for creating objects. Defined with `class ClassName:`. Groups related attributes and methods together.

### Object (Instance)
One actual "thing" created from a class, made by calling the class like a function: `Pet("Buddy", "dog")`. Each object has its own copy of the attributes.

### `__init__`
A special method that runs automatically when a new object is created. Used to set up the object's starting attributes.

### `self`
Refers to "this particular object." Always the first parameter of a method. Used to read/set that object's own attributes (`self.name`) and to call its own other methods.

### Attributes
Data that belongs to an object (`pet.name`, `pet.hunger_level`). Set in `__init__` (usually), read and changed with dot notation.

### Methods
Actions an object can perform, defined as functions inside the class. Called with dot notation: `pet.feed()`.

---

## Assessment Checkpoints

### Can they:
- [ ] Explain the difference between a class and an object using their own analogy?
- [ ] Write a class with `__init__` that sets at least two attributes?
- [ ] Write at least one method that reads or changes an attribute using `self`?
- [ ] Create two or more objects from the same class and show their attributes differ independently?
- [ ] Call a method on an object using dot notation without help?

### Engagement Indicators:
- Coming up with their own class ideas (a `Character`, a `Car`, a `Robot`)
- Asking "can I add another attribute/method?" unprompted
- Noticing on their own that changing one object doesn't affect another

---

## Extension Activities (for fast learners)
- Add a `rename(self, new_name)` method that changes a pet's name
- Add a `is_hungry(self)` method that returns `True`/`False` based on `hunger_level`
- Track all created pets in a list attribute outside the class, and write a function that prints every pet's `describe()` in one go
- Give a sneak peek: "Next time (Day 8), we'll learn how to make special *kinds* of pets — like `Dog` and `Cat` — that reuse everything from `Pet` but add their own twist!"

---

## Troubleshooting Guide

### Common Issues:

**Issue:** `TypeError: __init__() missing 1 required positional argument`
- **Cause:** Forgot to pass an argument when creating the object, or forgot `self` in the parameter list
- **Solution:** Check `__init__`'s parameter list matches what's passed in `Pet(...)`

**Issue:** `AttributeError: 'Pet' object has no attribute 'name'`
- **Cause:** Forgot to write `self.name = name` inside `__init__` (only had the parameter, never stored it)
- **Solution:** Every attribute needs an explicit `self.attribute = value` line

**Issue:** Method doesn't seem to change anything
- **Cause:** Forgot `self.` when updating the attribute inside the method (created a local variable instead)
- **Solution:** Always update attributes as `self.attribute = ...`, not just `attribute = ...`

**Issue:** `NameError: name 'self' is not defined` (or similar) when calling a method
- **Cause:** Tried to pass `self` manually, e.g. `my_pet.feed(my_pet)`
- **Solution:** Python passes `self` automatically — just call `my_pet.feed()`

**Issue:** All objects seem to share the same values
- **Cause:** Usually a mix-up where students keep printing/using the same variable name for every pet instead of creating separate objects
- **Solution:** Double check each pet was created with its own `Pet(...)` call and stored in its own variable

---

## Homework/Preview (Optional)

**For next time:**
- Think of 2–3 "kinds" of pets (a `Dog`, a `Cat`, a `Bird`) that are all still pets, but each makes a different sound and maybe has one special trick.
- Preview: Next time we'll learn **inheritance** — how to build a `Dog` class that reuses everything from `Pet` automatically, and only adds what's different!

---

## Notes for Instructor
- **Pace:** This is the first exposure to OOP — go slowly on `self` and `__init__`, they are the two biggest stumbling blocks. Expect to repeat the cookie-cutter analogy often.
- **Energy:** Let students name their own pets and pick silly animal types — ownership over the example keeps engagement high.
- **Mistakes:** Missing `self` is the single most common bug today. Treat every occurrence as a quick, calm teaching moment, not a big deal.
- **Individual Help:** Some students may need extra support with:
  - Understanding why `self` is needed at all
  - Remembering the dot notation (`object.attribute` vs `object.method()`)
  - Seeing that multiple objects from one class are independent
- **Fast Learners:** Offer extension activities above, and let them peek ahead at what inheritance will let them do.
- **End Goal:** Students should leave comfortable creating a class with attributes and methods, making a few objects from it, and calling methods on those objects — ready to build on this with subclasses in Day 8.
