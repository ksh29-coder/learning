import React from 'react';
import './Header.css';

function Day4Header({ name, date, updateName, updateDate }) {
  return (
    <div className="header">
      <div className="header-content">
        <h1>🔁 Day 4: Loops - Doing Things Over and Over</h1>
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
  );
}

export default Day4Header;
