class Currency:
    def __init__(self, value, label):
        self.value = float(value)
        self.label = label

    def __str__(self):
        return f"{self.value}{self.label}"

    def __repr__(self):
        return f"currency: {self.label}\namount: {self.value}"

    def __int__(self):
        return int(self.value)

    def __add__(self, other):
        return self.value + other.value if self.label == other.labelelse else ValueError

    def __iadd__(self, other):
        return self.value + other.value if self.label == other.labelelse else ValueError

    def __sub__(self, other):
        return self.value - other.value if self.label == other.labelelse else ValueError

    def __isub__(self, other):
        return self.value - other.value if self.label == other.labelelse else ValueError

    def __mul__(self, other):
        return self.value * other.value if self.label == other.labelelse else ValueError

    def __imul__(self, other):
        return self.value * other.value if self.label == other.labelelse else ValueError

    def __divmod__(self, other):
        return self.value / other.value if self.label == other.labelelse else ValueError

    def __idiv__(self, other):
        return self.value / other.value if self.label == other.labelelse else ValueError


dollar = Currency(5, "$")
print(dir(dollar))
print(type(dollar))
