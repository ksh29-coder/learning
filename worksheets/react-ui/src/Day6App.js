import React, { useState } from 'react';
import './App.css';
import { useWorksheetStorage, DEFAULT_PROFILE } from './hooks/useWorksheetStorage';
import Day6Header from './components/Day6Header';
import Day6Part1 from './components/Day6Part1';
import Day6Part2 from './components/Day6Part2';
import Day6Part3 from './components/Day6Part3';
import Day6Quiz from './components/Day6Quiz';
import Day6Exercise from './components/Day6Exercise';
import Day6Bonus from './components/Day6Bonus';

function Day6App({ profile = DEFAULT_PROFILE }) {
  const [currentTab, setCurrentTab] = useState(0);

  const initialAnswers = {
    name: '',
    date: new Date().toISOString().split('T')[0],
    // Quiz answers
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: '',
    q8: '',
    q9: '',
    q10: '',
    q11: '',
    // Part 2: List Practice completions
    exercise1_completed: false,
    exercise2_completed: false,
    exercise3_completed: false,
    exercise4_completed: false,
    // Exercise tab completions
    exercise5_completed: false,
    exercise6_completed: false,
    exercise7_completed: false,
    // Part 3: Dictionaries & Safety Net completions
    exercise8_completed: false,
    exercise9_completed: false,
    exercise10_completed: false,
    // Bonus completions
    bonus1_completed: false,
    bonus2_completed: false,
    bonus3_completed: false
  };

  const initialCheckedQuestions = {
    q1: false,
    q2: false,
    q3: false,
    q4: false,
    q5: false,
    q6: false,
    q7: false,
    q8: false,
    q9: false,
    q10: false,
    q11: false
  };

  const { answers, checkedQuestions, updateAnswer, updateCheckedQuestion } = useWorksheetStorage(
    profile,
    6,
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
    { id: 0, label: 'Part 1: Understanding Lists', icon: '📚' },
    { id: 1, label: 'Part 2: List Practice', icon: '💻' },
    { id: 2, label: 'Part 3: Dictionaries', icon: '🗂️' },
    { id: 3, label: 'Quiz', icon: '🧠' },
    { id: 4, label: 'Exercise', icon: '🚀' },
    { id: 5, label: '⭐ Bonus Challenges', icon: '⭐' }
  ];

  const renderTabContent = () => {
    switch (currentTab) {
      case 0:
        return <Day6Part1 answers={answers} updateAnswer={updateAnswer} />;
      case 1:
        return <Day6Part2 answers={answers} updateAnswer={updateAnswer} />;
      case 2:
        return <Day6Part3 answers={answers} updateAnswer={updateAnswer} />;
      case 3:
        return (
          <Day6Quiz
            answers={answers}
            updateAnswer={updateAnswer}
            checkedQuestions={checkedQuestions}
            updateCheckedQuestion={updateCheckedQuestion}
            profile={profile}
          />
        );
      case 4:
        return <Day6Exercise answers={answers} updateAnswer={updateAnswer} />;
      case 5:
        return <Day6Bonus answers={answers} updateAnswer={updateAnswer} />;
      default:
        return <Day6Part1 answers={answers} updateAnswer={updateAnswer} />;
    }
  };

  return (
    <div className="App">
      <Day6Header
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

export default Day6App;
