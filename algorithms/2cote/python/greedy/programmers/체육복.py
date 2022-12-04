n = 5
lost = [2, 4]
reserve = [1, 3, 5]


def mySolution(n, lost, reserve):
    uniformCnt = [1] * n

    for i in reserve:
        uniformCnt[i - 1] += 1

    for i in lost:
        uniformCnt[i - 1] -= 1

    answer = 0

    # 현재 탐색값이 맨 앞이거나 맨 뒤일 경우, 그리고 앞뒤 학생을 모두 확인해야 하는데 해당하는 조건문 처리가 빠짐.
    for i in range(n):
        if i - 1 > 0:
            if uniformCnt[i] > 1 and uniformCnt[i - 1] == 0:
                uniformCnt[i] -= 1
                uniformCnt[i - 1] += 1
            elif uniformCnt[i] > 1 and uniformCnt[i + 1] == 0:
                uniformCnt[i] -= 1
                uniformCnt[i + 1] += 1

    for cnt in uniformCnt:
        if cnt > 0:
            answer += 1

    return answer


print("mySolution", mySolution(n, lost, reserve))


# Set을 활용한 풀이
def exampleAnswer1(n, lost, reserve):
    # 1. Set으로 중복 제거한다.
    reserveOnly = set(reserve) - set(lost)
    lostOnly = set(lost) - set(reserve)

    # 2. 여분을 기준으로 앞뒤를 확인하여 체육복을 빌려준다.
    for reserve in reserveOnly:
        front = reserve - 1
        back = reserve + 1

        # 앞 혹은 뒤에 있는 학생이 잃어버린 학생이라면 lostOnly에서 뺀다.
        if front in lostOnly:
            lostOnly.remove(front)
        elif back in lostOnly:
            lostOnly.remove(back)

    # 3. 전체 학생 수에 lostOnly에 남은 학생 수를 뺀다.
    return n - len(lostOnly)


print("exampleAnswer1", exampleAnswer1(n, lost, reserve))

# 배열을 활용한 풀이
def exampleAnswer2(n, lost, reserve):
    # 1. students 배열 생성
    students = [0] * (n + 2)

    # 2. students 배열에 reserve/lost 정보 반영
    for i in reserve:
        students[i] += 1
    for i in lost:
        students[i] -= 1

    # 3. 앞뒤 학생을 확인하며 빌려줄 수 있으면 체육복을 빌려준다.
    for i in range(1, n + 1):
        if students[i] > 0:
            front = i - 1
            back = i + 1
            if students[front] < 0:
                students[i] -= 1
                students[front] += 1
            elif students[back] < 0:
                students[i] -= 1
                students[back] += 1

    # 체육복을 갖고 있는 학생 수를 계산한다.
    answer = 0
    for i in range(1, n + 1):
        if students[i] >= 0:
            answer += 1

    return answer


print("exampleAnswer2", exampleAnswer2(n, lost, reserve))
