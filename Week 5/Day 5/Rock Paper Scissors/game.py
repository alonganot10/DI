from random import choice


class Game:
    def __init__(self):
        self.user = self.get_user_item()
        self.comp = self.get_computer_item()

    @staticmethod
    def get_user_item():
        user = input("Select (r)ock, (p)aper, (s)cissors: ")
        while user not in list("rps"):
            user = input("Please enter a valid input: ")
        return user

    @staticmethod
    def get_computer_item():
        return choice(["p", "r", "s"])

    def get_game_result(self):
        if self.user == "p" and self.comp == "r" or self.user == "r" and self.comp == "s" or self.user == "s" and self.comp == "p":
            return "Win"
        elif self.user == self.comp:
            return "Draw"
        return "Loss"

    def play(self):
        print(f"You chose: {self.user}. The computer chose: {self.comp}. Result: {self.get_game_result()}")
        return self.get_game_result()
