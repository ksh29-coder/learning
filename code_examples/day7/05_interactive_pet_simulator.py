# Day 7 - Interactive Pet Simulator
# Putting it all together: a class with attributes and methods, one object,
# and a menu loop driven by input() that calls different methods.

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


print("=" * 40)
print("   🐾 PET SIMULATOR 🐾")
print("=" * 40)
print()

pet_name = input("What's your pet's name? ")
pet_type = input("What kind of animal is it? ")

my_pet = Pet(pet_name, pet_type)
print()
print("You created a new pet!")
my_pet.describe()

running = True
while running:
    print()
    print("What do you want to do?")
    print("1. Feed")
    print("2. Play")
    print("3. Make sound")
    print("4. Describe")
    print("5. Quit")
    choice = input("Choose 1-5: ")

    if choice == "1":
        my_pet.feed()
    elif choice == "2":
        my_pet.play()
    elif choice == "3":
        my_pet.make_sound()
    elif choice == "4":
        my_pet.describe()
    elif choice == "5":
        running = False
    else:
        print("Please choose a number from 1 to 5.")

print()
print("=" * 40)
print("Thanks for playing! Here's how", my_pet.name, "ended up:")
my_pet.describe()
print("=" * 40)

# Challenge ideas:
# 1. Add a "nap" option (option 6) that increases happiness and decreases hunger a little.
# 2. Let the player create a SECOND pet and switch between them with a menu option.
# 3. Add a rename(self, new_name) method and a menu option to use it.
# 4. Track how many total actions the player took and print that count at the end.
