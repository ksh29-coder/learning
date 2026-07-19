# Day 7 - Attributes and __init__
# __init__ runs automatically every time we create a new object.
# It's where we set up the object's starting attributes (its data).

class Pet:
    def __init__(self, name, animal_type, hunger_level=5):
        self.name = name
        self.animal_type = animal_type
        self.hunger_level = hunger_level
        self.happiness = 5

# Creating an object passes values into __init__ (self is filled in automatically)
my_pet = Pet("Buddy", "dog")

print(my_pet.name)
print(my_pet.animal_type)
print(my_pet.hunger_level)
print(my_pet.happiness)

print()

# We can read attributes with a dot: object.attribute
print(my_pet.name, "is a", my_pet.animal_type + "!")
print("Hunger level:", my_pet.hunger_level, "/ 10")

print()

# We can also change an attribute after the object is created
my_pet.happiness = 10
print(my_pet.name, "is now super happy:", my_pet.happiness, "/ 10")

print()

# hunger_level has a default value, so we don't have to pass it every time
sleepy_cat = Pet("Whiskers", "cat", hunger_level=8)
print(sleepy_cat.name, "hunger level:", sleepy_cat.hunger_level)

# Challenge ideas:
# 1. Add a new attribute called "age" to __init__ and print it.
# 2. Create your own pet with a different name and animal_type.
# 3. Change my_pet's hunger_level directly (like we did with happiness) and print it.
