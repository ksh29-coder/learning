import React, { useState } from 'react';
import './Part1.css';

function Part1({ answers, updateAnswer, checkedQuestions, updateCheckedQuestion }) {
  const [feedback, setFeedback] = useState({
    q1: '',
    q2: '',
    q3: ''
  });

  const correctAnswers = {
    q1: 'It displays text on the screen',
    q2: ['quotes', 'quote', '"', "'"],
    q3: ['3', 'three']
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
      const answerLower = userAnswer.toLowerCase();
      isCorrect = correct.some(c => 
        answerLower.includes(c) || answerLower === c
      );
    } else if (questionId === 'q3') {
      const answerLower = userAnswer.toLowerCase();
      isCorrect = correct.includes(answerLower);
    }

    if (isCorrect) {
      setFeedback(prev => ({ ...prev, [questionId]: '✓ Correct! Great job! 🎉' }));
      updateCheckedQuestion(questionId, true);
    } else {
      let hint = '';
      if (questionId === 'q2') {
        hint = 'Hint: What do you need around text in Python?';
      } else if (questionId === 'q3') {
        hint = 'Hint: Count how many print() statements there are!';
      } else {
        hint = 'Think about what print() actually does!';
      }
      setFeedback(prev => ({ ...prev, [questionId]: `✗ Not quite right. ${hint} 💪` }));
      updateCheckedQuestion(questionId, false);
    }
  };

  return (
    <div className="part1-container">
      <div className="part-header">
        <h2>📚 Part 1: Understanding Print</h2>
        <p className="part-description">
          Let's test your understanding of the print() function!
        </p>
      </div>

      <div className="question-card">
        <h3 className="question-title">Question 1: What does the print() function do?</h3>
        <div className="options">
          {[
            'It makes the computer beep',
            'It displays text on the screen',
            'It saves your program',
            'It deletes text'
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
        <h3 className="question-title">Question 2: What is missing in this code?</h3>
        <pre className="code-block">
{`print(Hello, World!)`}
        </pre>
        <div className="answer-input-group">
          <input
            type="text"
            value={answers.q2}
            onChange={(e) => updateAnswer('q2', e.target.value)}
            placeholder="Enter your answer..."
            className="answer-input"
          />
          <button
            className="check-button"
            onClick={() => checkAnswer('q2', answers.q2)}
          >
            ✓ Check Answer
          </button>
        </div>
        {feedback.q2 && (
          <span className={`feedback ${feedback.q2.includes('✓') ? 'correct' : 'incorrect'}`}>
            {feedback.q2}
          </span>
        )}
      </div>

      <div className="question-card">
        <h3 className="question-title">Question 3: How many lines will this code print?</h3>
        <pre className="code-block">
{`print("Line 1")
print("Line 2")
print("Line 3")`}
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

      <div className="part-footer">
        <p className="tip">
          💡 Tip: Scroll down to see all questions, or click the tabs above to move to other parts!
        </p>
      </div>
    </div>
  );
}

export default Part1;

