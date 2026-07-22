# Day 4 Challenge: FizzBuzz! 🎉
# The world's most famous coding challenge — even grown-up programmers
# get asked this in job interviews. You can do it TODAY!

# ============================================
# THE RULES
# ============================================
# Count from 1 to 30. For each number:
#   - If it divides evenly by 3 AND 5  -> print "FizzBuzz!"
#   - If it divides evenly by 3 only   -> print "Fizz"
#   - If it divides evenly by 5 only   -> print "Buzz"
#   - Otherwise                        -> just print the number
#
# Remember the remainder trick: number % 3 == 0 means
# "3 fits into number perfectly, with nothing left over."

print("=" * 40)
print("   🎉 FIZZBUZZ 🎉")
print("=" * 40)
print()

# ============================================
# YOUR FIZZBUZZ STARTS HERE
# ============================================
for number in range(1, 31):
    if number % 3 == 0 and number % 5 == 0:
        print("FizzBuzz!")
    elif number % 3 == 0:
        # YOUR TURN: print "Fizz" here!
        print("Fizz")
    elif number % 5 == 0:
        # YOUR TURN: print "Buzz" here!
        print("Buzz")
    else:
        print(number)

print()
print("=" * 40)
print("You solved a REAL interview question! 🏆")
print("=" * 40)

# ============================================
# CHALLENGES:
# ============================================
# 1. Ask the user how high to count instead of always 30
#    (hint: top = int(input(...)), then range(1, top + 1))
# 2. Change Fizz/Buzz to your own silly words ("Pizza"/"Party"?)
# 3. Add a THIRD rule: numbers that divide by 7 print "Boom!"
# 4. Count how many times "FizzBuzz!" was printed and show it at the end
# 5. Tricky: why must the "3 AND 5" check come FIRST?
#    Try moving it to the bottom and see what breaks!

# ============================================
# TIPS:
# ============================================
# - % gives the REMAINDER: 10 % 5 is 0, but 10 % 3 is 1
# - "% x == 0" means "divides evenly by x"
# - Test small: what should 15 print? Check that it does!
