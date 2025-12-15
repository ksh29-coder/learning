import React from 'react';
import './Part2.css';
import CodeEditor from './CodeEditor';
import CodeRunner from './CodeRunner';

function Day4Part3({ answers, updateAnswer }) {
  return (
    <div className="part2-container">
      <div className="part-header">
        <h2>⌛ Part 3: While Loops Practice</h2>
        <p className="part-description">
          Practice writing while loops that stop correctly!
        </p>
      </div>

      <div className="exercise-card">
        <h3 className="exercise-title">Exercise 1: Countdown</h3>
        <p className="exercise-description">
          Write a program that:
        </p>
        <ul className="exercise-list">
          <li>Starts with a variable called <code>count</code> set to 5</li>
          <li>Uses a while loop to count down to 1</li>
          <li>Prints each number</li>
          <li>Prints "Blast off!" at the end</li>
        </ul>
        <div className="exercise-section">
          <h4 className="section-title">Your code:</h4>
          <CodeEditor
            value={answers.whileExercise1}
            onChange={(value) => updateAnswer('whileExercise1', value)}
            placeholder="# Write your countdown here..."
            height={200}
          />
          <CodeRunner code={answers.whileExercise1} title="Test Exercise 1" />
        </div>
      </div>

      <div className="exercise-card">
        <h3 className="exercise-title">Exercise 2: Keep Asking Until Correct</h3>
        <p className="exercise-description">
          Write a program that:
        </p>
        <ul className="exercise-list">
          <li>Asks "What is 3 + 4?"</li>
          <li>Uses a while loop to keep asking until the user types 7</li>
          <li>Prints a special message when they get it right</li>
        </ul>
        <div className="exercise-section">
          <h4 className="section-title">Your code:</h4>
          <CodeEditor
            value={answers.whileExercise2}
            onChange={(value) => updateAnswer('whileExercise2', value)}
            placeholder="# Write your quiz loop here..."
            height={220}
          />
          <CodeRunner code={answers.whileExercise2} title="Test Exercise 2" />
        </div>
      </div>

      <div className="part-footer">
        <p className="tip">
          💡 Tip: Make sure something inside the while loop changes, or it might never stop!
        </p>
      </div>
    </div>
  );
}

export default Day4Part3;
