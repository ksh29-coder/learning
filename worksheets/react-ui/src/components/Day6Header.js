import React from 'react';
import './Header.css';
import VSCodeInstructions from './VSCodeInstructions';

function Day6Header({ name, date, updateName, updateDate }) {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-content">
          <h1>🧺 Day 6: Lists & Dictionaries - Storing Lots of Things!</h1>
          <p className="subtitle">Learn how to store, access, and change collections of information in VS Code!</p>
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
            <span className="overview-icon">🧺</span>
            <h3>Lists</h3>
            <p>Store many values together in one variable, like a backpack full of items</p>
          </div>
          <div className="overview-item">
            <span className="overview-icon">🔢</span>
            <h3>Indexing & Slicing</h3>
            <p>Grab one item or a whole chunk using positions, including counting from the end</p>
          </div>
          <div className="overview-item">
            <span className="overview-icon">🛠️</span>
            <h3>Changing Lists</h3>
            <p>Loop over lists, add items with append(), remove items, and check what's inside</p>
          </div>
          <div className="overview-item">
            <span className="overview-icon">🗂️</span>
            <h3>Dictionaries & the Safety Net</h3>
            <p>Labeled cubbies with {'{key: value}'}, plus try/except to catch bad input</p>
          </div>
        </div>
      </div>

      <VSCodeInstructions exerciseFilename="day6_exercise1.py" />

      <div className="important-note">
        <h3>⚠️ Important: We're Using VS Code Today!</h3>
        <p>
          Just like Day 5, you'll write code in <strong>VS Code</strong> (a real code editor) and run it in the <strong>terminal</strong>.
        </p>
        <p>
          The browser will show you what to build, but you'll write all your code in <strong>.py files</strong> on your computer.
        </p>
      </div>
    </div>
  );
}

export default Day6Header;
