import string
from itertools import cycle


def encrypt(text, shift):
    new_text = ""
    if shift < 0:
        for letter in text:
            new_text += shift_left(letter, shift)
    else:
        for letter in text:
            new_text += shift_right(letter, shift)
    return new_text


def shift_right(letter, shift):
    check = False
    if letter.lower() != letter:
        letter = letter.lower()
        check = True
    lower = list(string.ascii_lowercase)
    if lower.count(letter) == 0:
        return letter
    lower_cycle = cycle(lower)
    for i in range(lower.index(letter)+1):
        next(lower_cycle)
    for i in range(shift):
        letter = next(lower_cycle)
    if check:
        return letter.upper()
    return letter


def shift_left(letter, shift):
    shift = abs(shift)
    check = False
    if letter.lower() != letter:
        letter = letter.lower()
        check = True
    lower = list(reversed(string.ascii_lowercase))
    if lower.count(letter) == 0:
        return letter
    lower_cycle = cycle(lower)
    for i in range(lower.index(letter)+1):
        next(lower_cycle)
    for i in range(shift):
        letter = next(lower_cycle)
    if check:
        return letter.upper()
    return letter


print(encrypt("Hi How Are Ya?", 2))
print(encrypt(encrypt("Hi How Are Ya?", 2), -2))