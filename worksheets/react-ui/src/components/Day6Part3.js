import React from 'react';
import './Part1.css';
import './Part2.css';
import ExerciseCard from './ExerciseCard';

function Day6Part3({ answers, updateAnswer }) {
  return (
    <div className="part1-container">
      <div className="part-header">
        <h2>🗂️ Part 3: Dictionaries - Labeled Cubbies</h2>
        <p className="part-description">
          Lists are NUMBERED cubbies. Dictionaries are LABELED cubbies - you find things by name, not by position!
        </p>
      </div>

      <div className="info-box">
        <h3>🏷️ What is a Dictionary?</h3>
        <p>
          A <strong>dictionary</strong> stores information in <code>key: value</code> pairs using curly braces{' '}
          <code>{'{ }'}</code>. The <strong>key</strong> is the label on the cubby, and the <strong>value</strong> is
          what's stored inside. Instead of asking "what's in cubby number 2?", you ask "what's in the cubby labeled{' '}
          <code>age</code>?"
        </p>
        <pre className="code-example">{`player = {"name": "Isabella", "age": 12, "favorite_game": "Minecraft"}

print(player["name"])                              # Isabella
print(f"{player['name']} is {player['age']}!")     # Isabella is 12!`}</pre>
        <p>
          Think of a phone's contact list (name → number) or a menu (dish → price). Whenever information comes in
          PAIRS, a dictionary is your friend - and it's the most important data structure for machine learning later!
        </p>
      </div>

      <div className="info-box">
        <h3>✏️ Adding and Changing Entries</h3>
        <p>
          One move does both jobs: <code>d[key] = value</code> CHANGES the value if the label already exists, or ADDS
          a brand-new labeled cubby if it doesn't. No <code>.append()</code> needed!
        </p>
        <pre className="code-example">{`player = {"name": "Michael", "age": 13}

player["age"] = 14           # change an existing value
player["hobby"] = "coding"   # add a brand-new key

print(player)   # {'name': 'Michael', 'age': 14, 'hobby': 'coding'}`}</pre>
        <p>
          Asking for a label that doesn't exist (like <code>player["height"]</code>) gives a <code>KeyError</code> -
          check first with <code>if "height" in player:</code>. On a dictionary, <code>in</code> checks the KEYS!
        </p>
      </div>

      <div className="info-box">
        <h3>🔁 Looping Over a Dictionary</h3>
        <p>
          <code>for key in player:</code> visits every label. Even better,{' '}
          <code>for key, value in player.items():</code> hands you the label AND what's inside - two loop variables,
          just like <code>enumerate()</code>!
        </p>
        <pre className="code-example">{`player = {"name": "Michael", "age": 14, "hobby": "coding"}

for key, value in player.items():
    print(f"{key}: {value}")

# name: Michael
# age: 14
# hobby: coding`}</pre>
      </div>

      <div className="info-box">
        <h3>🥅 Bonus Trick: The try/except Safety Net</h3>
        <p>
          One more superpower for today: <code>int(input(...))</code> CRASHES if someone types "banana" instead of a
          number. Wrap the risky line in <code>try:</code> and catch the fall with <code>except ValueError:</code> -
          like a safety net under a tightrope!
        </p>
        <pre className="code-example">{`entry = input("How old are you? ")

try:
    age = int(entry)
    print(f"Next year you will be {age + 1}!")
except ValueError:
    print("Oops! That wasn't a number. 😅")`}</pre>
        <p>
          Only the risky line goes inside <code>try:</code>, and we always name the error we're catching. Now bad
          input never has to crash your program again!
        </p>
      </div>

      <ExerciseCard
        number={1}
        title="The Me Dictionary"
        description="Build a dictionary all about YOU, then print it as a profile card."
        requirements={[
          'Create a dictionary called me with at least 4 key: value pairs (like "name", "age", "favorite_food", "hobby")',
          'Print ONE value using its key, like me["name"]',
          'Change one value and add one brand-new pair using me[key] = value',
          'Print a profile card using for key, value in me.items(): with an f-string'
        ]}
        exampleOutput={`=== ALL ABOUT ME ===
name: Isabella
age: 12
favorite_food: sushi
hobby: drawing
pet: goldfish`}
        filename="day6_me_dictionary.py"
        tips={[
          'Curly braces { } create the dictionary, commas separate the pairs',
          'me["pet"] = "goldfish" adds a new pair in one line',
          'In the loop, print(f"{key}: {value}") makes a tidy card'
        ]}
        completed={answers.exercise8_completed}
        onToggleComplete={() => updateAnswer('exercise8_completed', !answers.exercise8_completed)}
      />

      <ExerciseCard
        number={2}
        title="Numbered Top 4 with enumerate()"
        description="Print a list of your 4 favorite things as a numbered countdown using enumerate() - the numbered-list trick the Day 9 project uses!"
        requirements={[
          'Create a list with 4 of your favorite things',
          'Loop with: for number, item in enumerate(my_list, 1):',
          'Print each line like "1. pizza" using an f-string',
          'No range(len(...)) allowed - enumerate does the counting for you!'
        ]}
        exampleOutput={`My Top 4 Favorite Things:
1. pizza
2. soccer
3. dogs
4. video games`}
        filename="day6_top4_enumerate.py"
        tips={[
          'enumerate(my_list, 1) starts the numbering at 1 instead of 0',
          'You need TWO loop variables: the number AND the item',
          'Try removing the ", 1" and see the numbering start at 0'
        ]}
        completed={answers.exercise9_completed}
        onToggleComplete={() => updateAnswer('exercise9_completed', !answers.exercise9_completed)}
      />

      <ExerciseCard
        number={3}
        title="The Safety Net"
        description="Ask for the user's age with int(input(...)), but use try/except so typing 'banana' prints a friendly message instead of crashing."
        requirements={[
          'Ask for an age with input()',
          'Convert it with int() INSIDE a try: block',
          'Catch except ValueError: and print a friendly message',
          "Bonus: wrap it in while True: so it keeps asking until it gets a real number, then break"
        ]}
        exampleOutput={`How old are you? banana
Oops! That wasn't a number. 😅
How old are you? twelve
Oops! That wasn't a number. 😅
How old are you? 12
Awesome - next year you'll be 13!`}
        filename="day6_safety_net.py"
        tips={[
          'Only the risky int(...) line needs to be inside try:',
          'except ValueError: catches exactly the error int() gives for non-numbers',
          'Test it with "banana", "12.5", and a real number!'
        ]}
        completed={answers.exercise10_completed}
        onToggleComplete={() => updateAnswer('exercise10_completed', !answers.exercise10_completed)}
      />

      <div className="info-box">
        <h3>🎓 What You Learned</h3>
        <ul>
          <li>How to create a dictionary with <code>{'{key: value}'}</code> pairs</li>
          <li>How to read with <code>d["name"]</code>, and add or change with <code>d["age"] = 12</code></li>
          <li>How <code>in</code> checks a dictionary's KEYS</li>
          <li>How to loop with <code>for key in d:</code> and <code>for key, value in d.items():</code></li>
          <li>The <code>enumerate()</code> numbered-list trick and the <code>try</code>/<code>except</code> safety net</li>
        </ul>
      </div>

      <div className="part-footer">
        <p className="tip">
          💡 Tip: Lists = numbered cubbies <code>[ ]</code>, dictionaries = labeled cubbies <code>{'{ }'}</code>. Now
          try the Quiz tab!
        </p>
      </div>
    </div>
  );
}

export default Day6Part3;
