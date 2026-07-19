import React from 'react';
import './Bonus.css';
import CodeEditor from './CodeEditor';
import CodeRunner from './CodeRunner';

function Day4Bonus({ answers, updateAnswer }) {
  return (
    <div className="bonus-container">
      <div className="part-header">
        <h2>⭐ Bonus Challenge!</h2>
        <p className="part-description">
          Create your own awesome loop project!
        </p>
      </div>

      <div className="bonus-card">
        <div className="bonus-icon">🔁</div>
        <h3 className="bonus-title">Loop Superpower Challenge</h3>
        <p className="bonus-description">
          Use your loop skills to create something amazing! You could:
        </p>
        <ul className="exercise-list">
          <li>Make a cool piece of loop art (shapes, patterns, or designs)</li>
          <li>Create a fun "workout coach" that guides you through exercises</li>
          <li>Build a mini quiz that uses a loop to ask several questions</li>
          <li>Invent your own idea that uses for and/or while loops</li>
        </ul>
        <div className="bonus-section">
          <CodeEditor
            value={answers.bonus || ''}
            onChange={(value) => updateAnswer('bonus', value)}
            placeholder="# Write your bonus loop project here..."
            height={300}
          />
          <CodeRunner code={answers.bonus || ''} title="Test Your Loop Project" />
        </div>
        <div className="bonus-tips">
          <h4>💡 Tips:</h4>
          <ul>
            <li>Decide if a for loop or while loop makes more sense</li>
            <li>Use range() when you know exactly how many times to loop</li>
            <li>Use while when you want to keep going until something happens</li>
            <li>Add emojis and fun messages to make it exciting!</li>
            <li>Test your code with different inputs and loop counts</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Day4Bonus;




