"""
input
6
3
3 4
2 5
5 3
3
3 D
15 L
17 D

expected output
9

input
10
4
1 2
1 3
1 4
1 5
4
8 D
10 D
11 D
13 L

expected output
21

input
10
5
1 5
1 3
1 2
1 6
1 7
4
8 D
10 D
11 D
13 L

expected output
13

뱀 사과 먹기 게임 구현

- 뱀이 이리저리 기어 다니다가 벽 또는 자기 자신의 몸과 부딪히면 게임 over
- 맵 크기는 n * n
- 뱀은 (0, 0)에서 시작
- 뱀의 길이는 1
- 맨 처음 오른쪽을 향하고 있음

다음 규칙에 따라 매 초마다 이동
- 몸길이를 늘려 머리를 다음 칸에 위치
- 이동한 칸에 사과가 있다면 그 칸에 있던 사과는 없어지고 꼬리는 제자리
- 이동한 칸에 사과가 없다면 몸길이를 줄여서 꼬리가 위치한 칸을 비워줌
"""
n = int(input())
k = int(input())
apples = [list(map(int, input().split())) for _ in range(k)]
l = int(input())
turnings = []
for i in range(l):
    var = input().split()
    turnings.append([int(var[0]), var[1]])


def mySolution(n, k, apples, l, turnings):
    map = [[0] * n for _ in range(n)]
    # 맵에 사과 생성
    for apple in apples:
        row = apple[0]
        col = apple[1]
        map[row - 1][col - 1] = "a"

    # 뱀 위치
    currX = 0
    currY = 0
    # 상하좌우
    move_types = {"상": [-1, 0], "하": [1, 0], "좌": [0, -1], "우": [0, 1]}
    direction = "우"
    curr_turning_type = "D"

    turn_cnt = 0  # 턴한 횟수
    play_time = 0
    turn_sec = turnings[turn_cnt][0]

    while True:
        # 플레이 타임과 회전 기준 시각이 같다면 현재 전환 타입을 변경
        # 같지 않다면 현재 좌표값 갱신 로직 진행
        if play_time == turn_sec:
            turn_cnt += 1
            if turn_cnt >= len(turnings):
                turn_cnt -= 1
            turn_sec = turnings[turn_cnt][0]
            if direction == "상":
                if curr_turning_type == "D":
                    direction = "우"
                else:
                    direction = "좌"
            elif direction == "하":
                if curr_turning_type == "D":
                    direction = "좌"
                else:
                    direction = "우"
            elif direction == "좌":
                if curr_turning_type == "D":
                    direction = "상"
                else:
                    direction = "하"
            else:
                if curr_turning_type == "D":
                    direction = "하"
                else:
                    direction = "상"

            curr_turning_type = turnings[turn_cnt][1]

        # 뱀의 현재 좌표에 더해갈 좌표값 갱신
        x = move_types[direction][1]
        y = move_types[direction][0]

        # 뱀의 현재 좌표 갱신
        currX += x
        currY += y
        # 뱀의 현재 좌표값이 0보다 작으면 play_time 반환
        # 아니라면 맵 탐색 로직 진행
        # 매 턴마다 1초씩 증가
        play_time += 1
        if currX < 0 or currY < 0 or currX > n - 1 or currY > n - 1:
            return play_time
        if map[currY][currX] == 1:
            return play_time
        # 맵 탐색
        # 사과 있는지 확인하고
        # 사과가 있다면? 탐색칸 1로 바꾸고 전 칸도 1로
        # 1이라면? 플레이 시간 반환
        # 사과가 없다면? 탐색칸 1로 바꾸고 전 칸 0으로
        if map[currY][currX] == "a":
            map[currY][currX] = 1
            map[currY - y][currX - x] = 1
        else:
            map[currY][currX] = 1
            map[currY - y][currX - x] = 0


print("mySolution", mySolution(n, k, apples, l, turnings))


def exampleAnswer1():
    n = int(input())
    k = int(input())
    data = [[0] * (n + 1) for _ in range(n + 1)]  # 맵 정보
    info = []  # 방향 회전 정보

    # 맵에 사과 위치 표시
    for _ in range(k):
        a, b = map(int, input().split())
        data[a][b] = 1

    # 방향 회전 정보 입력
    l = int(input())
    for _ in range(l):
        x, c = input().split()
        info.append((int(x), c))

    # 처음에는 오른쪽을 보고 있으므로(동, 남, 서, 북)
    dx = [0, 1, 0, -1]
    dy = [1, 0, -1, 0]

    # 방향 회전 함수
    def turn(direction, c):
        if c == "L":
            direction = (direction - 1) % 4
        else:
            direction = (direction + 1) % 4
        return direction

    x, y = 1, 1  # 뱀의 머리 위치
    data[x][y] = 2  # 뱀이 존재하는 위치는 2로 표시
    direction = 0  # 처음에는 동쪽을 보고 있음
    time = 0  # 플레이 시간
    index = 0  # 다음에 회전할 정보
    q = [(x, y)]  # 뱀이 차지하고 있는 위치(꼬리가 앞쪽)

    while True:
        nx = x + dx[direction]
        ny = y + dy[direction]

        # 맵 범위 안에 있고, 뱀의 몸통이 없는 위치라면
        if 1 <= nx and nx <= n and 1 <= ny and ny <= n and data[nx][ny] != 2:
            # 사과가 없다면 이동 후에 꼬리 제거
            if data[nx][ny] == 0:
                data[nx][ny] = 2
                q.append((nx, ny))
                px, py = q.pop(0)
                data[px][py] = 0

            # 사과가 있다면 이동 후에 꼬리 그대로 두기
            if data[nx][ny] == 1:
                data[nx][ny] = 2
                q.append((nx, ny))

        # 벽이나 뱀의 몸통과 부딪혔다면
        else:
            time += 1
            break

        x, y = nx, ny  # 다음 위치로 머리를 이동
        time += 1
        if index < l and time == info[index][0]:  # 회전할 시간인 경우 회전
            direction = turn(direction, info[index][1])
            index += 1

    return time


print("exampleAnswer1", exampleAnswer1())
