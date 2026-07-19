# Day 2 - Example 2: Strings vs Numbers
# Learn the difference between text and numbers!

# STRINGS are text - they go in quotes
name = "Alex"
favorite_food = "Pizza"
greeting = "merry xmas!"

# NUMBERS don't need quotes!
age = 10
number_of_pets = 2
favorite_number = 7


print("=" * 35)
print("String Variables (text):")
print("=" * 30)
print("Name:", name)
print("Favorite Food:", favorite_food)
print("Greeting from Michael:", greeting, " and Happy New Year!")
print("Greeting from Daddy:", greeting, " and Happy New Year!")


print()
print("=" * 30)
print("Number Variables:")
print("=" * 30)
print("Age:", age)
print("Number of Pets:", number_of_pets)
print("Favorite Number:", favorite_number)

# We can do math with numbers!
print()

print("Next year I'll be", age + 1, "years old")
print("If I had 3 more pets, I'd have", age + 3, "pets")

# Challenge: Try changing the values and see what happens!



def callwhaterIwant(name):
    print("Greeting from", name, "and Merry Christmas!")
    print("Greeting from", name, "and Happy New Year!")




callwhaterIwant("daddy")
print("--------------------------------")
callwhaterIwant("michael")




