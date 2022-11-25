"""
0과 1로 이루어진 문자열 s에서
연속된 하나 이상의 숫자를 바꾸어
모두 같은 수로 만드는 최소 횟수?

ex)
s = 0001100
1. 전체를 바꾸면 1110011
2. 4 ~ 5번째 문자를 바꾸면 1111111이 되어 두 번 만에 모두 같은 숫자됨.

but 처음부터 4 ~ 5번째 문자만 0으로 바꾸면 한 번에 0000000이 되어 1번 만에 모두 같은 숫자로 만들 수 있음.

input
0001100

expected output
1

입력값을 앞에서부터 하나씩 확인하며 0에서 1로 변경하거나 1에서 0으로 변경하는 횟수를 각각 증가시키면 됨.
계산을 마친 후 '전부 0으로 바꾸는 경우'와 '전부 1로 바꾸는 경우' 중 더 적은 횟수를 반환하면 됨.
"""


def exampleAnswer():
    data = input()
    count0 = 0  # 전부 0으로 바꾸는 횟수
    count1 = 0  # 전부 1로 바꾸는 횟수

    # 첫 번째 원소에 대해서 처리
    if data[0] == "1":  # 숫자가 1일 경우 0으로 바꾸기 때문에 count0 증가
        count0 += 1
    else:  # 숫자가 0일 경우 1로 바꾸기 때문에 count1 증가
        count1 += 1

    # 현재 원소와 다음 원소를 대조하며 계산
    for i in range(len(data) - 1):
        if data[i] != data[i + 1]:
            # 다음 수가 1인 경우
            if data[i + 1] == "1":
                count0 += 1
            # 다음 수가 0인 경우
            else:
                count1 += 1

    return min(count0, count1)


print("exampleAnswer", exampleAnswer())
