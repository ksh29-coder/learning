import React from 'react';
import GameCard from './GameCard';

function Day9Bonus({ answers, updateAnswer }) {
  return (
    <div className="part-container">
      <h2>🕹️ Bonus Arcade — Fun Games!</h2>
      <p className="section-intro">
        You've finished the whole course — now play and build! These arcade games are pure fun, and each
        one is really the "combine everything" idea in a smaller package. Ready-to-read example scripts
        live in <code>code_examples/day9/</code> (the <code>bonus_*.py</code> files), and some have starter
        templates in <code>projects/templates/</code>. Pick one, run it, then make it your own!
      </p>

      <GameCard
        title="Rock Paper Scissors"
        icon="✊"
        description="Play best-of-three against the computer. A classic that uses variables, input, if/elif/else, and a loop."
        concepts={['variables', 'input()', 'if/elif/else', 'loops']}
        steps={[
          "Open code_examples/day9/bonus_rock_paper_scissors.py and run it",
          "Read how it picks the computer's choice and decides the winner",
          "Make it your own: more rounds, best-of-five, new messages"
        ]}
        filename="bonus_rock_paper_scissors.py"
        completed={answers.game1_completed}
        onToggleComplete={() => updateAnswer('game1_completed', !answers.game1_completed)}
      />

      <GameCard
        title="Number Guessing"
        icon="🔢"
        description="The computer picks a secret number and you guess it, with 'too high' / 'too low' hints. Uses while loops and if/else."
        concepts={['while loops', 'if/else', 'variables', 'input()']}
        steps={[
          "Open code_examples/day9/bonus_number_guessing.py and run it",
          "See how the while loop keeps asking until you guess right",
          "Extend it: add difficulty levels, or count the number of guesses"
        ]}
        filename="bonus_number_guessing.py"
        completed={answers.game2_completed}
        onToggleComplete={() => updateAnswer('game2_completed', !answers.game2_completed)}
      />

      <GameCard
        title="Interactive Story Builder"
        icon="📖"
        description="A Mad-Libs style tale built from the player's words, with a loop that repeats an action a chosen number of times."
        concepts={['input()', 'variables', 'loops', 'strings']}
        steps={[
          "Open code_examples/day9/bonus_story_builder.py and run it",
          "Notice how it collects words and drops them into the story",
          "Extend it: add more blanks or multiple endings"
        ]}
        filename="bonus_story_builder.py"
        completed={answers.game3_completed}
        onToggleComplete={() => updateAnswer('game3_completed', !answers.game3_completed)}
      />

      <GameCard
        title="Mini Game Arcade"
        icon="🎮"
        description="A menu that launches several games in one program — a mini version of today's game-loop idea."
        concepts={['functions', 'loops', 'if/elif/else', 'menu']}
        steps={[
          "Open code_examples/day9/bonus_mini_arcade.py (template: day9_bonus_mini_arcade_template.py)",
          "See how the menu loop calls a different function for each game",
          "Extend it: add your own game as a new menu option"
        ]}
        filename="bonus_mini_arcade.py"
        completed={answers.game4_completed}
        onToggleComplete={() => updateAnswer('game4_completed', !answers.game4_completed)}
      />

      <GameCard
        title="Personal Assistant Bot"
        icon="🤖"
        description="A chatbot that responds to commands — greet, joke, calculate, quit. For an extra challenge, try the 007 and Tic-Tac-Toe templates!"
        concepts={['functions', 'if/elif/else', 'loops', 'input()']}
        steps={[
          "Open code_examples/day9/bonus_personal_assistant.py and run it",
          "See how it matches your command to the right response",
          "Extra challenge: build day9_bonus_007.py and day9_bonus_tic_tac_toe.py",
          "Extend it: teach your bot brand-new commands"
        ]}
        filename="bonus_personal_assistant.py"
        completed={answers.game5_completed}
        onToggleComplete={() => updateAnswer('game5_completed', !answers.game5_completed)}
      />

      <div className="mastery-box">
        <h3>🎓 Congratulations, Python Adventurer!</h3>
        <p>
          You made it through all 9 days — from your very first <code>print()</code> to building a full
          Adventure RPG and a whole arcade of games. You now know variables, decisions, loops, functions,
          lists, classes, and polymorphism. You're a real programmer now. We're so proud of you! 🏆🐍✨
        </p>
      </div>
    </div>
  );
}

export default Day9Bonus;
