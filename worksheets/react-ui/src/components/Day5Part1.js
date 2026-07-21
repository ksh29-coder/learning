import React from 'react';
import { useCheckAnswer } from '../hooks/useCheckAnswer';

// Answers and hints stay here per the repo's per-day duplication convention.
//
// This day's questions are open-ended ("explain in your own words"), which is
// exactly where keyword matching was weakest - q1 previously demanded the
// answer equal one exact sentence, so almost no real child could pass it. The
// local matchers below are deliberately generous, and anything they miss now
// gets a second opinion from the AI grader.
const QUESTIONS = {
  q1: {
    mode: 'text',
    correct: ['reusable block of code', 'reusable', 'reuse', 'block of code'],
    prompt: 'In your own words, explain what a function is in Python.',
    hint: 'Hint: Functions are blocks of code that can be reused multiple times'
  },
  q2: {
    mode: 'text',
    correct: ['reuse code', 'organize code'],
    match: (answer) =>
      /reuse|repeat|dry/i.test(answer) || /organiz|clean|readable|structure/i.test(answer),
    prompt: 'List at least TWO reasons why functions are helpful in programming.',
    hint: 'Hint: Think about avoiding repetition and keeping code organized'
  },
  q3: {
    mode: 'text',
    correct: ['greet_user', 'name', 'prints a greeting'],
    // Three separate inputs (q3a/q3b/q3c) roll up into one graded question.
    compose: (a) =>
      `name: ${a.q3a || ''}, parameter: ${a.q3b || ''}, what it does: ${a.q3c || ''}`,
    match: (answer) => {
      const parts = String(answer).toLowerCase();
      const name = /name:[^,]*greet/.test(parts);
      const param = /parameter:[^,]*name/.test(parts);
      const does = /what it does:.*print/.test(parts);
      return name && param && does;
    },
    prompt:
      'For `def greet_user(name): print("Hello,", name, "!")` - what is the function name, the parameter, and what does it do?',
    hint: 'Hint: The name is "greet_user", parameter is "name", and it prints a greeting'
  },
  q4: {
    mode: 'text',
    correct: ['defining creates it, calling runs it'],
    match: (answer) =>
      /def|defin|creat|write/i.test(answer) && /call|run|use|execut/i.test(answer),
    prompt: 'What is the difference between defining a function and calling a function?',
    hint: 'Hint: Defining is creating the function with "def", calling is using it'
  }
};

function Day5Part1({ answers, updateAnswer, checkedQuestions, updateCheckedQuestion, profile }) {
  const { feedback, checkAnswer } = useCheckAnswer({
    profile,
    day: 5,
    questions: QUESTIONS,
    updateCheckedQuestion,
    answers
  });

  return (
    <div className="part-container">
      <h2>🧠 Quiz: Test Your Function Skills</h2>
      <p className="section-intro">
        You've read the <strong>Learn</strong> tab - now show what you know! 💪
      </p>

      <div className="question-box">
        <h3>Question 1: What is a Function?</h3>
        <p>In your own words, explain what a function is in Python.</p>
        <textarea
          value={answers.q1 || ''}
          onChange={(e) => updateAnswer('q1', e.target.value)}
          placeholder="Your answer..."
          rows="4"
        />
        <button
          onClick={() => checkAnswer('q1', answers.q1)}
          className="check-button"
        >
          ✓ Check Answer
        </button>
        {/* Keep the warm custom message when right; when wrong, show the hook's
            message so the AI's tailored hint reaches the student. */}
        {feedback.q1 && (
          <div className={feedback.q1.includes('✓') ? 'feedback correct' : 'feedback incorrect'}>
            {feedback.q1.includes('✓')
              ? '✓ Great! Functions are reusable blocks of code!'
              : feedback.q1}
          </div>
        )}
      </div>

      <div className="question-box">
        <h3>Question 2: Why Use Functions?</h3>
        <p>List at least TWO reasons why functions are helpful in programming.</p>
        <textarea
          value={answers.q2 || ''}
          onChange={(e) => updateAnswer('q2', e.target.value)}
          placeholder="1. ...\n2. ..."
          rows="4"
        />
        <button
          onClick={() => checkAnswer('q2', answers.q2)}
          className="check-button"
        >
          ✓ Check Answer
        </button>
        {feedback.q2 && (
          <div className={feedback.q2.includes('✓') ? 'feedback correct' : 'feedback incorrect'}>
            {feedback.q2.includes('✓')
              ? '✓ Excellent! Functions help us reuse code and organize our programs!'
              : feedback.q2}
          </div>
        )}
      </div>

      <div className="question-box">
        <h3>Question 3: Function Parts</h3>
        <p>Look at this function:</p>
        <pre className="code-example">{`def greet_user(name):
    print("Hello,", name, "!")`}</pre>
        <p>Answer these questions:</p>
        <div style={{ marginLeft: '20px' }}>
          <p><strong>a) What is the function name?</strong></p>
          <input
            type="text"
            value={answers.q3a || ''}
            onChange={(e) => updateAnswer('q3a', e.target.value)}
            placeholder="Function name..."
          />

          <p><strong>b) What is the parameter?</strong></p>
          <input
            type="text"
            value={answers.q3b || ''}
            onChange={(e) => updateAnswer('q3b', e.target.value)}
            placeholder="Parameter..."
          />

          <p><strong>c) What does the function do?</strong></p>
          <input
            type="text"
            value={answers.q3c || ''}
            onChange={(e) => updateAnswer('q3c', e.target.value)}
            placeholder="What it does..."
          />
        </div>
        {/* q3 has no single input - compose() in the question config rolls
            q3a/q3b/q3c into the one answer that gets graded. */}
        <button
          onClick={() => checkAnswer('q3', answers.q3a)}
          className="check-button"
        >
          ✓ Check Answer
        </button>
        {feedback.q3 && (
          <div className={feedback.q3.includes('✓') ? 'feedback correct' : 'feedback incorrect'}>
            {feedback.q3.includes('✓')
              ? '✓ Perfect! You understand function parts!'
              : feedback.q3}
          </div>
        )}
      </div>

      <div className="question-box">
        <h3>Question 4: Defining vs Calling</h3>
        <p>What's the difference between <strong>defining</strong> a function and <strong>calling</strong> a function?</p>
        <textarea
          value={answers.q4 || ''}
          onChange={(e) => updateAnswer('q4', e.target.value)}
          placeholder="Your answer..."
          rows="3"
        />
        <button
          onClick={() => checkAnswer('q4', answers.q4)}
          className="check-button"
        >
          ✓ Check Answer
        </button>
        {feedback.q4 && (
          <div className={feedback.q4.includes('✓') ? 'feedback correct' : 'feedback incorrect'}>
            {feedback.q4.includes('✓')
              ? '✓ Great! Defining creates the function, calling runs it!'
              : feedback.q4}
          </div>
        )}
      </div>

      <div className="info-box">
        <h3>🔑 Key Concepts</h3>
        <ul>
          <li><strong>def</strong> - Keyword to define a function</li>
          <li><strong>Function name</strong> - What you call your function</li>
          <li><strong>Parameters</strong> - Inputs the function receives (in parentheses)</li>
          <li><strong>Calling</strong> - Using the function by writing its name with ()</li>
          <li><strong>Return</strong> - Sending a value back from the function (we'll practice this!)</li>
        </ul>
      </div>
    </div>
  );
}

export default Day5Part1;
