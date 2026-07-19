import React from 'react';

function Day9Part1() {
  return (
    <div className="part-container">
      <h2>Part 1: Project Overview — Plan Your Adventure 🗺️</h2>
      <p className="section-intro">
        This is the <strong>finale</strong>! Today you don't learn a brand-new idea — you put{' '}
        <em>everything</em> from Days 1–8 together into one real program: a text-based{' '}
        <strong>Adventure RPG</strong>. You already know every brick. Today we build the castle. 🏰
      </p>

      <div className="info-box">
        <h3>🧩 Every Concept, All at Once</h3>
        <p>Look how each thing you learned shows up in the game:</p>
        <ul>
          <li><strong>print &amp; variables</strong> (Days 1–2) → story text, the hero's name, gold</li>
          <li><strong>if / elif / else</strong> (Day 3) → the menu choices, "did you win the battle?"</li>
          <li><strong>loops</strong> (Day 4) → the main game loop, looping over the party</li>
          <li><strong>functions</strong> (Day 5) → <code>show_menu()</code>, <code>battle()</code>, <code>print_party()</code></li>
          <li><strong>lists</strong> (Day 6) → the party of heroes, the inventory of items</li>
          <li><strong>classes &amp; objects</strong> (Day 7) → the <code>Character</code> blueprint</li>
          <li><strong>inheritance &amp; polymorphism</strong> (Day 8) → <code>Warrior</code>, <code>Wizard</code>, <code>Archer</code> each <code>attack()</code> their own way</li>
        </ul>
      </div>

      <div className="info-box">
        <h3>📝 Plan Before You Code</h3>
        <p>
          Real programmers plan first. Before writing any code, answer three questions:
        </p>
        <ul>
          <li><strong>What are the objects?</strong> Our heroes → a <code>Character</code> class, with <code>Warrior</code>/<code>Wizard</code>/<code>Archer</code> kinds.</li>
          <li><strong>What data do we track?</strong> Each hero's <code>name</code>, <code>health</code>, <code>attack_power</code>; a party <strong>list</strong>; an inventory <strong>list</strong>; the player's <code>gold</code>.</li>
          <li><strong>What happens in a loop?</strong> Show a menu → the player picks → do that action → repeat until they quit.</li>
        </ul>
        <p>Sketch it on paper first — boxes for classes, a list for the party, arrows for the loop.</p>
      </div>

      <div className="info-box">
        <h3>🏗️ The Blueprint</h3>
        <pre className="code-example">{`class Character:
    def __init__(self, name, health, attack_power):
        self.name = name
        self.health = health
        self.attack_power = attack_power
    def attack(self, target):
        print(self.name, "attacks!")

class Warrior(Character):
    def attack(self, target):
        print(self.name, "swings a sword! ⚔️")

class Wizard(Character):
    def attack(self, target):
        print(self.name, "casts a fireball! 🔥")

party = []          # a LIST of heroes
inventory = ["Health Potion", "Map"]   # a LIST of items`}</pre>
        <p>
          Notice: the party and inventory are just ordinary <strong>lists</strong> — the same lists from
          Day 6, holding game stuff. And each hero <code>attack()</code>s its own way thanks to Day 8's
          polymorphism.
        </p>
      </div>

      <div className="info-box">
        <h3>🚀 What's Next</h3>
        <p>
          In <strong>Part 2</strong> you'll build the RPG one layer at a time, testing after each step.
          Then check your whole-course knowledge in the <strong>Quiz</strong>, build the full game in the{' '}
          <strong>Exercise</strong> tab, and celebrate with the <strong>Bonus Arcade</strong> of fun games!
        </p>
      </div>
    </div>
  );
}

export default Day9Part1;
