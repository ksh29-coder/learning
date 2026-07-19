import React from 'react';
import './Part2.css';
import ExerciseCard from './ExerciseCard';

function Day6Part2({ answers, updateAnswer }) {
  return (
    <div className="part2-container">
      <div className="part-header">
        <h2>💻 Part 2: List Practice</h2>
        <p className="part-description">
          Now it's time to write your own lists in VS Code! Follow the instructions for each exercise.
        </p>
      </div>

      <ExerciseCard
        number={1}
        title="Your First List"
        description="Create a list called favorites with 4 of your favorite things, print the whole list, then print how many items it has."
        requirements={[
          "Create a list named favorites with 4 items",
          "Print the whole list",
          "Use len() to print how many items are in the list"
        ]}
        exampleOutput={`['pizza', 'soccer', 'dogs', 'video games']
I have 4 favorite things!`}
        filename="exercise1_first_list.py"
        tips={[
          "Use square brackets [ ] to create a list",
          "Separate items with commas",
          "len(favorites) tells you how many items are inside"
        ]}
        completed={answers.exercise1_completed}
        onToggleComplete={() => updateAnswer('exercise1_completed', !answers.exercise1_completed)}
      />

      <ExerciseCard
        number={2}
        title="Indexing Practice"
        description="Using a list of 4 items, print the FIRST item using positive indexing and the LAST item using negative indexing."
        requirements={[
          "Create a list with at least 4 items",
          "Print the first item using index 0",
          "Print the last item using index -1",
          "Print the second item using index 1"
        ]}
        exampleOutput={`The first item is: pizza
The last item is: video games
The second item is: soccer`}
        filename="exercise2_indexing.py"
        tips={[
          "Remember: counting starts at 0, not 1!",
          "my_list[0] is the first item, my_list[-1] is the last item",
          "Try my_list[1] for the second item"
        ]}
        completed={answers.exercise2_completed}
        onToggleComplete={() => updateAnswer('exercise2_completed', !answers.exercise2_completed)}
      />

      <ExerciseCard
        number={3}
        title="Loop Over a List"
        description="Write a for loop that goes through a list and prints each item with a message in front of it."
        requirements={[
          "Create a list of at least 4 items",
          "Use a for loop: for item in my_list:",
          "Print each item with 'I really like' in front of it",
          "Make sure every item in the list gets printed"
        ]}
        exampleOutput={`I really like pizza
I really like soccer
I really like dogs
I really like video games`}
        filename="exercise3_loop_list.py"
        tips={[
          "Use: for item in favorites:",
          "Inside the loop: print('I really like', item)",
          "You don't need to know the index - the loop visits every item for you!"
        ]}
        completed={answers.exercise3_completed}
        onToggleComplete={() => updateAnswer('exercise3_completed', !answers.exercise3_completed)}
      />

      <ExerciseCard
        number={4}
        title="Append and Remove"
        description="Start with a list called chores = ['dishes', 'laundry']. Add 'vacuuming' to the list, then remove 'laundry'. Print the list after each change."
        requirements={[
          "Start with chores = ['dishes', 'laundry']",
          "Use .append() to add 'vacuuming'",
          "Print the list after appending",
          "Use .remove() to take 'laundry' off the list",
          "Print the list after removing"
        ]}
        exampleOutput={`['dishes', 'laundry', 'vacuuming']
['dishes', 'vacuuming']`}
        filename="exercise4_append_remove.py"
        tips={[
          "chores.append('vacuuming') adds to the END of the list",
          "chores.remove('laundry') takes the first matching item out",
          "Print the list after each change so you can see it update"
        ]}
        completed={answers.exercise4_completed}
        onToggleComplete={() => updateAnswer('exercise4_completed', !answers.exercise4_completed)}
      />

      <div className="info-box">
        <h3>🎓 What You Learned</h3>
        <ul>
          <li>How to create a list with <code>[ ]</code></li>
          <li>How to access items using positive and negative indexing</li>
          <li>How to loop over every item in a list with <code>for item in my_list:</code></li>
          <li>How to grow a list with <code>.append()</code> and shrink it with <code>.remove()</code></li>
        </ul>
      </div>
    </div>
  );
}

export default Day6Part2;
