"""
소문자 대문자 숫자 공백
"""
import sys


def mySolution():
    while True:
        low, up, num, space = 0, 0, 0, 0
        data = sys.stdin.readline().rstrip("\n")

        if not data:
            break

        for c in data:
            if c.islower():
                low += 1
            elif c.isupper():
                up += 1
            elif c.isdigit():
                num += 1
            elif c.isspace():
                space += 1

        print(low, up, num, space)


mySolution()
