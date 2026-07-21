import React from 'react';
import './Part1.css';
import { useCheckAnswer } from '../hooks/useCheckAnswer';

// Answers and hints stay here per the repo's per-day duplication convention.
// useCheckAnswer supplies only the mechanism.
const QUESTIONS = {
  q1: {
    mode: 'choice',
    correct: 'It repeats code many times',
    prompt: 'What is a loop in programming?',
    hint: 'Hint: Loops are for doing the SAME thing again and again!'
  },
  q2: {
    // MUST stay 'choice': the JSX calls checkAnswer('q2', 'for') and
    // checkAnswer('q2', 'wrong') with hardcoded literals from choice buttons,
    // so the literal 'wrong' must never reach a language model.
    mode: 'choice',
    correct: 'for',
    prompt: 'Which keyword do we use for a counting loop with range()?',
    hint: 'Hint: We use this keyword with range() to count.'
  },
  q3: {
    // MUST stay 'choice' - same hardcoded-literal pattern as q2.
    mode: 'choice',
    correct: 'while',
    prompt: 'Which keyword do we use for a loop that runs while a condition is True?',
    hint: 'Hint: This loop runs WHILE a condition is True.'
  },
  q4: {
    mode: 'text',
    correct: ['change the variable', 'update the variable', 'make the variable change'],
    prompt: 'What must we do inside most while loops so they can eventually stop?',
    hint: 'Hint: If nothing changes, the condition might stay True forever!'
  }
};

function Day4Part1({ answers, updateAnswer, checkedQuestions, updateCheckedQuestion, profile }) {
  const { feedback, checkAnswer } = useCheckAnswer({
    profile,
    day: 4,
    questions: QUESTIONS,
    updateCheckedQuestion,
    answers
  });

  return (
    <div className="part1-container">
      <div className="part-header">
        <h2>🔁 Part 1: Understanding Loops</h2>
        <p className="part-description">
          First, let's <strong>learn</strong> how loops repeat things for us. Read these cards, then the questions below
          will be easy! 🎉
        </p>
      </div>

      <div className="info-box">
        <h3>🔁 What is a Loop?</h3>
        <p>
          A <strong>loop</strong> lets the computer <strong>repeat</strong> code without you copying and pasting it
          over and over. Instead of writing <code>print</code> ten times, you write it once and tell Python "do this 10
          times!"
        </p>
        <pre className="code-example">{`# The slow way 😴
print("Hello!")
print("Hello!")
print("Hello!")

# The loop way 🚀
for i in range(3):
    print("Hello!")`}</pre>
        <p>Both print "Hello!" three times - but the loop is way less typing!</p>
      </div>

      <div className="info-box">
        <h3>🔢 for Loops with range()</h3>
        <p>
          A <code>for</code> loop is a <strong>counting loop</strong>. Use it with <code>range()</code> when you know
          how many times to repeat. <code>range(5)</code> counts <code>0, 1, 2, 3, 4</code> - that's 5 turns.
        </p>
        <pre className="code-example">{`for i in range(5):
    print("Count:", i)

# prints:
# Count: 0
# Count: 1
# Count: 2
# Count: 3
# Count: 4`}</pre>
        <p>The variable <code>i</code> holds the current number each time around. 🔢</p>
      </div>

      <div className="info-box">
        <h3>⏳ while Loops</h3>
        <p>
          A <code>while</code> loop keeps going <strong>as long as a condition is True</strong>. You use it when you
          don't know exactly how many turns you'll need. <strong>Important:</strong> you must change something inside
          the loop so it can eventually <strong>stop</strong> - otherwise it runs forever! 😵
        </p>
        <pre className="code-example">{`count = 1

while count <= 3:
    print("Number", count)
    count = count + 1   # 👈 this makes the loop able to stop!`}</pre>
        <p>
          Each turn, <code>count</code> grows by 1. Once it reaches 4, <code>count &lt;= 3</code> becomes False and the
          loop ends. Forgetting that last line makes an <strong>infinite loop</strong>!
        </p>
      </div>

      <div className="part-header" style={{ marginTop: '30px' }}>
        <h3>✏️ Now Try These Questions!</h3>
        <p className="part-description">You just learned everything you need. Give them a go!</p>
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




