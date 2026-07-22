# Day 2 - Example 5: f-strings - The Neat Way to Glue Text!
# Put an f before the quotes, then drop variables into {curly braces}

name = "Isabella"
age = 12

# The comma way you already know:
print("Hello,", name, "! You are", age, "!")

# The NEW f-string way - neat and tidy:
print(f"Hello {name}, you are {age}!")

# The f tells Python: "fill in the {blanks} with real values!"
# No juggling commas and quotes - you just write the sentence.

# You can even do math right inside the braces!
print(f"Next year {name} will be {age + 1}!")
print(f"In dog years, that's {age * 7}!")

# f-strings work great with input() too
favorite_food = input("What's your favorite food? ")
print(f"Yum! {favorite_food} is delicious, {name}! 😋")

# From now on, f-strings are our favorite way to print with variables!
# Challenge: rewrite the comma-style print at the top as an f-string.
