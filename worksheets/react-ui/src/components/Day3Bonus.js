import React from 'react';
import './Bonus.css';
import CodeEditor from './CodeEditor';
import CodeRunner from './CodeRunner';

function Day3Bonus({ answers, updateAnswer }) {
  return (
    <div className="bonus-container">
      <div className="part-header">
        <h2>⭐ Bonus Challenge!</h2>
        <p className="part-description">
          Create an interactive "Adventure Game"!
        </p>
      </div>

      <div className="bonus-card">
        <div className="bonus-icon">🎮</div>
        <h3 className="bonus-title">Adventure Game Challenge</h3>
        <p className="bonus-description">
          Create an interactive adventure game that:
        </p>
        <ul className="exercise-list">
          <li>Asks the user to make choices (like "go left" or "go right")</li>
          <li>Uses if/elif/else to handle different choices</li>
          <li>Has at least 3 decision points</li>
          <li>Gives different outcomes based on choices</li>
          <li>Be creative and make it fun! 🎮</li>
        </ul>
        <div className="bonus-section">
          <CodeEditor
            value={answers.bonus || ''}
            onChange={(value) => updateAnswer('bonus', value)}
            placeholder="# Write your adventure game here..."
            height={300}
          />
          <CodeRunner code={answers.bonus || ''} title="Test Your Adventure Game" />
        </div>
        <div className="bonus-tips">
          <h4>💡 Tips:</h4>
          <ul>
            <li>Use input() to ask for choices</li>
            <li>Use if/elif/else to handle different choices</li>
            <li>Use .lower() to make comparisons case-insensitive</li>
            <li>Create multiple decision points for a longer story</li>
            <li>Add emojis and fun messages!</li>
            <li>Remember: When testing, type your answers in the terminal!</li>
            <li>Think about what happens at each choice - be creative!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Day3Bonus;





