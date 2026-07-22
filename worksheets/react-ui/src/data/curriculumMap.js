// Machine-readable syllabus, used ONLY to build the AI teacher's prompt.
//
// Why this exists as shared config when worksheet content is deliberately
// duplicated per day: this isn't content. It renders nothing, and its whole
// purpose is cross-day reasoning - "what may I mention on Day 5?" is by
// definition a question about all nine days at once. Duplicating it per day
// would make conceptsThroughDay() inexpressible and guarantee drift.
//
// Keep `concepts` in the vocabulary a 9-12 year old would recognise: these
// strings go straight into the prompt.

export const CURRICULUM = {
  1: {
    topic: 'Your First Python Program',
    concepts: ['print()', 'text (strings)', 'quotes', 'comments with #', 'running a .py file', 'math with + - * /', 'printing numbers'],
    misconceptions: [
      'forgetting the quotes around text',
      'forgetting the closing parenthesis',
      'capitalising Print instead of print'
    ]
  },
  2: {
    topic: 'Variables - The Memory Boxes',
    concepts: ['variables', 'naming a variable', 'strings vs numbers', 'input()', 'int() and str()', 'f-strings like f"Hi {name}"', 'string tricks: .upper() .lower() .title() .strip()', 'len() of a string', 'picking letters with word[0] and slices like word[0:3]'],
    misconceptions: [
      'thinking input() gives a number (it always gives text)',
      'using a variable before creating it',
      'spaces or dashes in a variable name',
      'forgetting the f in front of an f-string'
    ]
  },
  3: {
    topic: 'Making Decisions - If/Else',
    concepts: ['if', 'elif', 'else', 'comparing with == != < >', 'True and False', 'and, or and not'],
    misconceptions: [
      'using = (assign) instead of == (compare)',
      'forgetting the colon at the end of the if line',
      'wrong indentation under if'
    ]
  },
  4: {
    topic: 'Loops - Doing Things Over and Over',
    concepts: ['for loops', 'range()', 'while loops', 'counting', 'break to stop a loop', 'continue to skip a turn', 'remainder with % and whole-number division with //'],
    misconceptions: [
      'thinking range(5) counts 1 to 5 (it is 0 to 4)',
      'a while loop that never ends because nothing changes',
      'forgetting the colon or the indentation'
    ]
  },
  5: {
    topic: 'Functions - Your Own Commands (and Libraries)',
    concepts: ['def', 'calling a function', 'parameters', 'arguments', 'return', 'import - borrowing a library', 'random.randint() and random.choice()', 'sleep() from the time library'],
    misconceptions: [
      'defining a function but never calling it',
      'confusing print() with return',
      'forgetting the parentheses when calling',
      'forgetting the import line before using random'
    ]
  },
  6: {
    topic: 'Lists & Dictionaries - Collections of Things',
    concepts: ['lists', 'square brackets', 'indexing from 0', 'append()', 'remove()', 'len()', 'looping over a list', 'in', 'enumerate() for numbered lists', 'dictionaries with {key: value}', 'looping a dictionary with .items()', 'try/except to catch bad input'],
    misconceptions: [
      'thinking the first item is number 1 (it is 0)',
      'going past the end of the list',
      'forgetting that append changes the list itself',
      'using [0] on a dictionary instead of its key name'
    ]
  },
  7: {
    topic: 'Classes & Objects',
    concepts: ['class', 'object', 'attributes', 'methods', '__init__', 'self', 'creating an object'],
    misconceptions: [
      'forgetting self as the first parameter of a method',
      'mixing up the class (blueprint) and the object (the thing you made)',
      'forgetting to call __init__ with the values it needs'
    ]
  },
  8: {
    topic: 'Polymorphism & Inheritance',
    concepts: ['inheritance', 'parent and child classes', 'class Dog(Pet)', 'super().__init__()', 'overriding a method', 'polymorphism'],
    misconceptions: [
      'forgetting to call super().__init__()',
      'spelling an overridden method differently so it does not override',
      'defining the child class before the parent'
    ]
  },
  9: {
    topic: 'Final Project - The Adventure RPG',
    concepts: ['combining everything', 'planning a program', 'a game loop', 'menus', 'keeping game state in lists'],
    misconceptions: [
      'trying to write the whole program before running any of it',
      'building the game loop before the classes work'
    ]
  }
};

export const LAST_DAY = 9;

function collect(fromDay, toDay) {
  const out = [];
  for (let d = fromDay; d <= toDay; d += 1) {
    const entry = CURRICULUM[d];
    if (entry) out.push(...entry.concepts);
  }
  return out;
}

// Everything the student is allowed to have seen by the end of `day`.
export function conceptsThroughDay(day) {
  return collect(1, Math.min(Number(day) || 1, LAST_DAY));
}

// The "do not mention" list - concepts from days they haven't reached yet.
export function conceptsAfterDay(day) {
  return collect(Math.min(Number(day) || 1, LAST_DAY) + 1, LAST_DAY);
}

export function topicForDay(day) {
  const entry = CURRICULUM[day];
  return entry ? entry.topic : 'Python basics';
}

export function misconceptionsForDay(day) {
  const entry = CURRICULUM[day];
  return entry ? entry.misconceptions : [];
}
