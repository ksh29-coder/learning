# Day 3 Project: Interactive Adventure Game
# Fill in the blanks and make it your own!

# ============================================
# YOUR ADVENTURE GAME STARTS HERE
# ============================================

print("=" * 40)
print("   🎮 ADVENTURE GAME 🎮")
print("=" * 40)
print()
print("Welcome to your adventure!")
print("You'll make choices that affect your story.")
print("Let's begin!")
print()

# ============================================
# DECISION POINT 1
# ============================================
print("You are walking in a magical forest...")
print("You come to a fork in the path.")
choice1 = input("Do you go LEFT or RIGHT? ")

if choice1.lower() == "left":
    print()
    print("You chose to go LEFT!")
    print("You find a treasure chest! 💰")
    print("Do you open it?")
    
    # ============================================
    # DECISION POINT 2 (inside the left path)
    # ============================================
    choice2 = input("Type YES or NO: ")
    
    if choice2.lower() == "yes":
        print()
        print("You open the chest and find gold coins! 🪙")
        print("You're rich! The end. 🎉")
    elif choice2.lower() == "no":
        print()
        print("You leave the chest and continue walking.")
        print("You find a friendly dragon! 🐉")
        print("The dragon gives you a magic sword! ⚔️")
        print("You become a hero! The end. 🦸")
    else:
        print()
        print("You stand there confused...")
        print("A wizard appears and teleports you home. 🧙")
        print("The end.")
        
elif choice1.lower() == "right":
    print()
    print("You chose to go RIGHT!")
    print("You see a mysterious cave ahead.")
    print("Do you enter the cave?")
    
    # ============================================
    # DECISION POINT 2 (inside the right path)
    # ============================================
    choice2 = input("Type YES or NO: ")
    
    if choice2.lower() == "yes":
        print()
        print("You enter the cave...")
        print("It's dark inside!")
        print("You find a glowing crystal! 💎")
        print("The crystal gives you magical powers! ✨")
        print("You become a wizard! The end. 🧙‍♂️")
    elif choice2.lower() == "no":
        print()
        print("You decide not to enter the cave.")
        print("You continue walking and find a beautiful garden! 🌸")
        print("You spend the day there and feel peaceful.")
        print("The end. 😊")
    else:
        print()
        print("You can't decide...")
        print("You sit down and fall asleep.")
        print("When you wake up, you're back home. The end.")
        
else:
    print()
    print("You didn't choose left or right...")
    print("You stand there confused.")
    print("A friendly guide appears and shows you the way home.")
    print("The end.")

print()
print("=" * 40)
print("Thanks for playing! 🎉")
print("=" * 40)

# ============================================
# CHALLENGES:
# ============================================
# 1. Add more decision points (at least 3 total)
# 2. Create longer story branches
# 3. Add more choices at each decision point
# 4. Create different endings based on choices
# 5. Add emojis to make it more fun!
# 6. Ask for the player's name and use it in the story
# 7. Add a scoring system (points for good choices)
# 8. Create a second adventure with a different theme

# ============================================
# TIPS:
# ============================================
# - Use .lower() to make comparisons case-insensitive
# - Think about what happens at each choice
# - Make your story creative and fun!
# - Test your program often - play through it!
# - Save your work frequently (Ctrl+S / Cmd+S)
# - Remember: indentation is important in if/else blocks!





