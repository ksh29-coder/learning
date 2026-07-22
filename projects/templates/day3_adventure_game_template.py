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
        print("Suddenly, a friendly genie pops out of the chest! 🧞")
        print("The genie offers to grant you ONE wish.")

        # ============================================
        # DECISION POINT 3 (after opening the chest)
        # ============================================
        choice3 = input("Do you wish for TREASURE or FRIENDSHIP? ")

        if choice3.lower() == "treasure":
            print()
            print("Mountains of gold appear around you! 💰💰💰")
            print("You're the richest explorer ever! The end. 🎉")
        elif choice3.lower() == "friendship":
            print()
            print("The genie becomes your best friend forever! 🧞💛")
            print("You go on adventures together every day. The end. 🥳")
        else:
            print()
            print("The genie is confused by your wish...")
            print("It gives you a nice sandwich instead. 🥪 The end.")
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
        print("The crystal starts to hum with magical power...")

        # ============================================
        # DECISION POINT 3 (inside the cave)
        # ============================================
        choice3 = input("Do you TOUCH the crystal or LEAVE it alone? ")

        if choice3.lower() == "touch":
            print()
            print("The crystal gives you magical powers! ✨")
            print("You become a wizard! The end. 🧙‍♂️")
        elif choice3.lower() == "leave":
            print()
            print("Wise choice! The crystal was guarded by a sleepy troll. 🧌")
            print("You tiptoe out and find a bag of gems by the exit! 💎")
            print("You're rich AND safe! The end. 🎉")
        else:
            print()
            print("While you think about it, the cave starts to rumble...")
            print("You run outside just in time! What an adventure! The end. 🏃")
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
# 1. Add MORE decision points (this template has 3 — can you get to 5?)
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





