import React from 'react';
import './Part3.css';
import CodeEditor from './CodeEditor';
import CodeRunner from './CodeRunner';

function Day2Part4({ answers, updateAnswer }) {
  return (
    <div className="part3-container">
      <div className="part-header">
        <h2>🎯 Part 4: Challenge Problems</h2>
        <p className="part-description">
          Ready for some fun challenges? Let's put your skills to the test!
        </p>
      </div>

      <div className="challenge-card">
        <h3 className="challenge-title">Challenge 1: Story Starter</h3>
        <p className="challenge-description">
          Create a program that asks for:
        </p>
        <ul className="exercise-list">
          <li>A name</li>
          <li>A place</li>
          <li>An animal</li>
          <li>An action (verb)</li>
        </ul>
        <p className="challenge-description">
          Then create a simple story using all those words!
        </p>
        <div className="challenge-section">
          <CodeEditor
            value={answers.challenge1}
            onChange={(value) => updateAnswer('challenge1', value)}
            placeholder="# Write your story starter here..."
            height={200}
          />
          <CodeRunner code={answers.challenge1} title="Test Your Story" />
        </div>
      </div>

      <div className="challenge-card">
        <h3 className="challenge-title">Challenge 2: Personal Quiz</h3>
        <p className="challenge-description">
          Create a program that:
        </p>
        <ul className="exercise-list">
          <li>Asks 5 questions about the user</li>
          <li>Stores all answers in variables</li>
          <li>Displays all answers at the end in a quiz format</li>
        </ul>
        <div className="challenge-section">
          <CodeEditor
            value={answers.challenge2}
            onChange={(value) => updateAnswer('challenge2', value)}
            placeholder="# Write your quiz here..."
            height={200}
          />
          <CodeRunner code={answers.challenge2} title="Test Your Quiz" />
        </div>
      </div>

      <div className="challenge-card">
        <h3 className="challenge-title">Challenge 3: Variable Math</h3>
        <p className="challenge-description">
          Create variables for:
        </p>
        <ul className="exercise-list">
          <li>Your age</li>
          <li>Your friend's age</li>
          <li>Your favorite number</li>
        </ul>
        <p className="challenge-description">
          Then calculate and print:
        </p>
        <ul className="exercise-list">
          <li>The sum of your ages</li>
          <li>The difference between your ages</li>
          <li>Your age multiplied by your favorite number</li>
        </ul>
        <div className="challenge-section">
          <CodeEditor
            value={answers.challenge3}
            onChange={(value) => updateAnswer('challenge3', value)}
            placeholder="# Write your math code here..."
            height={200}
          />
          <CodeRunner code={answers.challenge3} title="Test Your Math" />
        </div>
      </div>
    </div>
  );
}

export default Day2Part4;





