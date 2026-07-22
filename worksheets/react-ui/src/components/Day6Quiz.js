import React from 'react';
import './Part1.css';
import ScoreDisplay from './ScoreDisplay';
import { useCheckAnswer } from '../hooks/useCheckAnswer';

// Answers and hints stay here per the repo's per-day duplication convention.
// useCheckAnswer supplies only the mechanism.
const QUESTIONS = {
  q1: {
    mode: 'choice',
    correct: 'A way to store many values together in one variable',
    prompt: 'What is a list?',
    hint: 'Hint: Think about a backpack that can hold many items at once!'
  },
  q2: {
    mode: 'choice',
    correct: '0',
    prompt: 'What is the index of the FIRST item in a list?',
    hint: 'Hint: Python starts counting positions at a very small number!'
  },
  q3: {
    mode: 'text',
    correct: ['pretzels'],
    // Exact match, not substring: a one-word answer must be that exact word.
    arrayMatch: 'exact',
    prompt: 'What will this code print? snacks = ["chips", "pretzels", "cookies"] then print(snacks[1])',
    hint: 'Hint: Index 1 is the SECOND item in the list (counting starts at 0)!'
  },
  q4: {
    mode: 'choice',
    correct: '.append()',
    prompt: 'Which method adds an item to the END of a list?',
    hint: 'Hint: This method adds an item to the very end of the list.'
  },
  q5: {
    mode: 'text',
    correct: ['is in the list', 'checks if', 'membership', 'true or false', 'true/false'],
    prompt: 'What does the `in` keyword do with a list?',
    hint: 'Hint: "in" checks if something is inside the list and gives back True or False!'
  },
  q6: {
    mode: 'text',
    correct: ['cherry'],
    arrayMatch: 'exact',
    prompt: 'What does this print? fruits = ["apple", "banana", "cherry"] then print(fruits[-1])',
    hint: 'Hint: Negative indexes count from the END of the list. -1 is the last item!'
  },
  q7: {
    mode: 'choice',
    correct: '{"name": "Isabella", "age": 12}',
    prompt: 'Which one of these creates a DICTIONARY (labeled cubbies)?',
    hint: 'Hint: Dictionaries use curly braces { } with key: value pairs inside!'
  },
  q8: {
    mode: 'text',
    correct: ['michael'],
    arrayMatch: 'exact',
    prompt: 'What will this print? player = {"name": "Michael", "age": 14} then print(player["name"])',
    hint: 'Hint: player["name"] looks in the cubby LABELED "name" and gives back what is stored there!'
  },
  q9: {
    mode: 'choice',
    correct: 'player["hobby"] = "coding"',
    prompt: 'How do you add a brand-new key "hobby" with the value "coding" to the player dictionary?',
    hint: 'Hint: d[key] = value both changes an existing entry AND adds a new one - no .append() needed!'
  },
  q10: {
    mode: 'text',
    correct: ['1'],
    arrayMatch: 'exact',
    prompt:
      'fruits = ["apple", "banana"] then for number, fruit in enumerate(fruits, 1): print(f"{number}. {fruit}") - what number is printed next to apple?',
    hint: 'Hint: The 1 in enumerate(fruits, 1) tells Python where to START counting!'
  },
  q11: {
    mode: 'text',
    correct: ['catch', 'crash', 'safety', 'keeps going', 'keeps running', 'ask again'],
    prompt:
      'Our code uses int(input("Score: ")). What does try/except ValueError do for us when the player types "banana"?',
    hint: 'Hint: It is the safety net - it catches the error so the program does not crash!'
  }
};

function Day6Quiz({ answers, updateAnswer, checkedQuestions, updateCheckedQuestion, profile }) {
  const { feedback, checkAnswer } = useCheckAnswer({
    profile,
    day: 6,
    questions: QUESTIONS,
    updateCheckedQuestion,
    answers
  });

  return (
    <div className="part1-container">
      <div className="part-header">
        <h2>🧠 Quiz: Test Your Collections Knowledge!</h2>
        <p className="part-description">
          Let's check what you remember about lists, dictionaries, enumerate(), and the try/except safety net!
        </p>
      </div>

      <div className="question-card">
        <h3 className="question-title">Question 1: What is a list?</h3>
        <div className="options">
          {[
            'A single number stored in a variable',
            'A way to store many values together in one variable',
            'A type of if/else statement',
            'A loop that never ends'
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
        <h3 className="question-title">Question 2: What is the index of the FIRST item in a list?</h3>
        <div className="options">
          {['1', '0', '-1', 'first'].map((option, index) => (
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
            onClick={() => checkAnswer('q2', answers.q2)}
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
{`snacks = ["chips", "pretzels", "cookies"]
print(snacks[1])`}
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
        <h3 className="question-title">Question 4: Which method adds an item to the END of a list?</h3>
        <div className="options">
          {['.remove()', '.append()', '.len()', '.print()'].map((option, index) => (
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
            onClick={() => checkAnswer('q4', answers.q4)}
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
        <h3 className="question-title">Question 5: What does the `in` keyword do with a list?</h3>
        <p>For example: <code>"cookies" in snacks</code></p>
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
        <h3 className="question-title">Question 6: What does this print?</h3>
        <pre className="code-block">
{`fruits = ["apple", "banana", "cherry"]
print(fruits[-1])`}
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

      <div className="question-card">
        <h3 className="question-title">Question 7: Which one of these creates a DICTIONARY (labeled cubbies)?</h3>
        <div className="options">
          {[
            '["Isabella", 12]',
            '("Isabella", 12)',
            '{"name": "Isabella", "age": 12}',
            '"Isabella: 12"'
          ].map((option, index) => (
            <label key={index} className="radio-option">
              <input
                type="radio"
                name="q7"
                value={option}
                checked={answers.q7 === option}
                onChange={(e) => updateAnswer('q7', e.target.value)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        <div className="check-section">
          <button
            className="check-button"
            onClick={() => checkAnswer('q7', answers.q7)}
          >
            ✓ Check Answer
          </button>
          {feedback.q7 && (
            <span className={`feedback ${feedback.q7.includes('✓') ? 'correct' : 'incorrect'}`}>
              {feedback.q7}
            </span>
          )}
        </div>
      </div>

      <div className="question-card">
        <h3 className="question-title">Question 8: What will this code print?</h3>
        <pre className="code-block">
{`player = {"name": "Michael", "age": 14}
print(player["name"])`}
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

      <div className="question-card">
        <h3 className="question-title">Question 9: How do you add a brand-new key "hobby" with the value "coding" to the player dictionary?</h3>
        <div className="options">
          {[
            'player.append("coding")',
            'player["hobby"] = "coding"',
            'player.add("hobby", "coding")',
            'hobby in player'
          ].map((option, index) => (
            <label key={index} className="radio-option">
              <input
                type="radio"
                name="q9"
                value={option}
                checked={answers.q9 === option}
                onChange={(e) => updateAnswer('q9', e.target.value)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        <div className="check-section">
          <button
            className="check-button"
            onClick={() => checkAnswer('q9', answers.q9)}
          >
            ✓ Check Answer
          </button>
          {feedback.q9 && (
            <span className={`feedback ${feedback.q9.includes('✓') ? 'correct' : 'incorrect'}`}>
              {feedback.q9}
            </span>
          )}
        </div>
      </div>

      <div className="question-card">
        <h3 className="question-title">Question 10: What number is printed next to "apple"?</h3>
        <pre className="code-block">
{`fruits = ["apple", "banana"]
for number, fruit in enumerate(fruits, 1):
    print(f"{number}. {fruit}")`}
        </pre>
        <div className="answer-input-group">
          <input
            type="text"
            value={answers.q10}
            onChange={(e) => updateAnswer('q10', e.target.value)}
            placeholder="Enter your answer..."
            className="answer-input"
          />
          <button
            className="check-button"
            onClick={() => checkAnswer('q10', answers.q10)}
          >
            ✓ Check Answer
          </button>
        </div>
        {feedback.q10 && (
          <span className={`feedback ${feedback.q10.includes('✓') ? 'correct' : 'incorrect'}`}>
            {feedback.q10}
          </span>
        )}
      </div>

      <div className="question-card">
        <h3 className="question-title">Question 11: What does try/except ValueError do for us here?</h3>
        <pre className="code-block">
{`try:
    score = int(input("Score: "))
except ValueError:
    print("That's not a number!")`}
        </pre>
        <p>What happens if the player types <code>banana</code>?</p>
        <div className="answer-input-group">
          <input
            type="text"
            value={answers.q11}
            onChange={(e) => updateAnswer('q11', e.target.value)}
            placeholder="Enter your answer..."
            className="answer-input"
          />
          <button
            className="check-button"
            onClick={() => checkAnswer('q11', answers.q11)}
          >
            ✓ Check Answer
          </button>
        </div>
        {feedback.q11 && (
          <span className={`feedback ${feedback.q11.includes('✓') ? 'correct' : 'incorrect'}`}>
            {feedback.q11}
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

export default Day6Quiz;
