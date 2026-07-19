import React from 'react';
import ExerciseCard from './ExerciseCard';

function Day5Part2({ answers, updateAnswer }) {
  return (
    <div className="part-container">
      <h2>Part 2: Functions Practice 💻</h2>
      <p className="section-intro">
        Now it's time to write your own functions in VS Code! Follow the instructions for each exercise.
      </p>

      <ExerciseCard
        number={1}
        title="Your First Function"
        description="Create a function called say_hello() that prints 'Hello, World!' and 'Welcome to Day 5!'. Then call it!"
        requirements={[
          "Define a function named say_hello()",
          "Inside the function, print two messages",
          "Call the function to make it run"
        ]}
        exampleOutput={`Hello, World!
Welcome to Day 5!`}
        filename="exercise1_first_function.py"
        tips={[
          "Use 'def' to define a function",
          "Don't forget the colon : after the function name",
          "Indent the code inside the function",
          "Call the function by writing: say_hello()"
        ]}
        completed={answers.exercise1_completed}
        onToggleComplete={() => updateAnswer('exercise1_completed', !answers.exercise1_completed)}
      />

      <ExerciseCard
        number={2}
        title="Function with Parameters"
        description="Create a function called greet(name) that takes a name as a parameter and prints a personalized greeting."
        requirements={[
          "Define a function named greet(name)",
          "Print a greeting using the name parameter",
          "Call the function with your own name",
          "Call it again with a different name"
        ]}
        exampleOutput={`Hello, Alex!
Nice to meet you!
Hello, Jordan!
Nice to meet you!`}
        filename="exercise2_parameters.py"
        tips={[
          "The parameter goes inside the parentheses: def greet(name)",
          "Use the parameter inside the function: print('Hello,', name)",
          "Call it multiple times with different names!"
        ]}
        completed={answers.exercise2_completed}
        onToggleComplete={() => updateAnswer('exercise2_completed', !answers.exercise2_completed)}
      />

      <ExerciseCard
        number={3}
        title="Function with Multiple Parameters"
        description="Create a function called introduce(name, age) that takes two parameters and introduces a person."
        requirements={[
          "Define a function with two parameters: name and age",
          "Print a sentence using both parameters",
          "Call the function at least twice with different values"
        ]}
        exampleOutput={`Hi! My name is Alex and I'm 10 years old.
Hi! My name is Jordan and I'm 11 years old.`}
        filename="exercise3_multiple_params.py"
        tips={[
          "Separate parameters with commas: def introduce(name, age)",
          "Use both parameters in your print statement",
          "Remember: strings in quotes, numbers without quotes"
        ]}
        completed={answers.exercise3_completed}
        onToggleComplete={() => updateAnswer('exercise3_completed', !answers.exercise3_completed)}
      />

      <ExerciseCard
        number={4}
        title="Function with Return Value"
        description="Create a function called double(number) that takes a number, doubles it, and RETURNS the result (not just prints it)."
        requirements={[
          "Define a function named double(number)",
          "Calculate number * 2",
          "Use 'return' to send back the result",
          "Store the result in a variable and print it"
        ]}
        exampleOutput={`The double of 5 is: 10
The double of 7 is: 14
The double of 12 is: 24`}
        filename="exercise4_return.py"
        tips={[
          "Use 'return' instead of 'print' inside the function",
          "Store the result: result = double(5)",
          "Then print the result: print('The double of 5 is:', result)"
        ]}
        completed={answers.exercise4_completed}
        onToggleComplete={() => updateAnswer('exercise4_completed', !answers.exercise4_completed)}
      />

      <ExerciseCard
        number={5}
        title="Combining Functions with Loops"
        description="Create a function called print_stars(count) that prints a star (*) the specified number of times using a loop."
        requirements={[
          "Define a function with one parameter: count",
          "Use a for loop with range(count) inside the function",
          "Print a star in each iteration",
          "Call the function with different numbers"
        ]}
        exampleOutput={`***
*****
**********`}
        filename="exercise5_function_with_loop.py"
        tips={[
          "Use: for i in range(count):",
          "Inside the loop, print('*')",
          "Try calling: print_stars(3), print_stars(5), print_stars(10)"
        ]}
        completed={answers.exercise5_completed}
        onToggleComplete={() => updateAnswer('exercise5_completed', !answers.exercise5_completed)}
      />

      <div className="info-box">
        <h3>🎓 What You Learned</h3>
        <ul>
          <li>How to define functions with <code>def</code></li>
          <li>How to use parameters to pass information to functions</li>
          <li>How to return values from functions</li>
          <li>How to combine functions with loops</li>
          <li>How to call functions multiple times</li>
        </ul>
      </div>
    </div>
  );
}

export default Day5Part2;
