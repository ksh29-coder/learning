# Day 9 - Example 2: Mini Project Walkthrough
# A smaller version of today's Adventure RPG, built LAYER BY LAYER.
# This shows HOW to grow a big program from small, tested pieces.
# Read the comments top to bottom - each section adds one layer.

# ============================================================
# LAYER 1: The parent class (Day 7)
# ============================================================
class Character:
    def __init__(self, name, health, attack_power):
        self.name = name
        self.health = health
        self.attack_power = attack_power

    def attack(self, target):
        # Plain attack - subclasses will override this (Day 8)
        target.health = target.health - self.attack_power
        print(self.name, "hits", target.name, "for", self.attack_power, "damage!")

    def describe(self):
        print(f"  {self.name}: {self.health} HP, {self.attack_power} attack")


# ============================================================
# LAYER 2: Subclasses with super() + overriding (Day 8)
# ============================================================
class Warrior(Character):
    def __init__(self, name):
        super().__init__(name, health=30, attack_power=7)

    def attack(self, target):
        target.health = target.health - self.attack_power
        print(f"⚔️  {self.name} swings a mighty sword at {target.name}! (-{self.attack_power} HP)")


class Wizard(Character):
    def __init__(self, name):
        super().__init__(name, health=20, attack_power=10)

    def attack(self, target):
        target.health = target.health - self.attack_power
        print(f"🔥 {self.name} blasts {target.name} with a fireball! (-{self.attack_power} HP)")


# ============================================================
# LAYER 3: A list of characters + a function to show them (Days 5-6)
# ============================================================
def print_party(party):
    print("Your party:")
    for member in party:          # loop over the list (Day 4)
        member.describe()         # polymorphism-friendly - each describes itself


# ============================================================
# LAYER 4: A battle function that mixes everything (Days 3-8)
# ============================================================
def party_alive(party):
    # a helper function (Day 5) with a simple for loop (Day 4):
    # is at least ONE hero still standing?
    for hero in party:
        if hero.health > 0:
            return True
    return False


def battle(party, monster):
    print("\n--- A wild", monster.name, "appears! ---")
    round_number = 1

    # while loop (Day 4) keeps fighting until one side falls
    while monster.health > 0 and party_alive(party):
        print(f"\nRound {round_number}:")
        for hero in party:                 # loop over the party list
            if hero.health > 0 and monster.health > 0:
                hero.attack(monster)       # SAME call, different result (Day 8)
        if monster.health > 0:
            # the monster fights back against the first hero still standing
            for hero in party:
                if hero.health > 0:
                    monster.attack(hero)
                    break
        round_number = round_number + 1

    # if/else (Day 3) to decide the outcome
    if monster.health <= 0:
        print(f"\n🏆 Victory! {monster.name} is defeated!")
    else:
        print("\n💀 Your party has fallen. Try again!")


# ============================================================
# PUT IT ALL TOGETHER
# ============================================================
print("=" * 40)
print("   🗡️  MINI ADVENTURE  🗡️")
print("=" * 40)

# A list (Day 6) of different character objects (Days 7-8)
party = [Warrior("Aria"), Wizard("Zane")]
print_party(party)

# A monster is just another Character
goblin = Character("Goblin", health=25, attack_power=3)

battle(party, goblin)

print("\nThe End. Now go build the FULL adventure! 🎉")
