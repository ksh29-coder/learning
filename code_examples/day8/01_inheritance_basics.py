# Day 8 - Inheritance Basics
# Inheritance lets a NEW class reuse everything from an existing class.
# The existing class is the "parent" (or base). The new one is the "child" (or subclass).
# Think of it like a family: a puppy inherits traits from its parent dog!

# This is our parent class from Day 7 - a general Pet.
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


# A Dog "is a" Pet - so Dog inherits from Pet.
# The (Pet) part means "Dog gets everything Pet has, for free!"
class Dog(Pet):
    pass    # We didn't add anything yet - but Dog already knows how to do everything a Pet can!


# Even though Dog has no code of its own, it inherited __init__ from Pet.
my_dog = Dog("Buddy", "dog")

# All of these methods came from Pet - Dog got them for free through inheritance!
my_dog.describe()
my_dog.feed()
my_dog.play()
my_dog.make_sound()

print()
my_dog.describe()

# Challenge ideas:
# 1. Make a second subclass "class Cat(Pet): pass" and create a Cat object.
# 2. Print type(my_dog) - Python still knows it's a Dog!
# 3. Try isinstance(my_dog, Pet) - is a Dog also a Pet? (Yes - print it and see!)
