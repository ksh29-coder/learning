# Day 8 - Polymorphism in Action
# "Polymorphism" is a big word that means "many shapes".
# The idea is simple: we can give the SAME command to different objects,
# and each one responds in its OWN way. Same call, different result!

class Pet:
    def __init__(self, name, animal_type):
        self.name = name
        self.animal_type = animal_type

    def make_sound(self):
        print(self.name, "makes a sound!")


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


# Here's the magic: a list holding DIFFERENT kinds of animals all mixed together.
animals = [Dog("Buddy"), Cat("Whiskers"), Bird("Tweety"), Dog("Rex"), Cat("Mittens")]

print("Let's hear from everyone at the shelter!")
print("=" * 40)

# We loop and call the EXACT SAME method - .make_sound() - on every animal.
# We don't check what kind each one is. Python automatically runs the
# right version for each object. That's polymorphism!
for animal in animals:
    animal.make_sound()

print("=" * 40)
print("Same command (make_sound), different result for each animal!")

# Challenge ideas:
# 1. Add a Cow(Pet) subclass with its own make_sound(), then add a Cow to the list.
# 2. Add a describe() method to each subclass and loop again calling describe().
# 3. Count how many animals are in the list and print "There are N animals" before the loop.
# 4. Add a second loop that only makes the Dogs bark (hint: use isinstance(animal, Dog)).
