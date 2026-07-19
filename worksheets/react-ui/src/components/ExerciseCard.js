import React from 'react';
import './ExerciseCard.css';

function ExerciseCard({
  number,
  title,
  description,
  requirements,
  exampleOutput,
  filename,
  tips,
  completed,
  onToggleComplete
}) {
  return (
    <div className="exercise-card">
      <div className="exercise-header">
        <h3>
          <span className="exercise-number">Exercise {number}</span>
          {title}
        </h3>
        <label className="complete-checkbox">
          <input
            type="checkbox"
            checked={completed || false}
            onChange={onToggleComplete}
          />
          <span>Completed</span>
        </label>
      </div>

      <div className="exercise-body">
        <p className="exercise-description">{description}</p>

        {requirements && requirements.length > 0 && (
          <div className="requirements-section">
            <h4>Requirements:</h4>
            <ul>
              {requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="file-instruction">
          <strong>📁 Save as:</strong> <code>{filename}</code>
        </div>

        <div className="run-instruction">
          <strong>▶️ Run with:</strong> <code>python3 {filename}</code>
        </div>

        {exampleOutput && (
          <div className="example-output">
            <h4>Expected Output:</h4>
            <pre>{exampleOutput}</pre>
          </div>
        )}

        {tips && tips.length > 0 && (
          <div className="tips-section">
            <h4>💡 Tips:</h4>
            <ul>
              {tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExerciseCard;
