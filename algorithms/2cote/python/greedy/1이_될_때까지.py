"""
input
25 5

expected output
2
"""


def mySolution():
    n, k = map(int, input().split())
    cnt = 0

    while n > 1:
        if n % k != 0:
            n -= 1
            cnt += 1
        else:
            n //= k
            cnt += 1

    return cnt


print("mySolution", mySolution())


def exampleAnswer1():
    n, k = map(int, input().split())
    result = 0

    # n이 k 이상이라면 k로 계속 나누기
    while n >= k:
        # n이 k로 나누어 떨어지지 않는다면 n에서 1씩 빼기
        while n % k != 0:
            n -= 1
            result += 1
        # k로 나누기
        n //= k
        result += 1

    # 마지막으로 남은 수에 1씩 빼기
    while n > 1:
        n -= 1
        result += 1

    return result


print("exampleAnswer1", exampleAnswer1())


def exampleAnswer2():
    n, k = map(int, input().split())
    result = 0

    while True:
        # (n == k로 나누어떨어지는 수)가 될 때까지 1씩 빼기
        target = (n // k) * k
        result += n - target
        n = target
        # n이 k보다 작을 때(더 이상 나눌 수 없을 때) 반복문 탈출
        if n < k:
            break
        # k로 나누기
        result += 1
        n //= k

    # 마지막으로 남은 수에 1씩 빼기
    result += n - 1

    return result


print("exampleAnswer2", exampleAnswer2())
