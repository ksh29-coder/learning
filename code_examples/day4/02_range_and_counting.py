# Day 4 - Example 2: Using range() for Counting
# range() helps us tell the loop how to count.

print("Counting from 1 to 10:")
for number in range(1, 11):
    print(number)

print()

print("Even numbers from 2 to 10:")
# range(start, stop, step) - here we step by 2
for number in range(2, 11, 2):
    print(number)

print()

print("Countdown from 5 to 1:")
# We can also count DOWN by using a negative step
for number in range(5, 0, -1):
    print(number)

print("Blast off! 🚀")

print()

# Multiplication table
number = int(input("Enter a number to see its times table: "))

print("Here is the times table for", number)
for i in range(1, 13):
    result = number * i
    print(number, "x", i, "=", result)

# Challenge ideas:
# 1. Change the table to go from 1 to 12 instead of 1 to 10.
# 2. Make a loop that only prints multiples of 5 between 5 and 50.
# 3. Make a loop that counts by 3s: 3, 6, 9, ... up to 30.
