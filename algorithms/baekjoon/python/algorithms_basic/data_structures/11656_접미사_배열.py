import sys

data = sys.stdin.readline().rstrip()
# data = "baekjoon"


def mySolution(data):
    result = list()

    for i in range(len(data)):
        tmp = ""
        for j in range(i, len(data)):
            tmp += data[j]
        result.append(tmp)

    result.sort()

    for i in result:
        print(i)


mySolution(data)


def answer1(data):
    result = []

    for i in range(len(data)):
        result.append(data[i:])

    for i in sorted(result):
        print(i)


answer1(data)
