# Day 4 - Example 3: While Loops
# While loops repeat WHILE a condition is True.

print("Countdown using a while loop:")

count = 5

while count > 0:
    print("Counting down:", count)
    count = count - 1  # make the count smaller each time

print("Blast off! 🚀")

print()

# Asking until the user types "stop"
print("Type 'stop' to end the loop.")

word = ""

while word != "stop":
    word = input("Type a word (or 'stop' to finish): ")
    print("You typed:", word)

print("Loop ended. Goodbye! 👋")

# IMPORTANT:
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

print()

# Bonus: a REAL countdown timer that waits 1 second between numbers
from time import sleep  # 'import' lets us borrow tools — you'll learn all about this on Day 5!

print("Real 3-second countdown:")
timer = 3

while timer > 0:
    print(timer)
    sleep(1)  # wait 1 second
    timer = timer - 1

print("Go! 🏁")
