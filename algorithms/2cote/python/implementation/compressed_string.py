string = "happinesssadness"


def compressWithWhile(string):
    index = 0
    compressed_string = ""
    string_len = len(string)

    while index != string_len:
        count = 1

        while index < string_len - 1 and string[index] == string[index + 1]:
            count += 1
            index += 1

        if count == 1:
            compressed_string += string[index]
        else:
            compressed_string += string[index] + str(count)

        index += 1

    return compressed_string


print("compressWithWhile", compressWithWhile(string))

from itertools import takewhile, dropwhile


def compressWithItertools(string):
    if not string:
        return ""
    return (
        str(len(list(takewhile(lambda x: x == string[0], string))))
        + string[0]
        + compressWithItertools(
            "".join(list(dropwhile(lambda x: x == string[0], string)))
        )
    )


print("compressWithItertools", compressWithItertools(string))


def compressWithFor(string):
    compressed = ""
    count = 1

    for i in range(len(string) - 1):
        if string[i] == string[i + 1]:
            count += 1
        else:
            compressed += string[i] + str(count)
            count = 1

    compressed += string[i + 1] + str(count)

    return compressed


print("compressWithFor", compressWithFor(string))
