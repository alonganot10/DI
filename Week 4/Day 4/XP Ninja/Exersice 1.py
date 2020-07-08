def get_full_name(first_name, middle_name, last_name=None):
    if last_name is None:
        return f"{first_name} {middle_name}"
    return f"{first_name} {middle_name} {last_name}"


print(get_full_name("Alon", "test", "Ganot"))