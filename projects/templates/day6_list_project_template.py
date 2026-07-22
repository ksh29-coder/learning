# Day 6 Project: High Score Tracker
# Fill in the blanks and make it your own!

# ============================================
# YOUR HIGH SCORE TRACKER STARTS HERE
# ============================================
print("=" * 40)
print("   🏆 HIGH SCORE TRACKER 🏆")
print("=" * 40)
print()
print("Let's keep track of everyone's scores!")
print("Enter scores one at a time. Type 'done' when finished.")
print()

# ============================================
# STEP 1: Start with an empty list
# ============================================
scores = []

# ============================================
# STEP 2: Collect scores from the player using a loop
# (with the try/except SAFETY NET so "banana" can't crash us!)
# ============================================
while True:
    entry = input("Enter a score (or 'done'): ")

    if entry.lower() == "done":
        break

    try:
        score = int(entry)
        scores.append(score)
        print("Added score:", score)
    except ValueError:
        print("That's not a number! Try again.")

print()

# ============================================
# STEP 3: Show what happens if no scores were entered
# ============================================
if len(scores) == 0:
    print("No scores were entered. Goodbye!")
else:
    # ============================================
    # STEP 4: Loop over the list and print every score
    # ============================================
    print("=" * 40)
    print("All the scores you entered:")
    for index in range(len(scores)):
        print(index + 1, "-", scores[index])

    print()

    # ============================================
    # STEP 5: Report some fun facts about the scores
    # ============================================
    print("You entered", len(scores), "scores!")

    highest_score = max(scores)
    lowest_score = min(scores)
    print("Highest score:", highest_score)
    print("Lowest score:", lowest_score)

    # ============================================
    # STEP 6: Check membership with "in"
    # ============================================
    if 100 in scores:
        print("Wow, someone got a perfect 100! 🎉")

print()
print("=" * 40)
print("Thanks for using the High Score Tracker!")
print("=" * 40)

# ============================================
# OPTIONAL BONUS STEP: A DICTIONARY SCOREBOARD
# ============================================
# A list is numbered cubbies, but a DICTIONARY is labeled cubbies - perfect
# for matching each player's NAME to their score! Uncomment the lines below
# (remove the # at the start of each line) and try it out.

# scoreboard = {}
#
# while True:
#     player_name = input("Player name (or 'done'): ")
#
#     if player_name.lower() == "done":
#         break
#
#     entry = input("Score for " + player_name + ": ")
#
#     try:
#         scoreboard[player_name] = int(entry)
#     except ValueError:
#         print("That's not a number - skipping that one!")
#
# print()
# print("=" * 40)
# print("   📋 FINAL SCOREBOARD 📋")
# print("=" * 40)
# for player_name, score in scoreboard.items():
#     print(player_name, "scored", score)

# ============================================
# CHALLENGES:
# ============================================
# 1. Also ask for the player's NAME before each score, and store names in
#    a second list so you can print "Alex scored 90" instead of just "90".
# 2. Add a "remove" option so the player can type "remove 50" to take a
#    score out of the list (use .remove() and check "in" first!).
# 3. Calculate and print the AVERAGE score (hint: use sum(scores) and
#    len(scores), then divide).
# 4. Sort the scores from highest to lowest before printing them
#    (hint: look up Python's sorted() function).
# 5. Turn this into a "Class Roster" program instead - collect student
#    names, then let the teacher search for a name using "in".
# 6. Add emojis based on the score (like 🥇 for 100, 🥈 for 90+, etc.)
# 7. Let the player enter scores for MULTIPLE rounds, using a list of
#    lists (one list per round) - this one is tricky, only try if you're
#    feeling confident!

# ============================================
# TIPS:
# ============================================
# - Remember: int(entry) converts the typed text into a real number.
# - Lists start counting at index 0, but it's nicer to show "1, 2, 3..."
#   to the player, which is why we print index + 1 above.
# - max() and min() are handy built-in functions - try them on any list
#   of numbers!
# - Test your program often - try entering 'done' right away, entering
#   just one score, and entering lots of scores.
# - Save your work frequently (Ctrl+S / Cmd+S)!
