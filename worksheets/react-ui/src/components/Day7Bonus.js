import React from 'react';
import ExerciseCard from './ExerciseCard';

function Day7Bonus({ answers, updateAnswer }) {
  return (
    <div className="part-container">
      <h2>⭐ Bonus Challenges!</h2>
      <p className="section-intro">
        Want more practice with classes and objects? Try these advanced challenges!
      </p>

      <ExerciseCard
        number={1}
        title="Design Your Own Class"
        description="Design a class of your own - NOT a Pet! Maybe a Character, a Car, or a Robot. Give it at least three attributes and two methods, then create two objects and show they behave independently."
        requirements={[
          "Choose your own class name and at least 3 attributes for __init__",
          "Write at least 2 methods that use self to read or change attributes",
          "Create two objects from your class",
          "Call a method on only one of the objects",
          "Print both objects' attributes to show only one changed"
        ]}
        exampleOutput={`=== CUSTOM CLASS DEMO ===
Robot 1: Bolt, battery: 100
Robot 2: Spark, battery: 100

Bolt used some battery!
Robot 1: Bolt, battery: 80
Robot 2: Spark, battery: 100`}
        filename="bonus1_custom_class.py"
        tips={[
          "Pick something fun - a video game character, a car, a spaceship, anything!",
          "Remember every method needs self as its first parameter",
          "Test that changing one object never changes the other"
        ]}
        completed={answers.bonus1_completed}
        onToggleComplete={() => updateAnswer('bonus1_completed', !answers.bonus1_completed)}
      />

      <ExerciseCard
        number={2}
        title="Hungriest Pet Finder"
        description="Create a list of several Pet objects with different hunger_level values. Write a function (outside the class) that takes the list and returns the pet with the highest hunger_level."
        requirements={[
          "Create at least four Pet objects with different hunger_level values",
          "Store them all in one list",
          "Write a function find_hungriest(pets) that loops through the list",
          "The function should return the single Pet object with the highest hunger_level",
          "Print the hungriest pet's name using describe() or its attributes"
        ]}
        exampleOutput={`=== HUNGRIEST PET FINDER ===
Checking 4 pets...
The hungriest pet is: Tweety (hunger: 9 / 10)`}
        filename="bonus2_hungriest_pet.py"
        tips={[
          "Start with a variable like hungriest = pets[0], then loop and compare",
          "Use pet.hunger_level to compare each pet as you loop",
          "Update 'hungriest' whenever you find a pet with a higher hunger_level"
        ]}
        completed={answers.bonus2_completed}
        onToggleComplete={() => updateAnswer('bonus2_completed', !answers.bonus2_completed)}
      />

      <div className="mastery-box">
        <h3>🏆 Challenge Master!</h3>
        <p>
          If you completed these bonus challenges, you've truly mastered Day 7! You understand classes,
          objects, attributes, and methods - and you're ready for something exciting next time.
        </p>
      </div>

      <div className="info-box">
        <h3>📚 What's Next?</h3>
        <p>
          You now understand the building blocks of Object-Oriented Programming:
        </p>
        <ul>
          <li>✅ Define a class as a blueprint</li>
          <li>✅ Create objects (instances) from a class</li>
          <li>✅ Set up attributes with __init__ and self</li>
          <li>✅ Write methods that read and change an object's own data</li>
          <li>✅ Create multiple independent objects from the same class</li>
        </ul>
        <p>
          <strong>Next time (Day 8):</strong> we'll learn <em>inheritance</em> - how to build special
          kinds of <code>Pet</code>, like <code>Dog</code> and <code>Cat</code>, that reuse everything
          from <code>Pet</code> automatically and only add what makes them different!
        </p>
      </div>
    </div>
  );
}

export default Day7Bonus;
