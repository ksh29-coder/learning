import React from 'react';
import './Part1.css';

// Teaching-only tab for Day 2. Questions live in the separate Quiz tab
// (Day2Part1.js), mirroring how Days 6-9 split "understanding" from the quiz.
function Day2Learn() {
  return (
    <div className="part1-container">
      <div className="part-header">
        <h2>📦 Part 1: Understanding Variables</h2>
        <p className="part-description">
          Let's <strong>learn</strong> what variables are. Read these cards, then the <strong>Quiz</strong> tab will feel
          easy! 🎉
        </p>
      </div>

      <div className="info-box">
        <h3>📦 What is a Variable?</h3>
        <p>
          A <strong>variable</strong> is like a labeled box where you store information so you can use it later. You
          give the box a name, then put something inside with an <strong>equals sign</strong> <code>=</code>.
        </p>
        <pre className="code-example">{`name = "Sam"
age = 10

print("Hello,", name)   # Hello, Sam
print("You are", age)   # You are 10`}</pre>
        <p>
          Now the box called <code>name</code> holds <code>"Sam"</code>. Whenever we say <code>name</code>, Python
          grabs what's inside the box! 📦
        </p>
      </div>

      <div className="info-box">
        <h3>🏷️ Naming Your Boxes</h3>
        <p>
          Variable names have a few rules. A good name has <strong>no spaces</strong>, does{' '}
          <strong>not start with a number</strong>, and uses an <strong>underscore</strong> <code>_</code> instead of a
          space or dash.
        </p>
        <pre className="code-example">{`my_name = "Sam"    # ✅ underscore is perfect
score1 = 100       # ✅ numbers are ok (just not first)

my name = "Sam"    # ❌ has a space
123name = "Sam"    # ❌ starts with a number`}</pre>
      </div>

      <div className="info-box">
        <h3>🔤 Text vs Numbers</h3>
        <p>
          If something is in <strong>quotes</strong>, it's <strong>text</strong> (a string). With{' '}
          <strong>no quotes</strong>, a number is a real <strong>number</strong> you can do math with!
        </p>
        <pre className="code-example">{`age = "10"    # text - the characters 1 and 0
age = 10      # a number - you can add, subtract, etc.

print(10 + 5)     # 15  (math!)
print("10" + "5") # 105 (glued text, not math!)`}</pre>
        <p>That's why the same-looking <code>"25"</code> and <code>25</code> behave very differently. 🤯</p>
      </div>

      <div className="part-footer">
        <p className="tip">
          💡 Ready? Click the <strong>Quiz</strong> tab above to check what you just learned!
        </p>
      </div>
    </div>
  );
}

export default Day2Learn;
