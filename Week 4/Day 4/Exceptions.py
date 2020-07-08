def sum_list(numbers):
    try:
        return sum(numbers)
    except:
        return "Not a valid list"


print(sum_list([1, 2, 3, 4, 5, 'f']))
