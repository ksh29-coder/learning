# ============================================================
# Day 9 FINAL PROJECT: Adventure RPG  🗡️🐉
# ============================================================
# This is the BIG one - your capstone! It combines EVERYTHING:
#   - print & variables (Days 1-2)
#   - if / elif / else   (Day 3)
#   - loops              (Day 4)
#   - functions          (Day 5)
#   - lists              (Day 6)
#   - classes & objects  (Day 7)
#   - inheritance & polymorphism (Day 8)
#
# GOOD NEWS: this template already RUNS as-is. Try it first, then
# make it your own using the CHALLENGES at the bottom!
# ============================================================


# ============================================================
# THE CHARACTER FAMILY (Days 7 & 8)
# ============================================================
class Character:
    """The parent blueprint for every hero and monster."""
    def __init__(self, name, health, attack_power):
        self.name = name
        self.health = health
        self.attack_power = attack_power

    def attack(self, target):
        # Plain attack - each subclass overrides this its own way
        target.health = target.health - self.attack_power
        print(f"{self.name} attacks {target.name} for {self.attack_power} damage!")

    def is_alive(self):
        return self.health > 0

    def describe(self):
        status = "❤️ " if self.is_alive() else "💀"
        print(f"  {status} {self.name}: {max(0, self.health)} HP, {self.attack_power} attack")


class Warrior(Character):
    def __init__(self, name):
        super().__init__(name, health=35, attack_power=7)

    def attack(self, target):
        target.health = target.health - self.attack_power
        print(f"⚔️  {self.name} swings a sword at {target.name}! (-{self.attack_power} HP)")


class Wizard(Character):
    def __init__(self, name):
        super().__init__(name, health=22, attack_power=11)

    def attack(self, target):
        target.health = target.health - self.attack_power
        print(f"🔥 {self.name} hurls a fireball at {target.name}! (-{self.attack_power} HP)")


class Archer(Character):
    def __init__(self, name):
        super().__init__(name, health=28, attack_power=9)

    def attack(self, target):
        target.health = target.health - self.attack_power
        print(f"🏹 {self.name} fires an arrow at {target.name}! (-{self.attack_power} HP)")


# ============================================================
# FUNCTIONS THAT RUN THE GAME (Days 4, 5, 6)
# ============================================================
def make_hero():
    """Ask the player for a name and class, return the right object."""
    name = input("Name your hero: ")
    print("Choose a class: 1) Warrior  2) Wizard  3) Archer")
    choice = input("Pick 1-3: ")

    if choice == "1":
        return Warrior(name)
    elif choice == "2":
        return Wizard(name)
    elif choice == "3":
        return Archer(name)
    else:
        print("Unknown class - defaulting to Warrior!")
        return Warrior(name)


def print_party(party):
    print("\n🛡️  Your party:")
    if len(party) == 0:
        print("  (nobody yet - add a hero!)")
    for hero in party:               # loop over the list (Day 4 + 6)
        hero.describe()              # polymorphism-friendly


def show_inventory(inventory):
    print("\n🎒 Inventory:")
    if len(inventory) == 0:
        print("  (empty)")
    for i, item in enumerate(inventory, 1):
        print(f"  {i}. {item}")


def party_alive(party):
    """Return True if at least one hero can still fight - a simple for loop!"""
    for hero in party:
        if hero.is_alive():
            return True
    return False


def battle(party, monster):
    """Fight a monster. Uses loops, if/else, lists, and polymorphism."""
    print(f"\n--- A wild {monster.name} appears! ({monster.health} HP) ---")

    while monster.is_alive() and party_alive(party):
        # Each living hero attacks - SAME call, different result (Day 8)!
        for hero in party:
            if hero.is_alive() and monster.is_alive():
                hero.attack(monster)

        # The monster strikes back at the first living hero
        if monster.is_alive():
            for hero in party:
                if hero.is_alive():
                    monster.attack(hero)
                    break

    # if/else decides the outcome (Day 3)
    if not monster.is_alive():
        print(f"\n🏆 Victory! You defeated the {monster.name}!")
        return 20                    # gold reward
    else:
        print(f"\n💀 Your party was defeated by the {monster.name}...")
        return 0


def show_menu():
    print("\n" + "=" * 44)
    print("   🗡️  ADVENTURE RPG  🗡️")
    print("=" * 44)
    print("1. Add a hero to your party")
    print("2. Show your party")
    print("3. Show your inventory")
    print("4. Fight a monster")
    print("5. Quit")


# ============================================================
# THE MAIN GAME LOOP (Days 2, 3, 4)
# ============================================================
print("=" * 44)
print("   Welcome to your ADVENTURE RPG! 🐉")
print("=" * 44)
print("Build a party of heroes and battle monsters!")

party = []                            # a list of Character objects (Day 6)
inventory = ["Health Potion", "Old Map"]
gold = 0                              # a variable to track (Days 1-2)
running = True

while running:                        # the game loop (Day 4)
    show_menu()
    choice = input("Choose 1-5: ")

    if choice == "1":
        hero = make_hero()
        party.append(hero)            # grow the list (Day 6)
        print(f"✨ {hero.name} joined your party!")
    elif choice == "2":
        print_party(party)
    elif choice == "3":
        show_inventory(inventory)
    elif choice == "4":
        if len(party) == 0:
            print("You need at least one hero first! (Choose option 1.)")
        else:
            goblin = Character("Goblin", health=30, attack_power=4)
            gold = gold + battle(party, goblin)
            print(f"💰 You now have {gold} gold.")
    elif choice == "5":
        running = False
    else:
        print("Please choose a number from 1 to 5.")

print("\n" + "=" * 44)
print("Thanks for playing! 🎉")
print(f"Final party size: {len(party)}   Gold earned: {gold}")
print("You just built a game with classes, lists, loops, and functions.")
print("You're a programmer now. 🏆")
print("=" * 44)


# ============================================================
# CHALLENGES (make it YOURS!):
# ============================================================
# 1. Add a new character class - a Healer(Character) whose attack() actually
#    HEALS a party member instead of hurting a monster, or a Rogue that steals gold.
# 2. Make inventory items DO something: add a menu option "Use Health Potion"
#    that restores HP to your party and removes the potion from the list.
# 3. Add more monsters (a Dragon with lots of HP!) and let the player pick which
#    one to fight.
# 4. Add a shop: spend gold to buy items or hire a new hero.
# 5. Add a level-up system: after winning a battle, raise each hero's attack_power.
# 6. Add a victory screen when the player has beaten 3 monsters.
# 7. Keep a running "score" and print a high-score message at the end.

# ============================================================
# TIPS:
# ============================================================
# - Build in small steps and RUN after each change. A small working game beats
#   a big broken one!
# - Every method needs "self" as its first parameter.
# - Give each new subclass its own attack() (spelled exactly "attack") so it
#   overrides the parent - that's polymorphism (Day 8).
# - Use party.append(...) to add to the list and "for hero in party:" to loop it.
# - Getting AttributeError? Check you called super().__init__(...) in the subclass.
# - Loop won't stop? Make sure something sets running = False.
# - Save often (Ctrl+S / Cmd+S) and have FUN - this is YOUR adventure!
