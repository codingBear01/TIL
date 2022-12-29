import string
import sys

# data = sys.stdin.readline().rstrip()
data = "baekjoon"

# arr
def mySolution1(data):
    result = [0] * 26

    for i in range(len(data)):
        result[ord(data[i]) - ord("a")] += 1

    return " ".join(map(str, result))


print("mySolution1", mySolution1(data))

# dict
def mySolution2(data):
    dic = dict()

    for c in string.ascii_lowercase:
        dic[c] = 0

    for c in data:
        dic[c] += 1

    return " ".join(map(str, dic.values()))


print("mySolution2", mySolution2(data))


# count
def answer1(data):
    result = [0] * 26

    for i in data:
        result[ord(i) - 97] = data.count(i)

    return " ".join(map(str, result))


print("answer1", answer1(data))
