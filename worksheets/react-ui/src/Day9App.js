import React, { useState } from 'react';
import './App.css';
import { useWorksheetStorage, DEFAULT_PROFILE } from './hooks/useWorksheetStorage';
import Day9Header from './components/Day9Header';
import Day9Part1 from './components/Day9Part1';
import Day9Part2 from './components/Day9Part2';
import Day9Quiz from './components/Day9Quiz';
import Day9Exercise from './components/Day9Exercise';
import Day9Bonus from './components/Day9Bonus';

function Day9App({ profile = DEFAULT_PROFILE }) {
  const [currentTab, setCurrentTab] = useState(0);

  const initialAnswers = {
    name: '',
    date: new Date().toISOString().split('T')[0],
    // Quiz answers (whole-course review)
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    // Part 2: Build-it-step-by-step completions
    p2_ex1_completed: false,
    p2_ex2_completed: false,
    p2_ex3_completed: false,
    p2_ex4_completed: false,
    // Exercise tab (the capstone build) completions
    exercise1_completed: false,
    exercise2_completed: false,
    // Bonus Arcade game completions
    game1_completed: false,
    game2_completed: false,
    game3_completed: false,
    game4_completed: false,
    game5_completed: false
  };

  const initialCheckedQuestions = {
    q1: false,
    q2: false,
    q3: false,
    q4: false,
    q5: false,
    q6: false
  };

  const { answers, checkedQuestions, updateAnswer, updateCheckedQuestion } = useWorksheetStorage(
    profile,
    9,
    initialAnswers,
    initialCheckedQuestions
  );

  const updateName = (value) => {
    updateAnswer('name', value);
  };

  const updateDate = (value) => {
    updateAnswer('date', value);
  };

  const tabs = [
    { id: 0, label: 'Part 1: Project Overview', icon: '🗺️' },
    { id: 1, label: 'Part 2: Build It Step by Step', icon: '🔨' },
    { id: 2, label: 'Quiz', icon: '🧠' },
    { id: 3, label: 'Exercise: Build the Adventure RPG', icon: '🗡️' },
    { id: 4, label: '⭐ Bonus Arcade', icon: '🕹️' }
  ];

  const renderTabContent = () => {
    switch (currentTab) {
      case 0:
        return <Day9Part1 answers={answers} updateAnswer={updateAnswer} />;
      case 1:
        return <Day9Part2 answers={answers} updateAnswer={updateAnswer} />;
      case 2:
        return (
          <Day9Quiz
            answers={answers}
            updateAnswer={updateAnswer}
            checkedQuestions={checkedQuestions}
            updateCheckedQuestion={updateCheckedQuestion}
          />
        );
      case 3:
        return <Day9Exercise answers={answers} updateAnswer={updateAnswer} />;
      case 4:
        return <Day9Bonus answers={answers} updateAnswer={updateAnswer} />;
      default:
        return <Day9Part1 answers={answers} updateAnswer={updateAnswer} />;
    }
  };

  return (
    <div className="App">
      <Day9Header
        name={answers.name}
        date={answers.date}
        updateName={updateName}
        updateDate={updateDate}
      />

      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setCurrentTab(tab.id)}
            className={`tab ${currentTab === tab.id ? 'active' : ''}`}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="content">
        {renderTabContent()}
      </div>
    </div>
  );
}

export default Day9App;
