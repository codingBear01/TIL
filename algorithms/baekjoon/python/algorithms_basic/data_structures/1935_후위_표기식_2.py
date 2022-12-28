"""
[Example Input]
5
ABC*+DE/-
1
2
3
4
5

[Example Output]
6.20

[Example Input]
1
AA+A+
1

[Example Output]
3.00
"""
import sys

n = int(sys.stdin.readline().rstrip())
data = list(sys.stdin.readline().rstrip())


def mySolution(n, data):
    dic = dict()

    for c in data:
        if c.isalpha():
            dic[c] = 0

    for key in dic:
        val = sys.stdin.readline().rstrip()
        dic[key] = val

    for i in range(len(data)):
        if data[i] in dic:
            data[i] = dic[data[i]]

    num_stack = []
    for c in data:
        if c.isdecimal():
            num_stack.append(float(c))
        else:
            right = num_stack.pop()
            left = num_stack.pop()

            if c == "+":
                num_stack.append(left + right)
            elif c == "-":
                num_stack.append(left - right)
            elif c == "*":
                num_stack.append(left * right)
            elif c == "/":
                num_stack.append(left / right)

    print("mySolution", "{:.2f}".format(num_stack[0]))


mySolution(n, data)


def answer1(n, data):
    nums = [float(sys.stdin.readline().rstrip()) for _ in range(n)]

    stack = []

    for c in data:
        if c.isalpha():
            idx = ord(c) - ord("A")
            stack.append(nums[idx])
        else:
            right = stack.pop()
            left = stack.pop()

            stack.append(eval(str(left) + c + str(right)))

    print(format(stack[0], ".2f"))


answer1(n, data)
