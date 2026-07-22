# Day 9 Bonus Project: 007 (Shoot, Shield, Reload!) 🕵️
# Combining: functions, while loops, if/elif/else, variables, input, random

import random
def print_header():
    print("=" * 40)
    print("   🎮 007 🎮")
    print("=" * 40)

def get_computer_choice(bullets_computer):
    # random.choice picks the computer's move at random (Day 5!)
    choices = ["Reload", "Shoot", "Shield"]
    if bullets_computer == 0:
        choices = ["Reload", "Shield"]  # no bullets = no shooting!

    return random.choice(choices)  # You can make this smarter later!



# Main game
print_header()

#starting points 
bullets_computer = 1
bullets_player = 1
life_computer = 1
life_player = 1

life = life_computer + life_player

while life == 2:
    # game will start or continue when both lifes are equals to 1, meaning total = 2
    
    # get both players choices 
    choice_player = input("Shoot, Shield or Reload?")
    if bullets_player == 0 and choice_player == "Shoot":
        print("You're out of bullets!")
        choice_player = input("Shield or Reload?")

    choice_computer = get_computer_choice(bullets_computer)
    print("Computer has played " + choice_computer)
    print("You have played " + choice_player)

    # calcuating the new life score for both computer and player
    if choice_player == "Shoot":
        life_computer = life_computer - 1
    elif choice_player == "Reload":
        bullets_player = bullets_player + 1
    elif choice_player == "Shield" and choice_computer == "Shoot":
         life_player = life_player + 1
    
    if choice_computer == "Shoot":
        life_player = life_player - 1
    elif choice_computer == "Reload":
        bullets_computer = bullets_computer + 1
    elif choice_computer == "Shield" and choice_player == "Shoot":
         life_computer = life_computer + 1

    # deciding who win and who lose
    life = life_computer + life_player
    if life == 0:
        print("Draw!")
    elif life == 1:
        if life_computer == 1:
            print("Computer win")
        else:
            print("You won")
    elif life == 2:
        print ("Play another round.")

