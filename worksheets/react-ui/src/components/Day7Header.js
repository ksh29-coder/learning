import React from 'react';
import './Header.css';
import VSCodeInstructions from './VSCodeInstructions';

function Day7Header({ name, date, updateName, updateDate }) {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-content">
          <h1>🐾 Day 7: Classes & Objects</h1>
          <p className="subtitle">Build your own blueprints and bring objects to life in VS Code!</p>
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
            <span className="overview-icon">🍪</span>
            <h3>Classes</h3>
            <p>A class is a blueprint - like a cookie cutter for making objects</p>
          </div>
          <div className="overview-item">
            <span className="overview-icon">🐶</span>
            <h3>Objects &amp; Attributes</h3>
            <p>Create objects from a class, each with their own data</p>
          </div>
          <div className="overview-item">
            <span className="overview-icon">⚙️</span>
            <h3>Methods</h3>
            <p>Give your objects actions they can perform</p>
          </div>
        </div>
      </div>

      <VSCodeInstructions exerciseFilename="day7_exercise1.py" />

      <div className="important-note">
        <h3>⚠️ Important: We're Still Using VS Code Today!</h3>
        <p>
          Just like Day 5 and Day 6, you'll write your code in <strong>VS Code</strong> and run it in the <strong>terminal</strong>.
          Follow the VS Code instructions above for each exercise.
        </p>
        <p>
          The browser will show you what to build, but you'll write all your code in <strong>.py files</strong> on your computer.
        </p>
      </div>
    </div>
  );
}

export default Day7Header;
