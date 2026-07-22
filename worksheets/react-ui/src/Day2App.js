import React, { useState } from 'react';
import './App.css';
import Day2Header from './components/Day2Header';
import Day2Learn from './components/Day2Learn';
import Day2Part1 from './components/Day2Part1';
import Day2Part2 from './components/Day2Part2';
import Day2Part3 from './components/Day2Part3';
import Day2Part4 from './components/Day2Part4';
import Day2Part5 from './components/Day2Part5';
import Day2Part6 from './components/Day2Part6';
import Day2Exercise from './components/Day2Exercise';
import Day2Bonus from './components/Day2Bonus';
import ScoreDisplay from './components/ScoreDisplay';
import { useWorksheetStorage } from './hooks/useWorksheetStorage';

function Day2App({ profile }) {
  const [currentTab, setCurrentTab] = useState(0);
  const initialAnswers = {
    name: '',
    date: new Date().toISOString().split('T')[0],
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: '',
    q8: '',
    stringExercise1: '',
    stringExercise2: '',
    exercise1: '',
    exercise2: '',
    exercise3: '',
    inputExercise1: '',
    inputExercise2: '',
    inputExercise3: '',
    challenge1: '',
    challenge2: '',
    challenge3: '',
    reflection1: '',
    reflection2: '',
    reflection3: '',
    reflection4: '',
    reflection5: '',
    nextLearning: '',
    bonus: '',
    notes: '',
    exerciseUpload1_completed: false,
    exerciseUpload2_completed: false,
    exerciseUpload3_completed: false
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

  const { answers, checkedQuestions, updateAnswer, updateCheckedQuestion } = useWorksheetStorage(profile, 2, initialAnswers, initialCheckedQuestions);

  const tabs = [
    { id: 0, label: 'Part 1: Understanding Variables', icon: '📦' },
    { id: 1, label: 'Quiz', icon: '🧠' },
    { id: 2, label: 'Part 2: Code Practice', icon: '💻' },
    { id: 3, label: 'Part 3: Input Practice', icon: '⌨️' },
    { id: 4, label: 'Part 4: String Powers', icon: '✨' },
    { id: 5, label: 'Part 5: Challenges', icon: '🎯' },
    { id: 6, label: 'Part 6: Reflection', icon: '💭' },
    { id: 7, label: 'Exercise', icon: '📤' },
    { id: 8, label: '⭐ Bonus', icon: '⭐' }
  ];

  const renderTabContent = () => {
    switch (currentTab) {
      case 0:
        return <Day2Learn />;
      case 1:
        return (
          <Day2Part1
            answers={answers}
            updateAnswer={updateAnswer}
            checkedQuestions={checkedQuestions}
            updateCheckedQuestion={updateCheckedQuestion}
            profile={profile}
          />
        );
      case 2:
        return <Day2Part2 answers={answers} updateAnswer={updateAnswer} />;
      case 3:
        return <Day2Part3 answers={answers} updateAnswer={updateAnswer} />;
      case 4:
        return (
          <Day2Part6
            answers={answers}
            updateAnswer={updateAnswer}
            checkedQuestions={checkedQuestions}
            updateCheckedQuestion={updateCheckedQuestion}
            profile={profile}
          />
        );
      case 5:
        return <Day2Part4 answers={answers} updateAnswer={updateAnswer} />;
      case 6:
        return <Day2Part5 answers={answers} updateAnswer={updateAnswer} />;
      case 7:
        return <Day2Exercise answers={answers} updateAnswer={updateAnswer} />;
      case 8:
        return <Day2Bonus answers={answers} updateAnswer={updateAnswer} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Day2Header
        name={answers.name}
        date={answers.date}
        updateName={(name) => updateAnswer('name', name)}
        updateDate={(date) => updateAnswer('date', date)}
      />
      <ScoreDisplay checkedQuestions={checkedQuestions} />
      <div className="tabs-container">
        <div className="tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab ${currentTab === tab.id ? 'active' : ''}`}
              onClick={() => setCurrentTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="content-container">
        {renderTabContent()}
      </div>
    </div>
  );
}

export default Day2App;





