# Day 4 - Example 6: Remainder Magic! ✨
# Two new math superpowers:
# %   the REMAINDER (what's left over after dividing)
# //  WHOLE-NUMBER division (divide and throw away the leftovers)

# Sharing cookies: 17 cookies between 5 friends
print("17 cookies shared between 5 friends:")
print("Each friend gets:", 17 // 5, "cookies")   # 3
print("Cookies left over:", 17 % 5)              # 2
print()

# The most famous remainder trick: even or odd?
# Even numbers divide by 2 with NOTHING left over.
number = int(input("Give me a number and I'll tell you if it's even or odd: "))

if number % 2 == 0:
    print(number, "is EVEN! ✌️")
else:
    print(number, "is ODD! ☝️")

print()

# Remainder magic + loops = amazing patterns
print("Counting to 15 — multiples of 3 get a star:")

for i in range(1, 16):
    if i % 3 == 0:
        print(i, "⭐")
    else:
        print(i)

# Challenge ideas:
# 1. Print only the ODD numbers from 1 to 20 using %
# 2. Ask for two numbers and print the // and % of them
# 3. Ready for the famous FizzBuzz? Open:
#    projects/templates/day4_fizzbuzz_template.py
