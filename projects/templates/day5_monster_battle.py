"""
🐉⚔️ MONSTER BATTLE ARENA ⚔️🐉
A Turn-Based Combat Game

HOW TO USE THIS TEMPLATE:
==========================
1. FIRST: Run the game to see how it works
   Command: python3 day5_monster_battle.py

2. THEN: Follow the ENHANCEMENT STEPS at the bottom of this file
   Each step makes the game better and teaches you something new!

3. HAVE FUN: You can do the steps in any order, or skip some!

Author: You!
Day: 5 - Functions, Review & Games
"""

# We import the random library at the top of the file - this opens the
# "random" toolbox so the Dragon can make surprise moves! (Day 5: Libraries)
import random

# ============================================
# FUNCTIONS - The game is organized into functions!
# ============================================

def show_welcome():
    """Display welcome message and rules"""
    print("=" * 50)
    print("         ⚔️  MONSTER BATTLE ARENA  ⚔️")
    print("=" * 50)
    print("\nA fierce Dragon has appeared!")
    print("You must defeat it to save the village!")
    print("\nAvailable Actions:")
    print("  [1] Attack  - Deal 20 damage")
    print("  [2] Defend  - Take 50% less damage next turn")
    print("  [3] Special - Deal 35 damage (Limited: 2 uses)")
    print("  [4] Potion  - Restore 30 HP (Limited: 3 uses)")
    print("\n" + "=" * 50)
        # ENHANCEMENT: Step 2 adds ASCII art here!


def show_status(player_hp, monster_hp, potions, special_moves):
    """Display current battle status"""
    print("\n" + "-" * 50)
    print(f"Your HP: {player_hp}/100")
    print(f"Dragon HP: {monster_hp}/100")
    print(f"Potions: {potions} | Special Moves: {special_moves}")
    print("-" * 50)
    # ENHANCEMENT: Step 2 adds visual HP bars here!


def player_turn(potions, special_moves):
    """Get player's action choice"""
    print("\nYour turn!")
    print("[1] Attack  [2] Defend  [3] Special Move  [4] Use Potion")

    while True:
        choice = input("Choose your action (1-4): ")

        if choice == "1":
            # This return sends back THREE values at once, separated by
            # commas: the action, plus the updated potion/special counts.
            return "attack", potions, special_moves
        elif choice == "2":
            return "defend", potions, special_moves
        elif choice == "3":
            if special_moves > 0:
                return "special", potions, special_moves - 1
            else:
                print("No special moves left! Choose something else.")
        elif choice == "4":
            if potions > 0:
                return "potion", potions - 1, special_moves
            else:
                print("No potions left! Choose something else.")
        else:
            print("Invalid choice! Please choose 1-4.")
    # ENHANCEMENT: Step 4 adds dramatic action messages here!


def monster_turn():
    """Dragon chooses a random action"""
    # random.choice picks one random item from the list (see Day 5: Libraries!)
    # Dragon can only attack or defend (for now)
    action = random.choice(["attack", "defend"])

    if action == "attack":
        print("\nThe Dragon prepares to ATTACK!")
    else:
        print("\nThe Dragon raises its SHIELD!")

    return action
    # ENHANCEMENT: Step 5 can make Dragon smarter!


def calculate_damage(action, is_defending):
    """Calculate damage based on action and defense"""
    if action == "attack":
        damage = 20
    elif action == "special":
        damage = 35
    else:
        damage = 0

    # If defending, reduce damage by 50%
    if is_defending:
        damage = damage // 2

    return damage
    # ENHANCEMENT: Step 3 adds random damage here!
    # ENHANCEMENT: Step 5 adds critical hits here!


def battle_round(player_hp, monster_hp, player_action, monster_action):
    """Process one round of combat"""
    print("\n" + "🗡️ " * 20)

    # Calculate damage dealt by player
    player_damage = calculate_damage(player_action, monster_action == "defend")

    # Calculate damage dealt by monster
    monster_damage = calculate_damage(monster_action, player_action == "defend")

    # Apply damage
    if player_action == "attack":
        print(f"You ATTACK the Dragon for {player_damage} damage!")
        monster_hp -= player_damage
    elif player_action == "special":
        print(f"You use your SPECIAL MOVE for {player_damage} damage!")
        monster_hp -= player_damage
    elif player_action == "potion":
        heal = 30
        # min() returns the SMALLER of two numbers - so HP can't go over 100
        player_hp = min(player_hp + heal, 100)
        print(f"You drink a potion and restore {heal} HP!")
    elif player_action == "defend":
        print("You raise your shield in defense!")

    if monster_action == "attack":
        print(f"The Dragon ATTACKS you for {monster_damage} damage!")
        player_hp -= monster_damage
    elif monster_action == "defend":
        print("The Dragon's scales deflect some damage!")

    print("🗡️ " * 20)

    # Return TWO values at once (separated by a comma) - both HP numbers
    # travel back to whoever called this function.
    return player_hp, monster_hp


def play_game():
    """Main game loop"""
    # Initialize game state
    player_hp = 100
    monster_hp = 100
    potions = 3
    special_moves = 2
    round_number = 0

    # Show welcome
    show_welcome()
    input("\nPress Enter to begin battle...")

    # Battle loop - continues until someone reaches 0 HP
    while player_hp > 0 and monster_hp > 0:
        round_number += 1
        print(f"\n{'='*50}")
        print(f"           ROUND {round_number}")
        print(f"{'='*50}")

        # Show current status
        show_status(player_hp, monster_hp, potions, special_moves)

        # Get actions
        # player_turn returns 3 values, so we catch them in 3 variables
        # (one variable for each value, in the same order)
        player_action, potions, special_moves = player_turn(potions, special_moves)
        monster_action = monster_turn()

        # Process combat round
        # battle_round returns 2 values - the two new HP numbers
        player_hp, monster_hp = battle_round(player_hp, monster_hp, player_action, monster_action)

        # max() returns the BIGGER of two numbers - so HP can't go below 0
        player_hp = max(player_hp, 0)
        monster_hp = max(monster_hp, 0)

    # Battle is over - show results
    print("\n" + "=" * 50)
    if player_hp > 0:
        print("🎉 VICTORY! 🎉")
        print("You have defeated the Dragon!")
        print(f"You won with {player_hp} HP remaining!")
        print("The village is saved! You are a hero!")
    else:
        print("💀 DEFEAT 💀")
        print("The Dragon has defeated you...")
        print("Better luck next time, brave warrior!")
    print("=" * 50)
    # ENHANCEMENT: Step 6 adds "play again" option here!


# ============================================
# START THE GAME!
# ============================================
play_game()


# ============================================
# ✨ ENHANCEMENT STEPS ✨
# ============================================
# Follow these steps to make your game even better!
# You can do them in any order or skip some if you want!
#
# 🎯 STEP 1: Play the Game First! (5 minutes)
# ============================================
# Before changing anything, run and play the game:
#   python3 day5_monster_battle.py
#
# Play through a complete battle. Notice:
# - How does combat work?
# - What could be more exciting?
# - What would you like to add?
#
#
# 🎯 STEP 2: Add Visual HP Bars (10 minutes)
# ============================================
# OBJECTIVE: Make HP display more visual and cool-looking!
#
# FIND: The show_status() function (around line 35)
#
# CURRENT CODE:
#   print(f"Your HP: {player_hp}/100")
#   print(f"Dragon HP: {monster_hp}/100")
#
# ADD THIS NEW FUNCTION before show_status():
#
#   def make_hp_bar(current_hp, max_hp):
#       """Create a visual HP bar"""
#       bar_length = 20
#       filled = int((current_hp / max_hp) * bar_length)
#       empty = bar_length - filled
#       return "█" * filled + "░" * empty
#
# THEN REPLACE the HP print statements in show_status() with:
#
#   player_bar = make_hp_bar(player_hp, 100)
#   monster_bar = make_hp_bar(monster_hp, 100)
#   print(f"Your HP:   {player_bar} {player_hp}/100")
#   print(f"Dragon HP: {monster_bar} {monster_hp}/100")
#
# RUN THE GAME and see the cool HP bars!
#
#
# 🎯 STEP 3: Add Random Damage (10 minutes)
# ============================================
# OBJECTIVE: Make damage random instead of fixed
#
# FIND: The calculate_damage() function (around line 75)
#
# GOOD NEWS: "import random" is already at the top of the file,
# so the random toolbox is ready to use!
#
# CURRENT CODE in calculate_damage():
#   if action == "attack":
#       damage = 20
#   elif action == "special":
#       damage = 35
#
# REPLACE WITH:
#   if action == "attack":
#       damage = random.randint(15, 25)  # Random 15-25
#   elif action == "special":
#       damage = random.randint(30, 40)  # Random 30-40
#
# RUN THE GAME - now damage varies each time!
#
#
# 🎯 STEP 4: Add Battle Messages (10 minutes)
# ============================================
# OBJECTIVE: Make attacks more dramatic!
#
# FIND: The battle_round() function (around line 100)
#
# AT THE TOP OF THE FILE, after imports, add these lists:
#
#   ATTACK_MESSAGES = [
#       "You swing your sword with great force!",
#       "A powerful blow connects!",
#       "Your weapon strikes true!",
#       "You attack with lightning speed!"
#   ]
#
#   SPECIAL_MESSAGES = [
#       "You unleash your ultimate technique!",
#       "A devastating special attack!",
#       "Your power surges through you!",
#       "An incredible special move!"
#   ]
#
# FIND in battle_round():
#   if player_action == "attack":
#       print(f"You ATTACK the Dragon for {player_damage} damage!")
#
# REPLACE WITH:
#   if player_action == "attack":
#       print(random.choice(ATTACK_MESSAGES))
#       print(f"You deal {player_damage} damage!")
#
# Do the same for special attacks with SPECIAL_MESSAGES!
#
#
# 🎯 STEP 5: Add Critical Hits! (15 minutes) ⭐ BONUS
# ============================================
# OBJECTIVE: 10% chance for DOUBLE damage!
#
# FIND: The battle_round() function
#
# AFTER calculating player_damage, ADD:
#
#   # Check for critical hit (10% chance)
#   if random.randint(1, 10) == 1:
#       player_damage = player_damage * 2
#       print("💥 CRITICAL HIT! DOUBLE DAMAGE! 💥")
#
# RUN THE GAME - occasionally you'll get a critical hit!
#
#
# 🎯 STEP 6: Add Play Again Feature (10 minutes) ⭐ BONUS
# ============================================
# OBJECTIVE: Let players play multiple times without re-running
#
# FIND: The bottom of the file where it says:
#   play_game()
#
# REPLACE WITH:
#
#   while True:
#       play_game()
#       again = input("\nPlay again? (yes/no): ")
#       if again.lower() != "yes":
#           print("\nThanks for playing! Goodbye!")
#           break
#
#
# 🎉 BONUS CHALLENGES (For the brave!)
# ============================================
# - Add multiple monsters with different HP
# - Create a "hard mode" with stronger monsters
# - Add more special moves with different effects (like a Reflect move
#   that bounces the Dragon's damage back at it!)
# - Create a leveling system (player gets stronger)
# - Add ASCII art for the dragon
# - Track high scores or fastest victories
# - Let player choose their character class
#
#
# ============================================
# CONCEPTS YOU'RE PRACTICING:
# ============================================
# ✅ Functions - Organizing code into reusable pieces
# ✅ Loops - While loop for battle rounds
# ✅ If/Else - Decision making and game logic
# ✅ Variables - Tracking HP, potions, actions
# ✅ Input - Getting player choices
# ✅ Random - Making the game unpredictable
# ✅ String manipulation - Creating visual displays
# ✅ Lists - Storing multiple messages
#
# Great job! You're using all the concepts from Days 1-5!
# ============================================
