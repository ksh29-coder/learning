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

# Each question function RETURNS the points you earned (1 or 0).
# That way the main program can add them up — just like you
# learned with return values today!


def question1():
    print("Question 1: What is 2 + 2?")
    answer = int(input("Your answer: "))

    if answer == 4:
        print("Correct! ✅")
        print()
        return 1
    else:
        print("Oops! The answer is 4. ❌")
        print()
        return 0


def question2():
    print("Question 2: What is the capital of France?")
    answer = input("Your answer: ")

    if answer.lower() == "paris":
        print("Correct! ✅")
        print()
        return 1
    else:
        print("Oops! The answer is Paris. ❌")
        print()
        return 0


def show_final_score(score):
    print("=" * 40)
    print("   YOUR FINAL SCORE")
    print("=" * 40)
    print(f"You got {score} points!")

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

# Call your question functions and add up the points they return
score = 0
score = score + question1()
score = score + question2()
# TODO: Add the points from question3(), question4(), etc. after you create them

# Show the final result at the end
show_final_score(score)

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
# - Each question function returns 1 (correct) or 0 (wrong) — add them up!
# - Test your quiz often - play through it!
# - Save your work frequently (Ctrl+S / Cmd+S).
# - Remember: indentation is important in if/else blocks and functions!
