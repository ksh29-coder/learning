import React from 'react';
import GameCard from './GameCard';

function Day5Part6({ answers, updateAnswer }) {
  return (
    <div className="part-container">
      <h2>Part 6: Build Your Own Game! 🚀</h2>
      <p className="section-intro">
        Now it's your turn to be creative! Choose one of these game ideas or create your own!
      </p>

      <GameCard
        title="Option 1: Simple Quiz Game"
        icon="❓"
        description="Create a quiz game that asks questions and keeps track of the score!"
        features={[
          "Ask 5 questions",
          "Check if answers are correct",
          "Keep track of score",
          "Show final score with a message"
        ]}
        concepts={["Functions", "If/Else", "Loops", "Variables"]}
        steps={[
          "Create a function ask_question(question, correct_answer) that asks a question and checks the answer",
          "Create a main game function",
          "Ask 5 different questions using your function",
          "Track the score",
          "Show final score and a message based on how well they did"
        ]}
        filename="quiz_game.py"
        completed={answers.game3a_completed}
        onToggleComplete={() => updateAnswer('game3a_completed', !answers.game3a_completed)}
      />

      <GameCard
        title="Option 2: Dice Rolling Game"
        icon="🎲"
        description="Create a dice game where you compete against the computer!"
        features={[
          "Player and computer each roll a dice",
          "Higher roll wins the round",
          "Play multiple rounds",
          "Track wins for each player"
        ]}
        concepts={["Functions", "Loops", "If/Else", "Variables"]}
        steps={[
          "Create a function roll_dice() that returns a random number 1-6",
          "Create a function compare_rolls(player_roll, computer_roll) to determine winner",
          "Create main game with loop for multiple rounds",
          "Track wins",
          "Announce final winner"
        ]}
        filename="dice_game.py"
        completed={answers.game3b_completed}
        onToggleComplete={() => updateAnswer('game3b_completed', !answers.game3b_completed)}
      />

      <GameCard
        title="Option 3: Word Guessing Game"
        icon="💬"
        description="Create a simple word guessing game (like Hangman but simpler)!"
        features={[
          "Pick a secret word",
          "Player guesses one letter at a time",
          "Show which letters have been guessed",
          "Limited number of wrong guesses",
          "Win by guessing all letters"
        ]}
        concepts={["Functions", "While loops", "If/Else", "String methods"]}
        steps={[
          "Set a secret word (like 'PYTHON')",
          "Create a function to check if a letter is in the word",
          "Track guessed letters",
          "Use a while loop for multiple guesses",
          "Show progress (e.g., P_T_ON)",
          "Win when all letters are found or lose after too many wrong guesses"
        ]}
        filename="word_guess.py"
        completed={answers.game3c_completed}
        onToggleComplete={() => updateAnswer('game3c_completed', !answers.game3c_completed)}
      />

      <GameCard
        title="Option 4: Your Own Game!"
        icon="✨"
        description="Design and build your own game using everything you've learned!"
        features={[
          "Be creative!",
          "Use functions to organize your code",
          "Include some kind of scoring or win condition",
          "Make it fun!"
        ]}
        concepts={["Functions", "Loops", "If/Else", "Variables", "Input", "Creativity!"]}
        steps={[
          "Think of a fun game idea",
          "Plan out the game flow on paper first",
          "Break it into functions",
          "Build it step by step",
          "Test and debug",
          "Add extra features to make it more fun!"
        ]}
        filename="my_custom_game.py"
        completed={answers.game3d_completed}
        onToggleComplete={() => updateAnswer('game3d_completed', !answers.game3d_completed)}
      />

      <div className="tips-box">
        <h3>💡 Game Building Tips</h3>
        <ul>
          <li><strong>Start simple:</strong> Get the basic game working first, then add features</li>
          <li><strong>Use functions:</strong> Break your game into small, manageable functions</li>
          <li><strong>Test often:</strong> Run your code frequently to catch errors early</li>
          <li><strong>Add one feature at a time:</strong> Don't try to build everything at once</li>
          <li><strong>Use print statements:</strong> They help you see what's happening</li>
          <li><strong>Have fun!</strong> This is where programming gets exciting!</li>
        </ul>
      </div>

      <div className="success-box">
        <h3>🎉 You're a Game Developer!</h3>
        <p>
          You've learned enough to build real games! Functions let you organize your code,
          loops let you repeat actions, if/else lets you make decisions, and variables let you
          track everything. Keep building and experimenting!
        </p>
      </div>
    </div>
  );
}

export default Day5Part6;
