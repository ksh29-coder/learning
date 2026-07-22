# Day 5 - Functions with Parameters
# Functions that take information (inputs) and use it.

# A function that greets a person by name
def greet_person(name):
    print("Hello,", name, "!")
    print("Nice to meet you, " + name + "!")


# A function with two parameters
def describe_pet(pet_name, animal_type):
    print("I have a", animal_type, "named", pet_name + ".")


# Using the functions
greet_person("Alex")
greet_person("Jordan")

print()

describe_pet("Buddy", "dog")
describe_pet("Whiskers", "cat")

print()

# Combining input() with functions
their_name = input("What is your name? ")
print()
greet_person(their_name)

print()
print("End of functions with parameters example.")

# Challenge ideas:
# 1. Call greet_person() with the names of everyone in your family.
# 2. Write a favorite_food(name, food) function with TWO parameters.
# 3. What happens if you swap the arguments: describe_pet("dog", "Buddy")?
#    Try it and see why ORDER matters!
