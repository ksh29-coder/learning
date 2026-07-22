import React, { useState } from 'react';
import './App.css';
import Day5Header from './components/Day5Header';
import Day5Learn from './components/Day5Learn';
import Day5Part1 from './components/Day5Part1';
import Day5Part2 from './components/Day5Part2';
import Day5Part3 from './components/Day5Part3';
import Day5Part4 from './components/Day5Part4';
import Day5Part5 from './components/Day5Part5';
import Day5Part6 from './components/Day5Part6';
import Day5Part7 from './components/Day5Part7';
import Day5Bonus from './components/Day5Bonus';
import { useWorksheetStorage } from './hooks/useWorksheetStorage';

function Day5App({ profile }) {
  const [currentTab, setCurrentTab] = useState(0);
  const initialAnswers = {
    name: '',
    date: new Date().toISOString().split('T')[0],
    // Part 1: Understanding questions
    q1: '',
    q2: '',
    q3a: '',
    q3b: '',
    q3c: '',
    q4: '',
    // Part 7: Libraries quiz answers
    q5: '',
    q6: '',
    q7: '',
    q8: '',
    // Part 2: Functions Practice completions
    exercise1_completed: false,
    exercise2_completed: false,
    exercise3_completed: false,
    exercise4_completed: false,
    exercise5_completed: false,
    // Part 3: Review completions
    review1_completed: false,
    review2_completed: false,
    review3_completed: false,
    review4_completed: false,
    // Part 4: Rock Paper Scissors
    game1_completed: false,
    // Part 5: Number Guessing
    game2_completed: false,
    // Part 6: Build Your Own completions
    game3a_completed: false,
    game3b_completed: false,
    game3c_completed: false,
    game3d_completed: false,
    // Part 7: Libraries exercise completions
    lib1_completed: false,
    lib2_completed: false,
    // Bonus
    bonus1_completed: false,
    bonus2_completed: false,
    bonus3_completed: false,
    bonus4_completed: false
  };

  const initialCheckedQuestions = {
    q1: false,
    q2: false,
    q3: false,
    q4: false,
    q5: false,
    q6: false,
    q7: false,
    q8: false
  };

  const { answers, checkedQuestions, updateAnswer, updateCheckedQuestion } = useWorksheetStorage(profile, 5, initialAnswers, initialCheckedQuestions);

  const updateName = (value) => {
    updateAnswer('name', value);
  };

  const updateDate = (value) => {
    updateAnswer('date', value);
  };

  const tabs = [
    { id: 0, label: 'Part 1: Understanding Functions', icon: '📚' },
    { id: 1, label: 'Quiz', icon: '🧠' },
    { id: 2, label: 'Part 2: Functions Practice', icon: '💻' },
    { id: 3, label: 'Part 3: Concept Review', icon: '🔄' },
    { id: 4, label: 'Part 4: Game 1 - Rock Paper Scissors', icon: '🎮' },
    { id: 5, label: 'Part 5: Game 2 - Number Guessing', icon: '🔢' },
    { id: 6, label: 'Part 6: Build Your Game', icon: '🚀' },
    { id: 7, label: 'Part 7: Libraries', icon: '📦' },
    { id: 8, label: '⭐ Bonus Challenges', icon: '⭐' }
  ];

  const renderTabContent = () => {
    switch (currentTab) {
      case 0:
        return <Day5Learn />;
      case 1:
        return (
          <Day5Part1
            answers={answers}
            updateAnswer={updateAnswer}
            checkedQuestions={checkedQuestions}
            updateCheckedQuestion={updateCheckedQuestion}
            profile={profile}
          />
        );
      case 2:
        return <Day5Part2 answers={answers} updateAnswer={updateAnswer} />;
      case 3:
        return <Day5Part3 answers={answers} updateAnswer={updateAnswer} />;
      case 4:
        return <Day5Part4 answers={answers} updateAnswer={updateAnswer} />;
      case 5:
        return <Day5Part5 answers={answers} updateAnswer={updateAnswer} />;
      case 6:
        return <Day5Part6 answers={answers} updateAnswer={updateAnswer} />;
      case 7:
        return (
          <Day5Part7
            answers={answers}
            updateAnswer={updateAnswer}
            updateCheckedQuestion={updateCheckedQuestion}
            profile={profile}
          />
        );
      case 8:
        return <Day5Bonus answers={answers} updateAnswer={updateAnswer} />;
      default:
        return <Day5Learn />;
    }
  };

  return (
    <div className="App">
      <Day5Header
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

export default Day5App;
