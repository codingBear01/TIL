from collections import deque
import sys

n, k = map(int, sys.stdin.readline().rstrip().split())


def mySolution(n, k):
    nums = []
    result = []
    
    for num in range(1, n + 1):
        nums.append(num)

    idx = k - 1

    while nums:
        left = []
        right = []
        if len(nums) >= k:
            popped = nums.pop(idx)
            result.append(str(popped))
            for i in range(idx, len(nums)):
                left.append(nums[i])
            for i in range(0, idx):
                right.append(nums[i])
            nums = left + right
        else :
            popped = nums.pop(0)
            result.append(str(popped))
            for num in nums:
                left.append(num)
            nums = left

    return f"<{', '.join(result)}>"

    
    
print('mySolution', mySolution(n, k))

def answer1(n, k):
    people = deque()
    for i in range(1, n+ 1): people.append(i)
    result = []

    while people:
        for _ in range(k - 1):
            people.append(people.popleft())
            
        result.append(people.popleft())
    
    return str(result).replace('[', '<').replace(']', '>')

print('answer1', answer1(n, k))


def answer2(n, k):
    people = [i for i in range(1, n + 1)]
    result = []
    idx = 0
    
    for _ in range(n):
        idx += k - 1
        
        if idx >= len(people):
            idx %= len(people)
            
        result.append(str(people.pop(idx)))
    
    return f"<{', '.join(result)}>"
  
print('answer2', answer2(n, k))
