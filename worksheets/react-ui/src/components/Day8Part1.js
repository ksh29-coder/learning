import React from 'react';

function Day8Part1() {
  return (
    <div className="part-container">
      <h2>Part 1: Understanding Inheritance 👨‍👩‍👧</h2>
      <p className="section-intro">
        On Day 7 we built the <code>Pet</code> class. Today we learn how to make special <em>kinds</em> of
        pets - like <strong>Dog</strong>, <strong>Cat</strong>, and <strong>Bird</strong> - that reuse
        everything <code>Pet</code> already knows, and only add what makes them different. That reuse is
        called <strong>inheritance</strong>!
      </p>

      <div className="info-box">
        <h3>👨‍👩‍👧 Inheritance Is Like a Family</h3>
        <p>
          A puppy inherits traits from its parent dog automatically - four legs, a tail, fur. In Python,
          a class can inherit from another class the same way. We say a <code>Dog</code> <strong>is a</strong>{' '}
          <code>Pet</code>, so <code>Dog</code> gets <em>everything</em> <code>Pet</code> has, for free.
        </p>
        <pre className="code-example">{`class Pet:
    def __init__(self, name, animal_type):
        self.name = name
        self.animal_type = animal_type
    def make_sound(self):
        print(self.name, "makes a sound!")

# Dog inherits EVERYTHING from Pet - even with no code of its own!
class Dog(Pet):
    pass

my_dog = Dog("Buddy", "dog")
my_dog.make_sound()   # Buddy makes a sound!  <- inherited from Pet!`}</pre>
        <p>
          The <code>(Pet)</code> in <code>class Dog(Pet):</code> is what says "Dog inherits from Pet."
          The class we reuse (<code>Pet</code>) is the <strong>parent</strong>. The new class
          (<code>Dog</code>) is the <strong>child</strong> or <strong>subclass</strong>.
        </p>
      </div>

      <div className="info-box">
        <h3>🏗️ super(): Let the Parent Do Its Setup</h3>
        <p>
          Often a subclass wants its own <em>extra</em> attributes. We can give it its own{' '}
          <code>__init__</code>, then call <code>super().__init__(...)</code> to run the parent's setup
          first - so we don't have to rewrite it all.
        </p>
        <pre className="code-example">{`class Dog(Pet):
    def __init__(self, name, trick):
        super().__init__(name, "dog")   # Pet sets up name & animal_type
        self.trick = trick               # Dog adds its OWN attribute

    def do_trick(self):
        print(self.name, "does a trick:", self.trick + "!")

buddy = Dog("Buddy", "roll over")
buddy.do_trick()   # Buddy does a trick: roll over!`}</pre>
        <p>
          <code>super()</code> means "my parent class." Calling <code>super().__init__(...)</code> is like
          saying: "Parent, please do your normal setup first - then I'll add my special part."
        </p>
      </div>

      <div className="info-box">
        <h3>🔊 Overriding: Same Name, New Behavior</h3>
        <p>
          The <code>make_sound()</code> in <code>Pet</code> is boring - it just says "makes a sound!"
          A dog should <strong>bark</strong> and a cat should <strong>meow</strong>. So each subclass
          <strong> overrides</strong> <code>make_sound()</code>: it writes its own version with the
          <em> same name</em>, and the subclass's version wins.
        </p>
        <pre className="code-example">{`class Dog(Pet):
    def __init__(self, name):
        super().__init__(name, "dog")
    def make_sound(self):
        print(self.name, "says: Woof woof! 🐶")

class Cat(Pet):
    def __init__(self, name):
        super().__init__(name, "cat")
    def make_sound(self):
        print(self.name, "says: Meow! 🐱")

Dog("Buddy").make_sound()      # Woof woof!
Cat("Whiskers").make_sound()   # Meow!`}</pre>
        <p>
          Methods you <em>don't</em> override are still inherited normally. Only <code>make_sound()</code>{' '}
          changed here - everything else still comes from <code>Pet</code>.
        </p>
      </div>

      <div className="info-box">
        <h3>✨ Polymorphism: One Command, Many Results</h3>
        <p>
          "Poly" means many, "morph" means shapes. <strong>Polymorphism</strong> is when we give the
          <em> same</em> command to different objects and each responds in its own way. We can put a
          <code>Dog</code>, a <code>Cat</code>, and a <code>Bird</code> in one list and call the exact
          same method on each!
        </p>
        <pre className="code-example">{`animals = [Dog("Buddy"), Cat("Whiskers"), Bird("Tweety")]

for animal in animals:
    animal.make_sound()   # SAME call - each answers differently!

# Buddy says: Woof woof! 🐶
# Whiskers says: Meow! 🐱
# Tweety says: Tweet tweet! 🐦`}</pre>
        <p>
          Notice we never wrote <code>if animal is a dog: bark...</code> - Python automatically runs the
          right version for each object. Adding a new animal kind later means writing one new subclass;
          the loop never changes!
        </p>
      </div>

      <div className="info-box">
        <h3>🔑 Key Concepts</h3>
        <ul>
          <li><strong>inheritance</strong> - a subclass reusing everything from a parent class</li>
          <li><strong>parent / child</strong> - the class being reused vs. the new subclass (<code>Dog</code> is a <code>Pet</code>)</li>
          <li><strong>class Dog(Pet):</strong> - the <code>(Pet)</code> means "Dog inherits from Pet"</li>
          <li><strong>super().__init__(...)</strong> - runs the parent's setup from inside a subclass</li>
          <li><strong>overriding</strong> - writing a method with the same name to replace the parent's</li>
          <li><strong>polymorphism</strong> - same method call on different objects, different behavior for each</li>
        </ul>
      </div>

      <div className="info-box">
        <h3>🚀 Coming Up</h3>
        <p>
          In Part 2 you'll practice writing subclasses, using <code>super()</code>, and overriding methods.
          Then head to the Quiz tab to check your understanding, and the Exercise tab to build a full
          Animal Shelter program!
        </p>
      </div>
    </div>
  );
}

export default Day8Part1;
