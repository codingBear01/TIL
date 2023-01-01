import sys
import math

m, n = map(int, sys.stdin.readline().rstrip().split())


def answer1(m, n):
    print("answer1")

    def isPrime(num):
        if num == 1:
            return False
        else:
            for i in range(2, int(num**0.5) + 1):
                if num % i == 0:
                    return False
            return True

    for i in range(m, n + 1):
        if isPrime(i):
            print(i)


answer1(m, n)


def answer2(m, n):
    print("answer2")

    arr = [True for _ in range(n + 1)]
    arr[0], arr[1] = False, False

    for i in range(2, int(math.sqrt(n)) + 1):
        if arr[i]:
            for j in range(i * 2, n + 1, i):
                arr[j] = False

    for i in range(m, n + 1):
        if arr[i]:
            print(i)


answer2(m, n)


def answer3(m, n):
    print("answer3")

    for i in range(m, n + 1):
        if i == 1:
            continue

        for j in range(2, int(i**0.5) + 1):
            if i % j == 0:
                break
        else:
            print(i)


answer3(m, n)
