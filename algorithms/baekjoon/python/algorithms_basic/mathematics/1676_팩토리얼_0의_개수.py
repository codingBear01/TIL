import sys

n = int(sys.stdin.readline().rstrip())


def mySolution(n):
    result = 1
    cnt = 0

    for i in range(1, n + 1):
        result *= i

    result = str(result)
    # length = len(result)
    # i = 0

    # while i < length:
    #     if result[length - 1] == "0":
    #         cnt += 1
    #     else:
    #         break

    #     length -= 1
    #     i += 1

    for i in reversed(result):
        if i == "0":
            cnt += 1
        else:
            break

    return cnt


print("mySolution", mySolution(n))


def answer1(n):
    count = 0

    while n >= 5:
        count += n // 5
        n //= 5

    return count


print("answer1", answer1(n))


def answer2(n):
    return n // 5 + n // 25 + n // 125


print("answer2", answer2(n))
