# Day 6 - Looping Over Lists
# Instead of checking each index one at a time, we can use a for loop
# to visit EVERY item in a list automatically.

fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print("I like", fruit)

print()

# The loop variable can be named anything we want
scores = [10, 25, 8, 40]

for score in scores:
    print("Score:", score, "- doubled:", score * 2)

print()

# Sometimes we want the position number too - combine range() and len()
for index in range(len(fruits)):
    print(index, "-", fruits[index])

print()

# Looping is also great for adding up numbers in a list
total = 0
for score in scores:
    total = total + score

print("The total of all scores is:", total)

# Challenge ideas:
# 1. Loop over the fruits list and print each fruit in ALL CAPS (hint: .upper()).
# 2. Loop over the scores list and print only the scores greater than 10.
# 3. Use a loop to find the biggest score without using max() - compare as you go!
# 4. Combine range(len(...)) with a list of your own favorite things.
