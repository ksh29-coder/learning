import React from 'react';
import './Part1.css';
import ExerciseCard from './ExerciseCard';
import { useCheckAnswer } from '../hooks/useCheckAnswer';

// Answers and hints stay here per the repo's per-day duplication convention.
// useCheckAnswer supplies only the mechanism.
const QUESTIONS = {
  q5: {
    mode: 'choice',
    correct: 'It opens the random library so we can use the functions inside it',
    prompt: 'What does "import random" do?',
    hint: 'Hint: import opens a box of functions other people wrote!'
  },
  q6: {
    mode: 'choice',
    correct: 'Any whole number from 1 to 6, including 1 and 6',
    prompt: 'Which numbers could random.randint(1, 6) give you?',
    hint: 'Hint: randint includes BOTH ends - it really can roll a 1 or a 6!'
  },
  q7: {
    mode: 'choice',
    correct: 'random.choice(["rock", "paper", "scissors"])',
    prompt: 'Which line picks ONE random item from a list?',
    hint: 'Hint: choice needs a LIST in the parentheses.'
  },
  q8: {
    mode: 'text',
    correct: ['pauses the program for 2 seconds', 'waits 2 seconds'],
    match: (answer) =>
      /pause|wait|stop|sleep|freeze|delay/i.test(answer) && /2|two|second/i.test(answer),
    prompt: 'After "from time import sleep", what does sleep(2) do?',
    hint: 'Hint: sleep makes the program WAIT - the number says for how long!'
  }
};

function Day5Part7({ answers, updateAnswer, updateCheckedQuestion, profile }) {
  const { feedback, checkAnswer } = useCheckAnswer({
    profile,
    day: 5,
    questions: QUESTIONS,
    updateCheckedQuestion,
    answers
  });

  return (
    <div className="part-container">
      <h2>Part 7: Libraries - Functions Other People Wrote! 📦</h2>
      <p className="section-intro">
        You've been <strong>writing</strong> functions all day. Here's a secret: a{' '}
        <strong>library</strong> is a box FULL of functions that other people already wrote
        for you - and <code>import</code> opens the box! 🧰
      </p>

      <div className="info-box">
        <h3>🎲 The random Library</h3>
        <p>
          Write <code>import random</code> at the <strong>top</strong> of your file, then use the
          dot to look inside the box:
        </p>
        <pre className="code-example">{`import random

# random.randint(low, high) - a random whole number (BOTH ends included!)
dice = random.randint(1, 6)
print(f"You rolled a {dice}!")

# random.choice(a_list) - picks ONE random item from a list
snack = random.choice(["pizza", "sushi", "tacos", "ice cream"])
print(f"Tonight we eat: {snack}")`}</pre>
        <p>
          <code>random.randint</code> means "the <code>randint</code> function inside the{' '}
          <code>random</code> box". These are function calls just like the ones you wrote -
          someone else wrote the <code>def</code>!
        </p>
      </div>

      <div className="info-box">
        <h3>⏳ A Second Way to Import: from ... import ...</h3>
        <pre className="code-example">{`from time import sleep

print("Get ready...")
sleep(1)   # the program waits 1 second
print("GO! 🏁")`}</pre>
        <p>
          <code>from time import sleep</code> grabs just ONE function out of the <code>time</code>{' '}
          box - after that you can write <code>sleep(1)</code> with no <code>time.</code> in front.
          Perfect for suspense! 🥁
        </p>
      </div>

      <div className="question-box">
        <h3>Question 5: What Does import Do?</h3>
        <p>What does <code>import random</code> do?</p>
        <div className="options">
          {[
            'It creates a random number right away',
            'It opens the random library so we can use the functions inside it',
            'It makes our own functions random',
            'It deletes the random library'
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
        <button onClick={() => checkAnswer('q5', answers.q5)} className="check-button">
          ✓ Check Answer
        </button>
        {feedback.q5 && (
          <div className={feedback.q5.includes('✓') ? 'feedback correct' : 'feedback incorrect'}>
            {feedback.q5.includes('✓')
              ? '✓ Exactly! import opens the box of functions someone else wrote!'
              : feedback.q5}
          </div>
        )}
      </div>

      <div className="question-box">
        <h3>Question 6: Rolling the Dice</h3>
        <p>Which numbers could <code>random.randint(1, 6)</code> give you?</p>
        <div className="options">
          {[
            'Only 2, 3, 4, or 5',
            'Any whole number from 1 to 6, including 1 and 6',
            'Any number from 0 to 6',
            'Always 6'
          ].map((option, index) => (
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
        <button onClick={() => checkAnswer('q6', answers.q6)} className="check-button">
          ✓ Check Answer
        </button>
        {feedback.q6 && (
          <div className={feedback.q6.includes('✓') ? 'feedback correct' : 'feedback incorrect'}>
            {feedback.q6.includes('✓')
              ? '✓ Correct! randint includes both ends - a real dice roll! 🎲'
              : feedback.q6}
          </div>
        )}
      </div>

      <div className="question-box">
        <h3>Question 7: Picking From a List</h3>
        <p>Which line picks ONE random item from a list?</p>
        <div className="options">
          {[
            'random.choice(["rock", "paper", "scissors"])',
            'random.randint("rock", "paper", "scissors")',
            'random.pick["rock", "paper", "scissors"]',
            'choice.random("rock")'
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
        <button onClick={() => checkAnswer('q7', answers.q7)} className="check-button">
          ✓ Check Answer
        </button>
        {feedback.q7 && (
          <div className={feedback.q7.includes('✓') ? 'feedback correct' : 'feedback incorrect'}>
            {feedback.q7.includes('✓')
              ? '✓ Perfect! random.choice takes a LIST and picks one item! ✊✋✌️'
              : feedback.q7}
          </div>
        )}
      </div>

      <div className="question-box">
        <h3>Question 8: Taking a Nap</h3>
        <p>
          After <code>from time import sleep</code>, what does <code>sleep(2)</code> do? Explain in
          your own words.
        </p>
        <textarea
          value={answers.q8 || ''}
          onChange={(e) => updateAnswer('q8', e.target.value)}
          placeholder="Your answer..."
          rows="3"
        />
        <button onClick={() => checkAnswer('q8', answers.q8)} className="check-button">
          ✓ Check Answer
        </button>
        {feedback.q8 && (
          <div className={feedback.q8.includes('✓') ? 'feedback correct' : 'feedback incorrect'}>
            {feedback.q8.includes('✓')
              ? '✓ Yes! sleep(2) pauses the program for 2 seconds - great for suspense!'
              : feedback.q8}
          </div>
        )}
      </div>

      <h3 style={{ marginTop: '30px' }}>💻 Now Try It in VS Code!</h3>

      <ExerciseCard
        number={6}
        title="Dice Roller"
        description="Use the random library to roll a dice 3 times! Combine import random, random.randint(1, 6), and a for loop."
        requirements={[
          'Write import random at the TOP of your file',
          'Use a for loop that runs 3 times',
          'Inside the loop, roll with random.randint(1, 6)',
          'Print each roll with an f-string'
        ]}
        exampleOutput={`Roll 1: you got a 4! 🎲
Roll 2: you got a 1! 🎲
Roll 3: you got a 6! 🎲`}
        filename="exercise6_dice_roller.py"
        tips={[
          'import random goes on line 1, before everything else',
          'randint includes both ends: 1 and 6 are possible',
          'Your numbers will be different every time you run it - that is the point!'
        ]}
        completed={answers.lib1_completed}
        onToggleComplete={() => updateAnswer('lib1_completed', !answers.lib1_completed)}
      />

      <ExerciseCard
        number={7}
        title="Magic 8-Ball"
        description="Build a Magic 8-Ball! Ask the user a yes/no question, pause for suspense with sleep, then reveal a random answer."
        requirements={[
          'Use input() to ask the user a yes/no question',
          'Make a list of at least 4 possible answers',
          'Pick one with random.choice(your_list)',
          'Use from time import sleep and sleep(1) before revealing the answer'
        ]}
        exampleOutput={`Ask the Magic 8-Ball a question: Will I win my next game?
The Magic 8-Ball says...
Yes, definitely! ✨`}
        filename="exercise7_magic_8ball.py"
        tips={[
          'You need TWO imports: import random AND from time import sleep',
          'random.choice needs the whole list: random.choice(answers)',
          'Compare with code_examples/day5/05_using_libraries.py if you get stuck!'
        ]}
        completed={answers.lib2_completed}
        onToggleComplete={() => updateAnswer('lib2_completed', !answers.lib2_completed)}
      />

      <div className="info-box">
        <h3>🚀 Why This Matters</h3>
        <p>
          Almost every real program starts with <code>import</code> - games import{' '}
          <code>random</code>, and machine learning programs import libraries full of AI
          functions! Now go make the computer in <strong>Part 4's Rock Paper Scissors</strong>{' '}
          unpredictable with <code>random.choice(['rock', 'paper', 'scissors'])</code> - there's
          also a starter file in <code>projects/templates/day5_rock_paper_scissors_template.py</code>. 🎮
        </p>
      </div>
    </div>
  );
}

export default Day5Part7;
