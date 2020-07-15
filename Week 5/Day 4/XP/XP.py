from random import choice


def get_words_from_file(file):
    with open(file) as f:
        word_list = f.readlines()
        word_list = [word.replace("\n", "") for word in word_list]
        return word_list


def get_random_sentence(word_list, num):
    new_sentence = []
    for word in range(num):
        new_sentence.append(choice(word_list).title())
    return " ".join(new_sentence)


def main():
    print("This program takes your chosen length between 2-20 and generates a random sentence")
    num = int(input("Please enter the length: "))
    if 2 <= num <= 20:
        text = get_words_from_file("sowpods.txt")
        print(get_random_sentence(text, num))
    else:
        raise ValueError


main()
