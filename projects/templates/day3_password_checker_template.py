# Day 3 Challenge: Password Checker 🔐
# A real programmer project! Websites check passwords just like this.
# Fill in the blanks and make it your own!

# ============================================
# YOUR PASSWORD CHECKER STARTS HERE
# ============================================

print("=" * 40)
print("   🔐 PASSWORD CHECKER 🔐")
print("=" * 40)
print()
print("Let's check how strong your password is!")
print()

password = input("Type a password to check: ")

# ============================================
# CHECK 1: Is it long enough?
# len() tells us how many characters are in a string
# ============================================
if len(password) >= 8:
    print("✅ Nice length! (8 or more characters)")
else:
    print("❌ Too short! Passwords should be at least 8 characters.")

# ============================================
# CHECK 2: Is it a super-common (easy to guess) password?
# .lower() means "PASSWORD", "Password" and "password" all get caught!
# ============================================
if password.lower() == "password" or password.lower() == "12345678":
    print("❌ Everyone guesses that one first! Pick something unique.")
else:
    print("✅ Not a super-common password. Good thinking!")

# ============================================
# CHECK 3: Final verdict — combine the checks with 'and' / 'not'
# ============================================
is_long = len(password) >= 8
is_common = password.lower() == "password" or password.lower() == "12345678"

if is_long and not is_common:
    print()
    print("🏆 STRONG password! A hacker would give up. 💪")
else:
    print()
    print("🛡️ Let's make it stronger — try again with the tips above!")

print()
print("=" * 40)
print("Thanks for using the Password Checker! 🎉")
print("=" * 40)

# ============================================
# CHALLENGES:
# ============================================
# 1. Add more common passwords to Check 2 (like "qwerty" or "abc123")
# 2. Give the password a score: +1 point for each check it passes
# 3. Warn the user if the password is the same as their name
#    (hint: ask for their name first, then compare with .lower())
# 4. Use a rating: 10+ characters = "SUPER strong!"
# 5. Print how many MORE characters they need when it's too short
#    (hint: 8 - len(password))

# ============================================
# TIPS:
# ============================================
# - len("cat") is 3 — it counts every character, even spaces!
# - .lower() makes checks work no matter how it's typed
# - 'not' flips True to False — perfect for "is NOT common"
# - Test with a short password AND a long one to see both messages
