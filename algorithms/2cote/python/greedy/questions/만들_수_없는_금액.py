"""
N개의 동전을 이용하여 '만들 수 없는 양의 정수 금액 중 최솟값'을 구하라.

input
5
3 2 1 1 9

expected output 
8

input
3
3 5 7

expected output 
1

먼저 입력값을 오름차순으로 정렬함.
화폐 단위가 작은 순서대로 동전을 확인하며 현재 확인하는 동전으로 target 금액을 만들 수 있는지 확인하면 됨.


"""
n = int(input())
data = list(map(int, input().split()))
data.sort()


def mySolution(n, data):
    max = data[-1]

    for i in range(n):
        prev = data[i]
        for j in range(i + 1, n):
            next = data[j]
            sum = prev + next
            prev = sum

            if sum not in data and sum <= max:
                data.append(sum)

    data = list(set(data))
    answer = 0

    for i in range(1, max + 1):
        if i not in data:
            answer = i
            break

    return answer


print("mySolution", mySolution(n, data))


def exampleAnswer(n, data):
    target = 1

    for x in data:
        # 만들 수 없는 금액을 찾았을 때 반복 종료
        if target < x:
            break
        target += x

    return target


print("exampleAnswer", exampleAnswer(n, data))
