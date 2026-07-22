# Day 9 Bonus Project: Tic-Tac-Toe ⭕❌
# Combining: functions, loops, if/elif/else, dictionaries, random

import random

def print_grid(grid_map):
    print("-" * 9)
    for i in range(1, 4, 1):
        if i in grid_map:
            print(grid_map[i], end=" | ")
        else:
            print(" ", end= " | ")
    print()
    print("-" * 9)
    for i in range(4, 7, 1):
        if i in grid_map:
            print(grid_map[i], end=" | ")
        else:
            print(" ", end= " | ")
    print()
    print("-" * 9)
    for i in range(7, 10, 1):
        if i in grid_map:
            print(grid_map[i], end=" | ")
        else:
            print(" ", end= " | ")
    print()



def position_into_grid(grid_map, position, decision):
 #check if the position has been taken or not. 
    if decision == "X":
        print("You have played " + str(position))
    else:
        print("The computer has played " + str(position))
    
    if position in grid_map:
        print("Sorry the position " + str(position) + " has already been taken")
    else:
        grid_map[position] = decision
    

def check_winning(grid_map, decision):
    result = ""
    played_seq = []
    for position, played_value in grid_map.items():
        if played_value == decision:
            played_seq.append(position)
    # sorted() gives back the list in order, smallest to biggest
    sorted_played_seq = sorted(played_seq)

    for pattern in winning_results:
        # count how many spots of this winning pattern belong to this player
        matches = 0
        for spot in pattern:
            if spot in sorted_played_seq:
                matches = matches + 1
        if matches == 3:  # all 3 spots in a row - that's a win!
            if decision == "X":
                print("You have won! 🎉")
                result = "Win"
            else:
                print("The computer has won! 🤖")
                result = "Lose"
            break  # one winning line is enough - stop looking!

    return result
# Main game

# The goal of game is to have all 3 of your sybols in a row


grid_map = dict()

# every straight line on the board: rows, columns, and the two diagonals
winning_results = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]
result_computer = ""
result_player = ""

# keep playing until SOMEBODY wins (or the board fills up)
while result_player == "" and result_computer == "":
    print_grid(grid_map)
    position_player = int(input("What number do you choose? "))

    position_into_grid(grid_map, position_player, "X")
    result_player = check_winning(grid_map, "X")
    if result_player != "":
        break  # you won - stop before the computer moves!

    if len(grid_map) == 9:
        print("It's a draw! The board is full! 🤝")
        break

    position_computer = random.randint(1, 9)
    while position_computer in grid_map:
        position_computer = random.randint(1, 9)

    position_into_grid(grid_map, position_computer, "O")
    result_computer = check_winning(grid_map, "O")

print_grid(grid_map)
print("Thanks for playing! 👋")

