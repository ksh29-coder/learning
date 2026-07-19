import React from 'react';
import './Part2.css';
import ExerciseCard from './ExerciseCard';
import VSCodeInstructions from './VSCodeInstructions';

function Day6Exercise({ answers, updateAnswer }) {
  return (
    <div className="part2-container">
      <div className="part-header">
        <h2>🚀 Exercise: Bigger List Programs</h2>
        <p className="part-description">
          Time to combine everything - lists, loops, input(), and if/else - into bigger programs!
        </p>
      </div>

      <VSCodeInstructions exerciseFilename="day6_exercise1.py" />

      <ExerciseCard
        number={1}
        title="Class Roster"
        description="Build a program that collects student names one at a time using input(), until the user types 'done'. Then print the whole roster, numbered."
        requirements={[
          "Start with an empty list: roster = []",
          "Use a while loop to keep asking for names with input()",
          "Stop the loop when the user types 'done'",
          "Use .append() to add each name to the list",
          "After the loop, print every name numbered 1, 2, 3, ..."
        ]}
        exampleOutput={`Enter a student name (or 'done'): Alex
Enter a student name (or 'done'): Jordan
Enter a student name (or 'done'): Sam
Enter a student name (or 'done'): done

Class Roster:
1 - Alex
2 - Jordan
3 - Sam`}
        filename="day6_exercise1.py"
        tips={[
          "Use: while True: then break when the input is 'done'",
          "Use roster.append(name) inside the loop",
          "Use range(len(roster)) to number the students when printing"
        ]}
        completed={answers.exercise5_completed}
        onToggleComplete={() => updateAnswer('exercise5_completed', !answers.exercise5_completed)}
      />

      <ExerciseCard
        number={2}
        title="Membership Checker"
        description="Create a list of at least 5 items. Ask the user to type something, then use 'in' to tell them whether that item is in the list."
        requirements={[
          "Create a list with at least 5 items",
          "Use input() to ask the user for an item to look for",
          "Use 'in' with an if/else to check if it's in the list",
          "Print a friendly message either way"
        ]}
        exampleOutput={`What are you looking for? cookies
Yes! cookies is in the list!

What are you looking for? candy
Sorry, candy is not in the list.`}
        filename="day6_exercise2.py"
        tips={[
          "if item in my_list: ... else: ...",
          "Try running it more than once with different answers",
          "Remember to make the check case-insensitive with .lower() if you want to be extra careful"
        ]}
        completed={answers.exercise6_completed}
        onToggleComplete={() => updateAnswer('exercise6_completed', !answers.exercise6_completed)}
      />

      <ExerciseCard
        number={3}
        title="Shopping List Builder"
        description="Build an interactive shopping list! Let the user add items one at a time, and don't add an item if it's already on the list."
        requirements={[
          "Start with an empty list: shopping_list = []",
          "Use a loop to keep asking for items until the user types 'done'",
          "Before adding, check if the item is already 'in' the list",
          "If it's already there, print a message instead of adding it again",
          "At the end, print the final list and how many items it has using len()"
        ]}
        exampleOutput={`Add an item (or 'done'): milk
Added milk to your list!
Add an item (or 'done'): eggs
Added eggs to your list!
Add an item (or 'done'): milk
milk is already on your list!
Add an item (or 'done'): done

Your final shopping list:
1 - milk
2 - eggs

You have 2 items on your list.`}
        filename="day6_exercise3.py"
        tips={[
          "Check 'in' the list BEFORE calling .append()",
          "len(shopping_list) tells you the final count",
          "This is very similar to the Class Roster exercise - reuse what you learned!"
        ]}
        completed={answers.exercise7_completed}
        onToggleComplete={() => updateAnswer('exercise7_completed', !answers.exercise7_completed)}
      />

      <div className="info-box">
        <h3>🎓 What You Practiced</h3>
        <ul>
          <li>Combining lists with <code>while</code> loops and <code>input()</code></li>
          <li>Building a list piece by piece with <code>.append()</code></li>
          <li>Using <code>in</code> to avoid duplicates and search for items</li>
          <li>Reporting information about a list using <code>len()</code> and numbered loops</li>
        </ul>
      </div>
    </div>
  );
}

export default Day6Exercise;
