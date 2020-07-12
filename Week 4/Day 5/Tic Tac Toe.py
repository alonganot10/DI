board = [
    ["1", " | ", "2", " | ", "3"],
    ["-", " + ", "-", " + ", "-"],
    ["4", " | ", "5", " | ", "6"],
    ["-", " + ", "-", " + ", "-"],
    ["7", " | ", "8", " | ", "9"]
]
avaliable_numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']


def display_board():
    for i in board:
        print(''.join(i))


def player_input(player):
    position = input(f"Enter {player} at position: ")
    while avaliable_numbers.count(position) == 0:
        position = input("Enter a valid position: ")
    avaliable_numbers.remove(position)
    for row in board:
        try:
            row[row.index(position)] = player
        except ValueError:
            pass
    display_board()
    if check_win():
        print(f"{player} has won the game!")
        return True


def check_win():
    count_column = []
    for column in range(0, 5, 2):
        for row in range(0, 5, 2):
            if board[row].count("x") == 3 or board[row].count("o") == 3:
                return True
            count_column.append(board[row][column])
        if count_column.count("x") == 3 or count_column.count("o") == 3:
            return True
        count_column.clear()
    if board[0][0] == board[2][2] == board[4][4]:
        return True
    if board[0][4] == board[2][2] == board[4][0]:
        return True


def play():
    display_board()
    win = False
    turns = 0
    while not win:
        if turns > 8:
            print("It's a tie!")
            break
        if turns % 2 == 0:
            win = player_input("x")
        else:
            win = player_input("o")
        turns += 1


play()