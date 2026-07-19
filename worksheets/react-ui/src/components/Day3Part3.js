import React from 'react';
import './Part2.css';
import CodeEditor from './CodeEditor';
import CodeRunner from './CodeRunner';

function Day3Part3({ answers, updateAnswer }) {
  return (
    <div className="part2-container">
      <div className="part-header">
        <h2>🔄 Part 3: Elif Practice</h2>
        <p className="part-description">
          Practice using elif for multiple conditions!
        </p>
      </div>

      <div className="exercise-card">
        <h3 className="exercise-title">Exercise 1: Grade Calculator</h3>
        <p className="exercise-description">
          Create a program that:
        </p>
        <ul className="exercise-list">
          <li>Asks the user for a score (0-100)</li>
          <li>Uses if/elif/else to assign a grade:
            <ul>
              <li>90-100: A</li>
              <li>80-89: B</li>
              <li>70-79: C</li>
              <li>60-69: D</li>
              <li>Below 60: F</li>
            </ul>
          </li>
          <li>Prints the grade</li>
        </ul>
        <div className="exercise-section">
          <h4 className="section-title">Your code:</h4>
          <CodeEditor
            value={answers.exercise4}
            onChange={(value) => updateAnswer('exercise4', value)}
            placeholder="# Write your grade calculator here..."
            height={200}
          />
          <CodeRunner code={answers.exercise4} title="Test Exercise 1" />
        </div>
      </div>

      <div className="exercise-card">
        <h3 className="exercise-title">Exercise 2: Weather Decision Maker</h3>
        <p className="exercise-description">
          Create a program that:
        </p>
        <ul className="exercise-list">
          <li>Asks the user what the weather is like (sunny, rainy, snowy, cloudy)</li>
          <li>Uses if/elif/else to give different advice for each weather type</li>
          <li>Prints appropriate messages</li>
        </ul>
        <div className="exercise-section">
          <h4 className="section-title">Your code:</h4>
          <CodeEditor
            value={answers.exercise5}
            onChange={(value) => updateAnswer('exercise5', value)}
            placeholder="# Write your weather decision maker here..."
            height={200}
          />
          <CodeRunner code={answers.exercise5} title="Test Exercise 2" />
        </div>
      </div>

      <div className="part-footer">
        <p className="tip">
          💡 Tip: Remember that elif checks conditions in order and stops at the first True condition!
        </p>
      </div>
    </div>
  );
}

export default Day3Part3;





