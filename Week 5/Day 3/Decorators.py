def my_decorator(my_function):    # <-- (4)
    def inner_decorator():        # <-- (5)
        print("This happened before!")  # <-- (6)
        my_function()             # <-- (7)
        print("This happens after ")    # <-- (10)
        print("This happened at the end!")    # <-- (11)
    return inner_decorator
    # return None


@my_decorator       # <-- (3)
def my_decorated():    # <-- (2) <-- (8)
    print("This happened!")   # <-- (9)


my_decorated()    # <-- (1)
"""
this happened before
this happened
this happens after
this happened at the end
"""