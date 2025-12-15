# Day 3 - Example 3: Elif Statements
# Elif means "else if" - for checking multiple conditions!

# Grade calculator with elif
score = 85

if score >= 90:
    print("Grade: A - Excellent! 🌟")
elif score >= 80:
    print("Grade: B - Great job! 👍")
elif score >= 70:
    print("Grade: C - Good work! ✅")
elif score >= 60:
    print("Grade: D - Keep practicing! 📚")
else:
    print("Grade: F - Study more! 💪")

# Try changing the score value above and run again!
# What grade do you get with different scores?

# Weather decision maker
print()
print("What's the weather like?")
weather = input("Enter: sunny, rainy, snowy, or cloudy: ")

if weather == "sunny":
    print("Great day for the beach! ☀️")
    print("Don't forget sunscreen!")
elif weather == "rainy":
    print("Don't forget your umbrella! ☔")
    print("Perfect day to read a book!")
elif weather == "snowy":
    print("Time to build a snowman! ⛄")
    print("Wear warm clothes!")
elif weather == "cloudy":
    print("It's a bit cloudy today. ☁️")
    print("Good day for a walk!")
else:
    print("That's an interesting weather type!")
    print("Stay safe!")

# Number range checker
print()
number = int(input("Enter a number between 1 and 100: "))

if number >= 90:
    print("That's a very high number!")
elif number >= 50:
    print("That's a medium number.")
elif number >= 10:
    print("That's a small number.")
else:
    print("That's a very small number!")

# Challenge: Create your own elif chain!
# Ask for a day of the week and give different messages

