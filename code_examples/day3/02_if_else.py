# Day 3 - Example 2: If/Else Statements
# Else means "otherwise" - what to do if the condition is False

# Basic if/else
age = 8

if age >= 10:
    print("You are 10 or older!")
else:
    print("You are younger than 10!")

# Try changing the age value above and run again!
# What happens with different ages?

# Another example
score = 85

if score >= 60:
    print("You passed! ✅")
else:
    print("You need to study more. 📚")

# Interactive example
print("Let's check if you can vote!")
age = int(input("How old are you? "))

if age >= 18:
    print("You can vote! 🗳️")
else:
    print("Sorry, you're too young to vote.")
    years_left = 18 - age
    print("You can vote in", years_left, "years!")

# Weather example
print()
print("What's the weather like?")
weather = input("Enter: sunny, rainy, or cloudy: ")

if weather == "sunny":
    print("Great day for the beach! ☀️")
else:
    print("Maybe stay indoors today.")

# The 'not' keyword — it flips True to False (and False to True)!
print()
is_raining = False

if not is_raining:
    print("No rain — no umbrella needed! 😎")
else:
    print("Grab your umbrella! ☔")

# 'not' also works with comparisons:
homework_done = input("Is your homework done? (yes/no): ")

if not homework_done == "yes":
    print("Better finish that homework first! 📚")
else:
    print("Awesome — free time! 🎮")

# Challenge: Create your own if/else!
# Ask the user a question and give different responses
# Extra challenge: use 'not' in one of your conditions!





