# Day 5 - Functions with Parameters
# Functions that take information (inputs) and use it.

# A function that greets a person by name

# def greet_person(name):
#     print("Hello,",name, "!")
#     print("Nice to meet you, " + name +"!")
#     animal  = input("What's your favourite animal?")
#     print("Nice, my animal is also a " + animal)

# # A function with two parameters

# def describe_pet(pet_name, animal_type):
#     print("I have a", animal_type, "named", pet_name + ".")

def end_conversion(name):
    print("It was nice talking to you" + name + "!")
    print("Where should we hang out?")
    location = input("The liberary, the mall or a resturant?")
    if location.lower() == "liberary":
        print("Nice, I love some quiet time!")
    elif location.lower() == "mall":
        print("What should we buy there?")
    else:
        print("What kind of resturant?")

# Using the functions

# greet_person("Alex")
# greet_person("Jordan")

# print()
name = "Michael"
# describe_pet("Buddy", "dog")
# describe_pet("Whiskers", "cat")
end_conversion(name)
# their_name = input("What is your name? ")
# print()
# greet_person(their_name)

# print()
# print("End of functions with parameters example.")
