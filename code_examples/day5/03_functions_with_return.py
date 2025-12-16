# Day 5 - Functions that Return Values
# Functions can give back answers using the word "return".

# A function that adds two numbers and returns the result

# def add_two_numbers(a, b):
#     result = a + b
#     return result

def divide (a, b):
    result = a / b
    return result
# A function that squares a number (multiplies it by itself)

# def square_number(n):
#     return n * n


# print("Let's try some math functions!")

# # Use the add_two_numbers function
# sum_result = add_two_numbers(3, 5)
# print("3 + 5 =", sum_result)

# # Use the square_number function
# square_of_4 = square_number(4)
# print("The square of 4 is", square_of_4)
a = int(input("Numerator"))
b = int(input("Denenomater"))
c = divide(a, b)
print(str(a) + "/" + str(b) + " = " + str(c))


# number = int(input("Enter a number to square: "))
# answer = square_number(number)
# print("The square of", number, "is", answer)

# print()
# print("End of functions with return example.")
