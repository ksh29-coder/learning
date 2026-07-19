import React from 'react';
import ExerciseCard from './ExerciseCard';

function Day8Part2({ answers, updateAnswer }) {
  return (
    <div className="part-container">
      <h2>Part 2: Inheritance &amp; Overriding Practice 💻</h2>
      <p className="section-intro">
        Time to build your own family of animal classes step by step in VS Code! Start from a{' '}
        <code>Pet</code> parent class, then make subclasses that inherit and override. Follow the
        instructions for each exercise.
      </p>

      <ExerciseCard
        number={1}
        title="Your First Subclass"
        description="Start with a Pet class that has __init__ (name, animal_type) and a make_sound() method. Then write a subclass 'class Dog(Pet):' with just 'pass'. Create a Dog object and call make_sound() on it to prove it inherited that method."
        requirements={[
          "Write a Pet class with __init__(self, name, animal_type) and make_sound(self)",
          "Write 'class Dog(Pet):' with only 'pass' inside it",
          "Create a Dog object, like Dog('Buddy', 'dog')",
          "Call make_sound() on your Dog to show it was inherited"
        ]}
        exampleOutput={`Buddy makes a sound!`}
        filename="day8_part2_ex1_first_subclass.py"
        tips={[
          "The (Pet) in 'class Dog(Pet):' is what makes Dog inherit from Pet",
          "Even with only 'pass', Dog still gets Pet's __init__ and make_sound()",
          "Define the Pet parent class BEFORE the Dog subclass"
        ]}
        completed={answers.p2_ex1_completed}
        onToggleComplete={() => updateAnswer('p2_ex1_completed', !answers.p2_ex1_completed)}
      />

      <ExerciseCard
        number={2}
        title="Use super().__init__()"
        description="Write a Dog(Pet) subclass with its OWN __init__ that calls super().__init__(name, 'dog') and then adds one extra attribute, like self.trick. Create a Dog and print both an inherited attribute (name) and your new one (trick)."
        requirements={[
          "Give Dog its own __init__(self, name, trick)",
          "First line of __init__ calls super().__init__(name, 'dog')",
          "After super(), add an extra attribute like self.trick = trick",
          "Create a Dog and print both self.name and self.trick"
        ]}
        exampleOutput={`Buddy
roll over`}
        filename="day8_part2_ex2_super_init.py"
        tips={[
          "super() means 'the parent class' (Pet)",
          "super().__init__(...) runs Pet's setup so you don't repeat it",
          "Add your extra attribute AFTER the super().__init__(...) line"
        ]}
        completed={answers.p2_ex2_completed}
        onToggleComplete={() => updateAnswer('p2_ex2_completed', !answers.p2_ex2_completed)}
      />

      <ExerciseCard
        number={3}
        title="Override make_sound()"
        description="Write a Cat(Pet) subclass that OVERRIDES make_sound() so it prints a meow message using self.name. Create a cat and call make_sound() to hear its own sound instead of the plain Pet one."
        requirements={[
          "Write 'class Cat(Pet):' with its own __init__ calling super().__init__(name, 'cat')",
          "Give Cat its own make_sound(self) method - same name as Pet's",
          "Make it print a meow message that includes self.name",
          "Create a Cat and call make_sound()"
        ]}
        exampleOutput={`Whiskers says: Meow! 🐱`}
        filename="day8_part2_ex3_override_sound.py"
        tips={[
          "Overriding = a method with the SAME name in the subclass",
          "The subclass's make_sound() wins over the parent's version",
          "Spell make_sound exactly the same as in Pet, or it won't override"
        ]}
        completed={answers.p2_ex3_completed}
        onToggleComplete={() => updateAnswer('p2_ex3_completed', !answers.p2_ex3_completed)}
      />

      <ExerciseCard
        number={4}
        title="Three Different Sounds"
        description="Write three subclasses - Dog, Cat, and Bird - that each override make_sound() differently. Create one of each and call make_sound() on all three to hear three different sounds."
        requirements={[
          "Write Dog(Pet), Cat(Pet), and Bird(Pet) subclasses",
          "Each one calls super().__init__(name, '...') in its __init__",
          "Each one overrides make_sound() with its OWN sound",
          "Create one Dog, one Cat, one Bird, and call make_sound() on each"
        ]}
        exampleOutput={`Buddy says: Woof woof! 🐶
Whiskers says: Meow! 🐱
Tweety says: Tweet tweet! 🐦`}
        filename="day8_part2_ex4_three_sounds.py"
        tips={[
          "All three subclasses share the same parent (Pet)",
          "Same method name, different behavior in each - that's overriding!",
          "You'll reuse these three subclasses for polymorphism next"
        ]}
        completed={answers.p2_ex4_completed}
        onToggleComplete={() => updateAnswer('p2_ex4_completed', !answers.p2_ex4_completed)}
      />

      <div className="info-box">
        <h3>🎓 What You Learned</h3>
        <ul>
          <li>How to write a subclass with <code>class Dog(Pet):</code></li>
          <li>How a subclass inherits the parent's attributes and methods for free</li>
          <li>How to use <code>super().__init__(...)</code> and add extra attributes</li>
          <li>How to override a method so a subclass does something its own way</li>
        </ul>
      </div>
    </div>
  );
}

export default Day8Part2;
