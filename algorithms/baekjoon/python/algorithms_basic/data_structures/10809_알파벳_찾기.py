import string
import sys

data = sys.stdin.readline().rstrip()


def mySolution(data):
    result = [-1] * 26

    for i in range(len(data)):
        if result[ord(data[i]) - ord("a")] == -1:
            result[ord(data[i]) - ord("a")] = i

    return " ".join(map(str, result))


print("mySolution", mySolution(data))


def answer1(data):
    print("answer1", end=" ")

    for c in string.ascii_lowercase:
        print(data.index(c), end=" ") if c in data else print(-1, end=" ")


answer1(data)


def answer2(data):
    print("\nanswer2", end=" ")

    for c in string.ascii_lowercase:
        print(data.find(c), end=" ")


answer2(data)
