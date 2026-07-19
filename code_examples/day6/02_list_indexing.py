# Day 6 - List Indexing
# Every item in a list has a position number called an "index".
# Python starts counting at 0, not 1!

fruits = ["apple", "banana", "cherry", "date"]

# Positive indexing - counting from the START (position 0)
print(fruits[0])   # apple - the FIRST item
print(fruits[1])   # banana - the SECOND item
print(fruits[2])   # cherry - the THIRD item
print(fruits[3])   # date - the FOURTH item

print()

# Negative indexing - counting from the END
print(fruits[-1])  # date - the LAST item
print(fruits[-2])  # cherry - the SECOND TO LAST item

print()

# Slicing - grabbing a chunk of the list at once
numbers = [10, 20, 30, 40, 50]
print(numbers[1:3])   # [20, 30] - starts at index 1, stops BEFORE index 3
print(numbers[:2])    # [10, 20] - everything from the start up to (not including) index 2
print(numbers[2:])    # [30, 40, 50] - everything from index 2 to the end

print()

# Uncomment the line below to see what happens when you go out of bounds!
# print(fruits[10])   # This will cause an IndexError

# Challenge ideas:
# 1. Print the 2nd and 3rd fruits in the list using positive indexing.
# 2. Print the last TWO fruits using negative indexing.
# 3. Use slicing to print only the middle two numbers from the numbers list.
# 4. What is fruits[-4]? Try to guess before running the code!
