import math
import sys

n = int(sys.stdin.readline().rstrip())


def mySolution(n):
    return n * mySolution(n - 1) if n > 1 else 1


print("mySolution", mySolution(n))


def answer1(n):
    result = 1

    for i in range(1, n + 1):
        result *= i

    return result


print("answer1", answer1(n))


def answer2(n):
    return math.factorial(n)


print("answer2", answer2(n))
