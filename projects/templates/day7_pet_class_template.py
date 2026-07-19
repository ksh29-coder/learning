# Day 7 Project: Pet Class Simulator
# Fill in the blanks and make it your own!

# ============================================
# THE Pet CLASS - our blueprint!
# ============================================

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
        self.hunger_level = min(10, self.hunger_level + 1)
        print(self.name, "plays and has a blast! 🎾")

    def make_sound(self):
        print(self.name, "makes a happy little sound!")

    def describe(self):
        print(self.name, "is a", self.animal_type + ".")
        print("Hunger:", self.hunger_level, "/ 10   Happiness:", self.happiness, "/ 10")


# ============================================
# YOUR PET SIMULATOR STARTS HERE
# ============================================
print("=" * 40)
print("   🐾 MY PET SIMULATOR 🐾")
print("=" * 40)
print()
print("Welcome! Let's create some pets and take care of them.")
print()

# ============================================
# CREATE A COUPLE OF PETS (objects made from the Pet class)
# ============================================
dog = Pet("Buddy", "dog")
cat = Pet("Whiskers", "cat", hunger_level=7)

print("Meet your pets:")
dog.describe()
print()
cat.describe()
print()

# ============================================
# A SIMPLE INTERACTIVE LOOP
# ============================================
print("Let's take care of Buddy the dog!")
running = True
while running:
    print()
    print("What do you want to do with", dog.name + "?")
    print("1. Feed")
    print("2. Play")
    print("3. Make sound")
    print("4. Describe")
    print("5. Switch to Whiskers the cat")
    print("6. Quit")
    choice = input("Choose 1-6: ")

    if choice == "1":
        dog.feed()
    elif choice == "2":
        dog.play()
    elif choice == "3":
        dog.make_sound()
    elif choice == "4":
        dog.describe()
    elif choice == "5":
        print("(This template only controls Buddy for now - see CHALLENGES below!)")
    elif choice == "6":
        running = False
    else:
        print("Please choose a number from 1 to 6.")

print()
print("=" * 40)
print("Final stats:")
dog.describe()
cat.describe()
print("Thanks for playing! 🎉")
print("=" * 40)

# ============================================
# CHALLENGES:
# ============================================
# 1. Make the menu actually control BOTH pets - let the player pick which pet
#    to act on before showing the feed/play/sound/describe menu.
# 2. Add a new attribute to Pet, like "energy_level" or "favorite_toy".
# 3. Add a new method, like nap(self) or rename(self, new_name).
# 4. Add a third pet (maybe a bird!) with its own starting hunger_level.
# 5. Add an is_hungry(self) method that returns True if hunger_level > 6,
#    and print a warning in the menu loop if any pet is hungry.
# 6. Keep all your pets in a list and write a loop that calls describe() on
#    every pet in the list at the end of the program.
# 7. Add a scoring system: give the player a point every time they feed or
#    play with a pet, and print the total score at the end.

# ============================================
# TIPS:
# ============================================
# - Remember: every method needs "self" as its first parameter.
# - Remember: attributes are set with self.attribute_name = value inside __init__.
# - Use dot notation to read or call things on an object: dog.name, dog.feed().
# - Test your program often - run it and try every menu option!
# - Save your work frequently (Ctrl+S / Cmd+S).
# - If you get "AttributeError", check that you spelled the attribute name
#   the same way everywhere (self.hunger_level, not self.hungerLevel one place
#   and self.hunger_level another).
