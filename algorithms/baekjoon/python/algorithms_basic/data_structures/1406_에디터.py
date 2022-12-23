"""
[Example Input]
abcd
3
P x
L
P y

[Example Output]
abcdyx

[Example Input]
abc
9
L
L
L
L
L
P x
L
B
P y

[Example Output]
yxabc

[Example Input]
dmih
11
B
B
P x
L
B
B
B
P y
D
D
P z

[Example Output]
yxz
"""

import sys


def mySolution():
    string = list(sys.stdin.readline().rstrip())
    idx = len(string)

    for _ in range(int(sys.stdin.readline().rstrip())):
        data = sys.stdin.readline().rstrip().split()
        oper = data[0]

        if oper == "P":
            string.insert(idx, data[1])
            idx += 1
        elif oper == "L" and idx > 0:
            idx -= 1
        elif oper == "D" and idx < len(string):
            idx += 1
        elif oper == "B" and idx > 0:
            del string[idx - 1]
            idx -= 1

    return "".join(string)


print("mySolution", mySolution())


def answer1():
    l_stack = list(sys.stdin.readline().rstrip())
    r_stack = []

    for _ in range(int(sys.stdin.readline().rstrip())):
        data = sys.stdin.readline().rstrip().split()
        oper = data[0]

        if oper == "P":
            l_stack.append(data[1])
        elif oper == "L" and l_stack:
            r_stack.append(l_stack.pop())
        elif oper == "D" and r_stack:
            l_stack.append(r_stack.pop())
        elif oper == "B" and l_stack:
            l_stack.pop()

    return "".join(l_stack + list(reversed(r_stack)))


print("answer1", answer1())
