import React from 'react';
import './Bonus.css';
import CodeEditor from './CodeEditor';
import CodeRunner from './CodeRunner';

function Bonus({ answers, updateAnswer }) {
  return (
    <div className="bonus-container">
      <div className="part-header">
        <h2>⭐ Bonus Challenge!</h2>
        <p className="part-description">
          Create a program that prints a "Welcome" sign for your room or desk!
        </p>
      </div>

      <div className="bonus-card">
        <div className="bonus-icon">🎨</div>
        <h3 className="bonus-title">Welcome Sign Challenge</h3>
        <p className="bonus-description">
          Get creative! Design a welcome sign using print statements. 
          You can use ASCII art, emojis, or any text you like!
        </p>
        <div className="bonus-section">
          <CodeEditor
            value={answers.bonus || ''}
            onChange={(value) => updateAnswer('bonus', value)}
            placeholder="# Write your welcome sign code here..."
            height={250}
          />
          <CodeRunner code={answers.bonus || ''} title="Preview Your Welcome Sign" />
        </div>
        <div className="bonus-tips">
          <h4>💡 Tips:</h4>
          <ul>
            <li>Use multiple print() statements for different lines</li>
            <li>Try using emojis or special characters</li>
            <li>Make it colorful with ASCII art</li>
            <li>Add your name or a fun message!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Bonus;

