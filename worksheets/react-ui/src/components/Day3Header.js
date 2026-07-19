import React from 'react';
import './Header.css';

function Day3Header({ name, date, updateName, updateDate }) {
  return (
    <div className="header">
      <div className="header-content">
        <h1>🤔 Day 3: Making Decisions - If/Else Statements</h1>
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

export default Day3Header;





