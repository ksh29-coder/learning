import React from 'react';
import './Header.css';
import VSCodeInstructions from './VSCodeInstructions';

function Day5Header({ name, date, updateName, updateDate }) {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-content">
          <h1>🎯 Day 5: Functions, Review & Games!</h1>
          <p className="subtitle">Learn functions, review everything, and build amazing games in VS Code!</p>
          <div className="header-info">
            <div className="info-item">
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => updateName(e.target.value)}
                placeholder="Enter your name"
                className="name-input"
              />
            </div>
            <div className="info-item">
              <label>Date:</label>
              <input
                type="date"
                value={date}
                onChange={(e) => updateDate(e.target.value)}
                className="date-input"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="day-overview">
        <h2>📚 What You'll Learn Today</h2>
        <div className="overview-grid">
          <div className="overview-item">
            <span className="overview-icon">⚙️</span>
            <h3>Functions</h3>
            <p>Create your own commands with parameters and return values</p>
          </div>
          <div className="overview-item">
            <span className="overview-icon">🔄</span>
            <h3>Review</h3>
            <p>Combine variables, if/else, loops, and functions together</p>
          </div>
          <div className="overview-item">
            <span className="overview-icon">🎮</span>
            <h3>Build Games</h3>
            <p>Create Rock Paper Scissors, Number Guessing, and more!</p>
          </div>
        </div>
      </div>

      <VSCodeInstructions exerciseFilename="day5_exercise1.py" />

      <div className="important-note">
        <h3>⚠️ Important: We're Using VS Code Today!</h3>
        <p>
          Starting from Day 5, you'll write code in <strong>VS Code</strong> (a real code editor) and run it in the <strong>terminal</strong>.
          This is how professional programmers work! Follow the VS Code instructions above for each exercise.
        </p>
        <p>
          The browser will show you what to build, but you'll write all your code in <strong>.py files</strong> on your computer.
        </p>
      </div>
    </div>
  );
}

export default Day5Header;
