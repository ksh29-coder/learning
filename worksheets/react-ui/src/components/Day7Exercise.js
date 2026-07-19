import React from 'react';
import ExerciseCard from './ExerciseCard';
import VSCodeInstructions from './VSCodeInstructions';

function Day7Exercise({ answers, updateAnswer }) {
  return (
    <div className="part-container">
      <h2>Exercise: Build a Full Pet Program 🐾</h2>
      <p className="section-intro">
        Now let's combine everything - attributes, methods, multiple objects, and even a menu loop -
        into complete programs. Follow the VS Code instructions below for each exercise.
      </p>

      <VSCodeInstructions exerciseFilename="day7_exercise1.py" />

      <ExerciseCard
        number={1}
        title="Complete Pet Class"
        description="Write a full Pet class with __init__ (name, animal_type, hunger_level, happiness) and four methods: feed(), play(), make_sound(), and describe(). Create two Pet objects, call every method on each, and print each pet's final stats."
        requirements={[
          "Pet.__init__ sets name, animal_type, hunger_level, and happiness",
          "feed() lowers hunger_level and prints a message",
          "play() raises happiness and prints a message",
          "make_sound() prints a simple sound message",
          "describe() prints the pet's name, animal_type, hunger_level, and happiness",
          "Create two different pets and call every method on each",
          "Print each pet's final stats with describe()"
        ]}
        exampleOutput={`Buddy happily eats! Yum! 🍖
Buddy plays and has a blast! 🎾
Buddy makes a happy little sound!
Buddy is a dog.
Hunger: 2 / 10   Happiness: 7 / 10`}
        filename="day7_exercise1.py"
        tips={[
          "Write the class once at the top of the file, then create objects below it",
          "Use max(0, ...) and min(10, ...) to keep hunger/happiness between 0 and 10",
          "Call describe() after each method to see the stats change"
        ]}
        completed={answers.exercise1_completed}
        onToggleComplete={() => updateAnswer('exercise1_completed', !answers.exercise1_completed)}
      />

      <ExerciseCard
        number={2}
        title="Interactive Pet Menu"
        description="Build an interactive program: ask the player for a pet name and animal type, create a Pet object, then show a menu (feed / play / make sound / describe / quit) in a loop using input()."
        requirements={[
          "Ask for the pet's name and animal type with input()",
          "Create one Pet object using those values",
          "Show a numbered menu inside a while loop",
          "Use input() to let the player choose an option each time through the loop",
          "Call the matching method based on their choice",
          "Quit the loop when the player chooses the quit option",
          "Print the pet's final stats after the loop ends"
        ]}
        exampleOutput={`What's your pet's name? Buddy
What kind of animal is it? dog

1. Feed
2. Play
3. Make sound
4. Describe
5. Quit
Choose 1-5: 1
Buddy happily eats! Yum! 🍖`}
        filename="day7_exercise2.py"
        tips={[
          "Use a variable like 'running = True' and a while running: loop",
          "Use if/elif/else to match the player's menu choice to a method call",
          "Set running = False to end the loop when they choose quit"
        ]}
        completed={answers.exercise2_completed}
        onToggleComplete={() => updateAnswer('exercise2_completed', !answers.exercise2_completed)}
      />

      <ExerciseCard
        number={3}
        title="Pet Collection"
        description="Create a Pet class with an extra method, is_hungry(), that returns True if hunger_level is greater than 6. Create at least three pets, store them in a list, and loop through the list printing each pet's description and whether it is hungry."
        requirements={[
          "Add is_hungry(self) to your Pet class - it should return True or False",
          "Create three or more Pet objects with different starting hunger_level values",
          "Store all the pets in one list",
          "Loop through the list with a for loop",
          "For each pet, print its description and the result of is_hungry()"
        ]}
        exampleOutput={`Buddy is a dog.
Hunger: 8 / 10   Happiness: 5 / 10
Is Buddy hungry? True

Whiskers is a cat.
Hunger: 3 / 10   Happiness: 5 / 10
Is Whiskers hungry? False`}
        filename="day7_exercise3.py"
        tips={[
          "is_hungry() should use 'return', not 'print', so you can use the result however you like",
          "Try: return self.hunger_level > 6",
          "Use for pet in pets: to loop through your list of Pet objects"
        ]}
        completed={answers.exercise3_completed}
        onToggleComplete={() => updateAnswer('exercise3_completed', !answers.exercise3_completed)}
      />

      <div className="info-box">
        <h3>🎓 What You Practiced</h3>
        <ul>
          <li>Writing a complete class with several attributes and methods</li>
          <li>Combining classes with input() and while loops for an interactive program</li>
          <li>Storing multiple objects in a list and looping through them</li>
          <li>Writing a method that returns a value instead of printing</li>
        </ul>
      </div>
    </div>
  );
}

export default Day7Exercise;
