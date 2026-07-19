import React from 'react';
import './Part1.css';
import ScoreDisplay from './ScoreDisplay';
import { useCheckAnswer } from '../hooks/useCheckAnswer';

// Answers and hints stay here per the repo's per-day duplication convention.
// useCheckAnswer supplies only the mechanism.
const QUESTIONS = {
  q1: {
    mode: 'choice',
    correct: 'A way to store many values together in one variable',
    prompt: 'What is a list?',
    hint: 'Hint: Think about a backpack that can hold many items at once!'
  },
  q2: {
    mode: 'choice',
    correct: '0',
    prompt: 'What is the index of the FIRST item in a list?',
    hint: 'Hint: Python starts counting positions at a very small number!'
  },
  q3: {
    mode: 'text',
    correct: ['pretzels'],
    // Exact match, not substring: a one-word answer must be that exact word.
    arrayMatch: 'exact',
    prompt: 'What will this code print? snacks = ["chips", "pretzels", "cookies"] then print(snacks[1])',
    hint: 'Hint: Index 1 is the SECOND item in the list (counting starts at 0)!'
  },
  q4: {
    mode: 'choice',
    correct: '.append()',
    prompt: 'Which method adds an item to the END of a list?',
    hint: 'Hint: This method adds an item to the very end of the list.'
  },
  q5: {
    mode: 'text',
    correct: ['is in the list', 'checks if', 'membership', 'true or false', 'true/false'],
    prompt: 'What does the `in` keyword do with a list?',
    hint: 'Hint: "in" checks if something is inside the list and gives back True or False!'
  },
  q6: {
    mode: 'text',
    correct: ['cherry'],
    arrayMatch: 'exact',
    prompt: 'What does this print? fruits = ["apple", "banana", "cherry"] then print(fruits[-1])',
    hint: 'Hint: Negative indexes count from the END of the list. -1 is the last item!'
  }
};

function Day6Quiz({ answers, updateAnswer, checkedQuestions, updateCheckedQuestion, profile }) {
  const { feedback, checkAnswer } = useCheckAnswer({
    profile,
    day: 6,
    questions: QUESTIONS,
    updateCheckedQuestion,
    answers
  });

  return (
    <div className="part1-container">
      <div className="part-header">
        <h2>🧠 Quiz: Test Your List Knowledge!</h2>
        <p className="part-description">
          Let's check what you remember about lists!
        </p>
      </div>

      <div className="question-card">
        <h3 className="question-title">Question 1: What is a list?</h3>
        <div className="options">
          {[
            'A single number stored in a variable',
            'A way to store many values together in one variable',
            'A type of if/else statement',
            'A loop that never ends'
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
        <h3 className="question-title">Question 2: What is the index of the FIRST item in a list?</h3>
        <div className="options">
          {['1', '0', '-1', 'first'].map((option, index) => (
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
            onClick={() => checkAnswer('q2', answers.q2)}
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
{`snacks = ["chips", "pretzels", "cookies"]
print(snacks[1])`}
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
        <h3 className="question-title">Question 4: Which method adds an item to the END of a list?</h3>
        <div className="options">
          {['.remove()', '.append()', '.len()', '.print()'].map((option, index) => (
            <label key={index} className="radio-option">
              <input
                type="radio"
                name="q4"
                value={option}
                checked={answers.q4 === option}
                onChange={(e) => updateAnswer('q4', e.target.value)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        <div className="check-section">
          <button
            className="check-button"
            onClick={() => checkAnswer('q4', answers.q4)}
          >
            ✓ Check Answer
          </button>
          {feedback.q4 && (
            <span className={`feedback ${feedback.q4.includes('✓') ? 'correct' : 'incorrect'}`}>
              {feedback.q4}
            </span>
          )}
        </div>
      </div>

      <div className="question-card">
        <h3 className="question-title">Question 5: What does the `in` keyword do with a list?</h3>
        <p>For example: <code>"cookies" in snacks</code></p>
        <div className="answer-input-group">
          <input
            type="text"
            value={answers.q5}
            onChange={(e) => updateAnswer('q5', e.target.value)}
            placeholder="Enter your answer..."
            className="answer-input"
          />
          <button
            className="check-button"
            onClick={() => checkAnswer('q5', answers.q5)}
          >
            ✓ Check Answer
          </button>
        </div>
        {feedback.q5 && (
          <span className={`feedback ${feedback.q5.includes('✓') ? 'correct' : 'incorrect'}`}>
            {feedback.q5}
          </span>
        )}
      </div>

      <div className="question-card">
        <h3 className="question-title">Question 6: What does this print?</h3>
        <pre className="code-block">
{`fruits = ["apple", "banana", "cherry"]
print(fruits[-1])`}
        </pre>
        <div className="answer-input-group">
          <input
            type="text"
            value={answers.q6}
            onChange={(e) => updateAnswer('q6', e.target.value)}
            placeholder="Enter your answer..."
            className="answer-input"
          />
          <button
            className="check-button"
            onClick={() => checkAnswer('q6', answers.q6)}
          >
            ✓ Check Answer
          </button>
        </div>
        {feedback.q6 && (
          <span className={`feedback ${feedback.q6.includes('✓') ? 'correct' : 'incorrect'}`}>
            {feedback.q6}
          </span>
        )}
      </div>

      <ScoreDisplay checkedQuestions={checkedQuestions} />

      <div className="part-footer">
        <p className="tip">
          💡 Tip: Scroll down to see all questions, or click the tabs above to move to other parts!
        </p>
      </div>
    </div>
  );
}

export default Day6Quiz;
