import React from 'react';
import './Part2.css';
import CodeEditor from './CodeEditor';
import CodeRunner from './CodeRunner';

function Day3Part2({ answers, updateAnswer }) {
  return (
    <div className="part2-container">
      <div className="part-header">
        <h2>💻 Part 2: Code Practice</h2>
        <p className="part-description">
          Time to practice writing if/else statements!
        </p>
      </div>

      <div className="exercise-card">
        <h3 className="exercise-title">Exercise 1: Fix the Code</h3>
        <p className="exercise-description">
          Find and fix the errors in this code:
        </p>
        <pre className="code-example">
{`age = 10
if age = 10
    print("You are 10!")
else
    print("You are not 10!")`}
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
        <h3 className="exercise-title">Exercise 2: Create an If Statement</h3>
        <p className="exercise-description">
          Write a program that:
        </p>
        <ul className="exercise-list">
          <li>Creates a variable for a temperature (like 75)</li>
          <li>Checks if the temperature is greater than 70</li>
          <li>Prints "It's warm!" if it is</li>
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
        <h3 className="exercise-title">Exercise 3: Create an If/Else Statement</h3>
        <p className="exercise-description">
          Write a program that:
        </p>
        <ul className="exercise-list">
          <li>Asks the user for their age</li>
          <li>Checks if they are 13 or older</li>
          <li>Prints "You are a teenager!" if they are</li>
          <li>Prints "You are not a teenager yet!" if they are not</li>
        </ul>
        <div className="exercise-section">
          <h4 className="section-title">Your code:</h4>
          <CodeEditor
            value={answers.exercise3}
            onChange={(value) => updateAnswer('exercise3', value)}
            placeholder="# Write your code here..."
            height={200}
          />
          <CodeRunner code={answers.exercise3} title="Test Exercise 3" />
        </div>
      </div>

      <div className="part-footer">
        <p className="tip">
          💡 Tip: Remember to use `==` for comparison, not `=`! And don't forget the colon `:` after if/else!
        </p>
      </div>
    </div>
  );
}

export default Day3Part2;





