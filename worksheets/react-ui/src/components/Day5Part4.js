import React from 'react';
import GameCard from './GameCard';

function Day5Part4({ answers, updateAnswer }) {
  return (
    <div className="part-container">
      <h2>Part 4: Game 1 - Rock Paper Scissors! 🎮</h2>
      <p className="section-intro">
        Time to build your first complete game! This classic game will use everything you've learned.
      </p>

      <GameCard
        title="Rock Paper Scissors"
        icon="✊✋✌️"
        description="Build a Rock Paper Scissors game where the player competes against the computer for 3 rounds!"
        features={[
          "Player chooses rock, paper, or scissors",
          "Computer makes a random choice",
          "Game determines the winner each round",
          "Tracks score across 3 rounds",
          "Announces the final winner"
        ]}
        concepts={[
          "Functions",
          "Loops (for 3 rounds)",
          "If/Elif/Else (game logic)",
          "Variables (score)",
          "Input (player choice)"
        ]}
        steps={[
          "Create a function to get the player's choice using input()",
          "Create a function to get the computer's choice (for now, just return 'rock')",
          "Create a function to determine the winner of one round",
          "Create a main game function that loops for 3 rounds",
          "Track the score and announce the winner at the end"
        ]}
        filename="rock_paper_scissors.py"
        completed={answers.game1_completed}
        onToggleComplete={() => updateAnswer('game1_completed', !answers.game1_completed)}
      />

      <div className="code-hint-box">
        <h3>💡 Starter Code Hint</h3>
        <pre className="code-example">{`def get_player_choice():
    choice = input("Rock, Paper, or Scissors? ").lower()
    return choice

def get_computer_choice():
    # For now, just return 'rock'
    # Later you can make it random!
    return "rock"

def determine_winner(player, computer):
    if player == computer:
        return "tie"
    elif player == "rock" and computer == "scissors":
        return "player"
    elif player == "paper" and computer == "rock":
        return "player"
    elif player == "scissors" and computer == "paper":
        return "player"
    else:
        return "computer"

def play_game():
    print("=== ROCK PAPER SCISSORS ===")
    player_score = 0
    computer_score = 0

    for round_num in range(1, 4):  # 3 rounds
        print(f"\\n--- Round {round_num} ---")
        player = get_player_choice()
        computer = get_computer_choice()

        print(f"You chose: {player}")
        print(f"Computer chose: {computer}")

        winner = determine_winner(player, computer)

        if winner == "player":
            print("You win this round!")
            player_score = player_score + 1
        elif winner == "computer":
            print("Computer wins this round!")
            computer_score = computer_score + 1
        else:
            print("It's a tie!")

    # Announce final winner
    print("\\n=== FINAL SCORE ===")
    print(f"You: {player_score}")
    print(f"Computer: {computer_score}")

    if player_score > computer_score:
        print("🎉 YOU WIN! 🎉")
    elif computer_score > player_score:
        print("Computer wins! Better luck next time!")
    else:
        print("It's a tie overall!")

# Start the game
play_game()`}</pre>
      </div>

      <div className="challenge-box">
        <h3>🌟 Bonus Challenges</h3>
        <ul>
          <li><strong>Make it random!</strong> Use <code>import random</code> and <code>random.choice(['rock', 'paper', 'scissors'])</code> for the computer's choice</li>
          <li><strong>Input validation:</strong> Check if the player enters a valid choice</li>
          <li><strong>Best of 5:</strong> Change the game to play 5 rounds instead of 3</li>
          <li><strong>Score display:</strong> Show the running score after each round</li>
        </ul>
      </div>
    </div>
  );
}

export default Day5Part4;
