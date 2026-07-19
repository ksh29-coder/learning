import React, { useState } from 'react';
import './Part1.css';
import ScoreDisplay from './ScoreDisplay';

function Day9Quiz({ answers, updateAnswer, checkedQuestions, updateCheckedQuestion }) {
  const [feedback, setFeedback] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: ''
  });

  const correctAnswers = {
    q1: 'print()',
    q2: 'A labeled box that stores information',
    q3: '5',
    q4: ['def', 'define', 'def keyword'],
    q5: 'A blueprint for making objects',
    q6: 'Same command, different result'
  };

  const checkAnswer = (questionId, userAnswer) => {
    if (!userAnswer) {
      setFeedback(prev => ({ ...prev, [questionId]: 'Please enter an answer first! 😊' }));
      return;
    }

    let isCorrect = false;
    const correct = correctAnswers[questionId];

    if (questionId === 'q1' || questionId === 'q2' || questionId === 'q5' || questionId === 'q6') {
      isCorrect = userAnswer === correct;
    } else if (questionId === 'q3') {
      isCorrect = userAnswer.trim() === correct;
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
        hint = 'Hint: Day 1! The function that shows text on the screen.';
      } else if (questionId === 'q2') {
        hint = 'Hint: Day 2! Think of a memory box with a label.';
      } else if (questionId === 'q3') {
        hint = 'Hint: Day 4! range(5) gives 0, 1, 2, 3, 4 — count them.';
      } else if (questionId === 'q4') {
        hint = 'Hint: Day 5! The keyword that starts a function definition.';
      } else if (questionId === 'q5') {
        hint = 'Hint: Day 7! A class is a template/blueprint for making objects.';
      } else if (questionId === 'q6') {
        hint = 'Hint: Day 8! Poly = many, morph = shapes. Same call, different behavior.';
      }
      setFeedback(prev => ({ ...prev, [questionId]: `✗ Not quite right. ${hint} 💪` }));
      updateCheckedQuestion(questionId, false);
    }
  };

  return (
    <div className="part1-container">
      <div className="part-header">
        <h2>🧠 Quiz: The Whole Course Review</h2>
        <p className="part-description">
          One question from (almost) every day! Show off everything you've learned across all 9 days.
        </p>
      </div>

      <div className="question-card">
        <h3 className="question-title">Question 1 (Day 1): Which function shows text on the screen?</h3>
        <div className="options">
          {['print()', 'input()', 'def', 'range()'].map((option, index) => (
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
          <button className="check-button" onClick={() => checkAnswer('q1', answers.q1)}>
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
        <h3 className="question-title">Question 2 (Day 2): What is a variable?</h3>
        <div className="options">
          {[
            'A labeled box that stores information',
            'A type of loop',
            'A way to print text',
            'A kind of error'
          ].map((option, index) => (
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
          <button className="check-button" onClick={() => checkAnswer('q2', answers.q2)}>
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
        <h3 className="question-title">Question 3 (Day 4): How many times does `range(5)` loop?</h3>
        <div className="answer-input-group">
          <input
            type="text"
            value={answers.q3}
            onChange={(e) => updateAnswer('q3', e.target.value)}
            placeholder="Enter a number..."
            className="answer-input"
          />
          <button className="check-button" onClick={() => checkAnswer('q3', answers.q3)}>
            ✓ Check Answer
          </button>
        </div>
        {feedback.q3 && (
          <span className={`feedback ${feedback.q3.includes('✓') ? 'correct' : 'incorrect'}`}>
            {feedback.q3}
          </span>
        )}
      </div>

      <div className="question-card">
        <h3 className="question-title">Question 4 (Day 5): What keyword starts a function definition?</h3>
        <div className="answer-input-group">
          <input
            type="text"
            value={answers.q4}
            onChange={(e) => updateAnswer('q4', e.target.value)}
            placeholder="Enter your answer..."
            className="answer-input"
          />
          <button className="check-button" onClick={() => checkAnswer('q4', answers.q4)}>
            ✓ Check Answer
          </button>
        </div>
        {feedback.q4 && (
          <span className={`feedback ${feedback.q4.includes('✓') ? 'correct' : 'incorrect'}`}>
            {feedback.q4}
          </span>
        )}
      </div>

      <div className="question-card">
        <h3 className="question-title">Question 5 (Day 7): What is a class?</h3>
        <div className="options">
          {[
            'A blueprint for making objects',
            'A single number',
            'A way to end a loop',
            'A list of files'
          ].map((option, index) => (
            <label key={index} className="radio-option">
              <input
                type="radio"
                name="q5"
                value={option}
                checked={answers.q5 === option}
                onChange={(e) => updateAnswer('q5', e.target.value)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        <div className="check-section">
          <button className="check-button" onClick={() => checkAnswer('q5', answers.q5)}>
            ✓ Check Answer
          </button>
          {feedback.q5 && (
            <span className={`feedback ${feedback.q5.includes('✓') ? 'correct' : 'incorrect'}`}>
              {feedback.q5}
            </span>
          )}
        </div>
      </div>

      <div className="question-card">
        <h3 className="question-title">Question 6 (Day 8): What is polymorphism, in a few words?</h3>
        <div className="options">
          {[
            'Same command, different result',
            'A way to delete objects',
            'A kind of variable',
            'A math operator'
          ].map((option, index) => (
            <label key={index} className="radio-option">
              <input
                type="radio"
                name="q6"
                value={option}
                checked={answers.q6 === option}
                onChange={(e) => updateAnswer('q6', e.target.value)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        <div className="check-section">
          <button className="check-button" onClick={() => checkAnswer('q6', answers.q6)}>
            ✓ Check Answer
          </button>
          {feedback.q6 && (
            <span className={`feedback ${feedback.q6.includes('✓') ? 'correct' : 'incorrect'}`}>
              {feedback.q6}
            </span>
          )}
        </div>
      </div>

      <ScoreDisplay checkedQuestions={checkedQuestions} />

      <div className="part-footer">
        <p className="tip">
          💡 Tip: If you can answer all six, you've truly learned the whole course. Amazing work! 🏆
        </p>
      </div>
    </div>
  );
}

export default Day9Quiz;
