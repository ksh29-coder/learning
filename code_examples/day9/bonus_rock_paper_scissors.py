# Day 6 - Example 1: Rock Paper Scissors Game
# Combining: functions, variables, input, if/elif/else, loops

import random
def print_header():
    print("=" * 40)
    print("   🎮 ROCK PAPER SCISSORS 🎮")
    print("=" * 40)

def get_computer_choice():
    # Simple version: cycles through choices
    # (In a real game, you'd use random, but this is simpler for kids)
    choices = ["rock", "paper", "scissors"]

    
    return random.choices(choices)[0]  # You can make this smarter later!
    
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
score = 0
total_rounds = 3

for round_num in range(1, total_rounds + 1):
    result = play_round(round_num)
    show_result(result)
    
    if result == "win":
        score = score + 1
    if result == "tie":
        score = score + 0.5
print("\n" + "=" * 40)
print(f"Final Score: {score} points out of 3!")
if score >= 3:
    print("Wow you're lucky!")
elif score >= 2:
    print("You're a champion! 🏆")
elif score == 1:
    print("Good try! Play again! 💪")
else:
    print("Better luck next time! 🍀")
print("=" * 40)




