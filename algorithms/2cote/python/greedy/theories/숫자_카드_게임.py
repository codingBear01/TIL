"""
input
3 3
3 1 2
4 1 4
2 2 2

expected output
2

input
2 4
7 3 1 8
3 3 3 4

expected output
3
"""


def mySolution():
    n, m = map(int, input().split())
    cards = []
    for _ in range(n):
        cards.append(list(map(int, input().split())))

    minNum = 0
    for card in cards:
        nowMin = min(card)
        if nowMin > minNum:
            minNum = nowMin
    return minNum


print("mySolution", mySolution())

# min() 함수를 이용하는 답안 예시
def exampleAnswer1():
    # n, m을 공백으로 구분하여 입력받기
    n, m = map(int, input().split())

    result = 0
    # 한 줄씩 입력받아 확인
    for i in range(n):
        data = list(map(int, input().split()))
        # 현재 줄에서 '가장 작은 수' 찾기
        minVal = min(data)
        # '가장 작은 수'들 중에서 가장 큰 수 찾기
        result = max(result, minVal)
    return result


print("exampleAnswer1", exampleAnswer1())


# 2중 반복문을 이용하는 답안 예시
def exampleAnswer2():
    # n, m을 공백으로 구분하여 입력받기
    n, m = map(int, input().split())

    result = 0
    # 한 줄씩 입력받아 확인
    for i in range(n):
        data = list(map(int, input().split()))
        # 현재 줄에서 '가장 작은 수' 찾기
        minVal = 10001
        for a in data:
            minVal = min(minVal, a)
        # '가장 작은 수'들 중에서 가장 큰 수 찾기
        result = max(result, minVal)

    return result


print("exampleAnswer2", exampleAnswer2())
