import React from 'react';
import './Part2.css';
import CodeEditor from './CodeEditor';
import CodeRunner from './CodeRunner';

function Day3Part4({ answers, updateAnswer }) {
  return (
    <div className="part2-container">
      <div className="part-header">
        <h2>🎯 Part 4: Challenge Problems</h2>
        <p className="part-description">
          Time for some challenging problems! Use everything you've learned!
        </p>
      </div>

      <div className="exercise-card">
        <h3 className="exercise-title">Challenge 1: Password Checker</h3>
        <p className="exercise-description">
          Create a program that:
        </p>
        <ul className="exercise-list">
          <li>Asks the user to enter a password</li>
          <li>Checks if the password matches a secret password (like "python123")</li>
          <li>Prints "Access granted!" if correct</li>
          <li>Prints "Access denied!" if incorrect</li>
        </ul>
        <div className="exercise-section">
          <h4 className="section-title">Your code:</h4>
          <CodeEditor
            value={answers.challenge1}
            onChange={(value) => updateAnswer('challenge1', value)}
            placeholder="# Write your password checker here..."
            height={150}
          />
          <CodeRunner code={answers.challenge1} title="Test Challenge 1" />
        </div>
      </div>

      <div className="exercise-card">
        <h3 className="exercise-title">Challenge 2: Number Guessing Helper</h3>
        <p className="exercise-description">
          Create a program that:
        </p>
        <ul className="exercise-list">
          <li>Has a secret number (like 7)</li>
          <li>Asks the user to guess the number</li>
          <li>Tells them if they're correct, too high, or too low</li>
        </ul>
        <div className="exercise-section">
          <h4 className="section-title">Your code:</h4>
          <CodeEditor
            value={answers.challenge2}
            onChange={(value) => updateAnswer('challenge2', value)}
            placeholder="# Write your number guessing helper here..."
            height={150}
          />
          <CodeRunner code={answers.challenge2} title="Test Challenge 2" />
        </div>
      </div>

      <div className="exercise-card">
        <h3 className="exercise-title">Challenge 3: Can I Vote?</h3>
        <p className="exercise-description">
          Create a program that:
        </p>
        <ul className="exercise-list">
          <li>Asks the user for their age</li>
          <li>Checks if they are 18 or older</li>
          <li>If yes, prints "You can vote! 🗳️"</li>
          <li>If no, calculates and prints how many years until they can vote</li>
        </ul>
        <div className="exercise-section">
          <h4 className="section-title">Your code:</h4>
          <CodeEditor
            value={answers.challenge3}
            onChange={(value) => updateAnswer('challenge3', value)}
            placeholder="# Write your vote checker here..."
            height={150}
          />
          <CodeRunner code={answers.challenge3} title="Test Challenge 3" />
        </div>
      </div>

      <div className="exercise-card">
        <h3 className="exercise-title">Challenge 4: Simple Calculator</h3>
        <p className="exercise-description">
          Create a program that:
        </p>
        <ul className="exercise-list">
          <li>Asks for two numbers</li>
          <li>Asks for an operation (+, -, *, /)</li>
          <li>Uses if/elif/else to perform the correct operation</li>
          <li>Prints the result</li>
        </ul>
        <div className="exercise-section">
          <h4 className="section-title">Your code:</h4>
          <CodeEditor
            value={answers.challenge4}
            onChange={(value) => updateAnswer('challenge4', value)}
            placeholder="# Write your calculator here..."
            height={200}
          />
          <CodeRunner code={answers.challenge4} title="Test Challenge 4" />
        </div>
      </div>

      <div className="part-footer">
        <p className="tip">
          💡 Tip: These are challenging! Take your time and think through each step. You can do it! 💪
        </p>
      </div>
    </div>
  );
}

export default Day3Part4;





