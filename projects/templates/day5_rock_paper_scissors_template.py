# Day 5 Project: Rock Paper Scissors vs the Computer! ✊✋✌️
# Fill in the TODOs and make it your own!
#
# You will use TWO big Day 5 ideas:
#   1. FUNCTIONS you write yourself
#   2. A LIBRARY function someone else wrote: random.choice()

import random  # open the "random" toolbox 🧰

print("=" * 40)
print("   ✊✋✌️  ROCK PAPER SCISSORS  ✊✋✌️")
print("=" * 40)
print()

# ============================================
# THE FUNCTIONS
# ============================================


def get_player_choice():
    choice = input("Rock, paper or scissors? ").lower()
    return choice


def get_computer_choice():
    # random.choice picks ONE random item from the list -
    # this is what makes the computer unpredictable!
    return random.choice(["rock", "paper", "scissors"])


def decide_winner(player, computer):
    # This function RETURNS "player", "computer" or "tie".
    if player == computer:
        return "tie"
    elif player == "rock":
        if computer == "scissors":
            return "player"      # rock crushes scissors!
        else:
            return "computer"    # paper covers rock
    elif player == "paper":
        # TODO: paper covers rock! If computer is "rock", return "player".
        #       Otherwise (computer is "scissors"), return "computer".
        return "tie"  # ← replace this line with your if/else!
    elif player == "scissors":
        # TODO: scissors cut paper! If computer is "paper", return "player".
        #       Otherwise (computer is "rock"), return "computer".
        return "tie"  # ← replace this line with your if/else!


# ============================================
# MAIN PROGRAM
# ============================================

player_score = 0
computer_score = 0

for round_number in range(1, 4):  # 3 rounds
    print(f"--- Round {round_number} ---")

    player = get_player_choice()
    computer = get_computer_choice()

    print(f"You chose: {player}")
    print(f"Computer chose: {computer}")

    winner = decide_winner(player, computer)

    if winner == "player":
        print("You win this round! 🎉")
        player_score = player_score + 1
    elif winner == "computer":
        print("Computer wins this round! 🤖")
        computer_score = computer_score + 1
    else:
        print("It's a tie!")

    print()

# Announce the final winner
print("=" * 40)
print(f"   FINAL SCORE - You: {player_score}  Computer: {computer_score}")
print("=" * 40)

if player_score > computer_score:
    print("🏆 YOU WIN THE MATCH! 🏆")
elif computer_score > player_score:
    print("The computer wins... rematch? 🤖")
else:
    print("It's a tie overall! Great minds think alike!")

# ============================================
# CHALLENGES:
# ============================================
# 1. Finish the two TODOs in decide_winner() first - then test them!
# 2. Best of 5: change range(1, 4) to play 5 rounds.
# 3. Show the running score after every round.
# 4. If the player types something weird (like "banana"), print a funny
#    message. (Hint: check the choice with an if before deciding a winner.)
# 5. Add suspense: use "from time import sleep" and sleep(1) before
#    revealing the computer's choice!
# 6. Add emojis for each choice: ✊ ✋ ✌️

# ============================================
# TIPS:
# ============================================
# - Test decide_winner() by playing several rounds - try all 3 choices.
# - .lower() means "Rock", "ROCK" and "rock" all work.
# - random.choice needs a LIST in the parentheses: random.choice([...])
# - Save often (Ctrl+S / Cmd+S) and run the game to test your changes!
