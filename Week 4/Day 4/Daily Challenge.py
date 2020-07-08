def matrix_to_string(matrix):
    text = ""
    while len(matrix[0]) > 0:
        for i in matrix:
            text += i.pop(0)
    return text


def text_to_alnum(text):
    new_text = ""
    for letter in text:
        if letter.isalnum():
            new_text += letter
        else:
            if letter != " " and new_text[-1] != " ":
                new_text += " "
    return new_text


matrix = [
    ['7', " ", '3'],
    ["T", "s", "i"],
    ["h", '%', 'x'],
    ['i', ' ', '#'],
    ['s', 'M', ' '],
    ['$', 'a', ' '],
    ['#', 't', '%'],
    ['i', 'r', '!']
]

print(matrix)
test = matrix_to_string(matrix)
print(test)
print(text_to_alnum(test))

##########################################################

import random


def couple_sum(num_list, couples=0):
    if len(num_list) == 0:
        return couples
    first = num_list.pop(0)
    for match in num_list:
        if first+match == 3728:
            couples += 1
    couples = couple_sum(num_list, couples)
    return couples


list_of_numbers = [random.randint(0, 10000) for _ in range(900)]
print(couple_sum(list_of_numbers))
