import React from 'react';
import './Part2.css';
import VSCodeInstructions from './VSCodeInstructions';
import ExerciseCard from './ExerciseCard';

function Exercise({ answers, updateAnswer }) {
  return (
    <div className="part2-container">
      <div className="part-header">
        <h2>📤 Exercise: Practice in VS Code</h2>
        <p className="part-description">
          Now it's time to write your own programs in VS Code! Follow the instructions for each exercise below.
        </p>
      </div>

      <VSCodeInstructions exerciseFilename="day1_exercise1.py" />

      <ExerciseCard
        number={1}
        title="Print About Yourself"
        description="Write a program that uses print() to share three facts about yourself: your name, your age, and your favorite hobby."
        requirements={[
          "Use at least 3 separate print() statements",
          "Include your name, age, and favorite hobby",
          "Add an emoji to at least one line"
        ]}
        exampleOutput={`My name is Alex!
I am 10 years old.
My favorite hobby is drawing! 🎨`}
        filename="exercise1_about_me.py"
        tips={[
          "Remember: text goes inside quotes",
          "Each print() creates a new line",
          "Don't forget the parentheses!"
        ]}
        completed={answers.exerciseUpload1_completed}
        onToggleComplete={() => updateAnswer('exerciseUpload1_completed', !answers.exerciseUpload1_completed)}
      />

      <ExerciseCard
        number={2}
        title="Name Tag Creator"
        description="Create a name tag program with a border around your name, age, and favorite color, just like we practiced in class."
        requirements={[
          "Print a border using \"=\" * 20 (or another character)",
          "Print a title like 'NAME TAG'",
          "Print your name, age, and favorite color",
          "Close the border at the bottom"
        ]}
        exampleOutput={`====================
     NAME TAG
====================
Name: Jordan
Age: 9
Favorite Color: Green
====================`}
        filename="exercise2_name_tag.py"
        tips={[
          "\"=\" * 20 repeats the equals sign 20 times",
          "Try using different characters for the border",
          "Add extra print() lines for more information"
        ]}
        completed={answers.exerciseUpload2_completed}
        onToggleComplete={() => updateAnswer('exerciseUpload2_completed', !answers.exerciseUpload2_completed)}
      />

      <ExerciseCard
        number={3}
        title="ASCII Art Picture"
        description="Use print() statements with spaces and symbols to draw a simple picture, like a house, star, or your own design."
        requirements={[
          "Use at least 5 print() statements",
          "Use spaces to line up your picture correctly",
          "Make sure it looks like a picture, not just random text"
        ]}
        exampleOutput={`   /\\
  /  \\
 /____\\
 |    |
 |____|`}
        filename="exercise3_ascii_art.py"
        tips={[
          "Spaces at the start of a line matter in print()!",
          "Sketch your picture on paper first",
          "Try building a star, tree, or house shape"
        ]}
        completed={answers.exerciseUpload3_completed}
        onToggleComplete={() => updateAnswer('exerciseUpload3_completed', !answers.exerciseUpload3_completed)}
      />
    </div>
  );
}

export default Exercise;
