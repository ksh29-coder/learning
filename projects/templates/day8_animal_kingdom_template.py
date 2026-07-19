# Day 8 Project: Animal Kingdom
# Build a family of animals that all share a blueprint but each act their own way!
# Fill in the blanks and make it your own!

# ============================================
# THE Animal PARENT CLASS - the shared blueprint!
# ============================================
# Every animal has a name and can make a sound. The plain make_sound() here
# is boring on purpose - each specific animal below will override it!

class Animal:
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

    def describe(self):
        print(self.name, "is a", self.animal_type + ".")
        print("Hunger:", self.hunger_level, "/ 10   Happiness:", self.happiness, "/ 10")


# ============================================
# SUBCLASSES - each one INHERITS from Animal
# and OVERRIDES make_sound() with its own sound!
# ============================================

class Dog(Animal):
    def __init__(self, name):
        super().__init__(name, "dog")   # super() runs Animal's __init__ for us

    def make_sound(self):
        print(self.name, "says: Woof woof! 🐶")


class Cat(Animal):
    def __init__(self, name):
        super().__init__(name, "cat")

    def make_sound(self):
        print(self.name, "says: Meow! 🐱")


class Bird(Animal):
    def __init__(self, name):
        super().__init__(name, "bird")

    def make_sound(self):
        print(self.name, "says: Tweet tweet! 🐦")


# ============================================
# YOUR ANIMAL KINGDOM STARTS HERE
# ============================================
print("=" * 40)
print("   🦁 WELCOME TO THE ANIMAL KINGDOM 🦁")
print("=" * 40)
print()

# ============================================
# CREATE SOME ANIMALS (objects made from the subclasses)
# ============================================
dog = Dog("Buddy")
cat = Cat("Whiskers")
bird = Bird("Tweety")

# ============================================
# PUT THEM ALL IN ONE LIST - even though they are different kinds!
# ============================================
kingdom = [dog, cat, bird]

# ============================================
# POLYMORPHISM: same call, different result for each animal!
# ============================================
print("Every animal makes its own sound:")
print("-" * 40)
for animal in kingdom:
    animal.make_sound()      # Python runs the RIGHT make_sound() for each one!
print("-" * 40)
print()

# Methods that were NOT overridden still come from the Animal parent class:
print("Let's describe each animal:")
for animal in kingdom:
    animal.describe()
    print()

print("=" * 40)
print("That's the whole kingdom! 🎉")
print("=" * 40)

# ============================================
# CHALLENGES:
# ============================================
# 1. Add a new subclass, like Cow(Animal) or Duck(Animal), that overrides
#    make_sound() with its own sound. Then add one to the kingdom list.
# 2. Give one subclass an EXTRA method the others don't have - for example,
#    Dog.fetch() that prints "Buddy fetches the ball!".
# 3. Give a subclass an extra attribute using super().__init__ plus one more line,
#    like Dog with self.trick = "roll over", and print it.
# 4. Make an interactive menu (like Day 7!) that lets the player add animals
#    of different types, then hear them all with a loop.
# 5. Add a make_sound() override that uses the animal's name AND a special phrase.
# 6. Loop through the kingdom and call feed() on every animal, then describe() them.

# ============================================
# TIPS:
# ============================================
# - "class Dog(Animal):" means Dog INHERITS everything from Animal.
# - super().__init__(...) runs the PARENT'S __init__ so you don't repeat yourself.
# - Overriding = writing a method with the SAME name in the subclass; the
#   subclass's version wins when you call it.
# - Polymorphism = same method call (animal.make_sound()) on different objects,
#   and each object responds in its own way. No if/elif needed!
# - Class names start with a Capital letter: Animal, Dog, Cat, Bird.
# - Test your program often - run it and watch each animal make its own sound!
# - Save your work frequently (Ctrl+S / Cmd+S).
