key = [[0, 0, 0], [1, 0, 0], [0, 1, 1]]
lock = [[1, 1, 1], [1, 1, 0], [1, 0, 1]]


def mySolution(key, lock):
    n = len(lock)
    # lock 배열 3배로 확장
    extendedLock = [[0] * n * 3 for _ in range(n * 3)]

    for i in range(n):
        for j in range(n):
            extendedLock[i + n][j + n] = lock[i][j]

    # key를 시계방향으로 90도 회전시키는 함수
    def rotateKey(k):
        tmp = [[0] * len(k) for _ in range(len(k))]

        tmp[0][0] = k[2][0]
        tmp[0][1] = k[1][0]
        tmp[0][2] = k[0][0]
        tmp[1][0] = k[2][1]
        tmp[1][2] = k[0][1]
        tmp[2][0] = k[2][2]
        tmp[2][1] = k[1][2]
        tmp[2][2] = k[0][2]

        return tmp

    # 확장한 배열을 한 칸씩 탐색해가며 조건에 맞는지 확인
    cnt = 0
    rotatedKey = key
    while cnt < 4:
        for i in range(1, len(extendedLock) - 3):
            for j in range(1, len(extendedLock) - 3):
                tmp = lock
                for k in range(n):
                    for l in range(n):
                        if (
                            tmp[k][l] == 0
                            and rotatedKey[k][l] + extendedLock[i + k][j + l] == 1
                        ):
                            tmp[k][l] = rotatedKey[k][l] + extendedLock[i + k][j + l]
                if 0 not in tmp and 2 not in tmp:
                    return True
            cnt += 1
            rotatedKey = rotateKey(rotatedKey)

        return False


print("mySolution", mySolution(key, lock))


def exampleAnswer1(key, lock):
    # 2차원 리스트 90도 회전
    def rotate_a_matrix_by_90_degree(a):
        n = len(a)  # 행 길이 계산
        m = len(a[0])  # 열 길이 계산
        result = [[0] * n for _ in range(m)]  # 결과 리스트

        for i in range(n):
            for j in range(m):
                result[j][n - i - 1] = a[i][j]

        return result

    # 자물쇠의 중간 부분이 모두 1인지 확인
    def check(new_lock):
        lock_length = len(new_lock) // 3
        for i in range(lock_length, lock_length * 2):
            for j in range(lock_length, lock_length * 2):
                if new_lock[i][j] != 1:
                    return False
        return True

    n = len(lock)
    m = len(key)

    # 자물쇠를 기존의 3배로 확대
    new_lock = [[0] * (n * 3) for _ in range(n * 3)]

    # 새로운 자물쇠 중앙에 기존 자물쇠 넣기
    for i in range(n):
        for j in range(n):
            new_lock[i + n][j + n] = lock[i][j]

    # 열쇠를 4번 돌려가며 자물쇠와 들어맞는지 확인
    for rotation in range(4):
        key = rotate_a_matrix_by_90_degree(key)  # 열쇠 회전
        # key = list(zip(*key[::-1]))  # 열쇠 회전
        for x in range(n * 2):
            for y in range(n * 2):
                # 자물쇠에 열쇠 끼워 넣기
                for i in range(m):
                    for j in range(m):
                        new_lock[x + i][y + j] += key[i][j]
                # 자물쇠에 열쇠가 들어맞는지 검사
                if check(new_lock):
                    return True
                # 자물쇠에서 열쇠 다시 빼기
                for i in range(m):
                    for j in range(m):
                        new_lock[x + i][y + j] -= key[i][j]
    return False


print("exampleAnswer1", exampleAnswer1(key, lock))


def exampleAnswer2(key, lock):
    def rotate(arr, key, rot, r, c, m):
        for i in range(m):
            for j in range(m):
                if rot == 0:  # 회전 X
                    arr[r + i][c + j] += key[i][j]
                elif rot == 1:  # 90도 회전
                    arr[r + i][c + j] += key[m - 1 - j][i]
                elif rot == 2:  # 180도 회전
                    arr[r + i][c + j] += key[m - 1 - i][m - 1 - j]
                else:  # 270도 회전
                    arr[r + i][c + j] += key[j][m - 1 - i]

    def check(arr, offset, n):
        for i in range(n):
            for j in range(n):
                if arr[offset + i][offset + j] != 1:
                    return False
        return True

    # 자물쇠 중앙에서 열쇠가 떨어진 거리
    offset = len(key) - 1
    n = len(lock)
    m = len(key)

    # 열쇠의 최대 탐색 범위는 offset + 자물쇠 길이
    for r in range(offset + n):
        for c in range(offset + n):
            # 열쇠를 총 4번 회전
            for rot in range(4):
                # 최대 크기는 60(20 * 3)인데 열쇠와 자물쇠는 최소 1칸은 겹쳐야 하므로 2를 빼서 전체 배열 생성
                arr = [[0] * 58 for _ in range(58)]
                # 배열 중심부에 자물쇠 생성
                for i in range(n):
                    for j in range(n):
                        arr[offset + i][offset + j] = lock[i][j]

                # 열쇠 회전
                rotate(arr, key, rot, r, c, m)

                # 열쇠가 자물쇠에 들어맞는지 확인
                if check(arr, offset, n):
                    return True

    return False


print("exampleAnswer2", exampleAnswer2(key, lock))
