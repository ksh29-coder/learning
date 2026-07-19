import React from 'react';
import ExerciseCard from './ExerciseCard';

function Day5Part3({ answers, updateAnswer }) {
  return (
    <div className="part-container">
      <h2>Part 3: Concept Review - Putting It All Together! 🔄</h2>
      <p className="section-intro">
        Let's combine everything you've learned: variables, if/else, loops, and functions!
      </p>

      <div className="info-box">
        <h3>📝 Quick Review</h3>
        <div className="review-grid">
          <div className="review-item">
            <strong>Variables (Day 2)</strong>
            <p>Store information: <code>name = "Alex"</code></p>
          </div>
          <div className="review-item">
            <strong>If/Else (Day 3)</strong>
            <p>Make decisions: <code>if age &gt; 10:</code></p>
          </div>
          <div className="review-item">
            <strong>Loops (Day 4)</strong>
            <p>Repeat actions: <code>for i in range(5):</code></p>
          </div>
          <div className="review-item">
            <strong>Functions (Day 5)</strong>
            <p>Reusable code: <code>def greet():</code></p>
          </div>
        </div>
      </div>

      <ExerciseCard
        number={1}
        title="Function with If/Else"
        description="Create a function called check_age(age) that checks if someone is old enough to watch a PG-13 movie."
        requirements={[
          "Function takes one parameter: age",
          "Use if/else to check if age >= 13",
          "Print appropriate message for each case",
          "Call the function with different ages"
        ]}
        exampleOutput={`You can watch PG-13 movies!
Sorry, you're too young for PG-13 movies.
You can watch PG-13 movies!`}
        filename="review1_function_with_if.py"
        tips={[
          "Inside your function, use: if age >= 13:",
          "Don't forget the else: for ages under 13",
          "Try calling with: check_age(15), check_age(10), check_age(13)"
        ]}
        completed={answers.review1_completed}
        onToggleComplete={() => updateAnswer('review1_completed', !answers.review1_completed)}
      />

      <ExerciseCard
        number={2}
        title="Function with Loop"
        description="Create a function called countdown(start) that counts down from a number to 1, then prints 'Blast off!'"
        requirements={[
          "Function takes one parameter: start",
          "Use a loop to count down",
          "Print each number",
          "Print 'Blast off!' at the end"
        ]}
        exampleOutput={`5
4
3
2
1
Blast off!`}
        filename="review2_function_with_loop.py"
        tips={[
          "Use a for loop with range(start, 0, -1) to count backwards",
          "Print each number in the loop",
          "After the loop, print 'Blast off!'"
        ]}
        completed={answers.review2_completed}
        onToggleComplete={() => updateAnswer('review2_completed', !answers.review2_completed)}
      />

      <ExerciseCard
        number={3}
        title="Function that Returns a Calculation"
        description="Create a function called calculate_total(price, quantity) that calculates the total cost and returns it."
        requirements={[
          "Function takes two parameters: price and quantity",
          "Calculate: price * quantity",
          "Return the result",
          "Call it and print the result"
        ]}
        exampleOutput={`Total cost for 5 items at $3 each: $15
Total cost for 10 items at $2 each: $20`}
        filename="review3_return_calculation.py"
        tips={[
          "Inside function: total = price * quantity",
          "Use: return total",
          "Store result: cost = calculate_total(3, 5)",
          "Then print it!"
        ]}
        completed={answers.review3_completed}
        onToggleComplete={() => updateAnswer('review3_completed', !answers.review3_completed)}
      />

      <ExerciseCard
        number={4}
        title="Combining Everything!"
        description="Create a function called grade_calculator(score) that takes a test score, determines the letter grade, and returns it."
        requirements={[
          "Function parameter: score (0-100)",
          "Use if/elif/else to determine grade:",
          "90-100: 'A', 80-89: 'B', 70-79: 'C', 60-69: 'D', below 60: 'F'",
          "Return the letter grade",
          "Call it multiple times and print results"
        ]}
        exampleOutput={`Score 95: Grade A
Score 82: Grade B
Score 67: Grade D
Score 45: Grade F`}
        filename="review4_grade_calculator.py"
        tips={[
          "Use multiple if/elif/else statements",
          "Return the letter grade as a string",
          "Test with different scores to make sure it works!"
        ]}
        completed={answers.review4_completed}
        onToggleComplete={() => updateAnswer('review4_completed', !answers.review4_completed)}
      />

      <div className="success-box">
        <h3>🎉 Awesome Work!</h3>
        <p>
          You've successfully combined variables, if/else, loops, and functions!
          These are the core building blocks of programming. Now let's use them to build fun games!
        </p>
      </div>
    </div>
  );
}

export default Day5Part3;
