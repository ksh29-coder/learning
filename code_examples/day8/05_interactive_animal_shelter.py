# Day 8 - Interactive Animal Shelter
# Putting it all together: a parent Pet class, three subclasses (Dog, Cat, Bird)
# that override make_sound(), and a menu loop that lets the player ADD different
# kinds of animals, then hear them all at once using polymorphism.

class Pet:
    def __init__(self, name, animal_type):
        self.name = name
        self.animal_type = animal_type

    def make_sound(self):
        print(self.name, "makes a sound!")

    def describe(self):
        print(self.name, "is a", self.animal_type + ".")


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


print("=" * 40)
print("   🏠 WELCOME TO THE ANIMAL SHELTER 🏠")
print("=" * 40)
print()

# We keep ALL our animals - dogs, cats, and birds - in ONE list together.
shelter = []

running = True
while running:
    print()
    print("What do you want to do?")
    print("1. Add a dog")
    print("2. Add a cat")
    print("3. Add a bird")
    print("4. Hear all the animals (polymorphism!)")
    print("5. Quit")
    choice = input("Choose 1-5: ")

    if choice == "1":
        name = input("What's the dog's name? ")
        shelter.append(Dog(name))
        print(name, "the dog joined the shelter!")
    elif choice == "2":
        name = input("What's the cat's name? ")
        shelter.append(Cat(name))
        print(name, "the cat joined the shelter!")
    elif choice == "3":
        name = input("What's the bird's name? ")
        shelter.append(Bird(name))
        print(name, "the bird joined the shelter!")
    elif choice == "4":
        if len(shelter) == 0:
            print("The shelter is empty! Add some animals first.")
        else:
            print()
            print("🔊 Listen to all", len(shelter), "animals:")
            # Same call for every animal - each one answers in its own way!
            for animal in shelter:
                animal.make_sound()
    elif choice == "5":
        running = False
    else:
        print("Please choose a number from 1 to 5.")

print()
print("=" * 40)
print("The shelter has", len(shelter), "animals. Thanks for visiting! 🐾")
print("=" * 40)

# Challenge ideas:
# 1. Add a "6. Describe all animals" option that loops and calls describe() on each.
# 2. Add a new animal type, like a Rabbit(Pet) that says "Squeak!".
# 3. Count how many of each animal type are in the shelter and print a summary.
# 4. Only let the player hear the dogs by using isinstance(animal, Dog) in the loop.
