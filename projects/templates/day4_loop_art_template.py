# Day 4 Project: Loop Art
# Use loops to draw shapes and patterns, then make it your own!

# ============================================
# YOUR LOOP ART STARTS HERE
# ============================================

print("=" * 40)
print("   🎨 LOOP ART 🎨")
print("=" * 40)
print()

# ============================================
# SHAPE 1: A triangle made of stars
# ============================================
height = int(input("How tall should the triangle be? "))

for i in range(1, height + 1):
    print("*" * i)

print()

# ============================================
# SHAPE 2: A countdown box
# ============================================
size = int(input("Pick a size for the box (try 5): "))

for row in range(size):
    print("#" * size)

print()

# ============================================
# SHAPE 3: Steps going up
# ============================================
steps = int(input("How many steps? "))

for step in range(1, steps + 1):
    print(" " * (steps - step) + "🟩" * step)

print()
print("=" * 40)
print("Thanks for making Loop Art! 🎉")
print("=" * 40)

# ============================================
# CHALLENGES:
# ============================================
# 1. Make an upside-down triangle
# 2. Draw a diamond (triangle on top of an upside-down triangle)
# 3. Use a different character or emoji for each shape
# 4. Add a while loop that asks "Draw another shape? (yes/no)"
# 5. Let the player pick which shape to draw from a menu
# 6. Combine two shapes into one bigger picture

# ============================================
# TIPS:
# ============================================
# - "*" * i repeats the character i times
# - range(1, height + 1) counts from 1 up to (and including) height
# - Test with small numbers first (like 3) before trying big ones
# - Save your work often (Ctrl+S / Cmd+S)
