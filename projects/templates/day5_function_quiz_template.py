# Day 5 Project: Quiz with Functions
# Fill in the blanks and make it your own!

print("=" * 40)
print("   🧠 FUNCTION QUIZ 🧠")
print("=" * 40)
print()
print("Welcome to your quiz!")
print("You will answer questions and earn points.")
print("Each question is handled by its own function.")
print()

# ============================================
# TODO: Create your functions below
# ============================================

score = 0  # This variable will keep track of the score


def question1():
    global score
    print("Question 1: What is 2 + 2?")
    answer = int(input("Your answer: "))

    if answer == 4:
        print("Correct! ✅")
        score = score + 1
    else:
        print("Oops! The answer is 4. ❌")

    print()


def question2():
    global score
    print("Question 2: What is the capital of France?")
    answer = input("Your answer: ")

    if answer.lower() == "paris":
        print("Correct! ✅")
        score = score + 1
    else:
        print("Oops! The answer is Paris. ❌")

    print()


def show_final_score():
    print("=" * 40)
    print("   YOUR FINAL SCORE")
    print("=" * 40)
    print("You got", score, "points!")

    if score == 2:
        print("Perfect score! 🌟")
    elif score == 1:
        print("Nice job! Keep practicing!")
    else:
        print("Don't worry, try again and you'll improve!")

    print("=" * 40)


# ============================================
# TODO: Add more question functions (question3, question4, ...)
#       Use the same pattern as question1 and question2.
# ============================================


# ============================================
# MAIN PROGRAM - Calls your functions
# ============================================

print("Let's start the quiz! 🎉")
print()

# Call your question functions here
question1()
question2()
# TODO: Call question3(), question4(), etc. after you create them

# Show the final result at the end
show_final_score()

print()
print("Thanks for playing the Function Quiz! 🧠🎉")

# ============================================
# CHALLENGES:
# ============================================
# 1. Add at least 3 more question functions.
# 2. Ask different types of questions (math, animals, colors, games).
# 3. Use .lower() to make answers case-insensitive.
# 4. Give different messages based on the final score.
# 5. Ask for the player's name and use it in messages.
# 6. Add emojis to make it more fun!

# ============================================
# TIPS:
# ============================================
# - Use functions to keep each question separate.
# - Remember to use global score if you want to change the score variable.
# - Test your quiz often - play through it!
# - Save your work frequently (Ctrl+S / Cmd+S).
# - Remember: indentation is important in if/else blocks and functions!
