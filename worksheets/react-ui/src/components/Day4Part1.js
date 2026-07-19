import React, { useState } from 'react';
import './Part1.css';

function Day4Part1({ answers, updateAnswer, checkedQuestions, updateCheckedQuestion }) {
  const [feedback, setFeedback] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: ''
  });

  const correctAnswers = {
    q1: 'It repeats code many times',
    q2: 'for',
    q3: 'while',
    q4: ['change the variable', 'update the variable', 'make the variable change']
  };

  const checkAnswer = (questionId, userAnswer) => {
    if (!userAnswer) {
      setFeedback(prev => ({ ...prev, [questionId]: 'Please enter an answer first! 😊' }));
      return;
    }

    let isCorrect = false;
    const correct = correctAnswers[questionId];

    if (questionId === 'q1') {
      isCorrect = userAnswer === correct;
    } else if (questionId === 'q2') {
      isCorrect = userAnswer === correct;
    } else if (questionId === 'q3') {
      isCorrect = userAnswer === correct;
    } else if (questionId === 'q4') {
      const answerLower = userAnswer.toLowerCase();
      isCorrect = correct.some(c => answerLower.includes(c.toLowerCase()));
    }

    if (isCorrect) {
      setFeedback(prev => ({ ...prev, [questionId]: '✓ Correct! Great job! 🎉' }));
      updateCheckedQuestion(questionId, true);
    } else {
      let hint = '';
      if (questionId === 'q1') {
        hint = 'Hint: Loops are for doing the SAME thing again and again!';
      } else if (questionId === 'q2') {
        hint = 'Hint: We use this keyword with range() to count.';
      } else if (questionId === 'q3') {
        hint = 'Hint: This loop runs WHILE a condition is True.';
      } else if (questionId === 'q4') {
        hint = 'Hint: If nothing changes, the condition might stay True forever!';
      }
      setFeedback(prev => ({ ...prev, [questionId]: `✗ Not quite right. ${hint} 💪` }));
      updateCheckedQuestion(questionId, false);
    }
  };

  return (
    <div className="part1-container">
      <div className="part-header">
        <h2>🔁 Part 1: Understanding Loops</h2>
        <p className="part-description">
          Let's test what you know about repeating actions with loops!
        </p>
      </div>

      <div className="question-card">
        <h3 className="question-title">Question 1: What is a loop in programming?</h3>
        <div className="options">
          {[
            'It prints text to the screen',
            'It repeats code many times',
            'It saves your program',
            'It creates a variable'
          ].map((option, index) => (
            <label key={index} className="radio-option">
              <input
                type="radio"
                name="q1"
                value={option}
                checked={answers.q1 === option}
                onChange={(e) => updateAnswer('q1', e.target.value)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        <div className="check-section">
          <button
            className="check-button"
            onClick={() => checkAnswer('q1', answers.q1)}
          >
            ✓ Check Answer
          </button>
          {feedback.q1 && (
            <span className={`feedback ${feedback.q1.includes('✓') ? 'correct' : 'incorrect'}`}>
              {feedback.q1}
            </span>
          )}
        </div>
      </div>

      <div className="question-card">
        <h3 className="question-title">Question 2: Which keyword do we use for a counting loop with range()?</h3>
        <div className="options">
          {['if', 'for', 'print', 'while'].map((option, index) => (
            <label key={index} className="radio-option">
              <input
                type="radio"
                name="q2"
                value={option}
                checked={answers.q2 === option}
                onChange={(e) => updateAnswer('q2', e.target.value)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        <div className="check-section">
          <button
            className="check-button"
            onClick={() => {
              const selected = answers.q2;
              const isCorrect = selected === 'for';
              if (isCorrect) {
                checkAnswer('q2', 'for');
              } else {
                checkAnswer('q2', 'wrong');
              }
            }}
          >
            ✓ Check Answer
          </button>
          {feedback.q2 && (
            <span className={`feedback ${feedback.q2.includes('✓') ? 'correct' : 'incorrect'}`}>
              {feedback.q2}
            </span>
          )}
        </div>
      </div>

      <div className="question-card">
        <h3 className="question-title">Question 3: Which keyword do we use for a loop that runs while a condition is True?</h3>
        <div className="options">
          {['for', 'print', 'while', 'range'].map((option, index) => (
            <label key={index} className="radio-option">
              <input
                type="radio"
                name="q3"
                value={option}
                checked={answers.q3 === option}
                onChange={(e) => updateAnswer('q3', e.target.value)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        <div className="check-section">
          <button
            className="check-button"
            onClick={() => {
              const selected = answers.q3;
              const isCorrect = selected === 'while';
              if (isCorrect) {
                checkAnswer('q3', 'while');
              } else {
                checkAnswer('q3', 'wrong');
              }
            }}
          >
            ✓ Check Answer
          </button>
          {feedback.q3 && (
            <span className={`feedback ${feedback.q3.includes('✓') ? 'correct' : 'incorrect'}`}>
              {feedback.q3}
            </span>
          )}
        </div>
      </div>

      <div className="question-card">
        <h3 className="question-title">Question 4: What must we do inside most while loops so they can eventually stop?</h3>
        <div className="answer-input-group">
          <input
            type="text"
            value={answers.q4}
            onChange={(e) => updateAnswer('q4', e.target.value)}
            placeholder="Enter your answer..."
            className="answer-input"
          />
          <button
            className="check-button"
            onClick={() => checkAnswer('q4', answers.q4)}
          >
            ✓ Check Answer
          </button>
        </div>
        {feedback.q4 && (
          <span className={`feedback ${feedback.q4.includes('✓') ? 'correct' : 'incorrect'}`}>
            {feedback.q4}
          </span>
        )}
      </div>

      <div className="part-footer">
        <p className="tip">
          💡 Tip: Scroll down to see all questions, or click the tabs above to move to other parts!
        </p>
      </div>
    </div>
  );
}

export default Day4Part1;




