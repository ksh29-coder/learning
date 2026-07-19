# Day 8: Inheritance & Polymorphism - Families of Objects

## Overview
**Duration:** 2–3 hours
**Goal:** Build directly on Day 7's `Pet` class to introduce **inheritance** (a subclass that reuses a parent class), **method overriding** (each subclass does something its own way), `super().__init__()`, and **polymorphism** (the same command giving different results for different objects). This is the students' first exposure to inheritance — keep it concrete and playful.

---

## Learning Objectives
By the end of this lesson, students will be able to:
- Explain inheritance in kid-friendly language (a "family" of classes)
- Write a subclass using `class Dog(Pet):` that reuses everything from a parent class
- Explain that a subclass gets the parent's attributes and methods "for free"
- Override a method in a subclass so it does something specific (e.g. `make_sound()` barks)
- Use `super().__init__(...)` to run the parent's setup from inside a subclass
- Explain and demonstrate polymorphism: looping over a list of different objects and calling the same method, getting different behavior for each
- Read and predict the output of small programs that use subclasses and overriding

---

## Materials Needed
- Cursor / VS Code IDE (already set up)
- Python installed on the computer
- Code examples (Day 8 folder)
- Worksheet (Day 8)
- Project template (Day 8)
- **Day 7's `Pet` class** — students should be comfortable with classes, `__init__`, attributes, and methods first

---

## Lesson Structure

### Part 1: What Is Inheritance? (25 minutes)

#### The Big Idea (15 minutes)
**Teaching Approach:** Analogies + whiteboard

**Key Points:**
1. **Inheritance means one class can reuse another class.**
   - Analogy: A **family**. A puppy inherits traits from its parent dog — four legs, a tail, fur — without having to "reinvent" them. It just gets them.
   - Analogy: A **base video-game character** with health and a name. A `Wizard` and a `Knight` both start from that base character and add their own special moves.
   - In code: We already have a `Pet` class from Day 7. Instead of writing a whole new class for a dog, we say "a `Dog` **is a** `Pet`" and it automatically gets everything `Pet` has.

2. **Vocabulary (keep it light):**
   - The class we reuse is the **parent** (or "base" class). Here, `Pet`.
   - The new class is the **child** (or "subclass"). Here, `Dog`.
   - `class Dog(Pet):` — the `(Pet)` part is what says "Dog inherits from Pet."

3. **The "is a" test:**
   - Inheritance fits when you can say "a ___ **is a** ___." A dog *is a* pet. A cat *is a* pet. ✅
   - It does NOT fit "has a": a dog *has a* tail — a tail isn't a kind of dog, so that's not inheritance.

**Quick no-code activity:**
- On the board, draw a big box labeled `Pet` with "name, feed(), play(), make_sound()" inside it.
- Draw three smaller boxes below — `Dog`, `Cat`, `Bird` — with arrows pointing up to `Pet`.
- Say: "Each of these three already knows how to `feed()` and `play()` — they inherited it from `Pet`. We only have to write what makes each one *different*."

#### First Look at a Subclass (10 minutes)
**Teaching Approach:** Simple example in the editor (mirrors `code_examples/day8/01_inheritance_basics.py`)

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

    def make_sound(self):
        print(self.name, "makes a sound!")

# Dog inherits EVERYTHING from Pet - even with no code of its own!
class Dog(Pet):
    pass

my_dog = Dog("Buddy", "dog")
my_dog.feed()          # This came from Pet!
my_dog.make_sound()    # This came from Pet too!
```

**Teaching Points:**
- `class Dog(Pet):` means "Dog is a kind of Pet and gets all of Pet's stuff."
- Even though `Dog` only has `pass` (nothing of its own), it can still `feed()` and `make_sound()` — those were **inherited**.
- `Dog("Buddy", "dog")` uses `Pet`'s `__init__` automatically, because `Dog` didn't write its own yet.
- Show `type(my_dog)` (it says `Dog`) and, if the group is keen, `isinstance(my_dog, Pet)` → `True`: a dog really *is* a pet.

---

### Part 2: super() and Adding Your Own `__init__` (30 minutes)

#### Why `super()`? (15 minutes)
**Goal:** A subclass often wants its own extra attributes. `super().__init__(...)` lets it reuse the parent's setup instead of copying it.

**Analogy:**
- `super()` means "my parent class." Calling `super().__init__(...)` is like saying: "Parent, please do all your normal setup for me first — then I'll add my own special bit on top."

**Code to write together (mirrors `code_examples/day8/02_super_and_init.py`):**
```python
class Dog(Pet):
    def __init__(self, name, trick):
        super().__init__(name, "dog")   # Pet sets up name, animal_type, hunger, happiness
        self.trick = trick               # Dog adds its OWN extra attribute

    def do_trick(self):
        print(self.name, "does a trick:", self.trick + "! 🐕")

buddy = Dog("Buddy", "roll over")
buddy.feed()        # inherited from Pet
buddy.do_trick()    # new, added by Dog
```

**Teaching Points:**
- Writing a new `__init__` in `Dog` **replaces** `Pet`'s — so we call `super().__init__(...)` to still get all of `Pet`'s setup.
- Notice we pass `"dog"` for `animal_type` inside the subclass, so the person creating a `Dog` doesn't have to type it every time — nice!
- After `super().__init__(...)`, we add `self.trick` — that attribute belongs only to dogs.
- `do_trick()` is a brand-new method that only `Dog` has; `Cat` and `Bird` wouldn't.

**Common mistake to point out:** Forgetting to call `super().__init__(...)` — then the parent's attributes (like `self.name`) never get set, and you get an `AttributeError` later. Show that error so they recognize it.

#### Activity (15 minutes)
Have students write a `Cat(Pet)` subclass that adds one extra attribute of their choice (e.g. `self.indoor = True`) using `super().__init__(name, "cat")` plus one more line. Then create a cat and print both an inherited attribute (`name`) and their new one.

---

### Part 3: Overriding Methods — Same Name, New Behavior (35 minutes)

#### What Is Overriding? (10 minutes)
**Analogy:**
- Every pet in `Pet` "makes a sound," but the parent version is boring: it just prints "makes a sound!" A dog should **bark**, a cat should **meow**. So each subclass **overrides** `make_sound()` — it writes its own version with the same name, and the subclass's version wins.

**Key Points:**
- Overriding = writing a method in the subclass with the **same name** as one in the parent.
- When you call `dog.make_sound()`, Python looks at `Dog` first. If `Dog` has its own `make_sound()`, that one runs instead of `Pet`'s.
- Methods you *don't* override are still inherited normally.

#### Activity: Different Sounds (15 minutes)
**Code to write together (mirrors `code_examples/day8/03_overriding_methods.py`):**
```python
class Dog(Pet):
    def __init__(self, name):
        super().__init__(name, "dog")
    def make_sound(self):
        print(self.name, "says: Woof woof! 🐶")

class Cat(Pet):
    def __init__(self, name):
        super().__init__(name, "cat")
    def make_sound(self):
        print(self.name, "says: Meow! 🐱")

class Bird(Pet):
    def __init__(self, name):
        super().__init__(name, "bird")
    def make_sound(self):
        print(self.name, "says: Tweet tweet! 🐦")

Dog("Buddy").make_sound()      # Woof woof!
Cat("Whiskers").make_sound()   # Meow!
Bird("Tweety").make_sound()    # Tweet tweet!
```

**Teaching Points:**
- All three subclasses have a `make_sound()` — but each does something different. Same name, different behavior.
- `describe()` was **not** overridden, so all three still borrow it from `Pet`. Point this out — inheritance and overriding work together.

#### Activity: Predict the Output (10 minutes)
Put a short program on the board: a `Dog` and a `Cat`, calling `make_sound()` on each and `describe()` (inherited) on each. Have students predict all four lines *before* running. This checks they know which version of a method runs.

---

### Part 4: Polymorphism — One Command, Many Results (30 minutes)

#### The Payoff (10 minutes)
**Analogy:**
- Imagine a teacher saying "Everyone make your animal's sound!" to a room of kids dressed as different animals. One command — but the dog kid barks, the cat kid meows, the bird kid tweets. The teacher didn't have to give each kid separate instructions. That's **polymorphism**: *same command, different result*.

**Key Points:**
- "Poly" = many, "morph" = shapes. Many shapes of behavior from one command.
- In code, we can put a `Dog`, a `Cat`, and a `Bird` all in one list and loop over them, calling the **same** `.make_sound()` on each — and each responds its own way.
- We never write `if animal is a dog: bark, elif ...`. Python automatically runs the right version. That's the magic — it keeps our code short and easy to extend.

#### Activity: Mixed Animal Loop (20 minutes)
**Code to write together (mirrors `code_examples/day8/04_polymorphism_in_action.py`):**
```python
animals = [Dog("Buddy"), Cat("Whiskers"), Bird("Tweety"), Dog("Rex")]

for animal in animals:
    animal.make_sound()   # SAME call - each animal answers differently!
```

**Teaching Points:**
- The list holds different *kinds* of objects, all mixed together — that's allowed because they're all `Pet`s underneath.
- The loop body is one line and never checks the type. Adding a new animal kind later means writing one new subclass — the loop doesn't change at all.
- Connect back: this is *why* overriding is useful. Overriding gives each object its own behavior; polymorphism lets us treat them all the same when we want to.

---

### Part 5: Guided Practice – Interactive Animal Shelter (30 minutes)

**Goal:** Combine everything — a parent class, subclasses with overridden `make_sound()`, `super().__init__()`, a list of mixed objects, input, and a loop — into one interactive program.

**Step-by-step idea (mirrors `code_examples/day8/05_interactive_animal_shelter.py`):**
1. Define `Pet` (parent) with `make_sound()` and `describe()`.
2. Define `Dog`, `Cat`, `Bird` subclasses, each calling `super().__init__(name, "...")` and overriding `make_sound()`.
3. Keep an empty `shelter = []` list.
4. Show a menu: add a dog / add a cat / add a bird / hear all animals / quit. Adding appends the right subclass object to the list.
5. "Hear all animals" loops over the list calling `make_sound()` — polymorphism in action.

Walk through it together, then let students add a new animal type (a `Cow`, a `Rabbit`) and watch it slot right into the same loop.

---

## Key Concepts Summary

### Inheritance
One class (the **subclass** / child) reusing everything from another class (the **parent** / base). Written as `class Dog(Pet):`. The subclass gets the parent's attributes and methods for free.

### Parent / Child (Base / Subclass)
The parent is the general class (`Pet`). The child is the more specific class (`Dog`) that inherits from it. A `Dog` "is a" `Pet`.

### `super().__init__(...)`
Calls the **parent class's** `__init__` from inside the subclass, so the parent's setup runs without being copied. Lets the subclass add its own extra attributes on top.

### Overriding
Writing a method in the subclass with the **same name** as one in the parent. The subclass's version replaces the parent's when called on a subclass object. Methods that aren't overridden are still inherited.

### Polymorphism
"Many shapes." Calling the **same** method (like `make_sound()`) on different objects and getting different behavior for each — often by looping over a list of mixed objects. No `if`/`elif` type-checking needed.

---

## Assessment Checkpoints

### Can they:
- [ ] Write `class Dog(Pet):` and explain that Dog reuses Pet's code?
- [ ] Explain, in their own words, what inheritance is (family / "is a")?
- [ ] Use `super().__init__(...)` to set up a subclass and add one extra attribute?
- [ ] Override `make_sound()` in a subclass so it does something specific?
- [ ] Put several different animal objects in a list and loop calling the same method, and explain why each behaves differently?

### Engagement Indicators:
- Inventing their own animal subclasses (a `Cow`, a `Dragon`, a `Robot`)
- Asking "can I add a method only the dog has?" unprompted
- Noticing that adding a new subclass didn't require changing the loop

---

## Extension Activities (for fast learners)
- Add a subclass method the others don't have (e.g. `Dog.fetch()`), and call it only on dogs.
- Override `describe()` in one subclass so it adds a special line, and see the others still use the parent's.
- Add a `Cow`, `Duck`, or `Fish` subclass and drop it straight into the existing polymorphism loop.
- Give a sneak peek: "Day 9 we'll pull everything together into a bigger project!"

---

## Troubleshooting Guide

### Common Issues:

**Issue:** `AttributeError: 'Dog' object has no attribute 'name'`
- **Cause:** The subclass wrote its own `__init__` but forgot to call `super().__init__(...)`, so the parent never set `self.name`.
- **Solution:** Add `super().__init__(name, "dog")` as the first line of the subclass's `__init__`.

**Issue:** The subclass's `make_sound()` doesn't run — the plain "makes a sound!" prints instead.
- **Cause:** The method name in the subclass doesn't exactly match (typo, like `make_sounds` or `makesound`).
- **Solution:** Override with the **exact** same name, `make_sound`, spelled identically.

**Issue:** `TypeError: __init__() takes 2 positional arguments but 3 were given` (or similar)
- **Cause:** The number of arguments passed to the subclass doesn't match its `__init__`, or the `super().__init__(...)` call passes the wrong number to the parent.
- **Solution:** Line up the arguments carefully — check both the subclass `__init__` and its `super().__init__(...)` call against `Pet`'s `__init__`.

**Issue:** `NameError: name 'Pet' is not defined` when writing `class Dog(Pet):`
- **Cause:** The parent class `Pet` is defined *below* `Dog`, or wasn't defined at all.
- **Solution:** Always define the parent class **before** any subclass that inherits from it.

**Issue:** Student thinks they must copy all the parent's methods into the subclass.
- **Cause:** Not yet trusting that inheritance reuses them automatically.
- **Solution:** Delete the copied methods and show it still works — the subclass inherited them. Only write what's *different*.

---

## Homework/Preview (Optional)

**For next time:**
- Think of a "family" of things that share a base but each differ: shapes (Circle, Square), vehicles (Car, Bike, Boat), or game characters (Wizard, Knight, Archer). What would the parent class have? What would each child override?
- Preview: Day 9 pulls everything from the whole course together into a bigger project!

---

## Notes for Instructor
- **Pace:** Inheritance is a big new idea — anchor everything to the concrete `Pet` → `Dog`/`Cat`/`Bird` example. Avoid abstract talk; keep drawing the family tree on the board.
- **Build on Day 7:** Students must already be comfortable with classes, `__init__`, attributes, and methods. If they're shaky, spend a few minutes reviewing Day 7 first.
- **`super()` is the trickiest bit.** Emphasize the "parent, do your setup first" framing. The most common bug is forgetting to call it.
- **Let the payoff land.** Part 4's polymorphism loop is the "wow" moment — pause and let them notice how one loop handles every animal. That's what makes inheritance worth it.
- **Energy:** Let students invent silly animal subclasses (a `Dragon`, a `Dinosaur`) — ownership keeps engagement high, and every new subclass reinforces the pattern.
- **End Goal:** Students should leave able to write a subclass, override a method, use `super().__init__()`, and explain why a list of mixed objects can all answer the same call differently.
