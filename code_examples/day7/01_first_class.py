# Day 7 - Your First Class
# A class is a blueprint for making objects. Think of it like a cookie cutter -
# the cutter isn't a cookie, but you use it to make cookies!

# This defines the blueprint - no pets exist yet!
class Pet:
    pass

# This creates an object (an "instance") of the Pet class
my_pet = Pet()
print(my_pet)
print(type(my_pet))

print()

# We can make more than one object from the same class
second_pet = Pet()
print(second_pet)

print()

# Even though they came from the same blueprint, they are two separate objects
print("Are they the same object?", my_pet is second_pet)

# Challenge ideas:
# 1. Create a third Pet object called third_pet and print it.
# 2. Print type(second_pet) - what does Python say it is?
# 3. Try making a class called Robot (just "class Robot: pass") and create two Robot objects.
