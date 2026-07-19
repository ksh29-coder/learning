import React from 'react';
import ExerciseCard from './ExerciseCard';

function Day8Bonus({ answers, updateAnswer }) {
  return (
    <div className="part-container">
      <h2>⭐ Bonus Challenges!</h2>
      <p className="section-intro">
        Want more practice with inheritance and polymorphism? Try these advanced challenges!
      </p>

      <ExerciseCard
        number={1}
        title="Design Your Own Family of Classes"
        description="Design your OWN family of classes - NOT animals! Maybe shapes (a Shape parent with Circle and Square), vehicles (a Vehicle parent with Car and Boat), or game characters (a Character parent with Wizard and Knight). Give the parent a method, override it in each child, then put the children in a list and loop over them calling that method."
        requirements={[
          "Write a parent class with at least one method",
          "Write two or more subclasses that inherit from it",
          "Each subclass uses super().__init__(...) and overrides the parent's method",
          "Put the subclass objects in one list",
          "Loop over the list calling the same method - polymorphism!"
        ]}
        exampleOutput={`=== SHAPE FAMILY DEMO ===
Circle draws: a round shape ⭕
Square draws: a boxy shape ⬛
Triangle draws: a pointy shape 🔺`}
        filename="bonus1_class_family.py"
        tips={[
          "Pick something fun - shapes, vehicles, monsters, superheroes, anything!",
          "The parent's method can be plain; each child overrides it its own way",
          "Adding a new subclass should NOT require changing your loop"
        ]}
        completed={answers.bonus1_completed}
        onToggleComplete={() => updateAnswer('bonus1_completed', !answers.bonus1_completed)}
      />

      <ExerciseCard
        number={2}
        title="A Special Subclass Method"
        description="Give ONE of your animal subclasses an extra method that the others don't have - for example, Dog.fetch() that prints a fetching message. Create objects of each type, loop calling make_sound() on all of them, then call your special method only on the object that has it."
        requirements={[
          "Start from Dog, Cat, Bird subclasses that override make_sound()",
          "Give ONE subclass (like Dog) an extra method the others don't have, e.g. fetch()",
          "Create one of each animal and store them in a list",
          "Loop over the list calling make_sound() on every animal",
          "Call your special method (like dog.fetch()) only on the animal that has it"
        ]}
        exampleOutput={`Buddy says: Woof woof! 🐶
Whiskers says: Meow! 🐱
Tweety says: Tweet tweet! 🐦
Buddy fetches the ball! 🎾`}
        filename="bonus2_special_method.py"
        tips={[
          "Only Dog needs the fetch() method - Cat and Bird won't have it",
          "If you call fetch() on a Cat, you'll get an AttributeError - that's expected!",
          "This shows subclasses can add their OWN unique abilities on top of shared ones"
        ]}
        completed={answers.bonus2_completed}
        onToggleComplete={() => updateAnswer('bonus2_completed', !answers.bonus2_completed)}
      />

      <div className="mastery-box">
        <h3>🏆 Challenge Master!</h3>
        <p>
          If you completed these bonus challenges, you've truly mastered Day 8! You understand inheritance,
          super(), overriding, and polymorphism - the big ideas that make Object-Oriented Programming powerful.
        </p>
      </div>

      <div className="info-box">
        <h3>📚 What's Next?</h3>
        <p>
          You now understand the powerful ideas of inheritance and polymorphism:
        </p>
        <ul>
          <li>✅ Write a subclass with <code>class Dog(Pet):</code> that reuses a parent class</li>
          <li>✅ Use <code>super().__init__(...)</code> to run the parent's setup</li>
          <li>✅ Override a method so a subclass does something its own way</li>
          <li>✅ Loop over a list of mixed objects, calling the same method on each</li>
          <li>✅ Explain why "same command, different result" makes code shorter and easier to grow</li>
        </ul>
        <p>
          <strong>Next time (Day 9):</strong> we'll pull everything from the whole course together into
          a bigger project - using variables, loops, functions, classes, inheritance, and polymorphism
          all at once!
        </p>
      </div>
    </div>
  );
}

export default Day8Bonus;
