"""
input
aabbaccc
expected output
7

input
ababcdcdababcdcd
expected output
9

input
abcabcdede
expected output
8

input
abcabcabcabcdededededede
expected output
14

input
xababcdcdababcdcd
expected output
17
"""
s = input()


def exampleAnswer(s):
    answer = len(s)
    # 1개 단위(step)부터 압축 단위를 늘려가며 확인
    for step in range(1, len(s) // 2 + 1):
        compressed = ""
        # 앞에서부터 step만큼 문자열 추출
        prev = s[0:step]
        count = 1
        # step 크기만큼 증가시키며 이전 문자열과 비교
        for j in range(step, len(s), step):
            # 이전 상태와 동일하다면 압축 횟수(count) 증가
            if prev == s[j : j + step]:
                count += 1
            # 다른 문자열이 나와 더 이상 압축을 못 하는 경우
            else:
                compressed += str(count) + prev if count >= 2 else prev
                # 다시 상태 초기화
                prev = s[j : j + step]
                count = 1
        # 남아 있는 문자열 처리
        compressed += str(count) + prev if count >= 2 else prev
        # 만들어지는 압축 문자열이 가장 짧은 것이 정답
        answer = min(answer, len(compressed))

    return answer


print("exampleAnswer", exampleAnswer(s))
