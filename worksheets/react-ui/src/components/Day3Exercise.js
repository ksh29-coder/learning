import React from 'react';
import './Part2.css';
import VSCodeInstructions from './VSCodeInstructions';
import ExerciseCard from './ExerciseCard';

function Day3Exercise({ answers, updateAnswer }) {
  return (
    <div className="part2-container">
      <div className="part-header">
        <h2>📤 Exercise: Practice in VS Code</h2>
        <p className="part-description">
          Now it's time to write your own programs in VS Code! Follow the instructions for each exercise below.
        </p>
      </div>

      <VSCodeInstructions exerciseFilename="day3_exercise1.py" />

      <ExerciseCard
        number={1}
        title="Can I Vote?"
        description="Ask the user for their age, then use if/else to tell them whether they're old enough to vote (18 or older)."
        requirements={[
          "Use input() to ask for the user's age",
          "Convert the answer to a number with int()",
          "Use if/else to check if age >= 18",
          "Print a different message for each case"
        ]}
        exampleOutput={`How old are you? 20
You are old enough to vote! 🗳️`}
        filename="exercise1_vote_checker.py"
        tips={[
          "Remember to convert input() to int() before comparing",
          "Use >= for 'greater than or equal to'",
          "Only one message should print, never both"
        ]}
        completed={answers.exerciseUpload1_completed}
        onToggleComplete={() => updateAnswer('exerciseUpload1_completed', !answers.exerciseUpload1_completed)}
      />

      <ExerciseCard
        number={2}
        title="Grade Calculator"
        description="Ask the user for a test score (0-100) and use if/elif/else to print their letter grade."
        requirements={[
          "Use input() and int() to get a score",
          "Use if/elif/else to check ranges (90+, 80+, 70+, 60+, below 60)",
          "Print the correct letter grade (A, B, C, D, or F)"
        ]}
        exampleOutput={`Enter your score: 85
Grade: B - Great job!`}
        filename="exercise2_grade_calculator.py"
        tips={[
          "Check the highest range first: if score >= 90:",
          "Use elif for each range after that",
          "Use else for anything below 60"
        ]}
        completed={answers.exerciseUpload2_completed}
        onToggleComplete={() => updateAnswer('exerciseUpload2_completed', !answers.exerciseUpload2_completed)}
      />

      <ExerciseCard
        number={3}
        title="Weather Decision Maker"
        description="Ask the user what the weather is like (sunny, rainy, or snowy) and print a different suggestion for each using elif."
        requirements={[
          "Use input() to ask about the weather",
          "Use if/elif/else to check for 'sunny', 'rainy', and 'snowy'",
          "Print a fun, matching suggestion for each option",
          "Use else to handle anything else the user types"
        ]}
        exampleOutput={`Enter: sunny, rainy, or snowy: rainy
Don't forget your umbrella! ☔`}
        filename="exercise3_weather.py"
        tips={[
          "Text comparisons are case-sensitive: \"Sunny\" is not the same as \"sunny\"",
          "Use == to compare strings",
          "Add emojis to make each message more fun"
        ]}
        completed={answers.exerciseUpload3_completed}
        onToggleComplete={() => updateAnswer('exerciseUpload3_completed', !answers.exerciseUpload3_completed)}
      />
    </div>
  );
}

export default Day3Exercise;
