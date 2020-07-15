class Palindrome:
    def __init__(self, word):
        self.word = word.replace(" ", "").lower()

    def __odd(self):
        return True if self.word[:len(self.word)//2] == "".join(list(reversed(self.word[len(self.word)//2+1:]))) else False

    def __even(self):
        return True if self.word[:len(self.word)//2] == "".join(list(reversed(self.word[len(self.word)//2:]))) else False

    def __repr__(self):
        return str(self.__odd()) if len(self.word) % 2 != 0 else str(self.__even())


test = Palindrome("radar")
print(test)
test = Palindrome("Taco cat")
print(test)
test = Palindrome("tsst")
print(test)
test = Palindrome("test")
print(test)
