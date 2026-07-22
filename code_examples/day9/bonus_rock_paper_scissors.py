# Day 9 Bonus Arcade: Rock Paper Scissors 🪨📄✂️
# Combining: functions, variables, input, if/elif/else, loops, random

import random
def print_header():
    print("=" * 40)
    print("   🎮 ROCK PAPER SCISSORS 🎮")
    print("=" * 40)

def get_computer_choice():
    # random.choice picks one option at random - just like Day 5!
    choices = ["rock", "paper", "scissors"]
    return random.choice(choices)  # You can make this smarter later!

def play_round(round_number):
    print(f"\n--- Round {round_number} ---")
    player = input("Rock, Paper, or Scissors? ").lower()
    computer = get_computer_choice()
    
    print(f"You chose: {player}")
    print(f"Computer chose: {computer}")
    
    if player == computer:
        return "tie"
    elif (player == "rock" and computer == "scissors") or \
         (player == "paper" and computer == "rock") or \
         (player == "scissors" and computer == "paper"):
        return "win"
    else:
        return "lose"

def show_result(result):
    if result == "win":
        print("You win! 🎉")
    elif result == "tie":
        print("It's a tie! 🤝")
    else:
        print("You lose! 😢")

# Main game
print_header()
wins = 0
ties = 0
total_rounds = 3

for round_num in range(1, total_rounds + 1):
    result = play_round(round_num)
    show_result(result)

    if result == "win":
        wins = wins + 1     # only WINS count toward your score
    if result == "tie":
        ties = ties + 1     # ties don't score, but we count them to show off

print("\n" + "=" * 40)
print(f"Final Score: {wins} win(s) out of {total_rounds} rounds! (Ties: {ties})")
if wins == 3:
    print("PERFECT GAME! You're a legend! 🏆🌟")
elif wins == 2:
    print("You're a champion! 🏆")
elif wins == 1:
    print("Good try! Play again! 💪")
else:
    print("Better luck next time! 🍀")
print("=" * 40)




