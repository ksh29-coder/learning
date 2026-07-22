# Day 4 - Example 1: Basic For Loops
# Loops let us repeat code without copying it many times!

# Simple for loop that prints "Hello!" 5 times
for i in range(5):
    print("Hello!")

# Try changing the 5 above to 2, 10, or 1.
# How many times does it print when you change the number?

print()
print("Counting from 1 to 5:")

# range(1, 6) counts 1, 2, 3, 4, 5
for number in range(1, 6):
    print(number)

print()

# You can use the loop variable inside the message
for step in range(1, 4):
    print("Step", step, "- Keep going! 🚶")

# Challenge ideas:
# 1. Make a loop that prints your name 10 times.
# 2. Make a loop that prints "Push-up" with numbers from 1 to 15.
# 3. Make a loop that counts from 5 to 9.
