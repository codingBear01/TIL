import sys

n = int(sys.stdin.readline().rstrip())
nums = list(map(int, sys.stdin.readline().rstrip().split()))


def mySolution(n, nums):
    result = 0

    for num in nums:
        if num != 2 and num % 2 == 0:
            continue

        cnt = 0
        for i in range(1, num + 1):
            if num % i == 0:
                cnt += 1

        if cnt == 2:
            result += 1

    return result


print("mySolution", mySolution(n, nums))


def answer1(n, nums):
    result = 0

    for num in nums:
        if num == 1:
            continue

        cnt = 0
        for i in range(2, num):
            if num % i == 0:
                cnt += 1

        if cnt == 0:
            result += 1

    return result


print("answer1", answer1(n, nums))


def answer2(n, nums):
    def is_prime(num):
        if num == 1:
            return False
        elif num == 2:
            return True

        for i in range(2, num):
            if num % i == 0:
                return False

        return True

    result = 0
    for num in nums:
        if is_prime(num):
            result += 1

    return result


print("answer2", answer2(n, nums))


def answer3(n, nums):
    result = 0

    for num in nums:
        for i in range(2, num + 1):
            if num % i == 0:
                if num == i:
                    result += 1
                break

    return result


print("answer3", answer3(n, nums))
