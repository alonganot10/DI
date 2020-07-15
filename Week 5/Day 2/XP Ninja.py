from random import choice


class Grid:
    def __init__(self, size):
        self.grid = [[choice([Alive(column, row), Dead(column, row)]) for column in range(size)] for row in range(size)]


class P_Grid:
    def __init__(self, g):
        grid = []
        for row in g.grid:
            r = []
            for column in row:
                if type(column) == Alive:
                    r.append(P_Alive(column.x, column.y, Neighbours(TheGrid.grid[column.x][column.y], TheGrid.grid).count()))
                elif type(column) == Dead:
                    r.append(P_Dead(column.x, column.y, Neighbours(TheGrid.grid[column.x][column.y], TheGrid.grid).count()))
            grid.append(r[:])
        self.g = grid

    def update(self):
        for row in self.g:
            for cell in row:
                count = Neighbours(cell, self.g).count()
                if count < 2 or count > 3:
                    cell = P_Dead(cell.x, cell.y, count)
                elif type(cell) == P_Dead and count == 3:
                    cell = P_Alive(cell.x, cell.y, count)
                elif 2 <= count <= 3:
                    cell = self


class Neighbours:
    def __init__(self, cell, grid):
        self.cell = cell
        self.grid = grid

    def count(self):
        c = 0
        for row in range(-1, 2):
            for column in range(-1, 2):
                try:
                    if type(self.grid[self.cell.x + row][self.cell.y + column]) == Alive or type(self.grid[self.cell.x + row][self.cell.y + column]) == P_Alive:
                        c += 1
                except IndexError:
                    pass
        return c


class Cell:
    def __init__(self, x, y):
        self.x = x
        self.y = y


class Alive(Cell):
    def __init__(self, x, y):
        super().__init__(x, y)
        self.value = chr(9608)


class P_Alive(Alive):
    def __init__(self, x, y, count):
        super().__init__(x, y)
        self.count = count - 1
        self.value = chr(9608)

    def population(self):
        return P_Dead(self.x, self.y, self.count) if self.count < 2 or self.count > 3 else self


class Dead(Cell):
    def __init__(self, x, y):
        super().__init__(x, y)
        self.value = "0"


class P_Dead(Dead):
    def __init__(self, x, y, count):
        super().__init__(x, y)
        self.count = count
        self.value = "0"

    def population(self):
        return P_Alive(self.x, self.y, self.count) if self.count == 3 else self


TheGrid = Grid(10)
for i in TheGrid.grid:
    for y in i:
        print(y.value, end=" ")
    print()
print()


# print(Neighbours(TheGrid.grid[1][1], TheGrid.grid).count())


TheP_Grid = P_Grid(TheGrid)
for oo in range(2):
    for i in TheP_Grid.g:
        for cell in i:
            cell = cell.population()
            print(cell.value, end=" ")
        print()
    print()
    TheP_Grid.update()
    for i in TheP_Grid.g:
        for y in i:
            print(y.count, end=" ")
        print()
    print()