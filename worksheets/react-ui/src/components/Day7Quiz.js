import React from 'react';
import './Part1.css';
import ScoreDisplay from './ScoreDisplay';
import { useCheckAnswer } from '../hooks/useCheckAnswer';

// Answers and hints stay here per the repo's per-day duplication convention.
// useCheckAnswer supplies only the mechanism.
const QUESTIONS = {
  q1: {
    mode: 'choice',
    correct: 'A blueprint/template used to create objects',
    prompt: 'What is a class?',
    hint: 'Hint: Think cookie cutter - it\'s the shape/template, not a cookie itself!'
  },
  q2: {
    mode: 'choice',
    correct: 'One actual "thing" created from a class',
    prompt: 'What is an object (instance)?',
    hint: 'Hint: Think of a single cookie made from the cutter - one actual thing!'
  },
  q3: {
    mode: 'text',
    correct: 'Buddy',
    prompt: 'What will this code print? A Pet class stores self.name, then my_pet = Pet("Buddy", "dog") and print(my_pet.name)',
    hint: 'Hint: What was passed as the first argument to Pet(...)? That becomes self.name.'
  },
  q4: {
    mode: 'text',
    correct: ['this object', 'the object', 'the current object', 'this particular object', 'the specific object', 'that object'],
    prompt: 'What does `self` refer to inside a method?',
    hint: 'Hint: self always refers to whichever object the method was called on!'
  },
  q5: {
    mode: 'choice',
    correct: 'class',
    prompt: 'What keyword do you use to define a class?',
    hint: 'Hint: It\'s the same keyword used to start a class definition.'
  },
  q6: {
    mode: 'text',
    correct: ['sets up', 'set up', 'initial', 'starting attributes', 'runs automatically', 'when the object is created', 'when an object is created'],
    prompt: 'What does `__init__` do?',
    hint: 'Hint: __init__ runs automatically to set up an object\'s starting attributes!'
  }
};

function Day7Quiz({ answers, updateAnswer, checkedQuestions, updateCheckedQuestion, profile }) {
  const { feedback, checkAnswer } = useCheckAnswer({
    profile,
    day: 7,
    questions: QUESTIONS,
    updateCheckedQuestion,
    answers
  });

  return (
    <div className="part1-container">
      <div className="part-header">
        <h2>🧠 Quiz: Classes &amp; Objects</h2>
        <p className="part-description">
          Let's check your understanding of classes, objects, attributes, and methods!
        </p>
      </div>

      <div className="question-card">
        <h3 className="question-title">Question 1: What is a class?</h3>
        <div className="options">
          {[
            'A single value stored in a variable',
            'A blueprint/template used to create objects',
            'A type of loop',
            'A built-in Python function'
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
          <button className="check-button" onClick={() => checkAnswer('q1', answers.q1)}>
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
        <h3 className="question-title">Question 2: What is an object (instance)?</h3>
        <div className="options">
          {[
            'The same thing as a class',
            'One actual "thing" created from a class',
            'A comparison operator',
            'A kind of error message'
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
          <button className="check-button" onClick={() => checkAnswer('q2', answers.q2)}>
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
{`class Pet:
    def __init__(self, name, animal_type):
        self.name = name
        self.animal_type = animal_type

my_pet = Pet("Buddy", "dog")
print(my_pet.name)`}
        </pre>
        <div className="answer-input-group">
          <input
            type="text"
            value={answers.q3}
            onChange={(e) => updateAnswer('q3', e.target.value)}
            placeholder="Enter your answer..."
            className="answer-input"
          />
          <button className="check-button" onClick={() => checkAnswer('q3', answers.q3)}>
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
        <h3 className="question-title">Question 4: What does `self` refer to inside a method?</h3>
        <div className="answer-input-group">
          <input
            type="text"
            value={answers.q4}
            onChange={(e) => updateAnswer('q4', e.target.value)}
            placeholder="Enter your answer..."
            className="answer-input"
          />
          <button className="check-button" onClick={() => checkAnswer('q4', answers.q4)}>
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
        <h3 className="question-title">Question 5: What keyword do you use to define a class?</h3>
        <div className="options">
          {['object', 'def', 'class', 'new'].map((option, index) => (
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
          <button className="check-button" onClick={() => checkAnswer('q5', answers.q5)}>
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
        <h3 className="question-title">Question 6: What does `__init__` do?</h3>
        <div className="answer-input-group">
          <input
            type="text"
            value={answers.q6}
            onChange={(e) => updateAnswer('q6', e.target.value)}
            placeholder="Enter your answer..."
            className="answer-input"
          />
          <button className="check-button" onClick={() => checkAnswer('q6', answers.q6)}>
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

export default Day7Quiz;
