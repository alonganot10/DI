def framed(word_list):
    longest = ""
    for word in word_list:
        if len(word) > len(longest):
            longest = word
    print("*"*(len(longest)+4))
    for w in word_list:
        space_w = (len(longest)-len(w))*" "
        print(f"* {w}{space_w} *")
    print("*"*(len(longest)+4))


words = ['Hello', 'World', 'in', 'reallylongword', 'a', 'frame']
framed(words)
s