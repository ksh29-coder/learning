# Day 8 - super() and __init__
# Sometimes a subclass wants its own EXTRA attributes, on top of the parent's.
# We can write our own __init__ in the subclass, then call the parent's __init__
# with super().__init__(...) so we don't have to rewrite all the parent's setup.

class Pet:
    def __init__(self, name, animal_type, hunger_level=5):
        self.name = name
        self.animal_type = animal_type
        self.hunger_level = hunger_level
        self.happiness = 5

    def describe(self):
        print(self.name, "is a", self.animal_type + ".")
        print("Hunger:", self.hunger_level, "/ 10   Happiness:", self.happiness, "/ 10")


# A Dog is a Pet, but a Dog also has a favorite trick!
class Dog(Pet):
    def __init__(self, name, trick):
        # super() means "the parent class" (Pet).
        # This line runs Pet's __init__ to set up name, hunger_level, happiness for us.
        super().__init__(name, "dog")
        # Now we add the EXTRA attribute that only Dogs have:
        self.trick = trick

    def do_trick(self):
        print(self.name, "does a trick:", self.trick + "! 🐕")


# We only pass name and trick - super() fills in animal_type="dog" and the rest.
buddy = Dog("Buddy", "roll over")

buddy.describe()          # This method came from Pet
buddy.do_trick()          # This method is new, added by Dog

print()
print("Buddy's trick is:", buddy.trick)
print("Buddy's animal type is:", buddy.animal_type)   # set by super().__init__

# Challenge ideas:
# 1. Make a Cat(Pet) subclass that adds a self.indoor attribute (True or False).
# 2. Add a favorite_food attribute to Dog and print it after creating buddy.
# 3. Create a second Dog with a different trick and call do_trick() on both.
