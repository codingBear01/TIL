"""
[Example Input]
7
1 1 2 3 4 2 1

[Example Output]
-1 -1 1 2 2 1 -1
"""
from collections import Counter
import sys


n = int(sys.stdin.readline().rstrip())
nums = list(map(int, input().split()))


def mySolution(n, nums):
    ngf = [-1] * n
    stack = []
    appear = dict()

    for num in nums:
        try:
            appear[num] += 1
        except:
            appear[num] = 1

    for i in range(n):
        while stack and appear[nums[stack[-1]]] < appear[nums[i]]:
            ngf[stack.pop()] = nums[i]
        stack.append(i)

    print("mySolution", *ngf)


mySolution(n, nums)


def answer1(n, nums):
    cnt = Counter(nums)
    ngf = [-1] * n
    stack = []

    for i in range(n):
        while stack and cnt[nums[stack[-1]]] < cnt[nums[i]]:
            ngf[stack.pop()] = nums[i]
        stack.append(i)

    print("answer1", *ngf)


answer1(n, nums)
