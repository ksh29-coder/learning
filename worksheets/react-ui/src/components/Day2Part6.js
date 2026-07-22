import React from 'react';
import './Part1.css';
import './Part2.css';
import CodeEditor from './CodeEditor';
import CodeRunner from './CodeRunner';
import { useCheckAnswer } from '../hooks/useCheckAnswer';

// Answers and hints stay here per the repo's per-day duplication convention.
// useCheckAnswer supplies only the mechanism.
const QUESTIONS = {
  q5: {
    mode: 'text',
    correct: ['hi isabella!', 'hi isabella'],
    arrayMatch: 'exact',
    prompt: 'What will this print? name = "Isabella" then print(f"Hi {name}!")',
    hint: 'Hint: The f-string fills {name} with what is inside the variable!'
  },
  q6: {
    mode: 'choice',
    correct: 'PYTHON',
    prompt: 'What will "python".upper() give you?',
    hint: 'Hint: .upper() makes EVERY letter a capital!'
  },
  q7: {
    mode: 'text',
    correct: ['c', '"c"', "'c'"],
    arrayMatch: 'exact',
    prompt: 'What will this print? word = "coding" then print(word[0])',
    hint: 'Hint: Python counts from 0, so word[0] is the FIRST letter!'
  },
  q8: {
    mode: 'text',
    correct: ['pyt', '"pyt"', "'pyt'"],
    arrayMatch: 'exact',
    prompt: 'What will this print? word = "python" then print(word[0:3])',
    hint: 'Hint: word[0:3] grabs letters 0, 1 and 2 - it stops BEFORE 3!'
  }
};

function Day2Part6({ answers, updateAnswer, checkedQuestions, updateCheckedQuestion, profile }) {
  const { feedback, checkAnswer } = useCheckAnswer({
    profile,
    day: 2,
    questions: QUESTIONS,
    updateCheckedQuestion,
    answers
  });

  return (
    <div className="part1-container">
      <div className="part-header">
        <h2>✨ Part 4: String Superpowers</h2>
        <p className="part-description">
          f-strings, string powers, and letter-grabbing tricks — learn them here, then try the quiz and
          exercises below! 💪
        </p>
      </div>

      <div className="info-box">
        <h3>🪄 f-strings: The Neat Way to Glue Text</h3>
        <p>
          Put an <code>f</code> before the quotes, then drop variables into <code>{'{curly braces}'}</code> —
          Python fills in the blanks! From now on, this is our favorite way to print with variables.
        </p>
        <pre className="code-example">{`name = "Isabella"
age = 12

print("Hello,", name, "! You are", age, "!")  # the comma way
print(f"Hello {name}, you are {age}!")        # the NEAT f-string way!

print(f"Next year you'll be {age + 1}!")      # math works inside braces too!`}</pre>
      </div>

      <div className="info-box">
        <h3>💪 String Methods: Powers You Activate with a Dot</h3>
        <p>
          Every string has built-in powers called <strong>methods</strong>. You activate them with a dot, like{' '}
          <code>name.upper()</code>. And <code>len()</code> counts the characters!
        </p>
        <pre className="code-example">{`name = "michael kim"

print(name.upper())    # MICHAEL KIM  (shout it!)
print(name.lower())    # michael kim  (whisper it)
print(name.title())    # Michael Kim  (name-tag neat)
print("   pizza   ".strip())  # "pizza" - spaces trimmed!

print(len("python"))   # 6 - counts the letters`}</pre>
      </div>

      <div className="info-box">
        <h3>🔪 Indexing & Slicing: Grab Letters and Pieces</h3>
        <p>
          Every letter has a number position — and Python starts counting at <strong>0</strong>!{' '}
          <code>word[0]</code> grabs one letter, and <code>word[0:3]</code> slices out a piece.
        </p>
        <pre className="code-example">{`word = "python"

print(word[0])    # p - the FIRST letter (position 0!)
print(word[-1])   # n - negative counts from the end
print(word[0:3])  # pyt - from 0 UP TO (not including) 3

first = "Isabella"
last = "Kim"
print(f"Initials: {first[0] + last[0]}")  # Initials: IK`}</pre>
        <p>Don't worry if slicing feels new — it comes back on Day 6 with lists! 😊</p>
      </div>

      <div className="question-card">
        <h3 className="question-title">Question 5: What will this f-string print?</h3>
        <pre className="code-block">
{`name = "Isabella"
print(f"Hi {name}!")`}
        </pre>
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
        <h3 className="question-title">Question 6: What will "python".upper() give you?</h3>
        <div className="options">
          {['PYTHON', 'python', 'Python', 'nohtyp'].map((option, index) => (
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
          <button
            className="check-button"
            onClick={() => checkAnswer('q6', answers.q6)}
          >
            ✓ Check Answer
          </button>
          {feedback.q6 && (
            <span className={`feedback ${feedback.q6.includes('✓') ? 'correct' : 'incorrect'}`}>
              {feedback.q6}
            </span>
          )}
        </div>
      </div>

      <div className="question-card">
        <h3 className="question-title">Question 7: What will this print? (Python counts from 0!)</h3>
        <pre className="code-block">
{`word = "coding"
print(word[0])`}
        </pre>
        <div className="answer-input-group">
          <input
            type="text"
            value={answers.q7}
            onChange={(e) => updateAnswer('q7', e.target.value)}
            placeholder="Enter your answer..."
            className="answer-input"
          />
          <button
            className="check-button"
            onClick={() => checkAnswer('q7', answers.q7)}
          >
            ✓ Check Answer
          </button>
        </div>
        {feedback.q7 && (
          <span className={`feedback ${feedback.q7.includes('✓') ? 'correct' : 'incorrect'}`}>
            {feedback.q7}
          </span>
        )}
      </div>

      <div className="question-card">
        <h3 className="question-title">Question 8: What will this slice print?</h3>
        <pre className="code-block">
{`word = "python"
print(word[0:3])`}
        </pre>
        <div className="answer-input-group">
          <input
            type="text"
            value={answers.q8}
            onChange={(e) => updateAnswer('q8', e.target.value)}
            placeholder="Enter your answer..."
            className="answer-input"
          />
          <button
            className="check-button"
            onClick={() => checkAnswer('q8', answers.q8)}
          >
            ✓ Check Answer
          </button>
        </div>
        {feedback.q8 && (
          <span className={`feedback ${feedback.q8.includes('✓') ? 'correct' : 'incorrect'}`}>
            {feedback.q8}
          </span>
        )}
      </div>

      <div className="exercise-card">
        <h3 className="exercise-title">Exercise: Shout Your Name! 📢</h3>
        <p className="exercise-description">
          Write a program that:
        </p>
        <ul className="exercise-list">
          <li>Stores your name in a variable</li>
          <li>Prints it in ALL CAPS using <code>.upper()</code> inside an f-string, like: <code>MICHAEL!!!</code></li>
        </ul>
        <div className="exercise-section">
          <h4 className="section-title">Your code:</h4>
          <CodeEditor
            value={answers.stringExercise1}
            onChange={(value) => updateAnswer('stringExercise1', value)}
            placeholder="# Write your shouting code here..."
            height={150}
          />
          <CodeRunner code={answers.stringExercise1} title="Test Shout Your Name" />
        </div>
      </div>

      <div className="exercise-card">
        <h3 className="exercise-title">Exercise: Initials Maker 🏷️</h3>
        <p className="exercise-description">
          Write a program that:
        </p>
        <ul className="exercise-list">
          <li>Stores your first name and last name in two variables</li>
          <li>Makes your initials with <code>first[0] + last[0]</code></li>
          <li>Prints them with an f-string, like: <code>Your initials are: MK</code></li>
        </ul>
        <div className="exercise-section">
          <h4 className="section-title">Your code:</h4>
          <CodeEditor
            value={answers.stringExercise2}
            onChange={(value) => updateAnswer('stringExercise2', value)}
            placeholder="# Write your initials maker here..."
            height={150}
          />
          <CodeRunner code={answers.stringExercise2} title="Test Initials Maker" />
        </div>
      </div>

      <div className="part-footer">
        <p className="tip">
          💡 Tip: f-strings + string powers combine beautifully — try <code>{'f"{name.title()}"'}</code>!
        </p>
      </div>
    </div>
  );
}

export default Day2Part6;
