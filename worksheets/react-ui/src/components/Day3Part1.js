import React, { useState } from 'react';
import './Part1.css';

function Day3Part1({ answers, updateAnswer, checkedQuestions, updateCheckedQuestion }) {
  const [feedback, setFeedback] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: ''
  });

  const correctAnswers = {
    q1: 'It checks a condition and runs code if the condition is True',
    q2: '= is for assigning, == is for comparing',
    q3: ["You're too young!", "You're too young", "You are too young", "You're too young!"],
    q4: 'else if - check another condition'
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
      isCorrect = userAnswer === correct;
    } else if (questionId === 'q3') {
      const answerLower = userAnswer.trim();
      isCorrect = correct.some(c => 
        answerLower.toLowerCase().replace(/\s+/g, ' ') === c.toLowerCase().replace(/\s+/g, ' ')
      );
    } else if (questionId === 'q4') {
      isCorrect = userAnswer === correct;
    }

    if (isCorrect) {
      setFeedback(prev => ({ ...prev, [questionId]: '✓ Correct! Great job! 🎉' }));
      updateCheckedQuestion(questionId, true);
    } else {
      let hint = '';
      if (questionId === 'q1') {
        hint = 'Hint: If statements check conditions and run code when True!';
      } else if (questionId === 'q2') {
        hint = 'Hint: One equals sign assigns, two equals signs compare!';
      } else if (questionId === 'q3') {
        hint = 'Hint: The age is 15, which is less than 18, so the else block runs!';
      } else if (questionId === 'q4') {
        hint = 'Hint: Elif stands for "else if" - it checks another condition!';
      }
      setFeedback(prev => ({ ...prev, [questionId]: `✗ Not quite right. ${hint} 💪` }));
      updateCheckedQuestion(questionId, false);
    }
  };

  return (
    <div className="part1-container">
      <div className="part-header">
        <h2>🤔 Part 1: Understanding If/Else</h2>
        <p className="part-description">
          Let's test your understanding of making decisions in code!
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

      <div className="part-footer">
        <p className="tip">
          💡 Tip: Scroll down to see all questions, or click the tabs above to move to other parts!
        </p>
      </div>
    </div>
  );
}

export default Day3Part1;

