import React from 'react';
import './Part1.css';

// Teaching-only tab for Day 1. Questions live in the separate Quiz tab
// (Part1.js), mirroring how Days 6-9 split "understanding" from the quiz.
function Day1Learn() {
  return (
    <div className="part1-container">
      <div className="part-header">
        <h2>📚 Part 1: Understanding Print</h2>
        <p className="part-description">
          Let's <strong>learn</strong> how <code>print()</code> works. Read these three cards, then head to the{' '}
          <strong>Quiz</strong> tab - you'll already know the answers! 🎉
        </p>
      </div>

      <div className="info-box">
        <h3>🖨️ What is print()?</h3>
        <p>
          <code>print()</code> is your very first Python command. Its job is simple: it <strong>shows text on the
          screen</strong>. Whatever you put inside the parentheses gets displayed!
        </p>
        <pre className="code-example">{`print("Hello, World!")`}</pre>
        <p>
          When you run this, the computer shows: <code>Hello, World!</code> Think of <code>print</code> like the
          computer's mouth - it's how your program "says" things out loud. 🗣️
        </p>
      </div>

      <div className="info-box">
        <h3>📝 Text Needs Quotes</h3>
        <p>
          Any text (called a <strong>string</strong>) must go inside <strong>quotes</strong>. The quotes tell Python
          "this is words, not a command." Forget them and Python gets confused and shows a red error!
        </p>
        <pre className="code-example">{`print("Hi there!")   # ✅ Works - text is in quotes
print(Hi there!)     # ❌ Error - no quotes!`}</pre>
        <p>
          Also remember the two <strong>parentheses</strong> <code>( )</code> - they hold whatever you want to print.
        </p>
      </div>

      <div className="info-box">
        <h3>📚 Each print() Is a New Line</h3>
        <p>
          Every time you use <code>print()</code>, it starts a <strong>brand new line</strong>. So if you want three
          lines on the screen, you write three <code>print()</code> statements!
        </p>
        <pre className="code-example">{`print("Line 1")
print("Line 2")
print("Line 3")`}</pre>
        <p>
          This prints <strong>3 lines</strong>, one under the other. Count the <code>print()</code> statements and
          you'll always know how many lines you'll get. 🔢
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

export default Day1Learn;
