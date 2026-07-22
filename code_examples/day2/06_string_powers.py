# Day 2 - Example 6: String Superpowers!
# Strings have built-in powers: methods, len(), and slicing

name = "michael kim"

# ---------- POWER 1: String methods ----------
# A method is a power you activate with a dot: variable.power()
print(f"Shouting:  {name.upper()}")     # MICHAEL KIM
print(f"Whisper:   {name.lower()}")     # michael kim
print(f"Name tag:  {name.title()}")     # Michael Kim

# .strip() removes extra spaces from the ends (great for messy typing!)
messy = "   pizza   "
print(f"Before strip: [{messy}]")
print(f"After strip:  [{messy.strip()}]")

# ---------- POWER 2: len() counts the letters ----------
word = "python"
print(f"'{word}' has {len(word)} letters!")

# ---------- POWER 3: Indexing - grab one letter ----------
# Python counts from 0: p=0, y=1, t=2, h=3, o=4, n=5
print(f"First letter:  {word[0]}")      # p
print(f"Second letter: {word[1]}")      # y
print(f"Last letter:   {word[-1]}")     # n  (-1 means "count from the end")

# ---------- POWER 4: Slicing - grab a piece ----------
# word[start:stop] grabs from start UP TO (not including) stop
print(f"First three letters: {word[0:3]}")   # pyt

# Make initials from a name!
first = "Isabella"
last = "Kim"
initials = first[0] + last[0]
print(f"{first} {last}'s initials are {initials}!")

# ---------- BONUS: float() for decimal numbers ----------
# int() makes whole numbers, float() keeps the decimal point!
height = float(input("How tall are you in cm (like 152.5)? "))
print(f"You are {height} cm tall! 📏")
print(f"Half your height is {height / 2} cm")

# Challenge: print YOUR initials, and your name in ALL CAPS!
