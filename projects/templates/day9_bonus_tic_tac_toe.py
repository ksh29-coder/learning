
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
    

def check_winning(grid_map, decsion):
    result = ""
    played_seq = []
    for position, played_value in grid_map.items():
        if played_value == decsion:
            played_seq.append(position)
    sorted_played_seq = sorted(played_seq)
    print(str(sorted_played_seq) + decsion)

    for pattern in winning_results:
        if set(pattern).issubset(sorted_played_seq):
            if decsion == "X":
                print("You have won!")
                result = "Win"
            else:
                print("The computer has won!")
                result = "Lose"

    return result
# Main game

# The goal of game is to have all 3 of your sybols in a row


grid_map = dict()

# winning_results = {"123", "456", "789", "147", "258", "369", "159", "357"}
winning_results = [[1, 2, 3], [4, 5, 6],[7, 8 ,9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]
result_computer = ""
result_player = ""
while result_player == "":
    print_grid(grid_map)
    position_player = int(input("What number do you chose?"))

    position_into_grid(grid_map, position_player, "X")
    result_player = check_winning(grid_map, "X")
    print("Player" + result_player)
    position_computer = random.randint(1, 9)
    while position_computer in grid_map:
        position_computer = random.randint(1, 9)

    position_into_grid(grid_map, position_computer, "O")
    result_computer = check_winning(grid_map, "O")
    print("Computer" + result_computer)
   


