# Day 5 - Function Toolbox
# A collection of small helper functions we can reuse.


def print_border():
    print("=" * 30)


def greet_user(name):
    print_border()
    print("Hello,", name, "!")
    print("Welcome to the Function Toolbox!")
    print_border()


def cheer(times):
    for i in range(times):
        print("Hooray! 🎉")


def add_excitement(message):
    print(message + "!!! 🎉")


# Main program that uses the toolbox

user_name = input("What is your name? ")
print()

greet_user(user_name)
print()

cheer(3)
print()

add_excitement("You just used functions")

print()
print("End of function toolbox example.")
