import React from 'react';
import './Part3.css';
import CodeEditor from './CodeEditor';
import CodeRunner from './CodeRunner';

function Part3({ answers, updateAnswer }) {
  return (
    <div className="part3-container">
      <div className="part-header">
        <h2>🎨 Part 3: ASCII Art Challenge</h2>
        <p className="part-description">
          Create amazing pictures using text! Let your creativity shine!
        </p>
      </div>

      <div className="challenge-card">
        <h3 className="challenge-title">Challenge 1: Complete the Pattern</h3>
        <p className="challenge-description">
          Fill in the missing lines to complete this pattern:
        </p>
        <div className="challenge-section">
          <CodeEditor
            value={answers.challenge1}
            onChange={(value) => updateAnswer('challenge1', value)}
            placeholder="# Complete the pattern..."
            height={150}
          />
          <CodeRunner code={answers.challenge1} title="Preview Your Art" />
        </div>
      </div>

      <div className="challenge-card">
        <h3 className="challenge-title">Challenge 2: Create Your Own Drawing</h3>
        <p className="challenge-description">
          Draw a simple picture using print statements! It could be:
        </p>
        <div className="idea-grid">
          <div className="idea-item">🏠 A house</div>
          <div className="idea-item">😊 A smiley face</div>
          <div className="idea-item">⭐ A star</div>
          <div className="idea-item">🐱 Your favorite animal</div>
          <div className="idea-item">✨ Something else creative!</div>
        </div>
        <div className="challenge-section">
          <CodeEditor
            value={answers.challenge2}
            onChange={(value) => updateAnswer('challenge2', value)}
            placeholder="# Draw your picture here..."
            height={200}
          />
          <CodeRunner code={answers.challenge2} title="Preview Your Art" />
        </div>
      </div>
    </div>
  );
}

export default Part3;

