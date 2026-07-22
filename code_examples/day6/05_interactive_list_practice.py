# Day 6 - Interactive List Practice
# Let's build a list from scratch using input() from the player,
# then loop over it and report back what we collected.
# This combines EVERYTHING: input, if/else, loops, lists - plus the
# try/except "safety net" so bad input can't crash our program!

shopping_list = []

print("=" * 30)
print("   SHOPPING LIST BUILDER")
print("=" * 30)
print("Type an item to add it to your list.")
print("Type 'done' when you're finished.")
print()

while True:
    item = input("Add an item (or 'done'): ")

    if item.lower() == "done":
        break
    elif item.lower() in shopping_list:
        print(item, "is already on your list!")
    else:
        shopping_list.append(item)
        print("Added", item, "to your list!")

print()
print("=" * 30)
print("Here is your final shopping list:")
for index in range(len(shopping_list)):
    print(index + 1, "-", shopping_list[index])

print()
print("You have", len(shopping_list), "items on your list.")

if len(shopping_list) == 0:
    print("Looks like your list is empty!")
elif "milk" in shopping_list:
    print("Don't forget the milk is already on there!")

print()

# THE SAFETY NET: int(input(...)) crashes if the player types "banana"
# instead of a number. try/except catches that error so we can ask again!
while True:
    entry = input("How many minutes will the shopping trip take? ")

    try:
        minutes = int(entry)
        break
    except ValueError:
        print("Oops,", entry, "is not a number! Try again.")

print("Got it - about", minutes, "minutes. Happy shopping!")

# Challenge ideas:
# 1. Let the player remove an item by typing "remove <item name>".
# 2. Keep count of how many items they tried to add twice.
# 3. Print the shopping list in ALL CAPS using a loop and .upper().
# 4. Turn this into a "Class Roster" program that collects student names instead!
# 5. Add another safety-net question: ask how many dollars they can spend,
#    and catch the ValueError if they type words instead of a number.
