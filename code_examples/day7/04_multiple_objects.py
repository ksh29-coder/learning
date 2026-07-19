# Day 7 - Multiple Objects from the Same Class
# Each object made from a class has its OWN separate attribute values.
# Changing one object never changes another, even if they came from the same class.

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

    def describe(self):
        print(self.name, "is a", self.animal_type + ".")
        print("Hunger:", self.hunger_level, "/ 10   Happiness:", self.happiness, "/ 10")


# Three separate objects, all made from the same Pet class
dog = Pet("Buddy", "dog")
cat = Pet("Whiskers", "cat")
bird = Pet("Tweety", "bird", hunger_level=2)

dog.feed()
dog.play()

print()

dog.describe()     # Buddy was fed and played with
cat.describe()      # Whiskers was never touched - still starts at the defaults!
bird.describe()      # Tweety started less hungry

print()
print("=" * 40)
print()

# We can put objects in a list and loop over them
pets = [dog, cat, bird]

for pet in pets:
    pet.describe()
    print()

# Challenge ideas:
# 1. Create a fourth pet and add it to the pets list, then run the loop again.
# 2. Call feed() on cat and play() on bird, then describe() all three pets again.
# 3. Write a loop that only prints pets whose hunger_level is above 5.
