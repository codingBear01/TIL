"""
n = 볼링공 개수
m = 가장 큰 숫자

1부터 m까지의 숫자 두 개를 조합할 수 있는 경우의 수?

input 
5 3
1 3 2 3 2
expected output
8

input
8 5
expected output
1 5 4 3 2 4 5 2

해설
먼저 무게마다 볼링공이 몇 개 있는지를 계산
ex)
무게 1: 1개
무게 2: 2개
무게 3: 2개
array [0, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0]

이때 A가 특정한 무게의 볼링공을 선택했을 때 B가 무게가 다른 볼링공을 선택할 수 있는 경우를 계산하면 됨.
이미 조합된 경우는 제외하므로 단계가 진행됨에 따라 'B가 선택할 수 있는 볼링공 개수'는 줄어듦.
하나의 리스트 변수를 선언해 각 무게별로 볼링공이 몇 개 존재하는지 기록하면서 풀면 됨.
"""
n, m = map(int, input().split())
data = list(map(int, input().split()))


def mySolution(n, m, data):
    cnt = 0

    for i in range(n):
        for j in range(i + 1, n):
            one = data[i]
            two = data[j]

            if one != two:
                cnt += 1

    return cnt


print("mySolution", mySolution(n, m, data))


def exampleAnswer(n, m, data):
    # 1부터 10까지 무게를 담을 리스트
    array = [0] * 11

    for x in data:
        # 각 무게에 해당하는 볼링공 개수 세기
        array[x] += 1

    result = 0

    # 1부터 m까지 각 무게에 대해 처리
    for i in range(1, m + 1):
        n -= array[i]  # 무게가 i인 볼링공의 개수(A가 선택할 수 있는 개수) 제외
        result += array[i] * n  # B가 선택하는 경우의 수와 곱하기

    return result


print("exampleAnswer", exampleAnswer(n, m, data))
