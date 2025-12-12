import React from 'react';
import './ScoreDisplay.css';

function ScoreDisplay({ checkedQuestions }) {
  const score = Object.values(checkedQuestions).filter(Boolean).length;
  const total = Object.keys(checkedQuestions).length;
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  return (
    <div className="score-display">
      <div className="score-content">
        <span className="score-label">Score:</span>
        <span className="score-value">
          {score}/{total}
        </span>
        <span className="score-stars">
          {'🌟'.repeat(score)}
        </span>
        {score === total && (
          <span className="score-celebration">🎉 Perfect! 🎉</span>
        )}
      </div>
      <div className="score-bar-container">
        <div 
          className="score-bar"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default ScoreDisplay;

