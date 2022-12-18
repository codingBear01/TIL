"""
build_frame = [x, y, a, b]
x, y: 설치, 삭제할 [가로, 세로] 좌표
a: 0 기둥, 1 보
b: 0 삭제, 1 설치

return = [x, y, a]
x, y: 구조물 좌표
a: 0 기둥, 1 보
"""

n = 5
# build_frame = [
#     [1, 0, 0, 1],
#     [1, 1, 1, 1],
#     [2, 1, 0, 1],
#     [2, 2, 1, 1],
#     [5, 0, 0, 1],
#     [5, 1, 0, 1],
#     [4, 2, 1, 1],
#     [3, 2, 1, 1],
# ] # [[1,0,0],[1,1,1],[2,1,0],[2,2,1],[3,2,1],[4,2,1],[5,0,0],[5,1,0]]
build_frame = [
    [0, 0, 0, 1],
    [2, 0, 0, 1],
    [4, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [2, 1, 1, 1],
    [3, 1, 1, 1],
    [2, 0, 0, 0],
    [1, 1, 1, 0],
    [2, 2, 0, 1],
] # [[0,0,0],[0,1,1],[1,1,1],[2,1,1],[3,1,1],[4,0,0]]


def exampleAnswer(n, build_frame):
    # 현재 설치된 구조물이 조건을 충족하는 구조물인지 확인하는 함수
    def possible(answer):
        for x, y, stuff in answer:
            if stuff == 0:  # 설치된 것이 '기둥'인 경우
                if (
                    y == 0  # 바닥 위
                    or [x - 1, y, 1] in answer  # 보의 한쪽 끝부분 위
                    or [x, y, 1] in answer  # 보의 한쪽 끝부분 위
                    or [x, y - 1, 0] in answer  # 다른 기둥 위
                ):
                    continue
                return False  # 조건을 충족하지 못한다면 False 반환
            elif stuff == 1:  # 설치된 것이 '보'인 경우
                if (
                    [x, y - 1, 0] in answer  # 한쪽 끝부분이 기둥 위
                    or [x + 1, y - 1, 0] in answer  # 한쪽 끝부분이 기둥 위
                    or (
                        [x - 1, y, 1] in answer and [x + 1, y, 1] in answer
                    )  # 양쪽 끝부분이 다른 보와 동시에 연결
                ):
                    continue
                return False  # 조건을 충족하지 못한다면 False 반환
        return True

    answer = []
    for frame in build_frame:  # 작업의 개수는 최대 1000개
        x, y, stuff, operate = frame

        if operate == 0:  # 삭제하는 경우
            answer.remove([x, y, stuff])  # 일단 삭제 시도
            if not possible(answer):  # 조건을 충족하는 구조물인지 확인
                answer.append([x, y, stuff])  # 조건 충족하지 않을 시 다시 설치

        if operate == 1:  # 설치하는 경우
            answer.append([x, y, stuff])  # 일단 설치 시도
            if not possible(answer):  # 조건을 충족하는 구조물인지 확인
                answer.remove([x, y, stuff])  # 조건 충족하지 않을 시 다시 삭제

    return sorted(answer)  # 정렬된 결과를 반환


print("exampleAnswer", exampleAnswer(n, build_frame))
