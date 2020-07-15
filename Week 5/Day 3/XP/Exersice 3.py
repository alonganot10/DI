from random import randint


def get_num():
    number = randint(1, 10)  # chooses a random whole number between 1 and 10 included
    return number


def pwr(func):
    number = func()  # gets the result of get_num function
    print(number, number * number)  # prints the number and its power of 2


pwr(get_num)
