# Day 6 - List Methods: append(), remove(), and checking with "in"
# Lists aren't stuck the way they start - we can grow them, shrink them,
# and check what's inside them.

snacks = ["chips", "pretzels"]
print("Starting snacks:", snacks)

# .append() adds an item to the END of the list
snacks.append("cookies")
print("After append:", snacks)

snacks.append("popcorn")
print("After another append:", snacks)

print()

# .remove() takes the FIRST matching item out of the list
snacks.remove("pretzels")
print("After removing pretzels:", snacks)

print()

# "in" checks if something is inside a list - it gives back True or False
print("chips" in snacks)      # True
print("candy" in snacks)      # False

print()

# Combining "in" with if/else (from Day 3!)
if "cookies" in snacks:
    print("Yes! We have cookies!")
else:
    print("No cookies here.")

# It's smart to check "in" BEFORE removing, so we don't cause an error
item_to_remove = "candy"
if item_to_remove in snacks:
    snacks.remove(item_to_remove)
    print("Removed", item_to_remove)
else:
    print(item_to_remove, "wasn't in the list, so nothing was removed.")

print()
print("Final snack list:", snacks)

# Challenge ideas:
# 1. Start with an empty list and .append() 5 of your favorite games.
# 2. Remove one item you no longer like using .remove().
# 3. Ask the user for an item name with input() and check if it's "in" your list.
# 4. What happens if you try to .remove() something that isn't in the list? Try it and read the error!
