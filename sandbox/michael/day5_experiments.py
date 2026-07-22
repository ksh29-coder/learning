# Michael's Day 5 Experiments 🧪
# Great experimenting, Michael! These are your own function ideas from Day 5,
# moved here so the reference examples stay clean. Keep hacking on them!
# (A couple of small fixes: added a missing space after "you", and fixed the
# spellings "library" and "restaurant".)

# Experiment 1: a conversation-ending function (from 02_functions_with_parameters.py)
def end_conversation(name):
    print("It was nice talking to you " + name + "!")
    print("Where should we hang out?")
    location = input("The library, the mall or a restaurant? ")
    if location.lower() == "library":
        print("Nice, I love some quiet time!")
    elif location.lower() == "mall":
        print("What should we buy there?")
    else:
        print("What kind of restaurant?")


# Experiment 2: a division function (from 03_functions_with_return.py)
def divide(a, b):
    result = a / b
    return result


# Try them out!
name = "Michael"
end_conversation(name)

print()

a = int(input("Numerator: "))
b = int(input("Denominator: "))
c = divide(a, b)
print(str(a) + "/" + str(b) + " = " + str(c))

# Ideas to try next:
# 1. What happens if the denominator is 0? Can you check for it with an if?
# 2. Add more hangout locations to end_conversation.
# 3. Make divide() round the answer to 2 decimal places.
