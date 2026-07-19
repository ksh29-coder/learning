# Day 6 - Example 5: Personal Assistant Bot
# Combining: functions, while loops, if/elif/else, variables, input

from time import sleep


def show_help():
    """Display available commands"""
    print("\nI can help you with:")
    print("  - make money: do stuff")
    print("  - greet: Say hello")
    print("  - joke: Tell a joke")
    print("  - calculate: Do simple math")
    print("  - weather: Check the weather (pretend)")
    print("  - compliment: Give you a compliment")
    print("  - quit: Say goodbye")

def tell_joke():
    """Tell a random joke"""
    jokes = [
        "Why don't scientists trust atoms? Because they make up everything! 😂",
        "Why did the math book look so sad? Because it had too many problems! 📚",
        "What do you call a fake noodle? An impasta! 🍝",
    ]
    # Simple version: just pick the first one
    # (Could use random.choice() for variety)
    print(jokes[0])

def calculate():
    """Do simple math calculations"""
    print("\nLet's do some math!")
    num1 = int(input("Enter first number: "))
    operation = input("Enter operation (+, -, *, /): ")
    num2 = int(input("Enter second number: "))
    
    if operation == "+":
        result = num1 + num2
    elif operation == "-":
        result = num1 - num2
    elif operation == "*":
        result = num1 * num2
    elif operation == "/":
        if num2 != 0:
            result = num1 / num2
        else:
            print("Error: Can't divide by zero! ❌")
            return
    else:
        print("Invalid operation! ❌")
        return
    
    print(f"The answer is: {result} ✅")

def check_weather():
    """Pretend to check the weather"""
    print("\nLet me check the weather...")
    print("☀️ The weather is sunny and 72°F!")
    print("Perfect day for outdoor activities! 🏃")

def give_compliment():
    """Give a random compliment"""
    compliments = [
        "You're doing great! 🌟",
        "You're awesome! ⭐",
        "You're a coding superstar! 🚀",
        "You're amazing! 💫",
        "You're brilliant! ✨",
    ]
    # Simple version: pick first one
    print(compliments[0])
def make_money():
    money = 0
    while True:
        money = money + 1
        sleep(1)
        print("$" + str(money))
def greet_user():
    """Greet the user"""
    name = input("What's your name? ")
    print(f"Hello, {name}! Nice to meet you! 👋")
    print(f"Welcome to your personal assistant, {name}!")

# Main chat loop
print("=" * 40)
print("   🤖 PERSONAL ASSISTANT BOT 🤖")
print("=" * 40)
print("Hi! I'm your assistant bot!")
print("Type 'help' to see what I can do.")
print()

greet_user()

while True:
    command = input("\nWhat would you like? (type 'help' for options): ").lower()
    
    if command == "help":
        show_help()
    elif command == "greet":
        name = input("What's your name? ")
        print(f"Hello, {name}! Nice to meet you! 👋")
    elif command == "joke":
        tell_joke()
    elif command == "make money":
        make_money()
    elif command == "calculate":
        calculate()
    elif command == "weather":
        check_weather()
    elif command == "compliment":
        give_compliment()
    elif command == "quit" or command == "exit":
        print("\nGoodbye! Have a great day! 👋")
        print("Thanks for using your personal assistant!")
        break
    else:
        print("I don't understand that. Type 'help' for options.")

print("\nSee you next time! 🤖")





