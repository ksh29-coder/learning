import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Part1 from './components/Part1';
import Part2 from './components/Part2';
import Part3 from './components/Part3';
import Part4 from './components/Part4';
import Exercise from './components/Exercise';
import Bonus from './components/Bonus';
import ScoreDisplay from './components/ScoreDisplay';
import { useWorksheetStorage } from './hooks/useWorksheetStorage';

function App({ profile }) {
  const [currentTab, setCurrentTab] = useState(0);
  const initialAnswers = {
    name: '',
    date: new Date().toISOString().split('T')[0],
    q1: '',
    q2: '',
    q3: '',
    exercise1: '',
    exercise2: '',
    challenge1: 'print("    *")\nprint("   ***")\nprint("  _____")  # Fill this in!\nprint(" _____")    # Fill this in!\nprint("    |")',
    challenge2: '',
    reflection1: '',
    reflection2: '',
    reflection3: '',
    reflection4: '',
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
    q3: false
  };

  const { answers, checkedQuestions, updateAnswer, updateCheckedQuestion } = useWorksheetStorage(profile, 1, initialAnswers, initialCheckedQuestions);

  const tabs = [
    { id: 0, label: 'Part 1: Understanding Print', icon: '📚' },
    { id: 1, label: 'Part 2: Code Practice', icon: '💻' },
    { id: 2, label: 'Part 3: ASCII Art', icon: '🎨' },
    { id: 3, label: 'Part 4: Reflection', icon: '💭' },
    { id: 4, label: 'Exercise', icon: '📤' },
    { id: 5, label: '⭐ Bonus', icon: '⭐' }
  ];

  const renderTabContent = () => {
    switch (currentTab) {
      case 0:
        return (
          <Part1
            answers={answers}
            updateAnswer={updateAnswer}
            checkedQuestions={checkedQuestions}
            updateCheckedQuestion={updateCheckedQuestion}
            profile={profile}
          />
        );
      case 1:
        return <Part2 answers={answers} updateAnswer={updateAnswer} />;
      case 2:
        return <Part3 answers={answers} updateAnswer={updateAnswer} />;
      case 3:
        return <Part4 answers={answers} updateAnswer={updateAnswer} />;
      case 4:
        return <Exercise answers={answers} updateAnswer={updateAnswer} />;
      case 5:
        return <Bonus answers={answers} updateAnswer={updateAnswer} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Header
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

export default App;

