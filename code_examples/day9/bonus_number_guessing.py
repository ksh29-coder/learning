# Day 6 - Example 2: Number Guessing Game
# Combining: functions, while loops, if/else, variables, input

import random


def show_welcome():
    print("=" * 40)
    print("   🔢 NUMBER GUESSING GAME 🔢")
    print("=" * 40)
    print("I'm thinking of a number between 1 and 1000!")
    print("Can you guess it?")
    print("You have 9 tries!")

def get_hint(guess, secret):
    if guess < secret:
        return "Too low! Try a higher number. ⬆️"
    elif guess > secret:
        return "Too high! Try a lower number. ⬇️"
def play_game():
    # For simplicity, let's use a fixed number
    # (You could use random.randint(1, 100) if you want)
    secret_number = random.randint(1, 1000)
    attempts = 0
    max_attempts = 9
    
    while attempts < max_attempts:
        guess = int(input(f"\nGuess #{attempts + 1}: "))
        attempts = attempts + 1
        
        if guess == secret_number:
            print(f"🎉 Correct! You got it in {attempts} tries!")
            if attempts == 1:
                print("Wow! First try! You're amazing! 🌟")
            elif attempts <= 3:
                print("Great job! You're really good at this! ⭐")
            return attempts
        else:
            print(get_hint(guess, secret_number))
            remaining = max_attempts - attempts
            if remaining > 0:
                print(f"You have {remaining} tries left.")
    
    print(f"\nGame over! The number was {secret_number}")
    print("Don't worry, try again! 💪")
    return attempts

# Main program
show_welcome()
play_game()
print("\nThanks for playing! 👋")





