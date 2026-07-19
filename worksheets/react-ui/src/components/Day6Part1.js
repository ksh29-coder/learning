import React from 'react';
import './Part1.css';

function Day6Part1() {
  return (
    <div className="part1-container">
      <div className="part-header">
        <h2>🧺 Part 1: Understanding Lists</h2>
        <p className="part-description">
          A list is like a backpack or a row of labeled cubbies - it lets us store lots of things in ONE variable!
        </p>
      </div>

      <div className="info-box">
        <h3>📋 What is a List?</h3>
        <p>
          So far, every variable has held just ONE value, like <code>name = "Sam"</code>. A <strong>list</strong> lets
          us hold MANY values together, using square brackets <code>[ ]</code> with commas between each item.
        </p>
        <pre className="code-example">{`fruits = ["apple", "banana", "cherry"]
print(fruits)
print("I have", len(fruits), "fruits!")`}</pre>
        <p>
          Think of a grocery list, a class roster, or a high score board - they're all just lists of related things!
          <code>len(fruits)</code> tells us how many items are inside.
        </p>
      </div>

      <div className="info-box">
        <h3>🔢 Getting Items with Indexing</h3>
        <p>
          Every item in a list has a position number called an <strong>index</strong>. Python starts counting at{' '}
          <strong>0</strong>, not 1 - so the first cubby is number 0!
        </p>
        <pre className="code-example">{`fruits = ["apple", "banana", "cherry"]

print(fruits[0])    # apple - the FIRST item
print(fruits[1])    # banana - the SECOND item
print(fruits[-1])   # cherry - the LAST item (negative counts from the end!)`}</pre>
        <p>
          We can also grab a chunk of a list at once using <strong>slicing</strong>, like <code>fruits[0:2]</code>{' '}
          which gives back the first two items.
        </p>
      </div>

      <div className="info-box">
        <h3>🔁 Looping, Adding, and Removing</h3>
        <p>
          A <code>for</code> loop can visit every item in a list automatically - no need to know how many items there
          are! We can also grow or shrink a list with <code>.append()</code> and <code>.remove()</code>, and check if
          something is inside with <code>in</code>.
        </p>
        <pre className="code-example">{`snacks = ["chips", "pretzels"]

for snack in snacks:
    print("I like", snack)

snacks.append("cookies")     # adds "cookies" to the end
snacks.remove("pretzels")    # takes "pretzels" out

print("cookies" in snacks)   # True`}</pre>
        <p>
          Head over to <strong>Part 2</strong> to try all of this out yourself!
        </p>
      </div>

      <div className="part-footer">
        <p className="tip">
          💡 Tip: Scroll down to see all sections, or click the tabs above to move to other parts!
        </p>
      </div>
    </div>
  );
}

export default Day6Part1;
