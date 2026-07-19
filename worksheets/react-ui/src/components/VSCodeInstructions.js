import React from 'react';
import './VSCodeInstructions.css';

function VSCodeInstructions({ exerciseFilename = 'my_exercise.py' }) {
  return (
    <div className="vscode-instructions">
      <h2>💻 How to Complete Exercises in VS Code</h2>
      <div className="instructions-grid">
        <div className="instruction-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Create a New File</h3>
            <ul>
              <li>Open VS Code</li>
              <li>Click: <strong>File → New File</strong></li>
              <li>Save As: <code>{exerciseFilename}</code></li>
            </ul>
          </div>
        </div>

        <div className="instruction-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Write Your Code</h3>
            <ul>
              <li>Type your Python code in the file</li>
              <li>Save with <kbd>Cmd+S</kbd> (Mac) or <kbd>Ctrl+S</kbd> (Windows)</li>
            </ul>
          </div>
        </div>

        <div className="instruction-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>Run Your Code</h3>
            <ul>
              <li>Open Terminal: <strong>View → Terminal</strong></li>
              <li>Type: <code>python3 {exerciseFilename}</code></li>
              <li>Press <kbd>Enter</kbd></li>
            </ul>
          </div>
        </div>

        <div className="instruction-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3>See Output</h3>
            <ul>
              <li>Your program's output appears in the terminal</li>
              <li>If there are errors, read them carefully!</li>
            </ul>
          </div>
        </div>

        <div className="instruction-step">
          <div className="step-number">5</div>
          <div className="step-content">
            <h3>Make Changes</h3>
            <ul>
              <li>Edit your code</li>
              <li>Save again</li>
              <li>Run again to test</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="quick-reference">
        <h3>Quick Reference</h3>
        <div className="reference-grid">
          <div className="reference-item">
            <strong>Save File:</strong>
            <span><kbd>Cmd+S</kbd> or <kbd>Ctrl+S</kbd></span>
          </div>
          <div className="reference-item">
            <strong>Open Terminal:</strong>
            <span><kbd>Ctrl+`</kbd> or View → Terminal</span>
          </div>
          <div className="reference-item">
            <strong>Run Python:</strong>
            <span><code>python3 filename.py</code></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VSCodeInstructions;
