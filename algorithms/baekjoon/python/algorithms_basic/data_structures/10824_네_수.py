"""
[Example Input]
10 20 30 40

[Example Output]
4060
"""
import sys

a, b, c, d = sys.stdin.readline().rstrip().split()


def mySolution(a, b, c, d):
    return int(a + b) + int(c + d)


print("mySolution", mySolution(a, b, c, d))
