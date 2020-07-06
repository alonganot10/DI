Date = input("Enter your birth date YYYY-MM-DD: ")
Date_list = Date.split("-")
if int(Date_list[0]) % 4 != 0:
    candles = int(str(2020 - int(Date_list[0]))[-1])
    candles_top = candles*"i"
    top_side = int((11-candles)/2)*"_"
    print(f"    {top_side}{candles_top}{top_side}")
    print("   |:H:a:p:p:y:|")
    print(" __|___________|__")
    print("|^^^^^^^^^^^^^^^^^|")
    print("|:B:i:r:t:h:d:a:y:|")
    print("|                 |")
    print("~~~~~~~~~~~~~~~~~~~")
else:
    for i in range(2):
        candles = int(str(2020 - int(Date_list[0]))[-1])
        candles_top = candles*"i"
        top_side = int((11-candles)/2)*"_"
        print(f"    {top_side}{candles_top}{top_side}")
        print("   |:H:a:p:p:y:|")
        print(" __|___________|__")
        print("|^^^^^^^^^^^^^^^^^|")
        print("|:B:i:r:t:h:d:a:y:|")
        print("|                 |")
        print("~~~~~~~~~~~~~~~~~~~")