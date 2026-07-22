# Michael's Day 2 Experiments 🧪
# (Moved here from code_examples/day2/02_string_vs_numbers.py so the clean
# example stays clean — but these experiments are great practice!)

# Experiment 1: holiday greetings with a variable
greeting = "merry xmas!"
print("Greeting from Michael:", greeting, " and Happy New Year!")
print("Greeting from Daddy:", greeting, " and Happy New Year!")


# Experiment 2: Michael invented his own FUNCTION — a Day 5 concept,
# discovered three days early! (Functions let you reuse code with one name.)
def callwhaterIwant(name):
    print("Greeting from", name, "and Merry Christmas!")
    print("Greeting from", name, "and Happy New Year!")


callwhaterIwant("daddy")
print("--------------------------------")
callwhaterIwant("michael")

# Try calling it with more names! callwhaterIwant("isabella")
