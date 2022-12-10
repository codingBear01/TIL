"""
input
5
R R R U D D

expected output
3 4

x = 행(row) --
y = 열(column) |

U, D = 행 변화
L, R = 열 변화
"""
n = int(input())
plans = input().split()


def mySolution(n, plans):
    x, y = 1, 1

    for m in plans:
        if (
            (m == "D" and x + 1 > n)
            or (m == "U" and x - 1 < 1)
            or (m == "R" and y + 1 > n)
            or (m == "L" and y - 1 < 1)
        ):
            continue
        elif m == "D" and x + 1 < n:
            x += 1
        elif m == "U" and x - 1 > 1:
            x -= 1
        elif m == "R" and y + 1 < n:
            y += 1
        elif m == "L" and y - 1 > 1:
            y -= 1

    return x, y


print("mySolution", mySolution(n, plans))


def exampleAnswer(n, plans):
    x, y = 1, 1

    # L, R, U, D에 따른 이동 방향
    dx = [0, 0, -1, 1]
    dy = [-1, 1, 0, 0]
    move_types = ["L", "R", "U", "D"]

    # 이동 계획을 하나씩 확인
    for plan in plans:
        # 이동 후 좌표 구하기
        for i in range(len(move_types)):
            if plan == move_types[i]:
                nx = x + dx[i]
                ny = y + dy[i]
        # 공간을 벗어나는 경우 무시
        if nx < 1 or ny < 1 or nx > n or ny > n:
            continue
        # 이동 수행
        x, y = nx, ny

    return x, y


print("exampleAnswer", exampleAnswer(n, plans))
