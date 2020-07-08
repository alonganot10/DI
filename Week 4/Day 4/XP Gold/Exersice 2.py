import random


def throw_dice():
    return random.randint(1, 6)


def throw_until_doubles():
    count = 0
    while True:
        first = throw_dice()
        second = throw_dice()
        count += 1
        print(f"({first},{second})")
        if first == second:
            break
    return count


def main():
    doubles_count = []
    for i in range(100):
        doubles_count.append(throw_until_doubles())
    return doubles_count


print(f"{sum(main())} rolls it took until 100 doubles were reached")
avg = sum(main())/len(main())
print(avg)