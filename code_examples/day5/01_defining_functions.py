# Day 5 - Defining Functions
# A function is a named block of code we can run again and again just by calling its name.

# This defines the function - nothing happens yet!
def say_hello():
    print("Hello!")
    print("Welcome to Day 5: Functions!")

# This calls (runs) the function
say_hello()

print()

# We can call the same function as many times as we want
say_hello()
say_hello()

print()

# Functions can have different jobs
def greet_morning():
    print("Good morning! ☀️")

def greet_afternoon():
    print("Good afternoon! 😎")

def greet_night():
    print("Good night! 🌙")

greet_morning()
greet_afternoon()
greet_night()

print()

# Functions help us avoid repeating code
def print_border():
    print("=" * 30)

print_border()
print("Welcome to the game!")
print_border()
print("Choose your character")
print_border()

# Challenge ideas:
# 1. Add your own greet_birthday() or greet_new_year() function.
# 2. Change the message inside print_border() and see it update everywhere it's used.
# 3. Write a function called show_title() that prints your name in a fancy box.
