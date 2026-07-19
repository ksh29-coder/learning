import React from 'react';
import GameCard from './GameCard';

function Day5Part5({ answers, updateAnswer }) {
  return (
    <div className="part-container">
      <h2>Part 5: Game 2 - Number Guessing Game! 🔢</h2>
      <p className="section-intro">
        Build a number guessing game where the player tries to guess a secret number!
      </p>

      <GameCard
        title="Number Guessing Game"
        icon="🎯"
        description="Create a game where the player has to guess a secret number between 1 and 100, getting hints along the way!"
        features={[
          "Secret number between 1 and 100",
          "Player gets up to 7 attempts",
          "Hints: 'Too high!' or 'Too low!'",
          "Tracks number of attempts",
          "Congratulates on win or reveals number if out of attempts"
        ]}
        concepts={[
          "Functions",
          "While loops (keep guessing)",
          "If/Elif/Else (hints)",
          "Variables (attempts, secret number)",
          "Input (player's guess)"
        ]}
        steps={[
          "Create a function to show the welcome message",
          "Create a function to give hints (too high/too low)",
          "Create the main game function with a while loop",
          "Track attempts and limit to 7",
          "Check if guess equals secret number",
          "Give feedback and update attempt counter"
        ]}
        filename="number_guessing_game.py"
        completed={answers.game2_completed}
        onToggleComplete={() => updateAnswer('game2_completed', !answers.game2_completed)}
      />

      <div className="code-hint-box">
        <h3>💡 Starter Code Hint</h3>
        <pre className="code-example">{`def show_welcome():
    print("=" * 40)
    print("   NUMBER GUESSING GAME")
    print("=" * 40)
    print("I'm thinking of a number between 1 and 100!")
    print("Can you guess it? You have 7 tries!")
    print()

def give_hint(guess, secret):
    if guess < secret:
        print("Too low! Try a higher number. ⬆️")
    else:
        print("Too high! Try a lower number. ⬇️")

def play_game():
    secret_number = 42  # Pick any number 1-100
    attempts = 0
    max_attempts = 7

    show_welcome()

    while attempts < max_attempts:
        guess = int(input(f"Attempt {attempts + 1}: Enter your guess: "))
        attempts = attempts + 1

        if guess == secret_number:
            print(f"🎉 CORRECT! You got it in {attempts} tries!")
            print(f"The number was {secret_number}!")
            break  # Exit the loop
        else:
            give_hint(guess, secret_number)
            remaining = max_attempts - attempts
            if remaining > 0:
                print(f"You have {remaining} attempts left.\\n")

    # If loop ended without finding number
    if guess != secret_number:
        print(f"\\nGame Over! The number was {secret_number}")
        print("Better luck next time!")

# Start the game
play_game()`}</pre>
      </div>

      <div className="challenge-box">
        <h3>🌟 Bonus Challenges</h3>
        <ul>
          <li><strong>Random number!</strong> Use <code>import random</code> and <code>random.randint(1, 100)</code> for the secret number</li>
          <li><strong>Difficulty levels:</strong> Easy (1-50), Medium (1-100), Hard (1-200)</li>
          <li><strong>Keep score:</strong> Track how many games won vs lost</li>
          <li><strong>Play again:</strong> Ask if player wants to play another round</li>
          <li><strong>Show range:</strong> After each guess, show the narrowed range (e.g., "The number is between 42 and 100")</li>
        </ul>
      </div>

      <div className="info-box">
        <h3>🔑 Key Concept: While Loops</h3>
        <p>
          This game uses a <strong>while loop</strong> which keeps running as long as a condition is true.
          We use <code>while attempts &lt; max_attempts:</code> to give the player multiple guesses.
          The <code>break</code> statement exits the loop early when they guess correctly!
        </p>
      </div>
    </div>
  );
}

export default Day5Part5;
