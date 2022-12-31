"""
[최대공약수 GCD(Greatest Common Divisor)]
2개의 자연수 a와 b가 a > b일 때 a와 b의 최대공약수는 다음과 같다. a를 b로 나눈 나머지를 r이라고 한다면 a와 b의 최대공약수는 b와 r의 최대공약수와 같다.

[최소공배수 LCM(Least Common Multiple)]
2개의 자연수 a와 b의 최소공배수는 a와 b를 곱한 값에 a와 b의 최대공약수를 나눈 값과 같다.
"""
import sys
import math

a, b = map(int, sys.stdin.readline().rstrip().split())


def answer1(a, b):
    def gcd(a, b):
        # 재귀
        if b == 0:
            return a
        else:
            return gcd(b, a % b)

    # while 반복문
    # while (b != 0):
    #     a, b = b, a % b
    # return a

    def lcm(a, b):
        return a * b // gcd(a, b)

    print(gcd(a, b), lcm(a, b), sep="\n")


answer1(a, b)


def answer2(a, b):
    print(math.gcd(a, b), math.lcm(a, b), sep="\n")


answer2(a, b)
