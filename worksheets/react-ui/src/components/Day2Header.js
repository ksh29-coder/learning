import React from 'react';
import './Header.css';

function Day2Header({ name, date, updateName, updateDate }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">
          📦 Day 2 Worksheet: Variables - The Memory Boxes 📦
        </h1>
        <div className="student-info">
          <div className="info-item">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => updateName(e.target.value)}
              placeholder="Enter your name"
              className="info-input"
            />
          </div>
          <div className="info-item">
            <label htmlFor="date">Date:</label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => updateDate(e.target.value)}
              className="info-input"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Day2Header;





