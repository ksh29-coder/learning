# Day 6 - Example 4: Mini Game Arcade
# Combining: functions, while loops, if/elif/else, variables, input

def show_menu():
    print("=" * 40)
    print("   🎮 MINI GAME ARCADE 🎮")
    print("=" * 40)
    print("1. Rock Paper Scissors")
    print("2. Number Guessing")
    print("3. Math Quiz")
    print("4. Quit")
    print("=" * 40)

def game_rock_paper_scissors():
    print("\n🎮 Rock Paper Scissors")
    print("-" * 40)
    player = input("Rock, Paper, or Scissors? ").lower()
    computer = "rock"  # Simple version
    
    print(f"You: {player}, Computer: {computer}")
    
    if player == computer:
        print("Tie! 🤝")
    elif (player == "rock" and computer == "scissors") or \
         (player == "paper" and computer == "rock") or \
         (player == "scissors" and computer == "paper"):
        print("You win! 🎉")
    else:
        print("You lose! 😢")
    
    input("\nPress Enter to continue...")

def game_number_guessing():
    print("\n🔢 Number Guessing")
    print("-" * 40)
    secret = 42  # Fixed number for simplicity
    attempts = 0
    max_attempts = 5
    
    while attempts < max_attempts:
        guess = int(input(f"Guess #{attempts + 1} (1-100): "))
        attempts = attempts + 1
        
        if guess == secret:
            print(f"🎉 Correct! You got it in {attempts} tries!")
            break
        elif guess < secret:
            print("Too low! ⬆️")
        else:
            print("Too high! ⬇️")
    else:
        print(f"Game over! The number was {secret}")
    
    input("\nPress Enter to continue...")

def game_math_quiz():
    print("\n➕ Math Quiz")
    print("-" * 40)
    score = 0
    
    questions = [
        {"q": "What is 5 + 3? ", "a": 8},
        {"q": "What is 10 - 4? ", "a": 6},
        {"q": "What is 2 × 7? ", "a": 14},
    ]
    
    for i, question in enumerate(questions, 1):
        answer = int(input(f"Question {i}: {question['q']}"))
        if answer == question['a']:
            print("Correct! ✅")
            score = score + 1
        else:
            print(f"Wrong! The answer is {question['a']}. ❌")
    
    print(f"\nYou got {score} out of {len(questions)} correct!")
    if score == len(questions):
        print("Perfect score! 🌟")
    
    input("\nPress Enter to continue...")

# Main menu loop
games_played = 0

while True:
    show_menu()
    choice = input("Choose a game (1-4): ")
    
    if choice == "1":
        game_rock_paper_scissors()
        games_played = games_played + 1
    elif choice == "2":
        game_number_guessing()
        games_played = games_played + 1
    elif choice == "3":
        game_math_quiz()
        games_played = games_played + 1
    elif choice == "4":
        print(f"\nThanks for playing! You played {games_played} game(s)! 👋")
        break
    else:
        print("Invalid choice! Please enter 1, 2, 3, or 4.")

print("\nSee you next time! 🎮")





