# Day 9 - Example 3: Inventory + Menu Loop
# Two building blocks of the final project, shown on their own:
#   1) an INVENTORY stored in a list (Day 6)
#   2) a MENU game loop (Days 3-5) that drives the whole program
# Run this in a terminal - it uses input().

# --- The inventory is just a list (Day 6) ---
inventory = ["Health Potion", "Old Map", "Rusty Key"]


# --- Functions (Day 5) that work with the list ---
def show_inventory(items):
    print("\n🎒 Your inventory:")
    if len(items) == 0:                     # if/else on an empty list (Day 3)
        print("  (empty)")
    else:
        for i, item in enumerate(items, 1): # loop over the list (Day 4)
            print(f"  {i}. {item}")


def add_item(items, new_item):
    items.append(new_item)                  # grow the list (Day 6)
    print(f"✅ Added '{new_item}' to your bag!")


def show_menu():
    print("\n" + "=" * 40)
    print("   🎒 INVENTORY MANAGER 🎒")
    print("=" * 40)
    print("1. Look in your bag")
    print("2. Pick up a new item")
    print("3. Quit")


# --- The main game loop (Days 3-4) ---
gold = 10                                   # a variable to track (Days 1-2)
running = True

while running:                              # while loop keeps the game going
    show_menu()
    choice = input("Choose 1-3: ")

    if choice == "1":
        show_inventory(inventory)
    elif choice == "2":
        new_item = input("What did you find? ")
        add_item(inventory, new_item)
    elif choice == "3":
        running = False                     # this ends the loop
    else:
        print("Please choose 1, 2, or 3.")

print("\n" + "=" * 40)
print("You leave with", len(inventory), "items and", gold, "gold. 👋")
print("=" * 40)

# This same pattern - a list of stuff + a menu loop + functions -
# is the skeleton of the full Adventure RPG. You already know how to build it!
