"""
input
K1KA5CB7

expected output
ABCKK13

input
AJKDLSI412K4JSJ9D

expected output
ADDIJJJKKLSS20
"""
input = input()


def mySolution(input):
    nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

    chr = []
    num = 0
    for i in input:
        if i in nums:
            num += int(i)
        else:
            chr.append(i)

    chr.sort()

    result = "".join(chr) + str(num)

    return result


print("mySolution", mySolution(input))


def exampleAnswer(input):
    result = []
    value = 0

    # 문자를 하나씩 확인
    for x in input:
        # 알파벳인 경우 result 리스트에 삽입
        if x.isalpha():
            result.append(x)
        # 숫자인 경우 value에 더하기
        else:
            value += int(x)

    # 알파벳 오름차순 정렬
    result.sort()

    # 숫자가 하나라도 존재하는 경우 가장 뒤에 삽입
    if value != 0:
        result.append(str(value))

    # 리스트를 문자열로 변환하여 출력
    return "".join(result)


print("exampleAnswer", exampleAnswer(input))
