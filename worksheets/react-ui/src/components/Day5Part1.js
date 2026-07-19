import React from 'react';

function Day5Part1({ answers, updateAnswer, checkedQuestions, updateCheckedQuestion }) {
  const checkAnswer = (questionId, userAnswer, correctAnswer) => {
    const isCorrect = userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim();
    updateCheckedQuestion(questionId, isCorrect);
  };

  return (
    <div className="part-container">
      <h2>Part 1: Understanding Functions 📚</h2>
      <p className="section-intro">
        Functions are like your own custom commands! Let's learn what they are and why they're so useful.
      </p>

      <div className="info-box">
        <h3>🎯 What is a Function?</h3>
        <p>
          A function is a reusable block of code that performs a specific task. Think of it like a recipe -
          you write the steps once, then you can use it whenever you need it!
        </p>
        <pre className="code-example">{`def greet(name):
    print("Hello, " + name + "!")
    print("Welcome to Day 5!")

greet("Alex")  # Calls the function`}</pre>
      </div>

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
          onClick={() => checkAnswer('q1', answers.q1, 'A function is a reusable block of code')}
          className="check-button"
        >
          ✓ Check Answer
        </button>
        {checkedQuestions.q1 !== undefined && (
          <div className={checkedQuestions.q1 ? 'feedback correct' : 'feedback incorrect'}>
            {checkedQuestions.q1 ?
              '✓ Great! Functions are reusable blocks of code!' :
              '✗ Hint: Functions are blocks of code that can be reused multiple times'}
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
          onClick={() => {
            const answer = answers.q2 || '';
            const hasReuse = /reuse|repeat|dry/i.test(answer);
            const hasOrganize = /organiz|clean|readable|structure/i.test(answer);
            updateCheckedQuestion('q2', hasReuse || hasOrganize);
          }}
          className="check-button"
        >
          ✓ Check Answer
        </button>
        {checkedQuestions.q2 !== undefined && (
          <div className={checkedQuestions.q2 ? 'feedback correct' : 'feedback incorrect'}>
            {checkedQuestions.q2 ?
              '✓ Excellent! Functions help us reuse code and organize our programs!' :
              '✗ Hint: Think about avoiding repetition and keeping code organized'}
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
        <button
          onClick={() => {
            const correct = (answers.q3a || '').toLowerCase().includes('greet') &&
                          (answers.q3b || '').toLowerCase().includes('name') &&
                          (answers.q3c || '').toLowerCase().includes('print');
            updateCheckedQuestion('q3', correct);
          }}
          className="check-button"
        >
          ✓ Check Answer
        </button>
        {checkedQuestions.q3 !== undefined && (
          <div className={checkedQuestions.q3 ? 'feedback correct' : 'feedback incorrect'}>
            {checkedQuestions.q3 ?
              '✓ Perfect! You understand function parts!' :
              '✗ Hint: The name is "greet_user", parameter is "name", and it prints a greeting'}
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
          onClick={() => {
            const answer = answers.q4 || '';
            const hasDefining = /def|defin|creat|write/i.test(answer);
            const hasCalling = /call|run|use|execut/i.test(answer);
            updateCheckedQuestion('q4', hasDefining && hasCalling);
          }}
          className="check-button"
        >
          ✓ Check Answer
        </button>
        {checkedQuestions.q4 !== undefined && (
          <div className={checkedQuestions.q4 ? 'feedback correct' : 'feedback incorrect'}>
            {checkedQuestions.q4 ?
              '✓ Great! Defining creates the function, calling runs it!' :
              '✗ Hint: Defining is creating the function with "def", calling is using it'}
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
