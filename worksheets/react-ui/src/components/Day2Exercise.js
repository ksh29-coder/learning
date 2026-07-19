import React from 'react';
import './Part2.css';
import VSCodeInstructions from './VSCodeInstructions';
import ExerciseCard from './ExerciseCard';

function Day2Exercise({ answers, updateAnswer }) {
  return (
    <div className="part2-container">
      <div className="part-header">
        <h2>📤 Exercise: Practice in VS Code</h2>
        <p className="part-description">
          Now it's time to write your own programs in VS Code! Follow the instructions for each exercise below.
        </p>
      </div>

      <VSCodeInstructions exerciseFilename="day2_exercise1.py" />

      <ExerciseCard
        number={1}
        title="Variable Basics"
        description="Create three variables to store your name, your age, and your favorite color, then print them all out."
        requirements={[
          "Create a variable called my_name (a string)",
          "Create a variable called my_age (a number)",
          "Create a variable called favorite_color (a string)",
          "Print all three using print() statements"
        ]}
        exampleOutput={`My name is Alex
I am 10 years old
My favorite color is Blue`}
        filename="exercise1_variables.py"
        tips={[
          "Strings need quotes: my_name = \"Alex\"",
          "Numbers don't need quotes: my_age = 10",
          "Use commas in print() to combine text and variables"
        ]}
        completed={answers.exerciseUpload1_completed}
        onToggleComplete={() => updateAnswer('exerciseUpload1_completed', !answers.exerciseUpload1_completed)}
      />

      <ExerciseCard
        number={2}
        title="Simple Calculator"
        description="Ask the user to type in two numbers using input(), then add them together and print the result."
        requirements={[
          "Use input() to ask for a first number",
          "Use input() to ask for a second number",
          "Convert both answers to numbers using int()",
          "Add them together and print the sum"
        ]}
        exampleOutput={`Enter first number: 4
Enter second number: 7
The sum is: 11`}
        filename="exercise2_calculator.py"
        tips={[
          "input() always gives you text, even for numbers",
          "Use int() to convert text into a whole number",
          "Example: num1 = int(input('Enter first number: '))"
        ]}
        completed={answers.exerciseUpload2_completed}
        onToggleComplete={() => updateAnswer('exerciseUpload2_completed', !answers.exerciseUpload2_completed)}
      />

      <ExerciseCard
        number={3}
        title="Get to Know Me"
        description="Ask the user 5 questions about themselves using input(), store each answer in a variable, then print a summary."
        requirements={[
          "Ask at least 5 questions with input()",
          "Store each answer in its own variable",
          "Print a nicely formatted summary of all the answers"
        ]}
        exampleOutput={`What's your name? Jordan
How old are you? 9
What's your favorite color? Green
What's your favorite food? Pizza
What's your favorite hobby? Soccer

Nice to meet you, Jordan!
You're 9 years old and love Green, Pizza, and Soccer!`}
        filename="exercise3_get_to_know_me.py"
        tips={[
          "Store every input() answer in a variable right away",
          "Use print() with commas to combine multiple variables",
          "Try adding a border with \"=\" * 30"
        ]}
        completed={answers.exerciseUpload3_completed}
        onToggleComplete={() => updateAnswer('exerciseUpload3_completed', !answers.exerciseUpload3_completed)}
      />
    </div>
  );
}

export default Day2Exercise;
