"""
input
123402
expected output
LUCKY

input
7755
expected output
READY
"""
n = input()


def mySolution(n):
    center = len(n) // 2
    left = sum(map(int, n[0:center]))
    right = sum(map(int, n[center : len(n)]))

    if left == right:
        return "LUCKY"
    else:
        return "READY"


print("mySolution", mySolution(n))


def exampleAnswer(n):
    length = len(n)
    summary = 0

    # 왼쪽 부분 합
    for i in range(length // 2):
        summary += int(n[i])

    # 오른쪽 부분 합
    for i in range(length // 2, length):
        summary -= int(n[i])

    # 왼쪽 부분의 합과 오른쪽 부분의 합이 동일한지 검사
    if summary == 0:
        return "LUCKY"
    else:
        return "READY"


print("exampleAnswer", exampleAnswer(n))
