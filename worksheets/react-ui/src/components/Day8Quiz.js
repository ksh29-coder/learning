import React from 'react';
import './Part1.css';
import ScoreDisplay from './ScoreDisplay';
import { useCheckAnswer } from '../hooks/useCheckAnswer';

// Question content (the correct answers and the hints) stays here, per the
// repo's duplicate-content-per-day convention. useCheckAnswer supplies only the
// mechanism: local-first grading, with the AI as a second opinion when the
// keyword match misses.
const QUESTIONS = {
  q1: {
    mode: 'choice',
    correct: 'A way for one class to reuse everything from another class',
    prompt: 'What is inheritance?',
    hint: 'Hint: Think of a family - a subclass reuses everything from its parent class!'
  },
  q2: {
    mode: 'choice',
    correct: 'Pet',
    prompt: 'In `class Dog(Pet):`, which class is the parent (the one being reused)?',
    hint: 'Hint: In class Dog(Pet), the class inside the parentheses is the parent being reused.'
  },
  q3: {
    mode: 'text',
    correct: 'Buddy says: Woof!',
    prompt: 'What will this code print? class Dog(Pet) overrides make_sound() to print name + " says: Woof!", then d = Dog("Buddy"); d.make_sound()',
    hint: 'Hint: Dog overrides make_sound(), so ITS version runs, not Pet\'s plain one.'
  },
  q4: {
    mode: 'text',
    correct: ['parent', 'runs the parent', 'parent\'s __init__', 'parent setup', 'sets up', 'set up', 'runs pet', 'calls the parent'],
    prompt: 'What does `super().__init__(...)` do?',
    hint: 'Hint: super() means the parent class - it runs the parent\'s __init__ setup for you.'
  },
  q5: {
    mode: 'choice',
    correct: 'Same command, different result',
    prompt: 'What is polymorphism, in a few words?',
    hint: 'Hint: Poly = many, morph = shapes. Same call, but different behavior for each object!'
  },
  q6: {
    mode: 'text',
    correct: ['woof', 'meow', 'tweet', 'bark', 'different sound', 'same method', 'same call', 'different result', 'each animal', 'make_sound'],
    prompt: 'Give an example of polymorphism (same call, different result).',
    hint: 'Hint: Think of looping over dogs, cats, and birds calling make_sound() - each sounds different!'
  }
};

function Day8Quiz({ answers, updateAnswer, checkedQuestions, updateCheckedQuestion, profile }) {
  const { feedback, checkAnswer } = useCheckAnswer({
    profile,
    day: 8,
    questions: QUESTIONS,
    updateCheckedQuestion,
    answers
  });

  return (
    <div className="part1-container">
      <div className="part-header">
        <h2>🧠 Quiz: Inheritance &amp; Polymorphism</h2>
        <p className="part-description">
          Let's check your understanding of inheritance, super(), overriding, and polymorphism!
        </p>
      </div>

      <div className="question-card">
        <h3 className="question-title">Question 1: What is inheritance?</h3>
        <div className="options">
          {[
            'A way to delete a class',
            'A way for one class to reuse everything from another class',
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
        <h3 className="question-title">Question 2: In `class Dog(Pet):`, which class is the parent (the one being reused)?</h3>
        <div className="options">
          {['Dog', 'Pet', 'Both', 'Neither'].map((option, index) => (
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
    def __init__(self, name):
        self.name = name
    def make_sound(self):
        print(self.name, "makes a sound!")

class Dog(Pet):
    def make_sound(self):
        print(self.name, "says: Woof!")

d = Dog("Buddy")
d.make_sound()`}
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
        <h3 className="question-title">Question 4: What does `super().__init__(...)` do?</h3>
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
        <h3 className="question-title">Question 5: What is polymorphism, in a few words?</h3>
        <div className="options">
          {[
            'A way to delete objects',
            'Same command, different result',
            'A kind of loop',
            'A math operator'
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
        <h3 className="question-title">Question 6: Give an example of polymorphism (same call, different result).</h3>
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

export default Day8Quiz;
