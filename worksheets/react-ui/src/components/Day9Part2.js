import React from 'react';
import ExerciseCard from './ExerciseCard';

function Day9Part2({ answers, updateAnswer }) {
  return (
    <div className="part-container">
      <h2>Part 2: Build It Step by Step 🔨</h2>
      <p className="section-intro">
        Assemble the Adventure RPG one layer at a time, and <strong>run it after every step</strong>. A
        working small program beats a broken big one! Each exercise below adds the next layer.
      </p>

      <ExerciseCard
        number={1}
        title="Step 1: The Character Parent Class"
        description="Write a Character class with __init__(self, name, health, attack_power), a describe() method that prints the hero's stats, and a plain attack(self, target) method. Create one Character and call describe()."
        requirements={[
          "Character has __init__(self, name, health, attack_power)",
          "Write a describe(self) method that prints name, health, and attack_power",
          "Write a plain attack(self, target) method",
          "Create a Character and call describe()"
        ]}
        exampleOutput={`Hero the Character - Health: 100, Attack: 10`}
        filename="day9_step1_character.py"
        tips={[
          "This is your Day 7 class knowledge — a blueprint for heroes",
          "Store each value with self.name = name, etc.",
          "Run it now to make sure describe() works before adding more"
        ]}
        completed={answers.p2_ex1_completed}
        onToggleComplete={() => updateAnswer('p2_ex1_completed', !answers.p2_ex1_completed)}
      />

      <ExerciseCard
        number={2}
        title="Step 2: The Hero Subclasses"
        description="Add Warrior(Character), Wizard(Character), and Archer(Character). Each calls super().__init__(...) with its own stats and OVERRIDES attack() with its own style — a sword swing, a fireball, an arrow shot. Create one of each and call attack()."
        requirements={[
          "Write Warrior, Wizard, and Archer subclasses of Character",
          "Each __init__ calls super().__init__(name, health, attack_power)",
          "Each overrides attack() with its own message",
          "Create one of each and call attack() on all three"
        ]}
        exampleOutput={`Conan swings a mighty sword! ⚔️
Merlin casts a fireball! 🔥
Robin shoots an arrow! 🏹`}
        filename="day9_step2_subclasses.py"
        tips={[
          "This is your Day 8 knowledge — inheritance + overriding",
          "super().__init__(...) runs Character's setup so you don't repeat it",
          "Same method name (attack), different behavior in each subclass"
        ]}
        completed={answers.p2_ex2_completed}
        onToggleComplete={() => updateAnswer('p2_ex2_completed', !answers.p2_ex2_completed)}
      />

      <ExerciseCard
        number={3}
        title="Step 3: The Party List"
        description="Make an empty list party = []. Append a couple of heroes you create. Then write a print_party() FUNCTION that loops over the list calling describe() on each hero — polymorphism inside a function!"
        requirements={[
          "Make an empty list: party = []",
          "Create 2-3 heroes and append them with party.append(...)",
          "Write a print_party() function that loops over the party",
          "Inside the loop, call each hero's describe()",
          "Call print_party() to show everyone"
        ]}
        exampleOutput={`--- Your Party ---
Conan the Warrior - Health: 120, Attack: 15
Merlin the Wizard - Health: 80, Attack: 20`}
        filename="day9_step3_party.py"
        tips={[
          "The party is an ordinary Day 6 list — it just holds hero objects",
          "Use 'for hero in party:' then 'hero.describe()'",
          "A function keeps your code tidy and reusable"
        ]}
        completed={answers.p2_ex3_completed}
        onToggleComplete={() => updateAnswer('p2_ex3_completed', !answers.p2_ex3_completed)}
      />

      <ExerciseCard
        number={4}
        title="Step 4: The Game Loop"
        description="Add a while loop that shows a menu (1. See party, 2. Battle, 3. Quit), reads the player's choice with input(), and uses if/elif/else to do the right action. Quit ends the loop."
        requirements={[
          "Use a running = True variable and a while running: loop",
          "Show a numbered menu each time through the loop",
          "Read the choice with input()",
          "Use if/elif/else to handle each menu option",
          "Choosing Quit sets running = False and ends the loop"
        ]}
        exampleOutput={`1. See your party
2. Battle a monster
3. Quit
Choose 1-3: 1
--- Your Party ---
Conan the Warrior - Health: 120, Attack: 15`}
        filename="day9_step4_gameloop.py"
        tips={[
          "This ties together Day 3 (if/else) and Day 4 (loops)",
          "Keep the menu printing inside the loop so it shows every turn",
          "Test each menu option one at a time"
        ]}
        completed={answers.p2_ex4_completed}
        onToggleComplete={() => updateAnswer('p2_ex4_completed', !answers.p2_ex4_completed)}
      />

      <div className="info-box">
        <h3>🎓 What You Assembled</h3>
        <ul>
          <li>A <code>Character</code> parent class and <code>Warrior</code>/<code>Wizard</code>/<code>Archer</code> subclasses</li>
          <li>A party stored in a <strong>list</strong>, shown with a <strong>function</strong></li>
          <li>A menu-driven <strong>game loop</strong> using <code>input()</code> and if/elif/else</li>
          <li>Every concept from the whole course, working together!</li>
        </ul>
        <p>
          Head to the <strong>Exercise</strong> tab to build the complete game (with battles!), or
          start from the <code>day9_final_project_template.py</code> which already runs.
        </p>
      </div>
    </div>
  );
}

export default Day9Part2;
