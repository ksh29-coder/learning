import React from 'react';
import './GameCard.css';

function GameCard({
  title,
  icon = '🎮',
  description,
  features,
  concepts,
  steps,
  filename,
  completed,
  onToggleComplete
}) {
  return (
    <div className="game-card">
      <div className="game-header">
        <h2>
          <span className="game-icon">{icon}</span>
          {title}
        </h2>
        <label className="game-complete-checkbox">
          <input
            type="checkbox"
            checked={completed || false}
            onChange={onToggleComplete}
          />
          <span>Completed</span>
        </label>
      </div>

      <div className="game-body">
        <p className="game-description">{description}</p>

        {features && features.length > 0 && (
          <div className="game-features">
            <h4>🎯 Game Features:</h4>
            <ul>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {concepts && concepts.length > 0 && (
          <div className="game-concepts">
            <h4>📚 Concepts You'll Use:</h4>
            <div className="concept-tags">
              {concepts.map((concept, index) => (
                <span key={index} className="concept-tag">{concept}</span>
              ))}
            </div>
          </div>
        )}

        {steps && steps.length > 0 && (
          <div className="game-steps">
            <h4>📝 Steps to Build:</h4>
            <ol>
              {steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        )}

        <div className="game-file-info">
          <div className="file-instruction">
            <strong>📁 Save as:</strong> <code>{filename}</code>
          </div>
          <div className="run-instruction">
            <strong>▶️ Run with:</strong> <code>python3 {filename}</code>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
