from anagram_checker import AnagramChecker


def show_menu():
    choice = input("""Menu:
    # Type a word
    # Or press Enter to leave
     :  """).strip().lower()
    while not choice.isalpha() and choice != "":
        choice = input("Enter a valid single word: ")
    return choice


def word_anagrams(word):
    word = AnagramChecker(word)
    print(f"""
YOUR WORD: {word.word}
this is a valid English word
Anagrams for your word: {word.valid_anagram_list()}""")


def main():
    user = show_menu()
    word_anagrams(user)

main()
