import random


def get_random_temp(season):
    if season == "winter":
        return random.randint(-10, 15)
    elif season == "autumn" or season == "spring":
        return random.randint(16, 22)
    elif season == "summer":
        return random.randint(23, 39)


def main():
    season = input("Enter a season: ")
    temp = get_random_temp(season)
    print(f"The temperature right now is {temp} degrees Celsius")
    if temp < 0:
        print("Brr, that's freezing!")
    elif 0 <= temp < 16:
        print("Quite chilly! Don't forget your coat")
    elif 16 <= temp < 23:
        print("Ahh that's nice weather!")
    elif 23 <= temp < 32:
        print("Getting a bit warm here")
    elif 32 <= temp < 40:
        print("AHHHH im burning!")


main()