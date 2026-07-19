import React, { useState } from 'react';
import App from './App';
import Day2App from './Day2App';
import Day3App from './Day3App';
import Day4App from './Day4App';
import Day5App from './Day5App';
import './DaySelector.css';

function DaySelector() {
  const [selectedDay, setSelectedDay] = useState(1);

  const renderDay = () => {
    switch (selectedDay) {
      case 1:
        return <App />;
      case 2:
        return <Day2App />;
      case 3:
        return <Day3App />;
      case 4:
        return <Day4App />;
      case 5:
        return <Day5App />;
      default:
        return <App />;
    }
  };

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
          <button
            className={`day-button ${selectedDay === 4 ? 'active' : ''}`}
            onClick={() => setSelectedDay(4)}
          >
            🔁 Day 4: Loops - Doing Things Over and Over
          </button>
          <button
            className={`day-button ${selectedDay === 5 ? 'active' : ''}`}
            onClick={() => setSelectedDay(5)}
          >
            🎯 Day 5: Functions, Review & Games!
          </button>
        </div>
      </div>
      <div className="day-content">
        {renderDay()}
      </div>
    </div>
  );
}

export default DaySelector;
