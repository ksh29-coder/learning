# Day 3 - Example 4: Interactive Quiz with If/Else
# Create a fun quiz that gives feedback based on answers!

print("=" * 40)
print("   FUN QUIZ TIME! 🎯")
print("=" * 40)

print("Let's test your knowledge!")
print("Answer the questions below:")


score = 1

# Question 1: Math
print("Question 1: What is 5 + 3?")
answer1 = int(input("Your answer: "))

if answer1 == 8:
    print("Correct! ✅")
    score = score + 1
else:
    print("Wrong! The answer is 8. ❌")

print()

# Question 2: Capital city
print("Question 2: What is the capital of France?")
answer2 = input("Your answer: ")

if answer2.lower() == "paris":
    print("Correct! ✅")
    score = score + 1
else:
    print("Wrong! The answer is Paris. ❌")

print()

# Question 3: True/False
print("Question 3: Python is a programming language. (True or False)")
answer3 = input("Your answer: ")

if answer3.lower() == "true" or answer3.lower() == "t":
    print("Correct! ✅")
    score = score + 1
else:
    print("Wrong! The answer is True. ❌")

print()

# Question 4: Number comparison
print("Question 4: Which number is larger: 15 or 20?")
answer4 = int(input("Your answer: "))

if answer4 == 20:
    print("Correct! ✅")
    score = score + 1
else:
    print("Wrong! The answer is 20. ❌")

print()

# Show results
print("=" * 40)
print("   YOUR RESULTS")
print("=" * 40)
print("You got", score, "out of 4 correct!")
print()

# Give feedback based on score
if score == 4:
    print("Perfect score! 🌟🌟🌟")
    print("You're a quiz master!")
elif score == 3:
    print("Great job! 👍")
    print("You got most of them right!")
elif score == 2:
    print("Good try! ✅")
    print("Keep practicing!")
elif score == 1:
    print("Nice effort! 💪")
    print("Don't give up!")
else:
    print("Don't worry! 📚")
    print("Try again and you'll do better!")

print()
print("=" * 40)
print("Thanks for playing! 🎉")
print("=" * 40)

# Challenge Ideas:
# 1. Add more questions to the quiz
# 2. Create different types of questions
# 3. Add a percentage score
# 4. Give different feedback messages
# 5. Create a quiz about your favorite topic!





