import React, { useState } from 'react';
import App from './App';
import Day2App from './Day2App';
import Day3App from './Day3App';
import './DaySelector.css';

function DaySelector() {
  const [selectedDay, setSelectedDay] = useState(1);

  return (
    <div className="day-selector-container">
      <div className="day-selector-header">
        <h1>🎓 Python Adventures for Kids</h1>
        <div className="day-buttons">
          <button
            className={`day-button ${selectedDay === 1 ? 'active' : ''}`}
            onClick={() => setSelectedDay(1)}
          >
            📚 Day 1: My First Python Program
          </button>
          <button
            className={`day-button ${selectedDay === 2 ? 'active' : ''}`}
            onClick={() => setSelectedDay(2)}
          >
            📦 Day 2: Variables - The Memory Boxes
          </button>
          <button
            className={`day-button ${selectedDay === 3 ? 'active' : ''}`}
            onClick={() => setSelectedDay(3)}
          >
            🤔 Day 3: Making Decisions - If/Else
          </button>
        </div>
      </div>
      <div className="day-content">
        {selectedDay === 1 ? <App /> : selectedDay === 2 ? <Day2App /> : <Day3App />}
      </div>
    </div>
  );
}

export default DaySelector;

