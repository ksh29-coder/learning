import React from 'react';
import './Part2.css';
import CodeEditor from './CodeEditor';
import CodeRunner from './CodeRunner';

function Day2Part2({ answers, updateAnswer }) {
  return (
    <div className="part2-container">
      <div className="part-header">
        <h2>💻 Part 2: Code Practice</h2>
        <p className="part-description">
          Time to practice creating and using variables!
        </p>
      </div>

      <div className="exercise-card">
        <h3 className="exercise-title">Exercise 1: Create Variables</h3>
        <p className="exercise-description">
          Create variables to store:
        </p>
        <ul className="exercise-list">
          <li>Your name</li>
          <li>Your age</li>
          <li>Your favorite color</li>
          <li>Your favorite number</li>
        </ul>
        <div className="exercise-section">
          <h4 className="section-title">Your code:</h4>
          <CodeEditor
            value={answers.exercise1}
            onChange={(value) => updateAnswer('exercise1', value)}
            placeholder="# Write your variables here..."
            height={150}
          />
          <CodeRunner code={answers.exercise1} title="Test Exercise 1" />
        </div>
      </div>

      <div className="exercise-card">
        <h3 className="exercise-title">Exercise 2: Fix the Code</h3>
        <p className="exercise-description">
          Find and fix the errors in this code:
        </p>
        <pre className="code-example">
{`my name = "Jordan"
age = "9"
favorite color = "Green"

print("My name is", my name)
print("I am", age, "years old")
print("My favorite color is", favorite color)`}
        </pre>
        <div className="exercise-section">
          <h4 className="section-title">Your fixed code:</h4>
          <CodeEditor
            value={answers.exercise2}
            onChange={(value) => updateAnswer('exercise2', value)}
            placeholder="# Write the corrected code here..."
            height={150}
          />
          <CodeRunner code={answers.exercise2} title="Test Exercise 2" />
        </div>
      </div>

      <div className="exercise-card">
        <h3 className="exercise-title">Exercise 3: Use Variables</h3>
        <p className="exercise-description">
          Write a program that:
        </p>
        <ul className="exercise-list">
          <li>Creates variables for your name, age, and favorite hobby</li>
          <li>Prints them in a nice format with borders</li>
        </ul>
        <div className="exercise-section">
          <h4 className="section-title">Your code:</h4>
          <CodeEditor
            value={answers.exercise3}
            onChange={(value) => updateAnswer('exercise3', value)}
            placeholder="# Write your code here..."
            height={150}
          />
          <CodeRunner code={answers.exercise3} title="Test Exercise 3" />
        </div>
      </div>
    </div>
  );
}

export default Day2Part2;





