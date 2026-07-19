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

      <div className="mastery-box">
        <h3>🏆 List Master!</h3>
        <p>
          If you completed these bonus challenges, you've truly mastered Day 6! You can create lists, access items
          with indexing, loop through them, grow and shrink them, and even combine lists together. Keep coding!
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
        </ul>
        <p>
          <strong>Keep building, keep learning, and most importantly - have fun!</strong>
        </p>
      </div>
    </div>
  );
}

export default Day6Bonus;
