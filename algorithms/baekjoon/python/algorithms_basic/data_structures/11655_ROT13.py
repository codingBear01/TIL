"""
[Upper]
A 65
N 78
Z 90

[Lower]
a 97
n 110
z 122
"""
import sys

# data = sys.stdin.readline().rstrip()
data = "Baekjoon Online Judge"


def mySolution(data):
    result = ""

    for i in data:
        idx = ord(i)

        if 97 <= idx < 110 or 65 <= idx < 78:
            result += chr(ord(i) + 13)
        elif 110 <= idx < 123 or 78 <= idx < 91:
            result += chr(ord(i) - 13)
        else:
            result += i

    return result


print("mySolution", mySolution(data))


def answer1(data):
    result = ""

    for i in data:
        if "a" <= i <= "z":
            result += chr((ord(i) + 13) if i <= "m" else (ord(i) - 13))
        elif "A" <= i <= "Z":
            result += chr((ord(i) + 13) if i <= "M" else (ord(i) - 13))
        else:
            result += i

    return result


print("answer1", answer1(data))
