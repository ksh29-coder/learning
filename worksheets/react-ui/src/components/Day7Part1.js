import React from 'react';

function Day7Part1() {
  return (
    <div className="part-container">
      <h2>Part 1: Understanding Classes &amp; Objects 🍪</h2>
      <p className="section-intro">
        Today we're learning a brand new way to organize code: <strong>classes</strong> and <strong>objects</strong>.
        This is called Object-Oriented Programming, or "OOP" for short!
      </p>

      <div className="info-box">
        <h3>🍪 A Class Is a Blueprint</h3>
        <p>
          Think of a <strong>class</strong> like a cookie cutter. The cutter itself isn't a cookie -
          it's the <em>shape</em> we use to make cookies. In Python, a class describes what every
          "thing" of a certain kind will have (its data) and what it can do (its actions).
        </p>
        <pre className="code-example">{`class Pet:
    pass

# Creating an object (an "instance") of the Pet class
my_pet = Pet()
print(my_pet)`}</pre>
        <p>
          <code>class</code> starts the blueprint. <code>Pet()</code> - calling the class name like a
          function - actually makes an object. Class names start with a capital letter by convention!
        </p>
      </div>

      <div className="info-box">
        <h3>🐶 An Object Is One Actual Thing</h3>
        <p>
          Every cookie you cut out with the cutter is an <strong>object</strong> (also called an
          <strong> instance</strong>). They all come from the same cutter, but they're separate cookies -
          you could give one extra sprinkles without changing any of the others!
        </p>
        <pre className="code-example">{`dog = Pet()
cat = Pet()
print(dog is cat)  # False - two separate objects!`}</pre>
      </div>

      <div className="info-box">
        <h3>🏗️ Attributes: Setting Up Data with __init__</h3>
        <p>
          <code>__init__</code> is a special method that Python runs automatically every time we create
          a new object. It's where we set up the object's starting <strong>attributes</strong> (its data).
        </p>
        <pre className="code-example">{`class Pet:
    def __init__(self, name, animal_type):
        self.name = name
        self.animal_type = animal_type

my_pet = Pet("Buddy", "dog")
print(my_pet.name)          # Buddy
print(my_pet.animal_type)   # dog`}</pre>
        <p>
          <code>self</code> means "this particular object." It's always the first parameter of every
          method, and Python fills it in automatically - we never pass a value for it ourselves.
          <code>self.name = name</code> stores the value as an attribute that belongs to this one object.
        </p>
      </div>

      <div className="info-box">
        <h3>⚙️ Methods: Actions Your Object Can Do</h3>
        <p>
          If attributes are what an object <strong>has</strong>, methods are what an object <strong>does</strong>.
          A method is just a function defined inside a class - and just like attributes, it uses
          <code>self</code> to know which object it's working with.
        </p>
        <pre className="code-example">{`class Pet:
    def __init__(self, name, animal_type, hunger_level=5):
        self.name = name
        self.animal_type = animal_type
        self.hunger_level = hunger_level
        self.happiness = 5

    def feed(self):
        self.hunger_level = max(0, self.hunger_level - 3)
        print(self.name, "happily eats! Yum! 🍖")

    def describe(self):
        print(self.name, "is a", self.animal_type + ".")
        print("Hunger:", self.hunger_level, "/ 10")

my_pet = Pet("Buddy", "dog")
my_pet.describe()
my_pet.feed()
my_pet.describe()`}</pre>
        <p>
          We call a method with dot notation: <code>my_pet.feed()</code>. Notice <code>feed()</code>{' '}
          changes <code>self.hunger_level</code> - it's reading <em>and</em> updating this object's own data.
        </p>
      </div>

      <div className="info-box">
        <h3>👨‍👩‍👧 Many Objects, One Class</h3>
        <p>
          We can make as many objects as we want from the same class - and each one keeps its own
          separate attribute values, completely independent from the others.
        </p>
        <pre className="code-example">{`dog = Pet("Buddy", "dog")
cat = Pet("Whiskers", "cat")

dog.feed()          # Only changes dog's hunger_level

dog.describe()       # Buddy: hunger went down
cat.describe()        # Whiskers: unchanged - never fed!`}</pre>
        <p>
          Feeding <code>dog</code> never affects <code>cat</code> - they're two separate "cookies" from
          the same "cutter," each with its own hunger level and happiness.
        </p>
      </div>

      <div className="info-box">
        <h3>🔑 Key Concepts</h3>
        <ul>
          <li><strong>class</strong> - keyword that defines a blueprint for making objects</li>
          <li><strong>object / instance</strong> - one actual thing created from a class</li>
          <li><strong>__init__</strong> - special method that sets up a new object's starting attributes</li>
          <li><strong>self</strong> - refers to "this particular object"; always the first parameter of a method</li>
          <li><strong>attribute</strong> - data that belongs to an object (<code>pet.name</code>)</li>
          <li><strong>method</strong> - an action an object can perform (<code>pet.feed()</code>)</li>
        </ul>
      </div>

      <div className="info-box">
        <h3>🚀 Coming Up</h3>
        <p>
          In Part 2 you'll practice writing attributes and methods yourself. Then head to the Quiz
          tab to check your understanding, and the Exercise tab to build a full Pet program!
        </p>
      </div>
    </div>
  );
}

export default Day7Part1;
