import React from 'react';
import './Part2.css';
import CodeEditor from './CodeEditor';
import CodeRunner from './CodeRunner';

function Day4Part4({ answers, updateAnswer }) {
  return (
    <div className="part2-container">
      <div className="part-header">
        <h2>🎯 Part 4: Loop Challenges</h2>
        <p className="part-description">
          Ready for some fun loop challenges? Use everything you've learned!
        </p>
      </div>

      <div className="exercise-card">
        <h3 className="exercise-title">Challenge 1: Loop Art</h3>
        <p className="exercise-description">
          Create a program that:
        </p>
        <ul className="exercise-list">
          <li>Asks how tall a triangle should be</li>
          <li>Uses a for loop to print a triangle of stars</li>
          <li>Example for height 4:
            <pre className="code-example">
{`*
**
***
****`}
            </pre>
          </li>
        </ul>
        <div className="exercise-section">
          <CodeEditor
            value={answers.challenge1}
            onChange={(value) => updateAnswer('challenge1', value)}
            placeholder="# Write your loop art here..."
            height={220}
          />
          <CodeRunner code={answers.challenge1} title="Test Challenge 1" />
        </div>
      </div>

      <div className="exercise-card">
        <h3 className="exercise-title">Challenge 2: Workout Generator</h3>
        <p className="exercise-description">
          Create a program that:
        </p>
        <ul className="exercise-list">
          <li>Asks for an exercise (like "jumping jacks")</li>
          <li>Asks how many times to do it</li>
          <li>Uses a for loop to print each repetition (1 jumping jack, 2 jumping jacks, ...)</li>
        </ul>
        <div className="exercise-section">
          <CodeEditor
            value={answers.challenge2}
            onChange={(value) => updateAnswer('challenge2', value)}
            placeholder="# Write your workout generator here..."
            height={220}
          />
          <CodeRunner code={answers.challenge2} title="Test Challenge 2" />
        </div>
      </div>

      <div className="exercise-card">
        <h3 className="exercise-title">Challenge 3: Menu Loop</h3>
        <p className="exercise-description">
          Create a program that:
        </p>
        <ul className="exercise-list">
          <li>Shows a simple menu with options (1: Say hello, 2: Tell a joke, 3: Quit)</li>
          <li>Uses a while loop to keep showing the menu until the user chooses 3</li>
          <li>Does something fun for each option</li>
        </ul>
        <div className="exercise-section">
          <CodeEditor
            value={answers.challenge3}
            onChange={(value) => updateAnswer('challenge3', value)}
            placeholder="# Write your menu loop here..."
            height={260}
          />
          <CodeRunner code={answers.challenge3} title="Test Challenge 3" />
        </div>
      </div>

      <div className="part-footer">
        <p className="tip">
          💡 Tip: Test your programs with different inputs to make sure your loops work in all cases!
        </p>
      </div>
    </div>
  );
}

export default Day4Part4;




