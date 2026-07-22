# Day 6 - Dictionaries
# A LIST is a row of NUMBERED cubbies - we find things by position: fruits[0]
# A DICTIONARY is a row of LABELED cubbies - we find things by name (a "key")!
# Dictionaries store information in {key: value} pairs.

# Creating a dictionary with curly braces { }
player = {
    "name": "Isabella",
    "age": 12,
    "favorite_game": "Minecraft",
}

print(player)

print()

# Reading a value: ask for the LABEL, get back what's inside that cubby
print(player["name"])
print(f"{player['name']} is {player['age']} years old!")
print(f"Her favorite game is {player['favorite_game']}.")

print()

# Changing a value that's already there
player["age"] = 13
print(f"Happy birthday! Now she is {player['age']}.")

# Adding a brand-new key: value pair (same move as changing!)
player["hobby"] = "drawing"
print(f"New hobby added: {player['hobby']}")
print(player)

print()

# "in" checks whether a KEY (label) exists - great for avoiding a KeyError
print("age" in player)        # True - "age" is one of the keys
print("height" in player)     # False - no cubby with that label

if "hobby" in player:
    print(f"Yes! We know her hobby: {player['hobby']}")

print()

# Looping over a dictionary, way 1: visit every KEY
print("All the labels on the cubbies:")
for key in player:
    print("-", key)

print()

# Looping over a dictionary, way 2: get the KEY and the VALUE together
print("=== PLAYER PROFILE CARD ===")
for key, value in player.items():
    print(f"{key}: {value}")

# Challenge ideas:
# 1. Build a dictionary about YOURSELF with at least 4 key: value pairs,
#    then print it as a profile card using .items() and f-strings.
# 2. Make a "favorite things" dictionary ("color", "food", "animal"...) and
#    let the family guess a value before you print it!
# 3. Try player["height"] on purpose and read the KeyError message.
# 4. Make a menu dictionary (food -> price) and use "in" to check whether
#    "pizza" is on the menu before printing its price.
