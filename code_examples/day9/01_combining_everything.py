# Day 9 - Example 1: Combining EVERYTHING in one small program
# This tiny program uses a class + a list + a loop + a function together.
# No new ideas here - just the pieces from Days 1-8 working as a team!

# --- A class (Day 7) with a subclass and overriding (Day 8) ---
class Hero:
    def __init__(self, name, power):
        self.name = name          # variables/attributes (Days 1-2, 7)
        self.power = power

    def attack(self):
        # Every hero can attack; subclasses will do it their own way (Day 8)
        print(self.name, "attacks for", self.power, "damage!")


class Wizard(Hero):
    def __init__(self, name):
        super().__init__(name, 8)          # reuse the parent's setup (Day 8)

    def attack(self):                      # override (Day 8)
        print(self.name, "casts a fireball for", self.power, "damage! 🔥")


class Archer(Hero):
    def __init__(self, name):
        super().__init__(name, 6)

    def attack(self):
        print(self.name, "shoots an arrow for", self.power, "damage! 🏹")


# --- A function (Day 5) that loops (Day 4) over a list (Day 6) ---
def everyone_attack(party):
    for hero in party:            # loop over the list
        hero.attack()             # SAME call, different result = polymorphism!


# --- Put it all together ---
print("=" * 40)
print("   ⚔️  THE PARTY ATTACKS!  ⚔️")
print("=" * 40)

# A list (Day 6) holding different kinds of objects (Days 7-8)
party = [Wizard("Merlin"), Archer("Robin"), Hero("Rookie", 4)]

everyone_attack(party)            # call the function (Day 5)

# A little decision with if/else (Day 3), using a variable (Days 1-2)
total_power = 0
for hero in party:
    total_power = total_power + hero.power

print()
print("Total party power:", total_power)
if total_power >= 15:
    print("This party is mighty! 🏆")
else:
    print("Keep leveling up! 💪")

# Notice how many concepts fit in one short program:
# variables, if/else, a loop, a function, a list, a class, and inheritance.
# That is what today is all about - putting it ALL together!
