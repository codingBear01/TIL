import sys

data = sys.stdin.readline().rstrip()


def answer1(data):
    result = 0
    stack = []

    for i, d in enumerate(data):
        if d == "(":
            stack.append(d)
        else:  # 탐색하는 값이 ')'일 경우
            stack.pop()
            if data[i - 1] == "(":  # 이전 값이 '('일 경우 = 레이저
                result += len(stack)
            else:  # 이전 값이 ')'일 경우
                result += 1

    return result


print("answer1", answer1(data))


def answer2(data):
    stack = []
    result = 0
    i = 0

    while i < len(data):
        if data[i] == "(":  # 탐색하는 값이 '('일 경우
            if data[i + 1] == ")":  # 다음 값이 ')'라면 = 레이저
                result += len(stack)
                i += 2
            else:  # 다음 값이 레이저가 아니라면
                stack.append(data[i])
                i += 1
        elif data[i] == ")":  # 탐색하는 값이 ')'일 경우
            result += 1
            stack.pop()
            i += 1

    return result


print("answer2", answer2(data))


def answer3(data):
    tmp = data
    pipe = tmp.replace("()", "*")
    stack = []
    result = 0

    for p in pipe:
        if p == "(":
            stack.append(p)
        elif p == ")":
            stack.pop()
            result += 1
        else:
            result += len(stack)

    return result


print("answer3", answer3(data))


def answer4(data):
    left = 0
    result = 0

    for i, d in enumerate(data):
        if d == "(":
            left += 1
        else:
            left -= 1
            if data[i - 1] == "(":
                result += left
            else:
                result += 1
    return result


print("answer4", answer4(data))
