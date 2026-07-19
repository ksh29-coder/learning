import React from 'react';
import ExerciseCard from './ExerciseCard';
import VSCodeInstructions from './VSCodeInstructions';

function Day9Exercise({ answers, updateAnswer }) {
  return (
    <div className="part-container">
      <h2>Exercise: Build the Adventure RPG 🗡️</h2>
      <p className="section-intro">
        This is your capstone! Put the whole course together into one complete game. You can start from
        scratch, or open <code>projects/templates/day9_final_project_template.py</code> (it already runs)
        and make it your own. Follow the VS Code instructions below.
      </p>

      <VSCodeInstructions exerciseFilename="day9_exercise1.py" />

      <ExerciseCard
        number={1}
        title="The Full Adventure RPG"
        description="Build a complete text-based RPG. Make a Character parent class with Warrior/Wizard/Archer subclasses that each override attack(). Keep a party list of heroes and an inventory list of items. Write a game loop with a menu: see your party, check inventory, battle a monster, or quit."
        requirements={[
          "A Character class plus Warrior, Wizard, Archer subclasses (each overrides attack())",
          "A party = [] list holding hero objects",
          "An inventory = [...] list of items",
          "Functions like show_menu(), print_party(), battle()",
          "A while game loop using input() + if/elif/else for the menu",
          "A battle() that loops the party's attack() calls and decides win/lose, awarding gold"
        ]}
        exampleOutput={`Welcome to the Adventure RPG! 🗡️
1. See your party
2. Check inventory
3. Battle a monster
4. Quit
Choose 1-4: 3
Conan swings a mighty sword! ⚔️
Merlin casts a fireball! 🔥
You defeated the Goblin! You earned 10 gold. 🪙`}
        filename="day9_exercise1.py"
        tips={[
          "Build it in layers (Part 2 order) and RUN after each layer",
          "The battle loop never checks 'is this a wizard?' — polymorphism handles it",
          "Test with a small party first, then add more heroes and monsters"
        ]}
        completed={answers.exercise1_completed}
        onToggleComplete={() => updateAnswer('exercise1_completed', !answers.exercise1_completed)}
      />

      <ExerciseCard
        number={2}
        title="Make It Yours — Add Your Own Twist"
        description="Extend your RPG with at least one new idea of your own: a new character class (a Healer that restores health, a Rogue that steals gold), an item that does something, a shop that costs gold, a second monster, or a victory screen. Make it silly and fun!"
        requirements={[
          "Start from your working RPG from Exercise 1",
          "Add at least ONE new feature of your own choosing",
          "Ideas: a new subclass, a healing potion, a shop, more monsters, a score/level",
          "Run it and make sure the new feature works",
          "Give it your own name and story!"
        ]}
        exampleOutput={`Luna the Healer restores the party's health! 💚
You found a Banana Sword! 🍌⚔️
=== VICTORY! You saved the kingdom! ===`}
        filename="day9_exercise2.py"
        tips={[
          "Adding a new hero class should NOT require changing your battle loop — that's the power of polymorphism",
          "An item in the inventory can just be a string, or its own little class",
          "There are no wrong answers here — make the game YOURS"
        ]}
        completed={answers.exercise2_completed}
        onToggleComplete={() => updateAnswer('exercise2_completed', !answers.exercise2_completed)}
      />

      <div className="info-box">
        <h3>🏆 You Did It!</h3>
        <p>
          If you built the Adventure RPG, you've written a real program that uses{' '}
          <strong>every single concept</strong> from the whole course — variables, loops, functions,
          lists, classes, inheritance, and polymorphism, all working together. That's exactly what real
          programmers do. Be proud! 🎉
        </p>
      </div>
    </div>
  );
}

export default Day9Exercise;
