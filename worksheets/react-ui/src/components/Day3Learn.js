import React from 'react';
import './Part1.css';

// Teaching-only tab for Day 3. Questions live in the separate Quiz tab
// (Day3Part1.js), mirroring how Days 6-9 split "understanding" from the quiz.
function Day3Learn() {
  return (
    <div className="part1-container">
      <div className="part-header">
        <h2>🤔 Part 1: Understanding If/Else</h2>
        <p className="part-description">
          Let's <strong>learn</strong> how programs make decisions. Read these cards, then the <strong>Quiz</strong> tab
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
        <p>One equals sign and two equals signs mean totally different things:</p>
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

      <div className="part-footer">
        <p className="tip">
          💡 Ready? Click the <strong>Quiz</strong> tab above to check what you just learned!
        </p>
      </div>
    </div>
  );
}

export default Day3Learn;
