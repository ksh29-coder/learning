import React from 'react';
import './Bonus.css';
import CodeEditor from './CodeEditor';
import CodeRunner from './CodeRunner';

function Day2Bonus({ answers, updateAnswer }) {
  return (
    <div className="bonus-container">
      <div className="part-header">
        <h2>⭐ Bonus Challenge!</h2>
        <p className="part-description">
          Create a "Character Creator" program!
        </p>
      </div>

      <div className="bonus-card">
        <div className="bonus-icon">🦸‍♀️🦸‍♂️</div>
        <h3 className="bonus-title">Character Creator Challenge</h3>
        <p className="bonus-description">
          Create a program that:
        </p>
        <ul className="exercise-list">
          <li>Asks for a character name</li>
          <li>Asks for the character's age</li>
          <li>Asks for the character's superpower</li>
          <li>Asks for the character's favorite color</li>
          <li>Displays a character card with all the information</li>
        </ul>
        <p className="bonus-description">
          Make it look cool with borders and emojis! 🎨
        </p>
        <div className="bonus-section">
          <CodeEditor
            value={answers.bonus || ''}
            onChange={(value) => updateAnswer('bonus', value)}
            placeholder="# Write your character creator here..."
            height={250}
          />
          <CodeRunner code={answers.bonus || ''} title="Test Your Character Creator" />
        </div>
        <div className="bonus-tips">
          <h4>💡 Tips:</h4>
          <ul>
            <li>Use input() to ask for each piece of information</li>
            <li>Store each answer in a variable</li>
            <li>Use print() with borders (like "=" * 30) to make it look nice</li>
            <li>Add emojis to make it fun!</li>
            <li>Remember: When testing, type your answers in the terminal!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Day2Bonus;





