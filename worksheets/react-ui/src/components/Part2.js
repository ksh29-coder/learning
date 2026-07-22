import React from 'react';
import './Part2.css';
import CodeEditor from './CodeEditor';
import CodeRunner from './CodeRunner';

function Part2({ answers, updateAnswer }) {
  return (
    <div className="part2-container">
      <div className="part-header">
        <h2>💻 Part 2: Code Practice</h2>
        <p className="part-description">
          Time to practice writing code! Fix errors and create your own programs.
        </p>
      </div>

      <div className="exercise-card">
        <h3 className="exercise-title">Exercise 1: Fix the Code</h3>
        <p className="exercise-description">
          Find and fix the errors in this code:
        </p>
        <pre className="code-example">
{`print("My name is Sarah)
print("I am 10 years old"
print("I love Python!")`}
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
        <h3 className="exercise-title">Exercise 2: Create Your Own</h3>
        <p className="exercise-description">
          Write a program that prints:
        </p>
        <ul className="exercise-list">
          <li>Your name</li>
          <li>Your favorite food</li>
          <li>Your favorite hobby</li>
          <li>An emoji you like</li>
        </ul>
        <div className="exercise-section">
          <h4 className="section-title">Your code:</h4>
          <CodeEditor
            value={answers.exercise2}
            onChange={(value) => updateAnswer('exercise2', value)}
            placeholder="# Write your code here..."
            height={150}
          />
          <CodeRunner code={answers.exercise2} title="Test Exercise 2" />
        </div>
      </div>

      <div className="exercise-card">
        <h3 className="exercise-title">Exercise 3: Machine Math 🧮</h3>
        <p className="exercise-description">
          Use Python as a calculator! Write a program that prints:
        </p>
        <ul className="exercise-list">
          <li>10 + 5 with a label, like <code>print("10 + 5 =", 10 + 5)</code></li>
          <li>How many seconds are in one hour (60 * 60)</li>
          <li>How many days old you are (about your age * 365)</li>
        </ul>
        <div className="exercise-section">
          <h4 className="section-title">Your code:</h4>
          <CodeEditor
            value={answers.exercise3}
            onChange={(value) => updateAnswer('exercise3', value)}
            placeholder="# Write your calculator code here..."
            height={150}
          />
          <CodeRunner code={answers.exercise3} title="Test Exercise 3" />
        </div>
      </div>
    </div>
  );
}

export default Part2;

