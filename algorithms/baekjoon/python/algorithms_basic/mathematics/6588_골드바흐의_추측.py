import sys
import math


def mySolution():  # 시간초과
    print("mySolution")

    def isPrime(num):
        if num == 1:
            return False
        else:
            for i in range(2, int(math.sqrt(num)) + 1):
                if num % i == 0:
                    return False
            return True

    while True:
        num = int(sys.stdin.readline().rstrip())

        if num == 0:
            return

        sosu = []

        for i in range(1, num + 1):
            if isPrime(i):
                sosu.append(i)

        for s in reversed(sosu):
            left = num - s

            if left in sosu:
                print(f"{num} = {left} + {s}")
                break


mySolution()


def answer1():
    print("answer1")
    n = 1000000
    arr = [True for _ in range(n + 1)]

    for i in range(2, int(n**0.5) + 1):
        if arr[i]:
            for j in range(i + i, n + 1, i):
                arr[j] = False

    while True:
        num = int(sys.stdin.readline().rstrip())

        if num == 0:
            break

        for i in range(3, len(arr)):
            if arr[i] and arr[num - i]:
                print(f"{num} = {i} + {num - i}")
                break


answer1()


def answer2():
    print("answer2")

    n = 1000000
    arr = [False, False] + [True] * n

    for i in range(2, int(n**0.5) + 1):
        if arr[i]:
            for j in range(i + i, n + 1, i):
                arr[j] = False

    while True:
        num = int(sys.stdin.readline().rstrip())

        if num == 0:
            break

        a = 0
        b = num

        for _ in range(n):
            if arr[a] and arr[b]:
                print(f"{num} = {a} + {b}")
                break
            a += 1
            b -= 1
        else:
            print("Goldbach's conjecture is wrong.")


answer2()


def answer3():
    print("answer3")

    def isPrime(num):
        if num == 1:
            return False

        for i in range(2, int(num**0.5) + 1):
            if num % i == 0:
                return False

        return True

    while True:
        num = int(sys.stdin.readline().rstrip())

        if num == 0:
            break

        for i in range(3, num + 1, 2):
            if isPrime(i) and isPrime(num - i):
                print(f"{num} = {i} + {num - i}")
                break


answer3()
