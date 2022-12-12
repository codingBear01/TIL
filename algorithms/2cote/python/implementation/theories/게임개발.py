"""
input
4 4
1 1 0
1 1 1 1
1 0 0 1
1 0 0 1
1 1 1 1

expected output
3
"""


def mySolution():
    n, m = map(int, input().split())
    x, y, d = map(int, input().split())
    data = [list(map(int, input().split())) for _ in range(n)]
    visited = [[False for _ in range(m)] for _ in range(n)]
    directionObj = {
        0: [-1, 0],
        1: [0, 1],
        2: [1, 0],
        3: [0, -1],
    }

    moveCnt = 1
    turnCnt = 0

    while True:
        if turnCnt == 4:
            return moveCnt
        # 방향 현재 위치에서 왼쪽으로 설정
        d -= 1
        if d < 0:
            d = 3
        # 현재 위치의 왼쪽 칸 탐색용 좌표 설정
        checkingX = x + directionObj[d][0]
        checkingY = y + directionObj[d][1]

        # 탐색하는 왼쪽 칸이 바다이거나 방문한 적 있는 곳이라면?
        if data[checkingX][checkingY] == 1 or visited[checkingX][checkingY] == True:
            turnCnt += 1
            continue

        # 이동 횟수 증가
        moveCnt += 1
        # 회전 횟수 초기화
        turnCnt = 0
        # 왼쪽 칸으로 이동
        x = checkingX
        y = checkingY
        # 현재 위치 방문 표시
        visited[x][y] = True


print("mySolution", mySolution())


def exampleAnswer():
    # n, m을 공백으로 구분하여 입력받기
    n, m = map(int, input().split())
    # 현재 캐릭터의 x 좌표, y 좌표, 방향 입력받기
    x, y, direction = map(int, input().split())
    # 방문한 위치를 저장하기 위한 맵을 생성하여 False으로 초기화
    visited = [[False] * m for _ in range(n)]
    # 현재 좌표 방문 처리
    visited[x][y] = True

    # 전체 맵 정보 입력 받기
    array = [list(map(int, input().split())) for _ in range(n)]

    # 북, 동, 남, 서 방향 정의
    dx = [-1, 0, 1, 0]
    dy = [0, 1, 0, -1]

    # 시뮬레이션 시작
    count = 1
    turn_time = 0
    while True:
        # 왼쪽으로 회전
        direction -= 1
        if direction == -1:
            direction = 3
        nx = x + dx[direction]
        ny = y + dy[direction]

        # 회전 후 정면이 방문하지 않은 칸인 경우 이동
        if visited[nx][ny] == False and array[nx][ny] == 0:
            visited[nx][ny] = True
            x = nx
            y = ny
            count += 1
            turn_time = 0
            continue
        # 회전 후 정면이 이미 방문한 칸이거나 바다인 경우
        else:
            turn_time += 1

        # 네 방향 모두 갈 수 없는 경우
        if turn_time == 4:
            nx = x - dx[direction]
            ny = y - dy[direction]
            # 뒤로 갈 수 있다면 이동
            if array[nx][ny] == 0:
                x = nx
                y = ny
            # 뒤가 바다인 경우
            else:
                break
            turn_time = 0
    return count


print("exampleAnswer", exampleAnswer())
