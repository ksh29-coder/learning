# Day 8 - Overriding Methods
# A subclass can REPLACE a method it inherited with its own version.
# This is called "overriding". The child's version wins when you call the method.
# Here, every animal makes a DIFFERENT sound by overriding make_sound().

class Pet:
    def __init__(self, name, animal_type, hunger_level=5):
        self.name = name
        self.animal_type = animal_type
        self.hunger_level = hunger_level
        self.happiness = 5

    def make_sound(self):
        # The generic, boring version - subclasses will make this better!
        print(self.name, "makes a sound!")

    def describe(self):
        print(self.name, "is a", self.animal_type + ".")


# Each subclass writes its OWN make_sound() to override the plain one from Pet.
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


dog = Dog("Buddy")
cat = Cat("Whiskers")
bird = Bird("Tweety")

# Same method name, but each subclass runs its OWN version!
dog.make_sound()      # Woof woof!
cat.make_sound()      # Meow!
bird.make_sound()     # Tweet tweet!

print()

# describe() was NOT overridden, so all three still use Pet's version.
dog.describe()
cat.describe()
bird.describe()

# Challenge ideas:
# 1. Add a Cow(Pet) subclass that overrides make_sound() to print "Moo!".
# 2. Give Dog its own describe() that also mentions it's a good boy, overriding Pet's.
# 3. Add a make_sound() to a Fish(Pet) - what sound does a fish make? (Get creative!)
