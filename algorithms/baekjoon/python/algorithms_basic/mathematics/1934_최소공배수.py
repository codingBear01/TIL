import math
import sys

n = int(sys.stdin.readline().rstrip())


def answer1(n):
    def whileVer(a, b):
        while b > 0:
            a, b = b, a % b

    def recursionVer(a, b):
        if b == 0:
            return a
        else:
            return recursionVer(b, a % b)

    for _ in range(n):
        a, b = map(int, sys.stdin.readline().rstrip().split())
        multiple = a * b

        # whileVer(a, b)
        recursionVer(a, b)

        gcd = a
        lcm = multiple // gcd

        print(lcm)


answer1(n)


def answer2(n):
    for _ in range(n):
        a, b = map(int, sys.stdin.readline().rstrip().split())

        print(math.lcm(a, b))


answer2(n)
