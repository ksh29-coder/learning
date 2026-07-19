# Day 7 - Methods
# Methods are actions an object can do. They're just functions defined inside a class.
# Every method's first parameter is "self" - it means "this particular object".

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

# Calling methods with dot notation - self is filled in automatically
my_pet.describe()
print()

my_pet.feed()
my_pet.play()
my_pet.make_sound()
print()

my_pet.describe()

print()

# A method can also take its own parameters, after self
class FriendlyPet:
    def __init__(self, name, animal_type):
        self.name = name
        self.animal_type = animal_type

    def greet(self, person_name):
        print(self.name, "wags excitedly at", person_name + "!")

friendly_pet = FriendlyPet("Rex", "dog")
friendly_pet.greet("Michael")
friendly_pet.greet("Isabella")

# Challenge ideas:
# 1. Add a new method called nap() that increases happiness and prints a message.
# 2. Call feed() three times in a row and describe() after each call - watch hunger_level change.
# 3. Write a method is_hungry(self) that prints True if hunger_level is greater than 6.
