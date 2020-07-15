class Kelvin:
    def __init__(self, temp):
        self.temp = temp

    def k_to_c(self):
        return Celsius(self.temp + 273)

    def k_to_f(self):
        return Fahrenheit(9 / 5 * (self.temp - 273) + 32)


class Celsius:
    def __init__(self, temp):
        self.temp = temp

    def c_to_k(self):
        return Kelvin(self.temp - 273)

    def c_to_f(self):
        return Fahrenheit(9 / 5 * self.temp + 32)


class Fahrenheit:
    def __init__(self, temp):
        self.temp = temp

    def f_to_k(self):
        return Kelvin(5 / 9 * (self.temp - 32) + 273.15)

    def f_to_c(self):
        return Celsius((self.temp - 32) / 1.8)
