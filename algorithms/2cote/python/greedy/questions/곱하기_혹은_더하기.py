"""
0 ~ 9로 이루어진 문자열 s가 주어졌을 때 왼쪽부터 오른쪽으로 하나씩 모든 숫자를 확인하며 숫자 사이에 '*' 혹은 '+' 연산자를 넣어 만들 수 있는 가장 큰 수를 구하시오.
문자열 reverse = true로 한 다음 숫자 사이 곱하기 넣기
0이라면 더하고 0이 아니라면 곱하기

ex)
02984 -> ((((0 + 2) * 9) * 8) * 4) = 576

input
02984
expected output
576

input
567
expected output
210

Python에서 list(map(int, input()))과 같이 입력값을 받으면
JavaScript에서 String.split('')과 마찬가지로
문자열을 하나하나 쪼갠 값을 담은 배열로 반환해줌
"""


def mySolution():
    s = list(map(int, input()))
    result = 0

    for c in s:
        # 1이하인 경우는 더하기가 더 큰 수를 만드는데 그 점을 간과함.
        if result == 0 or c == 0:
            result += c
        else:
            result *= c

    return result


print("mySolution", mySolution())


def exampleAnswer():
    data = input()
    # 첫 번째 문자를 숫자로 변경하여 대입
    result = int(data[0])

    for i in range(1, len(data)):
        # 두 수 중에서 하나라도 '0' 혹은 '1인' 경우 더하기 수행, 나머지 경우 곱하기 수행
        num = int(data[i])
        if num <= 1 or result <= 1:
            result += num
        else:
            result *= num

    return result


print("exampleAnswer", exampleAnswer())
