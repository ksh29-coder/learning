import React from 'react';
import ExerciseCard from './ExerciseCard';
import VSCodeInstructions from './VSCodeInstructions';

function Day8Exercise({ answers, updateAnswer }) {
  return (
    <div className="part-container">
      <h2>Exercise: Build a Full Animal Program 🐾</h2>
      <p className="section-intro">
        Now let's combine everything - a parent class, subclasses, overriding, <code>super()</code>, and
        a polymorphism loop - into complete programs. Follow the VS Code instructions below for each exercise.
      </p>

      <VSCodeInstructions exerciseFilename="day8_exercise1.py" />

      <ExerciseCard
        number={1}
        title="Animal Family with Overriding"
        description="Write a Pet parent class with __init__ (name, animal_type) and a plain make_sound(). Then write Dog, Cat, and Bird subclasses that each call super().__init__() and override make_sound() with their own sound. Create one of each and call make_sound() on all three."
        requirements={[
          "Pet has __init__(self, name, animal_type) and a make_sound(self) that prints a plain sound",
          "Dog, Cat, and Bird each inherit from Pet with 'class Dog(Pet):' etc.",
          "Each subclass __init__ calls super().__init__(name, '...')",
          "Each subclass overrides make_sound() with its own message",
          "Create one Dog, one Cat, one Bird and call make_sound() on each"
        ]}
        exampleOutput={`Buddy says: Woof woof! 🐶
Whiskers says: Meow! 🐱
Tweety says: Tweet tweet! 🐦`}
        filename="day8_exercise1.py"
        tips={[
          "Define the Pet parent class FIRST, then the subclasses below it",
          "super().__init__(name, 'dog') runs Pet's setup so you don't repeat it",
          "Override = write make_sound() with the exact same name in each subclass"
        ]}
        completed={answers.exercise1_completed}
        onToggleComplete={() => updateAnswer('exercise1_completed', !answers.exercise1_completed)}
      />

      <ExerciseCard
        number={2}
        title="Polymorphism Loop"
        description="Using your Dog, Cat, and Bird subclasses, create a list holding several different animals all mixed together. Then write ONE for loop that calls make_sound() on every animal in the list - the same call, but each animal answers its own way!"
        requirements={[
          "Reuse your Dog, Cat, and Bird subclasses from Exercise 1",
          "Make a list with at least 4 animals of different kinds",
          "Write ONE for loop over the list",
          "Inside the loop, call animal.make_sound() - do NOT check the type",
          "Confirm each animal makes its own sound"
        ]}
        exampleOutput={`Buddy says: Woof woof! 🐶
Whiskers says: Meow! 🐱
Tweety says: Tweet tweet! 🐦
Rex says: Woof woof! 🐶`}
        filename="day8_exercise2.py"
        tips={[
          "A list can hold different kinds of objects: [Dog('Buddy'), Cat('Whiskers'), ...]",
          "Use 'for animal in animals:' then 'animal.make_sound()'",
          "No if/elif needed - Python runs the right version automatically!"
        ]}
        completed={answers.exercise2_completed}
        onToggleComplete={() => updateAnswer('exercise2_completed', !answers.exercise2_completed)}
      />

      <ExerciseCard
        number={3}
        title="Interactive Animal Shelter"
        description="Build an interactive program with a menu. Keep a list of animals. Let the player add a dog, cat, or bird (creating the right subclass each time), then choose 'hear all animals' to loop over the list and call make_sound() on each. Quit when they choose the quit option."
        requirements={[
          "Define Pet plus Dog, Cat, Bird subclasses that override make_sound()",
          "Keep an empty list like shelter = []",
          "Show a menu with input(): add dog / add cat / add bird / hear all / quit",
          "Adding creates the matching subclass and appends it to the list",
          "'Hear all' loops over the list calling make_sound() on each (polymorphism!)",
          "Quit ends the loop and prints how many animals are in the shelter"
        ]}
        exampleOutput={`1. Add a dog
2. Add a cat
3. Add a bird
4. Hear all the animals
5. Quit
Choose 1-5: 1
What's the dog's name? Buddy
Buddy the dog joined the shelter!`}
        filename="day8_exercise3.py"
        tips={[
          "Use shelter.append(Dog(name)) to add a dog to the list",
          "Use a 'running = True' variable and a 'while running:' loop",
          "For 'hear all', loop with 'for animal in shelter: animal.make_sound()'"
        ]}
        completed={answers.exercise3_completed}
        onToggleComplete={() => updateAnswer('exercise3_completed', !answers.exercise3_completed)}
      />

      <div className="info-box">
        <h3>🎓 What You Practiced</h3>
        <ul>
          <li>Building a parent class and several subclasses that inherit from it</li>
          <li>Using <code>super().__init__(...)</code> to reuse the parent's setup</li>
          <li>Overriding a method so each subclass behaves its own way</li>
          <li>Looping over a list of mixed objects with one call - polymorphism in action</li>
        </ul>
      </div>
    </div>
  );
}

export default Day8Exercise;
