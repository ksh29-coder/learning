import React, { useState } from 'react';
import './App.css';
import { useWorksheetStorage, DEFAULT_PROFILE } from './hooks/useWorksheetStorage';
import Day8Header from './components/Day8Header';
import Day8Part1 from './components/Day8Part1';
import Day8Part2 from './components/Day8Part2';
import Day8Quiz from './components/Day8Quiz';
import Day8Exercise from './components/Day8Exercise';
import Day8Bonus from './components/Day8Bonus';

function Day8App({ profile = DEFAULT_PROFILE }) {
  const [currentTab, setCurrentTab] = useState(0);

  const initialAnswers = {
    name: '',
    date: new Date().toISOString().split('T')[0],
    // Quiz answers (Part 1 concept checks live in the Quiz tab)
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    // Part 2: Inheritance & Overriding Practice completions
    p2_ex1_completed: false,
    p2_ex2_completed: false,
    p2_ex3_completed: false,
    p2_ex4_completed: false,
    // Exercise tab completions
    exercise1_completed: false,
    exercise2_completed: false,
    exercise3_completed: false,
    // Bonus completions
    bonus1_completed: false,
    bonus2_completed: false
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
    8,
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
    { id: 0, label: 'Part 1: Understanding Inheritance', icon: '📚' },
    { id: 1, label: 'Part 2: Inheritance & Overriding Practice', icon: '💻' },
    { id: 2, label: 'Quiz', icon: '🧠' },
    { id: 3, label: 'Exercise: Build an Animal Program', icon: '🐾' },
    { id: 4, label: '⭐ Bonus Challenges', icon: '⭐' }
  ];

  const renderTabContent = () => {
    switch (currentTab) {
      case 0:
        return <Day8Part1 answers={answers} updateAnswer={updateAnswer} />;
      case 1:
        return <Day8Part2 answers={answers} updateAnswer={updateAnswer} />;
      case 2:
        return (
          <Day8Quiz
            answers={answers}
            updateAnswer={updateAnswer}
            checkedQuestions={checkedQuestions}
            updateCheckedQuestion={updateCheckedQuestion}
            profile={profile}
          />
        );
      case 3:
        return <Day8Exercise answers={answers} updateAnswer={updateAnswer} />;
      case 4:
        return <Day8Bonus answers={answers} updateAnswer={updateAnswer} />;
      default:
        return <Day8Part1 answers={answers} updateAnswer={updateAnswer} />;
    }
  };

  return (
    <div className="App">
      <Day8Header
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

export default Day8App;
