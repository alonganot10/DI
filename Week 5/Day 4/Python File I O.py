f = open("C:/Users/along/Desktop/nameslist.txt", encoding = 'utf-8')
for line in f:
    print(line)
f.close()

with open("C:/Users/along/Desktop/nameslist.txt", encoding = 'utf-8') as f:
    print(f.readlines()[4])

with open("C:/Users/along/Desktop/nameslist.txt", encoding = 'utf-8') as f:
    print(f.readline()[4])

with open("C:/Users/along/Desktop/nameslist.txt", encoding = 'utf-8') as f:
    lines = f.readlines()
    lines = [word.replace("\n", "") for word in lines]
    print(f"Darth: {lines.count('Darth')}")
    print(f"Luke: {lines.count('Luke')}")
    print(f"Lea: {lines.count('Lea')}")

with open("C:/Users/along/Desktop/nameslist.txt", "a", encoding = 'utf-8') as f:
    f.write("\nAlon")

with open("C:/Users/along/Desktop/nameslist.txt", "r+", encoding = 'utf-8') as f:
    for line in f:
        if line.count("Luke") == 1:
            line = "Luke SkyWalker\n"