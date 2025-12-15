from time import sleep
# Day 4 - Example 3: While Loops
# While loops repeat WHILE a condition is True.

# print("Countdown using a while loop:")

# count = 5

# while count > 0:
#     print("Counting down:", count)
#     count = count - 1  # make the count smaller each time

# print("Blast off! 🚀")

# print()

# # Asking until the user types "stop"
# print("Type 'stop' to end the loop.")

# word = ""

# while word != "stop":
#     word = input("Type a word (or 'stop' to finish): ")
#     print("You typed:", word)

# print("Loop ended. Goodbye! 👋")

# # IMPORTANT:
# If we forget to change the variable inside the while loop,
# the condition might NEVER become False. That is called
# an "infinite loop" and the program will keep running forever!
#
# Example of a BAD infinite loop (do NOT run this):
#
# while True:
#     print("This never stops!")
#
# Always make sure your while loop has a way to stop.
h = 10
while h != 0:
    print(h)
    sleep(1)
    h = h - 1
   
print("Blast off!")
iteration = 50

for i in range(1, iteration, 1):
    j = iteration - 1 - i
    if i == 1:
        k = 1
    else:
        k = i * 2
    print(" " * j + "x" * k)
    sleep(0.1)
