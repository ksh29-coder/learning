import React from 'react';
import './Bonus.css';
import ExerciseCard from './ExerciseCard';

function Day6Bonus({ answers, updateAnswer }) {
  return (
    <div className="bonus-container">
      <div className="part-header">
        <h2>⭐ Bonus Challenges!</h2>
        <p className="part-description">
          Want more practice? Try these advanced challenges that push your list skills further!
        </p>
      </div>

      <ExerciseCard
        number={1}
        title="High Score Tracker"
        description="Build a program that collects a list of scores from the player, then reports the highest score, the lowest score, and how many scores were entered."
        requirements={[
          "Start with an empty list: scores = []",
          "Use a loop with input() to collect scores until the user types 'done'",
          "Convert each entry to a number with int() before adding it to the list",
          "Use max(scores) and min(scores) to find the highest and lowest score",
          "Print how many scores were entered using len()"
        ]}
        exampleOutput={`Enter a score (or 'done'): 85
Enter a score (or 'done'): 92
Enter a score (or 'done'): 78
Enter a score (or 'done'): done

Highest score: 92
Lowest score: 78
You entered 3 scores!`}
        filename="bonus1_high_score_tracker.py"
        tips={[
          "score = int(input(...)) turns typed text into a real number",
          "max() and min() are handy built-in functions for lists of numbers",
          "This is the same idea as the Day 6 project template - try building on it!"
        ]}
        completed={answers.bonus1_completed}
        onToggleComplete={() => updateAnswer('bonus1_completed', !answers.bonus1_completed)}
      />

      <ExerciseCard
        number={2}
        title="Name & Score Combo"
        description="Store player names in one list and their scores in a second list (in the same order), then loop through both lists together to print each player's score and figure out who won!"
        requirements={[
          "Create a list of names: names = ['Alex', 'Jordan', 'Sam']",
          "Create a matching list of scores: scores = [85, 92, 78]",
          "Use range(len(names)) to loop through both lists using the same index",
          "Print each player's name next to their score",
          "Figure out and print who has the highest score"
        ]}
        exampleOutput={`Alex scored 85
Jordan scored 92
Sam scored 78

The winner is Jordan with 92 points!`}
        filename="bonus2_name_score_combo.py"
        tips={[
          "for index in range(len(names)): lets you use names[index] and scores[index] together",
          "Keep track of the highest score AND the matching name as you loop",
          "This trick of using two lists together is called 'parallel lists'!"
        ]}
        completed={answers.bonus2_completed}
        onToggleComplete={() => updateAnswer('bonus2_completed', !answers.bonus2_completed)}
      />

      <ExerciseCard
        number={3}
        title="Name → Score Dictionary"
        description="Level up the score tracker with a DICTIONARY! Collect player names and scores until the user types 'done', storing them as scoreboard[name] = score - with a try/except safety net on the score."
        requirements={[
          'Start with an empty dictionary: scoreboard = {}',
          "Ask for a player name (stop when it's 'done'), then ask for that player's score",
          'Convert the score with int() inside try:, and catch except ValueError: so bad input just prints a message',
          'Store each pair with scoreboard[name] = score',
          'At the end, print every player and score using for name, score in scoreboard.items():'
        ]}
        exampleOutput={`Player name (or 'done'): Alex
Score for Alex: 85
Player name (or 'done'): Jordan
Score for Jordan: banana
That's not a number - try again!
Player name (or 'done'): done

=== FINAL SCOREBOARD ===
Alex scored 85`}
        filename="bonus3_score_dictionary.py"
        tips={[
          'scoreboard[name] = score adds OR updates that player in one line',
          'Use an f-string in the loop: print(f"{name} scored {score}")',
          'This is the same idea as the parallel lists in Bonus 2 - but the dictionary keeps each name GLUED to its score!'
        ]}
        completed={answers.bonus3_completed}
        onToggleComplete={() => updateAnswer('bonus3_completed', !answers.bonus3_completed)}
      />

      <div className="mastery-box">
        <h3>🏆 Collections Master!</h3>
        <p>
          If you completed these bonus challenges, you've truly mastered Day 6! You can create lists, access items
          with indexing, loop through them, grow and shrink them, number them with enumerate(), match names to scores
          with a dictionary, and catch bad input with the try/except safety net. Keep coding!
        </p>
      </div>

      <div className="info-box">
        <h3>📚 What's Next?</h3>
        <p>
          You now have all the fundamental skills to build programs that manage real collections of information:
        </p>
        <ul>
          <li>✅ Print and display information</li>
          <li>✅ Store data in variables</li>
          <li>✅ Get input from users</li>
          <li>✅ Make decisions with if/else</li>
          <li>✅ Repeat actions with loops</li>
          <li>✅ Organize code with functions</li>
          <li>✅ Store collections of data with lists</li>
          <li>✅ Label your data with dictionaries</li>
          <li>✅ Catch bad input with try/except</li>
        </ul>
        <p>
          <strong>Keep building, keep learning, and most importantly - have fun!</strong>
        </p>
      </div>
    </div>
  );
}

export default Day6Bonus;
