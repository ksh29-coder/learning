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
  },
  q5: {
    mode: 'choice',
    correct: 'It flips True to False (and False to True)',
    prompt: 'What does the `not` keyword do?',
    hint: 'Hint: not is the "opposite" switch - it flips True and False!'
  },
  q6: {
    mode: 'text',
    correct: [
      "Let's go outside! 😎",
      "Let's go outside!",
      "Let's go outside",
      'Lets go outside'
    ],
    match: (answer, correct) => correct.some((c) => normalize(answer) === normalize(c)),
    prompt: 'What will this code print? is_raining = False, and the if checks "not is_raining".',
    hint: 'Hint: is_raining is False, so NOT is_raining is True - the if block runs!'
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
        <h2>🧠 Quiz: Test Your If/Else Skills</h2>
        <p className="part-description">
          You've read the <strong>Learn</strong> tab - now show what you know! 💪
        </p>
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

      <div className="question-card">
        <h3 className="question-title">Question 5: What does the `not` keyword do?</h3>
        <div className="options">
          {[
            'It deletes a variable',
            'It flips True to False (and False to True)',
            'It ends the program',
            'It compares two numbers'
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

      <div className="question-card">
        <h3 className="question-title">Question 6: What will this code print?</h3>
        <pre className="code-block">
{`is_raining = False
if not is_raining:
    print("Let's go outside! 😎")
else:
    print("Movie day inside! 🍿")`}
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

      <div className="part-footer">
        <p className="tip">
          💡 Tip: Scroll down to see all questions, or click the tabs above to move to other parts!
        </p>
      </div>
    </div>
  );
}

export default Day3Part1;





