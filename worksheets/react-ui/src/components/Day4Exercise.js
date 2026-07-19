import React from 'react';
import './Part2.css';
import VSCodeInstructions from './VSCodeInstructions';
import ExerciseCard from './ExerciseCard';

function Day4Exercise({ answers, updateAnswer }) {
  return (
    <div className="part2-container">
      <div className="part-header">
        <h2>📤 Exercise: Practice in VS Code</h2>
        <p className="part-description">
          Now it's time to write your own programs in VS Code! Follow the instructions for each exercise below.
        </p>
      </div>

      <VSCodeInstructions exerciseFilename="day4_exercise1.py" />

      <ExerciseCard
        number={1}
        title="Repeat My Name"
        description="Ask the user for their name and how many times to repeat it, then use a for loop to print their name that many times."
        requirements={[
          "Use input() to ask for a name",
          "Use input() and int() to ask how many times to repeat it",
          "Use a for loop with range() to print the name that many times"
        ]}
        exampleOutput={`What's your name? Jordan
How many times? 4
Jordan
Jordan
Jordan
Jordan`}
        filename="exercise1_repeat_name.py"
        tips={[
          "Use: for i in range(times):",
          "Print the name variable inside the loop",
          "Don't forget int() when converting the count"
        ]}
        completed={answers.exerciseUpload1_completed}
        onToggleComplete={() => updateAnswer('exerciseUpload1_completed', !answers.exerciseUpload1_completed)}
      />

      <ExerciseCard
        number={2}
        title="Multiplication Table"
        description="Ask the user for a number, then use a for loop to print its multiplication table from 1 to 10."
        requirements={[
          "Use input() and int() to get a number",
          "Use a for loop with range(1, 11)",
          "Print each line like '5 x 1 = 5'"
        ]}
        exampleOutput={`Enter a number: 5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
...
5 x 10 = 50`}
        filename="exercise2_times_table.py"
        tips={[
          "range(1, 11) counts from 1 up to 10",
          "Multiply the loop variable by the number each time",
          "Use commas in print() to combine text and numbers"
        ]}
        completed={answers.exerciseUpload2_completed}
        onToggleComplete={() => updateAnswer('exerciseUpload2_completed', !answers.exerciseUpload2_completed)}
      />

      <ExerciseCard
        number={3}
        title="Countdown Timer"
        description="Ask the user how many seconds to count down from, then use a while loop to count down to zero and cheer at the end."
        requirements={[
          "Use input() and int() to ask for a starting number",
          "Use a while loop that continues while the number is greater than 0",
          "Print the number each time, then subtract 1",
          "Print a celebration message when the loop ends"
        ]}
        exampleOutput={`How many seconds should we count down? 3
3
2
1
Blast off! 🚀`}
        filename="exercise3_countdown.py"
        tips={[
          "Use: while seconds > 0:",
          "Don't forget to subtract inside the loop: seconds = seconds - 1",
          "If you forget to change the variable, the loop will never stop!"
        ]}
        completed={answers.exerciseUpload3_completed}
        onToggleComplete={() => updateAnswer('exerciseUpload3_completed', !answers.exerciseUpload3_completed)}
      />
    </div>
  );
}

export default Day4Exercise;
