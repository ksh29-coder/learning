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
        <h2>📚 Part 1: Understanding Print</h2>
        <p className="part-description">
          First, let's <strong>learn</strong> how <code>print()</code> works. Read these three cards, then try the
          questions at the bottom - you'll already know the answers! 🎉
        </p>
      </div>

      <div className="info-box">
        <h3>🖨️ What is print()?</h3>
        <p>
          <code>print()</code> is your very first Python command. Its job is simple: it <strong>shows text on the
          screen</strong>. Whatever you put inside the parentheses gets displayed!
        </p>
        <pre className="code-example">{`print("Hello, World!")`}</pre>
        <p>
          When you run this, the computer shows: <code>Hello, World!</code> Think of <code>print</code> like the
          computer's mouth - it's how your program "says" things out loud. 🗣️
        </p>
      </div>

      <div className="info-box">
        <h3>📝 Text Needs Quotes</h3>
        <p>
          Any text (called a <strong>string</strong>) must go inside <strong>quotes</strong>. The quotes tell Python
          "this is words, not a command." Forget them and Python gets confused and shows a red error!
        </p>
        <pre className="code-example">{`print("Hi there!")   # ✅ Works - text is in quotes
print(Hi there!)     # ❌ Error - no quotes!`}</pre>
        <p>
          Also remember the two <strong>parentheses</strong> <code>( )</code> - they hold whatever you want to print.
        </p>
      </div>

      <div className="info-box">
        <h3>📚 Each print() Is a New Line</h3>
        <p>
          Every time you use <code>print()</code>, it starts a <strong>brand new line</strong>. So if you want three
          lines on the screen, you write three <code>print()</code> statements!
        </p>
        <pre className="code-example">{`print("Line 1")
print("Line 2")
print("Line 3")`}</pre>
        <p>
          This prints <strong>3 lines</strong>, one under the other. Count the <code>print()</code> statements and
          you'll always know how many lines you'll get. 🔢
        </p>
      </div>

      <div className="part-header" style={{ marginTop: '30px' }}>
        <h3>✏️ Now Try These Questions!</h3>
        <p className="part-description">You just learned everything you need. Give them a go!</p>
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

