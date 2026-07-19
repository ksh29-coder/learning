import React from 'react';
import ExerciseCard from './ExerciseCard';

function Day5Bonus({ answers, updateAnswer }) {
  return (
    <div className="part-container">
      <h2>⭐ Bonus Challenges!</h2>
      <p className="section-intro">
        Want more practice? Try these advanced challenges that combine multiple concepts!
      </p>

      <ExerciseCard
        number={1}
        title="Password Validator"
        description="Create a function that checks if a password is strong enough!"
        requirements={[
          "Function: is_strong_password(password)",
          "Check if password is at least 8 characters long",
          "Check if it contains at least one number",
          "Return True or False",
          "Test with different passwords"
        ]}
        exampleOutput={`Testing: abc123
❌ Not strong enough!

Testing: MySecurePass2024
✅ Strong password!`}
        filename="bonus1_password_validator.py"
        tips={[
          "Use len(password) to check length",
          "Use any(char.isdigit() for char in password) to check for numbers",
          "Return True if both conditions are met"
        ]}
        completed={answers.bonus1_completed}
        onToggleComplete={() => updateAnswer('bonus1_completed', !answers.bonus1_completed)}
      />

      <ExerciseCard
        number={2}
        title="Temperature Converter"
        description="Create functions to convert between Celsius and Fahrenheit!"
        requirements={[
          "Function: celsius_to_fahrenheit(celsius)",
          "Function: fahrenheit_to_celsius(fahrenheit)",
          "Formula for C to F: (celsius * 9/5) + 32",
          "Formula for F to C: (fahrenheit - 32) * 5/9",
          "Return the converted temperature",
          "Create a menu to let user choose which conversion"
        ]}
        exampleOutput={`Temperature Converter
1. Celsius to Fahrenheit
2. Fahrenheit to Celsius
Choice: 1
Enter Celsius: 25
25°C = 77.0°F`}
        filename="bonus2_temperature_converter.py"
        tips={[
          "Use return to send back the converted value",
          "Round to 1 decimal place: round(result, 1)",
          "Use a while loop for the menu"
        ]}
        completed={answers.bonus2_completed}
        onToggleComplete={() => updateAnswer('bonus2_completed', !answers.bonus2_completed)}
      />

      <ExerciseCard
        number={3}
        title="Mini Calculator"
        description="Build a calculator that can add, subtract, multiply, and divide!"
        requirements={[
          "Create functions for each operation: add(), subtract(), multiply(), divide()",
          "Each function takes two numbers as parameters",
          "Create a menu to choose the operation",
          "Get two numbers from the user",
          "Call the appropriate function and show the result",
          "Let user do multiple calculations"
        ]}
        exampleOutput={`=== CALCULATOR ===
1. Add
2. Subtract
3. Multiply
4. Divide
5. Quit
Choice: 1
First number: 15
Second number: 7
15 + 7 = 22`}
        filename="bonus3_calculator.py"
        tips={[
          "Define simple functions that return the result",
          "Use if/elif/else for menu choices",
          "For division, check if dividing by zero!",
          "Use a while loop to keep the calculator running"
        ]}
        completed={answers.bonus3_completed}
        onToggleComplete={() => updateAnswer('bonus3_completed', !answers.bonus3_completed)}
      />

      <ExerciseCard
        number={4}
        title="Story Generator"
        description="Create a fun story generator that uses functions and random choices!"
        requirements={[
          "Create functions that return random parts of a story",
          "get_character() - returns a random character name",
          "get_place() - returns a random place",
          "get_action() - returns a random action",
          "Use these functions to generate a story",
          "Generate multiple random stories"
        ]}
        exampleOutput={`=== RANDOM STORY GENERATOR ===

Once upon a time, a brave knight went to a mysterious castle.
There, they decided to dance with a dragon!

Generate another story? (yes/no): yes

Once upon a time, a clever wizard went to a dark forest.
There, they decided to sing to a friendly troll!`}
        filename="bonus4_story_generator.py"
        tips={[
          "Use lists to store options: characters = ['knight', 'wizard', 'pirate']",
          "Use random.choice(characters) to pick a random item",
          "Don't forget: import random at the top",
          "Use a loop to generate multiple stories"
        ]}
        completed={answers.bonus4_completed}
        onToggleComplete={() => updateAnswer('bonus4_completed', !answers.bonus4_completed)}
      />

      <div className="mastery-box">
        <h3>🏆 Challenge Master!</h3>
        <p>
          If you completed these bonus challenges, you've truly mastered Day 5!
          You understand functions, can combine concepts creatively, and are ready
          to build amazing programs. Keep coding!
        </p>
      </div>

      <div className="info-box">
        <h3>📚 What's Next?</h3>
        <p>
          You now have all the fundamental skills to build real programs:
        </p>
        <ul>
          <li>✅ Print and display information</li>
          <li>✅ Store data in variables</li>
          <li>✅ Get input from users</li>
          <li>✅ Make decisions with if/else</li>
          <li>✅ Repeat actions with loops</li>
          <li>✅ Organize code with functions</li>
        </ul>
        <p>
          <strong>Keep building, keep learning, and most importantly - have fun!</strong>
        </p>
      </div>
    </div>
  );
}

export default Day5Bonus;
