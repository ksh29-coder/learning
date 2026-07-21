import React from 'react';
import './Part1.css';
import { useCheckAnswer } from '../hooks/useCheckAnswer';

// Collapses runs of whitespace before comparing, matching the original
// hand-written comparison for the "what will this print" question.
const normalize = (s) => String(s).trim().toLowerCase().replace(/\s+/g, ' ');

// Answers and hints stay here per the repo's per-day duplication convention.
// useCheckAnswer supplies only the mechanism.
const QUESTIONS = {
  q1: {
    mode: 'choice',
    correct: 'It checks a condition and runs code if the condition is True',
    prompt: 'What does an `if` statement do?',
    hint: 'Hint: If statements check conditions and run code when True!'
  },
  q2: {
    // MUST stay 'choice': the JSX passes a hardcoded literal (or 'wrong') from
    // choice buttons, not the kid's own words.
    mode: 'choice',
    correct: '= is for assigning, == is for comparing',
    prompt: 'What is the difference between `=` and `==`?',
    hint: 'Hint: One equals sign assigns, two equals signs compare!'
  },
  q3: {
    mode: 'text',
    correct: ["You're too young!", "You're too young", 'You are too young'],
    match: (answer, correct) => correct.some((c) => normalize(answer) === normalize(c)),
    prompt: 'What will this code print? age = 15, and an if/else checks whether age is at least 18.',
    hint: 'Hint: The age is 15, which is less than 18, so the else block runs!'
  },
  q4: {
    // MUST stay 'choice' - same hardcoded-literal pattern as q2.
    mode: 'choice',
    correct: 'else if - check another condition',
    prompt: 'What does `elif` mean?',
    hint: 'Hint: Elif stands for "else if" - it checks another condition!'
  }
};

function Day3Part1({ answers, updateAnswer, checkedQuestions, updateCheckedQuestion, profile }) {
  const { feedback, checkAnswer } = useCheckAnswer({
    profile,
    day: 3,
    questions: QUESTIONS,
    updateCheckedQuestion,
    answers
  });

  return (
    <div className="part1-container">
      <div className="part-header">
        <h2>🤔 Part 1: Understanding If/Else</h2>
        <p className="part-description">
          First, let's <strong>learn</strong> how programs make decisions. Read these cards, then the questions below
          will be easy! 🎉
        </p>
      </div>

      <div className="info-box">
        <h3>🤔 Making Decisions with if</h3>
        <p>
          An <code>if</code> statement lets your program <strong>make a choice</strong>. It checks whether something is
          true, and only runs the indented code <strong>when it is</strong>.
        </p>
        <pre className="code-example">{`age = 15

if age >= 13:
    print("You are a teenager!")`}</pre>
        <p>
          Because 15 <em>is</em> at least 13, the message prints. Notice the <strong>colon</strong> <code>:</code> and
          how the next line is <strong>indented</strong> (pushed in) - that's how Python knows what belongs to the{' '}
          <code>if</code>. 👉
        </p>
      </div>

      <div className="info-box">
        <h3>⚖️ = vs == (super important!)</h3>
        <p>
          One equals sign and two equals signs mean totally different things:
        </p>
        <pre className="code-example">{`age = 15      # ONE  =  means "put 15 into the box age"
age == 15     # TWO == means "is age equal to 15?" (True/False)`}</pre>
        <p>
          Use <code>=</code> to <strong>store</strong> a value, and <code>==</code> to <strong>compare</strong> two
          values inside an <code>if</code>. Mixing them up is the most common beginner mistake! 🙃
        </p>
      </div>

      <div className="info-box">
        <h3>🪜 else and elif</h3>
        <p>
          <code>else</code> means "<strong>otherwise</strong>" - it runs when the <code>if</code> was False.{' '}
          <code>elif</code> is short for "<strong>else if</strong>" and lets you check another question in between.
        </p>
        <pre className="code-example">{`age = 15

if age >= 18:
    print("You can vote!")
elif age >= 13:
    print("You are a teenager!")
else:
    print("You are a kid!")`}</pre>
        <p>
          Python checks each one top to bottom and runs the <strong>first</strong> that's True. Here it prints{' '}
          <code>You are a teenager!</code> 🎯
        </p>
      </div>

      <div className="part-header" style={{ marginTop: '30px' }}>
        <h3>✏️ Now Try These Questions!</h3>
        <p className="part-description">You just learned everything you need. Give them a go!</p>
      </div>

      <div className="question-card">
        <h3 className="question-title">Question 1: What does an `if` statement do?</h3>
        <div className="options">
          {[
            'It prints text to the screen',
            'It checks a condition and runs code if the condition is True',
            'It creates a variable',
            'It saves your program'
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
        <h3 className="question-title">Question 2: What is the difference between `=` and `==`?</h3>
        <div className="options">
          {[
            '= is for comparing, == is for assigning',
            '= is for assigning, == is for comparing',
            'They are the same',
            '= is for numbers, == is for text'
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
              const isCorrect = selected === '= is for assigning, == is for comparing';
              if (isCorrect) {
                checkAnswer('q2', '= is for assigning, == is for comparing');
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
{`age = 15
if age >= 18:
    print("You can vote!")
else:
    print("You're too young!")`}
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
        <h3 className="question-title">Question 4: What does `elif` mean?</h3>
        <div className="options">
          {[
            '"else"',
            '"else if" - check another condition',
            '"end if"',
            '"equal if"'
          ].map((option, index) => (
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
            onClick={() => {
              const selected = answers.q4;
              const isCorrect = selected === '"else if" - check another condition';
              if (isCorrect) {
                checkAnswer('q4', 'else if - check another condition');
              } else {
                checkAnswer('q4', 'wrong');
              }
            }}
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

      <div className="part-footer">
        <p className="tip">
          💡 Tip: Scroll down to see all questions, or click the tabs above to move to other parts!
        </p>
      </div>
    </div>
  );
}

export default Day3Part1;





