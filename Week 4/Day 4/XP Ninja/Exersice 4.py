import string

translate_table = {
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--.."
}


def english_to_morse(text):
    new_text = ""
    text = text.lower()
    for letter in text:
        if string.ascii_lowercase.count(letter) > 0:
            new_text += translate_table[letter]
            new_text += " "
        elif letter == " ":
            new_text += "/"
            new_text += " "
    return new_text


def morse_to_english(text):
    new_text = ""
    text = text.split(" ")
    for letter in text:
        if letter == "/":
            new_text += " "
        else:
            for item in translate_table.items():
                if item[1] == letter:
                    new_text += item[0]
    return new_text


test = english_to_morse("Hi how are ya")
print(test)
print(morse_to_english(test))