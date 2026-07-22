# Day 9 Bonus Arcade: Interactive Story Builder 📖
# Combining: functions, loops, input, variables, dictionaries, print

def get_story_parts():
    print("Let's build a story together!")
    print()
    
    parts = {}
    parts['name'] = input("Enter a character name: ")
    parts['place'] = input("Enter a place: ")
    parts['animal'] = input("Enter an animal: ")
    parts['action'] = input("Enter an action (like 'dance' or 'sing'): ")
    parts['number'] = int(input("Enter a number: "))
    parts['emotion'] = input("Enter an emotion (like 'happy' or 'excited'): ")
    parts['ending'] = input("Enter an ending (like 'happily ever after' or 'sadly'): ")
    return parts

def tell_story(parts):
    print("\n" + "=" * 40)
    print("   📖 YOUR STORY 📖")
    print("=" * 40)
    print()
    print(f"Once upon a time, {parts['name']} went to {parts['place']}.")
    print(f"There, they met a friendly {parts['animal']}.")
    print(f"The {parts['animal']} asked {parts['name']} to {parts['action']}.")
    print()
    print(f"{parts['name']} felt {parts['emotion']} and decided to try!")
    print()
    
    for i in range(parts['number']):
        print(f"  {parts['name']} {parts['action']}s! 🎉")
    
    print()
    print(f"And they lived happily ever after! The end. ✨")
    print("=" * 40)

def ask_to_continue():
    answer = input("\nWant to create another story? (yes/no): ").lower()
    return answer == "yes" or answer == "y"

# Main program
print("Welcome to the Story Builder! 📚")
print()

story_count = 0

while True:
    story_count = story_count + 1
    print(f"\n--- Story #{story_count} ---")
    story_parts = get_story_parts()
    tell_story(story_parts)

    if not ask_to_continue():
        break

print(f"\nYou created {story_count} amazing story/stories!")
print("Thanks for creating stories! 👋")





