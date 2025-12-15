# Day 4 - Example 4: Interactive Quiz with Loops
# Let's use a loop to ask several questions and keep score!

# print("=" * 40)
# print("   LOOP PRACTICE QUIZ 🎯")
# print("=" * 40)
# print()

# questions = [
#     {
#         "question": "How many times does range(5) loop? ",
#         "answer": "5"
#     },
#     {
#         "question": "What keyword do we use for a counting loop? (for/if) ",
#         "answer": "for"
#     },
#     {
#         "question": "What keyword do we use for a loop that runs while a condition is True? ",
#         "answer": "while"
#     },
#     {
#         "question": "What should we NEVER forget inside a while loop so it can stop? ",
#         "answer": "change the variable"
#     }
# ]

# score = 0

# # Ask each question using a for loop
# for q in questions:
#     print(q["question"])
#     user_answer = input("Your answer: ")

#     # we'll compare in a simple way (ignore upper/lower case and spaces)
#     clean_user = user_answer.strip().lower()
#     clean_correct = q["answer"].strip().lower()

#     if clean_user == clean_correct or clean_correct in clean_user:
#         print("Correct! ✅")
#         score = score + 1
#     else:
#         print("Not quite. The main idea was:", q["answer"], "❌")

#     print()

# print("=" * 40)
# print("   QUIZ RESULTS")
# print("=" * 40)
# print("You got", score, "out of", len(questions), "correct!")

# if score == len(questions):
#     print("Perfect score! Loop legend! 🌟")
# elif score >= 2:
#     print("Great job! Keep practicing loops! 💪")
# else:
#     print("Nice try! Review for/while loops and try again! 📚")

# print()
# print("Thanks for practicing loops! 🔁")

answer = ""
while answer.lower != "michael":
    answer = input("Who am I?")