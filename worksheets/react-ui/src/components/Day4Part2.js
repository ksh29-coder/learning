import React from 'react';
import './Part2.css';
import CodeEditor from './CodeEditor';
import CodeRunner from './CodeRunner';

function Day4Part2({ answers, updateAnswer }) {
  return (
    <div className="part2-container">
      <div className="part-header">
        <h2>💻 Part 2: For Loops Practice</h2>
        <p className="part-description">
          Time to practice writing for loops with range()!
        </p>
      </div>

      <div className="exercise-card">
        <h3 className="exercise-title">Exercise 1: Fix the Loop</h3>
        <p className="exercise-description">
          Find and fix the errors in this code:
        </p>
        <pre className="code-example">
{`for i in range 5
print("Hello!")`}
        </pre>
        <div className="exercise-section">
          <h4 className="section-title">Your fixed code:</h4>
          <CodeEditor
            value={answers.exercise1}
            onChange={(value) => updateAnswer('exercise1', value)}
            placeholder="# Write the corrected code here..."
            height={150}
          />
          <CodeRunner code={answers.exercise1} title="Test Exercise 1" />
        </div>
      </div>

      <div className="exercise-card">
        <h3 className="exercise-title">Exercise 2: Counting Loop</h3>
        <p className="exercise-description">
          Write a program that:
        </p>
        <ul className="exercise-list">
          <li>Uses a for loop with range()</li>
          <li>Counts from 1 to 10</li>
          <li>Prints each number with a message (like "Number: 1")</li>
        </ul>
        <div className="exercise-section">
          <h4 className="section-title">Your code:</h4>
          <CodeEditor
            value={answers.exercise2}
            onChange={(value) => updateAnswer('exercise2', value)}
            placeholder="# Write your counting loop here..."
            height={180}
          />
          <CodeRunner code={answers.exercise2} title="Test Exercise 2" />
        </div>
      </div>

      <div className="exercise-card">
        <h3 className="exercise-title">Exercise 3: Times Table</h3>
        <p className="exercise-description">
          Write a program that:
        </p>
        <ul className="exercise-list">
          <li>Asks the user for a number</li>
          <li>Uses a for loop to print the times table from 1 to 10</li>
          <li>Shows lines like <code>5 x 3 = 15</code></li>
        </ul>
        <div className="exercise-section">
          <h4 className="section-title">Your code:</h4>
          <CodeEditor
            value={answers.exercise3}
            onChange={(value) => updateAnswer('exercise3', value)}
            placeholder="# Write your times table program here..."
            height={200}
          />
          <CodeRunner code={answers.exercise3} title="Test Exercise 3" />
        </div>
      </div>

      <div className="part-footer">
        <p className="tip">
          💡 Tip: Remember that range(start, stop) stops <strong>before</strong> the stop number!
        </p>
      </div>
    </div>
  );
}

export default Day4Part2;




