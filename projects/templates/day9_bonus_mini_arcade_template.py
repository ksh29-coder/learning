# Day 9 Bonus Project: Mini Game Arcade 🕹️
# Create your own arcade with multiple fun games!
# Fill in the blanks and make it your own!

# ============================================
# YOUR MINI ARCADE STARTS HERE
# ============================================

def show_menu():
    """Display the main menu"""
    print("=" * 40)
    print("   🎮 YOUR MINI ARCADE 🎮")
    print("=" * 40)
    # TODO: Add your game options here
    print("1. Game 1")
    print("2. Game 2")
    print("3. Game 3")
    print("4. Quit")
    print("=" * 40)

def game_1():
    """Your first game - be creative!"""
    print("\n🎮 Game 1")
    print("-" * 40)
    # TODO: Add your game code here
    # Ideas: Rock Paper Scissors, Number Guessing, Quiz, etc.
    print("Game 1 coming soon!")
    input("\nPress Enter to continue...")

def game_2():
    """Your second game - be creative!"""
    print("\n🎮 Game 2")
    print("-" * 40)
    # TODO: Add your game code here
    print("Game 2 coming soon!")
    input("\nPress Enter to continue...")

def game_3():
    """Your third game - be creative!"""
    print("\n🎮 Game 3")
    print("-" * 40)
    # TODO: Add your game code here
    print("Game 3 coming soon!")
    input("\nPress Enter to continue...")

# ============================================
# MAIN MENU LOOP
# ============================================

games_played = 0

while True:
    show_menu()
    choice = input("Choose a game (1-4): ")
    
    # TODO: Add if/elif/else to handle menu choices
    if choice == "1":
        game_1()
        games_played = games_played + 1
    elif choice == "2":
        game_2()
        games_played = games_played + 1
    elif choice == "3":
        game_3()
        games_played = games_played + 1
    elif choice == "4":
        print(f"\nThanks for playing! You played {games_played} game(s)! 👋")
        break
    else:
        print("Invalid choice! Please try again.")

print("\nSee you next time! 🎮")

# ============================================
# CHALLENGES:
# ============================================
# 1. Create at least 2 fun games
# 2. Use functions to organize each game
# 3. Use loops in at least one game
# 4. Use if/else in at least one game
# 5. Track how many games were played
# 6. Add emojis and fun messages!
# 7. Make each game interactive (use input())
# 8. Add a scoring system for games

# ============================================
# GAME IDEAS:
# ============================================
# - Rock Paper Scissors
# - Number Guessing Game
# - Math Quiz
# - Word Guessing Game
# - Fortune Teller
# - Would You Rather
# - Story Generator
# - Joke Generator
# - Your own creative idea!

# ============================================
# TIPS:
# ============================================
# - Start with one game, test it, then add more
# - Use functions to keep each game organized
# - Use variables to track scores
# - Use loops to repeat actions
# - Use if/else to make decisions
# - Test your menu works correctly
# - Save your work frequently (Ctrl+S / Cmd+S)
# - Have fun and be creative!





