# Day 4 - Example 5: break and continue
# Two magic words that give YOU control of the loop!
# break    = STOP the loop right now and jump out
# continue = SKIP the rest of this turn and go to the next one

# --- break: emergency exit! 🚪 ---
print("Type words and I'll repeat them.")
print("Type 'stop' when you're done.")
print()

while True:  # this would loop forever...
    word = input("Say something (or 'stop'): ")

    if word.lower() == "stop":
        print("Okay, stopping! 👋")
        break  # ...but break jumps us out of the loop!

    print("You said:", word)

print()

# --- continue: skip this one! ⏭️ ---
print("Counting from 1 to 10, but SKIPPING 7 (shhh, it's unlucky):")

for number in range(1, 11):
    if number == 7:
        continue  # skip the print below and jump to the next number
    print(number)

print("Did you spot the missing 7? 🕵️")

print()

# --- both together: a picky snack machine 🍿 ---
print("The snack machine only likes snacks that start with 'c'!")
print("Type 'quit' to leave the machine.")

while True:
    snack = input("Feed me a snack (or 'quit'): ")

    if snack.lower() == "quit":
        print("Goodbye! Come back hungry! 🤖")
        break

    # snack.lower()[0:1] is the first letter (string slicing from Day 2!)
    if not snack.lower()[0:1] == "c":
        print("Yuck! I only eat snacks that start with 'c'. Try again!")
        continue

    print("Mmm,", snack, "is delicious! 😋")

# Challenge ideas:
# 1. Make the counting loop skip ALL even numbers using continue
# 2. Make a guessing game that breaks out when the guess is right
# 3. Change the snack machine to like snacks that start with YOUR initial
