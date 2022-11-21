# My Solution
n = 5  # 배열의 크기
m = 7  # 총 더하는 횟수
k = 2  # 더하기 반복 횟수
nums = [3, 4, 3, 4, 3]
nums.sort()


def mySolution(n, m, k, data):
    max = data[n - 1]
    secondMax = data[n - 2]

    ans = 0
    cnt = 0

    for i in range(0, m):
        if cnt == k:
            cnt = 0
            ans += secondMax
        else:
            ans += max
            cnt += 1

    return ans


print("My ans", mySolution(n, m, k, nums))

# 모범 답안
# input
# 5 8 3
# 2 4 5 4 6

# expected output
# 46

# n, m, k를 공백으로 구분하여 입력받기
n, m, k = map(int, input().split())
# n개의 수를 공백으로 구분하여 입력받기
data = list(map(int, input().split()))
data.sort()  # 입력받은 수들 정렬하기


def exampleAnswer(n, m, k, data):
    first = data[n - 1]
    second = data[n - 2]

    result = 0

    while True:
        for i in range(k):  # 가장 큰 수를 k번 더하기
            if m == 0:  # m이 0이라면 반복문 탈출
                break
            result += first
            m -= 1  # 더할 때마다 m에서 1씩 빼기
        if m == 0:  # m이 0이라면 반복문 탈출
            break
        result += second  # 두 번째로 큰 수를 한 번 더하기
        m -= 1  # 더할 때마다 m에서 1씩 빼기

    return result


print("모범 답안", exampleAnswer(n, m, k, data))
