# Day 1 - Example 4: Name Tag Creator
# Create a cool name tag!

print("=" * 40)
print("   NAME TAG")
print("=" * 50)
print("  Name: Michael")
print("  Age: 10")
print("  Favorite Color: Blue")
print("  Hobby: Playing with my dog")
print("-"  * 40)

# The "* 20" means repeat the character 20 times!
# Try changing the number or the character
# Example: print("*" * 15)
# Example: print("-" * 25)

for i in range(10):
    print (" " * i + "*" * (10 -i))