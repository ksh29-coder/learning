# Day 5 - Using Libraries (Functions Other People Wrote!)
# You've been WRITING functions all day. A library is a box full of
# functions that OTHER people already wrote for you. The word "import"
# opens the box so you can use what's inside!

# Step 1: import the "random" library (a box of surprise-making functions)
import random

print("🎲 Welcome to the Dice & Magic 8-Ball Show! 🎱")
print()

# random.randint(low, high) returns a random whole number from low to high
# (BOTH ends included - so this really can roll a 1 or a 6)
dice = random.randint(1, 6)
print(f"You rolled the dice... it's a {dice}!")

# Roll again - you'll (probably) get a different number each run!
dice = random.randint(1, 6)
print(f"You rolled again... it's a {dice}!")

print()

# random.choice(a_list) picks ONE random item from a list
snack = random.choice(["pizza", "sushi", "tacos", "ice cream"])
print(f"The computer picks your snack: {snack} 😋")

print()

# Let's build a Magic 8-Ball with random.choice!
print("🎱 Ask the Magic 8-Ball a yes/no question!")
question = input("Your question: ")

answer = random.choice([
    "Yes, definitely! ✨",
    "No way! 🙅",
    "Maybe... 🤔",
    "Ask again later. 😴",
    "Signs point to YES! 👍"
])

print("The Magic 8-Ball says...")

# Step 2: another way to import - grab ONE function out of the "time" box.
# After this, we can write sleep(1) instead of time.sleep(1).
from time import sleep

sleep(1)  # wait 1 second... build the suspense! ⏳
print("...")
sleep(1)  # wait 1 more second...
print(answer)

print()
print("End of using libraries example.")

# Challenge ideas:
# 1. Change the dice to a 20-sided dice: random.randint(1, 20)
# 2. Add more answers to the Magic 8-Ball list.
# 3. Use a for loop to roll the dice 5 times.
# 4. Make the suspense longer with sleep(2)!
