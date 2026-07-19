import React, { useState } from 'react';
import './ExerciseCard.css';
import CodeRunner from './CodeRunner';

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
  const [uploadedCode, setUploadedCode] = useState('');
  const [uploadedName, setUploadedName] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setUploadedCode(event.target.result);
      setUploadedName(file.name);
    };
    reader.readAsText(file);
  };

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

        <div className="upload-section">
          <h4>✅ Check Your Work</h4>
          <p className="upload-hint">
            Wrote and ran <code>{filename}</code> in VS Code? Upload it here to see it run and compare it to the expected output above.
          </p>
          <label className="upload-button">
            📤 Upload {filename}
            <input type="file" accept=".py" onChange={handleFileChange} hidden />
          </label>

          {uploadedCode && (
            <CodeRunner code={uploadedCode} title={`Your Uploaded Code (${uploadedName})`} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ExerciseCard;
