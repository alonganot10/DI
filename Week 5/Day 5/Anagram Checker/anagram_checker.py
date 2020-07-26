import enchant
from itertools import permutations


class AnagramChecker:
    def __init__(self, word):
        if self.is_valid_word(word):
            self.word = word
        else:
            raise ValueError("The word is not in the english dictionary")

    @staticmethod
    def is_valid_word(word):
        d = enchant.Dict("en_US")
        return d.check(word)

    def __get_anagrams(self):
        return list(permutations(self.word))

    def valid_anagram_list(self):
        return ["".join(word) for word in self.__get_anagrams() if self.is_valid_word("".join(word))]
