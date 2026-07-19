import React from 'react';
import './Header.css';
import VSCodeInstructions from './VSCodeInstructions';

function Day8Header({ name, date, updateName, updateDate }) {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-content">
          <h1>🐾 Day 8: Inheritance &amp; Polymorphism</h1>
          <p className="subtitle">Build families of classes where every object acts its own way!</p>
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
            <span className="overview-icon">👨‍👩‍👧</span>
            <h3>Inheritance</h3>
            <p>A subclass like Dog reuses everything from a parent class like Pet</p>
          </div>
          <div className="overview-item">
            <span className="overview-icon">🔊</span>
            <h3>Overriding</h3>
            <p>Each animal overrides make_sound() to bark, meow, or tweet</p>
          </div>
          <div className="overview-item">
            <span className="overview-icon">✨</span>
            <h3>Polymorphism</h3>
            <p>Same command, different result - one loop, many behaviors</p>
          </div>
        </div>
      </div>

      <VSCodeInstructions exerciseFilename="day8_exercise1.py" />

      <div className="important-note">
        <h3>⚠️ Important: We're Still Using VS Code Today!</h3>
        <p>
          Just like Day 6 and Day 7, you'll write your code in <strong>VS Code</strong> and run it in the <strong>terminal</strong>.
          Follow the VS Code instructions above for each exercise.
        </p>
        <p>
          The browser will show you what to build, but you'll write all your code in <strong>.py files</strong> on your computer.
        </p>
      </div>
    </div>
  );
}

export default Day8Header;
