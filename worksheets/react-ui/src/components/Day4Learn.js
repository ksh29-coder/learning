import React from 'react';
import './Part1.css';

// Teaching-only tab for Day 4. Questions live in the separate Quiz tab
// (Day4Part1.js), mirroring how Days 6-9 split "understanding" from the quiz.
function Day4Learn() {
  return (
    <div className="part1-container">
      <div className="part-header">
        <h2>🔁 Part 1: Understanding Loops</h2>
        <p className="part-description">
          Let's <strong>learn</strong> how loops repeat things for us. Read these cards, then the <strong>Quiz</strong>{' '}
          tab will be easy! 🎉
        </p>
      </div>

      <div className="info-box">
        <h3>🔁 What is a Loop?</h3>
        <p>
          A <strong>loop</strong> lets the computer <strong>repeat</strong> code without you copying and pasting it
          over and over. Instead of writing <code>print</code> ten times, you write it once and tell Python "do this 10
          times!"
        </p>
        <pre className="code-example">{`# The slow way 😴
print("Hello!")
print("Hello!")
print("Hello!")

# The loop way 🚀
for i in range(3):
    print("Hello!")`}</pre>
        <p>Both print "Hello!" three times - but the loop is way less typing!</p>
      </div>

      <div className="info-box">
        <h3>🔢 for Loops with range()</h3>
        <p>
          A <code>for</code> loop is a <strong>counting loop</strong>. Use it with <code>range()</code> when you know
          how many times to repeat. <code>range(5)</code> counts <code>0, 1, 2, 3, 4</code> - that's 5 turns.
        </p>
        <pre className="code-example">{`for i in range(5):
    print("Count:", i)

# prints:
# Count: 0
# Count: 1
# Count: 2
# Count: 3
# Count: 4`}</pre>
        <p>The variable <code>i</code> holds the current number each time around. 🔢</p>
      </div>

      <div className="info-box">
        <h3>⏳ while Loops</h3>
        <p>
          A <code>while</code> loop keeps going <strong>as long as a condition is True</strong>. You use it when you
          don't know exactly how many turns you'll need. <strong>Important:</strong> you must change something inside
          the loop so it can eventually <strong>stop</strong> - otherwise it runs forever! 😵
        </p>
        <pre className="code-example">{`count = 1

while count <= 3:
    print("Number", count)
    count = count + 1   # 👈 this makes the loop able to stop!`}</pre>
        <p>
          Each turn, <code>count</code> grows by 1. Once it reaches 4, <code>count &lt;= 3</code> becomes False and the
          loop ends. Forgetting that last line makes an <strong>infinite loop</strong>!
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

export default Day4Learn;
