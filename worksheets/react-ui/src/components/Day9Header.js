import React from 'react';
import './Header.css';
import VSCodeInstructions from './VSCodeInstructions';

function Day9Header({ name, date, updateName, updateDate }) {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-content">
          <h1>🎉 Day 9: Final Project - Putting It ALL Together!</h1>
          <p className="subtitle">Build your own Adventure RPG using everything you learned in Days 1-8!</p>
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
        <h2>🏆 The Grand Finale</h2>
        <div className="overview-grid">
          <div className="overview-item">
            <span className="overview-icon">🗺️</span>
            <h3>Plan First</h3>
            <p>Decide your classes, your lists, and your game loop before you code</p>
          </div>
          <div className="overview-item">
            <span className="overview-icon">🔨</span>
            <h3>Combine Everything</h3>
            <p>Classes, lists, loops, functions, and if/else all in ONE program</p>
          </div>
          <div className="overview-item">
            <span className="overview-icon">🗡️</span>
            <h3>Build a Real Game</h3>
            <p>An Adventure RPG with a party of heroes and monster battles</p>
          </div>
        </div>
      </div>

      <VSCodeInstructions exerciseFilename="day9_final_project.py" />

      <div className="important-note">
        <h3>⚠️ Important: We're Still Using VS Code Today!</h3>
        <p>
          Just like Days 6, 7, and 8, you'll write your code in <strong>VS Code</strong> and run it in the <strong>terminal</strong>.
          Today there's no new concept - you already know every piece. We're putting them all together into one big program!
        </p>
        <p>
          The browser shows you what to build; you write all your code in <strong>.py files</strong> on your computer.
          Start from the template <code>day9_final_project_template.py</code> - it already runs!
        </p>
      </div>
    </div>
  );
}

export default Day9Header;
