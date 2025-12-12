import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Part1 from './components/Part1';
import Part2 from './components/Part2';
import Part3 from './components/Part3';
import Part4 from './components/Part4';
import Bonus from './components/Bonus';
import ScoreDisplay from './components/ScoreDisplay';

function App() {
  const [currentTab, setCurrentTab] = useState(0);
  const [answers, setAnswers] = useState({
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
    notes: ''
  });
  const [checkedQuestions, setCheckedQuestions] = useState({
    q1: false,
    q2: false,
    q3: false
  });

  // Load saved answers on mount
  useEffect(() => {
    const saved = localStorage.getItem('day1_worksheet_answers');
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
    localStorage.setItem('day1_worksheet_answers', JSON.stringify(saveData));
  }, [answers, checkedQuestions]);

  const updateAnswer = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const updateCheckedQuestion = (questionId, isCorrect) => {
    setCheckedQuestions(prev => ({ ...prev, [questionId]: isCorrect }));
  };

  const tabs = [
    { id: 0, label: 'Part 1: Understanding Print', icon: '📚' },
    { id: 1, label: 'Part 2: Code Practice', icon: '💻' },
    { id: 2, label: 'Part 3: ASCII Art', icon: '🎨' },
    { id: 3, label: 'Part 4: Reflection', icon: '💭' },
    { id: 4, label: '⭐ Bonus', icon: '⭐' }
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
          />
        );
      case 1:
        return <Part2 answers={answers} updateAnswer={updateAnswer} />;
      case 2:
        return <Part3 answers={answers} updateAnswer={updateAnswer} />;
      case 3:
        return <Part4 answers={answers} updateAnswer={updateAnswer} />;
      case 4:
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

