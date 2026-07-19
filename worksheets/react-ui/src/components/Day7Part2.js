import React from 'react';
import ExerciseCard from './ExerciseCard';

function Day7Part2({ answers, updateAnswer }) {
  return (
    <div className="part-container">
      <h2>Part 2: Attributes &amp; Methods Practice 💻</h2>
      <p className="section-intro">
        Time to build your own <code>Pet</code> class step by step in VS Code! Follow the instructions for each exercise.
      </p>

      <ExerciseCard
        number={1}
        title="Your First Pet Class"
        description="Create a class called Pet with an __init__ method that sets up three attributes: name, animal_type, and hunger_level. Create one Pet object and print all three attributes."
        requirements={[
          "Define a class named Pet",
          "Write an __init__(self, name, animal_type, hunger_level) method",
          "Store each parameter as self.name, self.animal_type, self.hunger_level",
          "Create a Pet object and print its three attributes"
        ]}
        exampleOutput={`Buddy
dog
5`}
        filename="day7_part2_ex1_pet_attributes.py"
        tips={[
          "Every method (including __init__) needs 'self' as its first parameter",
          "Store values with self.attribute_name = parameter_name",
          "Read attributes with dot notation: my_pet.name"
        ]}
        completed={answers.p2_ex1_completed}
        onToggleComplete={() => updateAnswer('p2_ex1_completed', !answers.p2_ex1_completed)}
      />

      <ExerciseCard
        number={2}
        title="Add a feed() Method"
        description="Add a feed() method to your Pet class that lowers hunger_level by 3 and prints a message. Call it twice and print hunger_level after each call."
        requirements={[
          "Define feed(self) inside the Pet class",
          "Lower self.hunger_level by 3 each time it's called",
          "Print a friendly message when the pet eats",
          "Call feed() twice on the same pet and print hunger_level each time"
        ]}
        exampleOutput={`Buddy happily eats! Yum! 🍖
Hunger level: 2
Buddy happily eats! Yum! 🍖
Hunger level: 0`}
        filename="day7_part2_ex2_feed_method.py"
        tips={[
          "Update the attribute with self.hunger_level = self.hunger_level - 3",
          "Try using max(0, self.hunger_level - 3) so it never goes below 0",
          "Print self.hunger_level after each call to see it change"
        ]}
        completed={answers.p2_ex2_completed}
        onToggleComplete={() => updateAnswer('p2_ex2_completed', !answers.p2_ex2_completed)}
      />

      <ExerciseCard
        number={3}
        title="Method with a Parameter"
        description="Add a greet(person_name) method to your Pet class that prints a message using both self.name and the person_name parameter."
        requirements={[
          "Define greet(self, person_name) inside the Pet class",
          "Print a message that includes both self.name and person_name",
          "Call greet() with two different names on the same pet"
        ]}
        exampleOutput={`Buddy wags excitedly at Michael!
Buddy wags excitedly at Isabella!`}
        filename="day7_part2_ex3_greet_method.py"
        tips={[
          "self always comes first in the parameter list, then any other parameters",
          "You can use self.name and person_name together in one print() call",
          "Call it like: my_pet.greet(\"Michael\")"
        ]}
        completed={answers.p2_ex3_completed}
        onToggleComplete={() => updateAnswer('p2_ex3_completed', !answers.p2_ex3_completed)}
      />

      <ExerciseCard
        number={4}
        title="Multiple Pets, Independent Attributes"
        description="Create THREE different Pet objects. Call feed() on only ONE of them, then print (or describe) all three pets' hunger_level to show they're independent."
        requirements={[
          "Create three Pet objects with different names and animal_types",
          "Call feed() on only one of the three pets",
          "Print hunger_level for all three pets",
          "Confirm only the fed pet's hunger_level changed"
        ]}
        exampleOutput={`Buddy hunger: 2
Whiskers hunger: 5
Tweety hunger: 5`}
        filename="day7_part2_ex4_multiple_pets.py"
        tips={[
          "Store each pet in its own variable, like dog, cat, bird",
          "Only the object you called feed() on should change",
          "This proves each object keeps its own separate copy of the attributes"
        ]}
        completed={answers.p2_ex4_completed}
        onToggleComplete={() => updateAnswer('p2_ex4_completed', !answers.p2_ex4_completed)}
      />

      <div className="info-box">
        <h3>🎓 What You Learned</h3>
        <ul>
          <li>How to define a class with <code>class</code></li>
          <li>How to set up attributes inside <code>__init__</code></li>
          <li>How to write methods that read and change attributes with <code>self</code></li>
          <li>How to write methods that take their own parameters</li>
          <li>How multiple objects from the same class stay independent</li>
        </ul>
      </div>
    </div>
  );
}

export default Day7Part2;
