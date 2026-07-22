import React from 'react';
import './Part1.css';
import { useCheckAnswer } from '../hooks/useCheckAnswer';

// Answers and hints stay here per the repo's per-day duplication convention.
// useCheckAnswer supplies only the mechanism.
const QUESTIONS = {
  q1: {
    mode: 'choice',
    correct: 'It displays text on the screen',
    prompt: 'What does the print() function do?',
    hint: 'Think about what print() actually does!'
  },
  q2: {
    mode: 'text',
    correct: ['quotes', 'quote', '"', "'"],
    prompt: 'What is missing in this code? print(Hello, World!)',
    hint: 'Hint: What do you need around text in Python?'
  },
  q3: {
    mode: 'text',
    correct: ['3', 'three'],
    // Original used correct.includes(answer) - exact membership, not substring.
    arrayMatch: 'exact',
    prompt: 'How many lines will this code print? Three separate print() statements.',
    hint: 'Hint: Count how many print() statements there are!'
  },
  q4: {
    mode: 'text',
    correct: ['5', 'five'],
    arrayMatch: 'exact',
    prompt: 'What will print(2 + 3) show on the screen?',
    hint: 'Hint: No quotes means Python does the math!'
  },
  q5: {
    mode: 'choice',
    correct: '*',
    prompt: 'Which symbol tells Python to multiply?',
    hint: 'Hint: There is no × key, so Python uses a star!'
  }
};

function Part1({ answers, updateAnswer, checkedQuestions, updateCheckedQuestion, profile }) {
  const { feedback, checkAnswer } = useCheckAnswer({
    profile,
    day: 1,
    questions: QUESTIONS,
    updateCheckedQuestion,
    answers
  });

  return (
    <div className="part1-container">
      <div className="part-header">
        <h2>🧠 Quiz: Test Your Print Skills</h2>
        <p className="part-description">
          You've read the <strong>Learn</strong> tab - now show what you know! 💪
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

      <div className="question-card">
        <h3 className="question-title">Question 4: Python is a calculator! What will this show?</h3>
        <pre className="code-block">
{`print(2 + 3)`}
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

      <div className="question-card">
        <h3 className="question-title">Question 5: Which symbol tells Python to multiply?</h3>
        <div className="options">
          {['+', '-', '*', '/'].map((option, index) => (
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
          <button
            className="check-button"
            onClick={() => checkAnswer('q5', answers.q5)}
          >
            ✓ Check Answer
          </button>
          {feedback.q5 && (
            <span className={`feedback ${feedback.q5.includes('✓') ? 'correct' : 'incorrect'}`}>
              {feedback.q5}
            </span>
          )}
        </div>
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

