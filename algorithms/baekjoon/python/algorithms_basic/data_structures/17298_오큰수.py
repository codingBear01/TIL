"""
[Example Input]
4
3 5 2 7
[Example Output]
5 7 7 -1

[Example Input]
4
9 5 4 8
[Example Output]
-1 8 8 -1
"""
import sys

n = int(sys.stdin.readline().rstrip())
nums = list(map(int, sys.stdin.readline().rstrip().split()))


def mySolution(n, nums):
    stack = []

    for i in range(n):
        compared = -1

        for j in range(i + 1, n):
            if nums[j] > nums[i]:
                compared = nums[j]
                break
            else:
                compared = -1

        stack.append(str(compared))

    return " ".join(stack)


print("mySolution", mySolution(n, nums))


def answer(n, nums):
    nge = [-1] * n
    stack = []

    for i in range(n):
        while stack and nums[stack[-1]] < nums[i]:
            nge[stack.pop()] = nums[i]
        stack.append(i)

    print("answer", *nge)


answer(n, nums)
