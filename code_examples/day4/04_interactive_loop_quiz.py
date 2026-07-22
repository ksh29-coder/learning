# Day 4 - Example 4: Interactive Quiz with Loops
# Let's use loops to ask questions and keep score!

print("=" * 40)
print("   LOOP PRACTICE QUIZ 🎯")
print("=" * 40)
print()

score = 0

# Question 1: a while loop that keeps asking until the answer is right!
print("Question 1: How many times does range(5) loop?")
answer = ""

while answer.strip() != "5":
    answer = input("Your answer: ")
    if answer.strip() != "5":
        print("Not quite — try again! 🤔")

print("Correct! range(5) loops 5 times. ✅")
score = score + 1
print()

# Question 2: a for loop that gives you up to 3 tries
print("Question 2: What keyword starts a counting loop? (hint: f__)")

for attempt in range(1, 4):
    answer = input("Try " + str(attempt) + " of 3: ")

    if answer.strip().lower() == "for":
        print("Correct! ✅")
        score = score + 1
        break  # stop looping early — we got it right!
    else:
        print("Not quite. ❌")

print()

# Question 3: one more, with 3 tries again
print("Question 3: What keyword makes a loop that runs while a condition is True?")

for attempt in range(1, 4):
    answer = input("Try " + str(attempt) + " of 3: ")

    if answer.strip().lower() == "while":
        print("Correct! ✅")
        score = score + 1
        break
    else:
        print("Not quite. ❌")

print()
print("=" * 40)
print("   QUIZ RESULTS")
print("=" * 40)
print("You got", score, "out of 3 correct!")

if score == 3:
    print("Perfect score! Loop legend! 🌟")
elif score == 2:
    print("Great job! Keep practicing loops! 💪")
else:
    print("Nice try! Review for/while loops and try again! 📚")

print()
print("Thanks for practicing loops! 🔁")

# Challenge ideas:
# 1. Add a 4th question of your own
# 2. Give a bonus point for answering on the first try
# 3. Change the questions to be about your favorite topic
