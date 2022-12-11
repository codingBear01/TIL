"""
input
a1
expected output
2

input
c2
expected output
6

ord('a') # 97 -> 인자로 입력 받은 문자의 유니코드 정수 반환
chr(97) # 'a' -> 인자로 입력 받은 숫자의 유니코드 문자 반환
"""


def mySolution():
    col, row = [c for c in str(input())]

    colObj = {
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6,
        "g": 7,
        "h": 8,
    }

    x = int(row)
    y = colObj[col]
    # [x, y]
    moveTypes = [[-2, 1], [-2, -1], [2, 1], [2, -1], [-1, 2], [1, 2], [-1, -2], [1, -2]]

    cnt = 0

    for move in moveTypes:
        nx = x + move[0]
        ny = y + move[1]

        if nx < 1 or nx > 8 or ny < 1 or ny > 8:
            continue

        cnt += 1

    return cnt


print("mySolution", mySolution())


def exampleAnswer():
    # 현재 나이트의 위치 입력받기
    input_data = input()
    row = int(input_data[1])
    col = int(ord(input_data[0])) - int(ord("a")) + 1

    # 나이트가 이동할 수 있는 8가지 방향 정의
    steps = [(-2, -1), (-1, -2), (1, -2), (2, -1), (2, 1), (1, 2), (-1, 2), (-2, 1)]

    # 8가지 방향에 대하여 각 위치로 이동이 가능한지 확인
    result = 0
    for step in steps:
        # 이동하고자 하는 위치 확인
        next_row = row + step[0]
        next_col = col + step[1]
        # 해당 위치로 이동이 가능하다면 카운트 증가
        if next_row >= 1 and next_row <= 8 and next_col >= 1 and next_col <= 8:
            result += 1

    return result


print("exampleAnswer", exampleAnswer())
