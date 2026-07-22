# Michael's Day 4 Experiments 🧪
# This is YOUR playground! Code moved here from the reference examples
# so the examples stay clean — keep experimenting as much as you like!

from time import sleep  # 'import' lets us borrow tools — you'll learn all about this on Day 5!

# Experiment 1: Hello with numbers (from 01_basic_for.py)
for i in range(0, 5, 1):
    print("Hello!" + str(i))

# Experiment 2: Push-up counter (from 01_basic_for.py)
for i in range(1, 16, 1):
    print("Push-up" + str(i))

# Experiment 3: Giant triangle animation (from 02_range_and_counting.py)
iteration = 100

for i in range(1, iteration, 1):
    j = iteration - 1 - i
    if i == 1:
        k = 1
    else:
        k = i * 2
    print(" " * j + "x" * k)
    sleep(0.1)

# Experiment 4: Slow-motion countdown (from 03_while_loops.py)
h = 10
while h != 0:
    print(h)
    sleep(1)
    h = h - 1

print("Blast off!")

# Experiment 5: "Who am I?" guessing loop (from 04_interactive_loop_quiz.py)
# Bug fixed! It used to say answer.lower (missing parentheses), which is
# never equal to a string — so the loop could NEVER stop. With () it works!
answer = ""
while answer.lower() != "michael":
    answer = input("Who am I? ")

print("Yes! It's Michael! 🎉")
