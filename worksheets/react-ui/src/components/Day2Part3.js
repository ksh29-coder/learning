import React, { useState } from 'react';
import './Part2.css';
import CodeEditor from './CodeEditor';
import CodeRunner from './CodeRunner';

function Day2Part3({ answers, updateAnswer }) {
  const [feedback, setFeedback] = useState({
    inputExercise1: ''
  });

  const checkInputAnswer = () => {
    const selected = answers.inputExercise1;
    const isCorrect = selected === 'It asks the user to type something';
    
    if (isCorrect) {
      setFeedback({ inputExercise1: '✓ Correct! Great job! 🎉' });
    } else {
      setFeedback({ inputExercise1: '✗ Not quite right. Hint: input() gets information from the user! 💪' });
    }
  };

  return (
    <div className="part2-container">
      <div className="part-header">
        <h2>⌨️ Part 3: Input Practice</h2>
        <p className="part-description">
          Learn to make your programs interactive with input()!
        </p>
      </div>

      <div className="exercise-card">
        <h3 className="exercise-title">Exercise 1: Understanding input()</h3>
        <p className="exercise-description">
          What does input() do?
        </p>
        <div className="options">
          {[
            'It prints text to the screen',
            'It asks the user to type something',
            'It saves your program',
            'It creates a variable'
          ].map((option, index) => (
            <label key={index} className="radio-option">
              <input
                type="radio"
                name="inputExercise1"
                value={option}
                checked={answers.inputExercise1 === option}
                onChange={(e) => updateAnswer('inputExercise1', e.target.value)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        <div className="check-section">
          <button
            className="check-button"
            onClick={checkInputAnswer}
          >
            ✓ Check Answer
          </button>
          {feedback.inputExercise1 && (
            <span className={`feedback ${feedback.inputExercise1.includes('✓') ? 'correct' : 'incorrect'}`}>
              {feedback.inputExercise1}
            </span>
          )}
        </div>
      </div>

      <div className="exercise-card">
        <h3 className="exercise-title">Exercise 2: Create an Interactive Program</h3>
        <p className="exercise-description">
          Write a program that:
        </p>
        <ul className="exercise-list">
          <li>Asks the user for their name</li>
          <li>Asks the user for their favorite food</li>
          <li>Asks the user for their favorite animal</li>
          <li>Prints all the information in a nice format</li>
        </ul>
        <div className="exercise-section">
          <h4 className="section-title">Your code:</h4>
          <CodeEditor
            value={answers.inputExercise2}
            onChange={(value) => updateAnswer('inputExercise2', value)}
            placeholder="# Write your code here..."
            height={200}
          />
          <CodeRunner code={answers.inputExercise2} title="Test Exercise 2" />
        </div>
        <div className="exercise-note">
          <p>💡 Note: When you click "Run Code", you'll be prompted to enter values for each input() call!</p>
        </div>
      </div>

      <div className="exercise-card">
        <h3 className="exercise-title">Exercise 3: Simple Calculator</h3>
        <p className="exercise-description">
          Create a program that:
        </p>
        <ul className="exercise-list">
          <li>Asks for two numbers</li>
          <li>Adds them together</li>
          <li>Prints the result</li>
        </ul>
        <p className="exercise-hint">
          💡 Hint: Remember to use int() to convert the input to numbers!
        </p>
        <div className="exercise-section">
          <h4 className="section-title">Your code:</h4>
          <CodeEditor
            value={answers.inputExercise3}
            onChange={(value) => updateAnswer('inputExercise3', value)}
            placeholder="# Write your code here..."
            height={150}
          />
          <CodeRunner code={answers.inputExercise3} title="Test Exercise 3" />
        </div>
        <div className="exercise-note">
          <p>💡 Note: When you click "Run Code", you'll be prompted to enter two numbers!</p>
        </div>
      </div>
    </div>
  );
}

export default Day2Part3;

