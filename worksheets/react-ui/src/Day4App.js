import React, { useState, useEffect } from 'react';
import './App.css';
import Day4Header from './components/Day4Header';
import Day4Part1 from './components/Day4Part1';
import Day4Part2 from './components/Day4Part2';
import Day4Part3 from './components/Day4Part3';
import Day4Part4 from './components/Day4Part4';
import Day4Part5 from './components/Day4Part5';
import Day4Bonus from './components/Day4Bonus';
import ScoreDisplay from './components/ScoreDisplay';

function Day4App() {
  const [currentTab, setCurrentTab] = useState(0);
  const [answers, setAnswers] = useState({
    name: '',
    date: new Date().toISOString().split('T')[0],
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    exercise1: '',
    exercise2: '',
    exercise3: '',
    whileExercise1: '',
    whileExercise2: '',
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
    notes: ''
  });
  const [checkedQuestions, setCheckedQuestions] = useState({
    q1: false,
    q2: false,
    q3: false,
    q4: false
  });

  // Load saved answers on mount
  useEffect(() => {
    const saved = localStorage.getItem('day4_worksheet_answers');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setAnswers(prev => ({ ...prev, ...parsed.answers }));
        if (parsed.checkedQuestions) {
          setCheckedQuestions(parsed.checkedQuestions);
        }
      } catch (e) {
        console.error('Error loading saved answers:', e);
      }
    }
  }, []);

  // Save answers whenever they change
  useEffect(() => {
    const saveData = {
      answers,
      checkedQuestions,
      lastSaved: new Date().toISOString()
    };
    localStorage.setItem('day4_worksheet_answers', JSON.stringify(saveData));
  }, [answers, checkedQuestions]);

  const updateAnswer = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const updateCheckedQuestion = (questionId, isCorrect) => {
    setCheckedQuestions(prev => ({ ...prev, [questionId]: isCorrect }));
  };

  const tabs = [
    { id: 0, label: 'Part 1: Understanding Loops', icon: '🔁' },
    { id: 1, label: 'Part 2: For Loops Practice', icon: '💻' },
    { id: 2, label: 'Part 3: While Loops Practice', icon: '⌛' },
    { id: 3, label: 'Part 4: Challenges', icon: '🎯' },
    { id: 4, label: 'Part 5: Reflection', icon: '💭' },
    { id: 5, label: '⭐ Bonus', icon: '⭐' }
  ];

  const renderTabContent = () => {
    switch (currentTab) {
      case 0:
        return (
          <Day4Part1
            answers={answers}
            updateAnswer={updateAnswer}
            checkedQuestions={checkedQuestions}
            updateCheckedQuestion={updateCheckedQuestion}
          />
        );
      case 1:
        return <Day4Part2 answers={answers} updateAnswer={updateAnswer} />;
      case 2:
        return <Day4Part3 answers={answers} updateAnswer={updateAnswer} />;
      case 3:
        return <Day4Part4 answers={answers} updateAnswer={updateAnswer} />;
      case 4:
        return <Day4Part5 answers={answers} updateAnswer={updateAnswer} />;
      case 5:
        return <Day4Bonus answers={answers} updateAnswer={updateAnswer} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Day4Header
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

export default Day4App;
