import React from 'react';

// Teaching-only tab for Day 5. Questions live in the separate Quiz tab
// (Day5Part1.js), mirroring how Days 6-9 split "understanding" from the quiz.
function Day5Learn() {
  return (
    <div className="part-container">
      <h2>Part 1: Understanding Functions 📚</h2>
      <p className="section-intro">
        Functions are like your own custom commands! Let's <strong>learn</strong> what they are and why they're so
        useful - then the <strong>Quiz</strong> tab will be easy. 🎉
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

      <div className="info-box">
        <h3>💡 Why Are Functions Helpful?</h3>
        <p>Functions are one of a programmer's best friends. Here's why:</p>
        <ul>
          <li>
            <strong>Reuse code</strong> - write it once, use it as many times as you want (no copy-paste!).
          </li>
          <li>
            <strong>Organize code</strong> - break a big program into small, tidy pieces that are easy to read.
          </li>
          <li>
            <strong>Fix bugs faster</strong> - if something's wrong, you fix it in one place instead of everywhere.
          </li>
        </ul>
        <pre className="code-example">{`# Without a function - repeated 3 times 😴
print("Happy Birthday to you!")
print("Happy Birthday to you!")
print("Happy Birthday, dear friend!")

# With a function - clean and reusable 🚀
def sing():
    print("Happy Birthday to you!")

sing()
sing()`}</pre>
      </div>

      <div className="info-box">
        <h3>🛠️ Defining vs Calling (and Parameters)</h3>
        <p>
          <strong>Defining</strong> a function <em>creates</em> it - like writing down a recipe. It doesn't run yet!{' '}
          <strong>Calling</strong> a function <em>runs</em> it - like actually cooking the recipe.
        </p>
        <pre className="code-example">{`def greet_user(name):     # 👈 DEFINING - name is a PARAMETER
    print("Hello,", name, "!")

greet_user("Sam")        # 👈 CALLING - "Sam" goes into name
# prints: Hello, Sam !`}</pre>
        <p>
          The <strong>function name</strong> here is <code>greet_user</code>. The <strong>parameter</strong>{' '}
          <code>name</code> is a little box that holds whatever you pass in when you call it. So calling{' '}
          <code>greet_user("Sam")</code> puts <code>"Sam"</code> into <code>name</code> and prints a greeting!
        </p>
      </div>

      <p className="section-intro" style={{ marginTop: '20px' }}>
        💡 Ready? Click the <strong>Quiz</strong> tab above to check what you just learned!
      </p>
    </div>
  );
}

export default Day5Learn;
