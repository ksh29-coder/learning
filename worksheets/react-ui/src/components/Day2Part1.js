import React, { useState } from 'react';
import './Part1.css';

function Day2Part1({ answers, updateAnswer, checkedQuestions, updateCheckedQuestion }) {
  const [feedback, setFeedback] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: ''
  });

  const correctAnswers = {
    q1: 'A labeled box that stores information',
    q2: 'my_name',
    q3: ['Hello, Sam', 'Hello,Sam', 'Hello,  Sam'],
    q4: ['one is a string', 'one is text', 'one is a number', 'string vs number', 'quotes']
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
      const answerLower = userAnswer.trim();
      isCorrect = correct.some(c => 
        answerLower.toLowerCase().replace(/\s+/g, ' ') === c.toLowerCase().replace(/\s+/g, ' ')
      );
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
        hint = 'Hint: Think about what variables are used for - storing information!';
      } else if (questionId === 'q2') {
        hint = 'Hint: Variable names cannot have spaces or start with numbers!';
      } else if (questionId === 'q3') {
        hint = 'Hint: What will print() display? The text "Hello," and then the value of name!';
      } else if (questionId === 'q4') {
        hint = 'Hint: One has quotes (text), one doesn\'t (number)!';
      }
      setFeedback(prev => ({ ...prev, [questionId]: `✗ Not quite right. ${hint} 💪` }));
      updateCheckedQuestion(questionId, false);
    }
  };

  return (
    <div className="part1-container">
      <div className="part-header">
        <h2>📦 Part 1: Understanding Variables</h2>
        <p className="part-description">
          Let's test your understanding of variables - the memory boxes!
        </p>
      </div>

      <div className="question-card">
        <h3 className="question-title">Question 1: What is a variable?</h3>
        <div className="options">
          {[
            'A type of food',
            'A labeled box that stores information',
            'A Python command',
            'A type of error'
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
        <h3 className="question-title">Question 2: Which of these is a valid variable name?</h3>
        <div className="options">
          {[
            'my name (has a space)',
            'my-name (has a dash)',
            'my_name (uses underscore)',
            '123name (starts with number)'
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
          <button
            className="check-button"
            onClick={() => {
              const selected = answers.q2;
              const isCorrect = selected === 'my_name (uses underscore)';
              if (isCorrect) {
                checkAnswer('q2', 'my_name');
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
        <h3 className="question-title">Question 3: What will this code print?</h3>
        <pre className="code-block">
{`name = "Sam"
print("Hello,", name)`}
        </pre>
        <div className="answer-input-group">
          <input
            type="text"
            value={answers.q3}
            onChange={(e) => updateAnswer('q3', e.target.value)}
            placeholder="Enter your answer..."
            className="answer-input"
          />
          <button
            className="check-button"
            onClick={() => checkAnswer('q3', answers.q3)}
          >
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
        <h3 className="question-title">Question 4: What's the difference between these two?</h3>
        <pre className="code-block">
{`age = "10"    # This is a string
age = 10      # This is a number`}
        </pre>
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

export default Day2Part1;

