"""
[Example Input]
6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(

[Example Output]
NO
NO
YES
NO
YES
NO

[Example Input]
3
((
))
())(()

[Example Output]
NO
NO
NO
"""
import sys

n = int(sys.stdin.readline().rstrip())


def answer1(n):
    for _ in range(n):
        data = sys.stdin.readline().rstrip()
        cnt = 0

        for d in data:
            if d == "(":
                cnt += 1
            else:
                cnt -= 1

            if cnt < 0:  # 마이너스가 되는 순간 더 이상 검사할 필요가 없으므로 break로 빠져나옴
                print("NO")
                break

        if cnt > 0:
            print("NO")
        elif cnt == 0:
            print("YES")


answer1(n)


def answer2(n):
    for _ in range(n):
        data = sys.stdin.readline().rstrip()

        while "()" in data:
            data = data.replace("()", "")

        print("NO" if data else "YES")


answer2(n)


def answer3(n):
    for _ in range(n):
        stack = []
        data = sys.stdin.readline().rstrip()

        for d in data:
            if d == "(":
                stack.append(d)
            else:
                if stack:
                    stack.pop()
                else:  # 스택에 괄호가 없는 경우 짝이 맞지 않으므로 NO 반환
                    print("NO")
                    break
        else:  # break문으로 끊기지 않았을 경우 실행
            if not stack:  # 스택이 비어 있다면 괄호의 짝이 맞으므로 YES 반환
                print("YES")
            else:  # 스택에 괄호가 들어 있다면 괄호의 짝이 맞지 않으므로 NO 반환
                print("NO")


answer3(n)


def answer4(n):
    for _ in range(n):
        stack = []
        data = sys.stdin.readline().rstrip()
        isVPS = True

        for d in data:
            if d == "(":
                stack.append(d)
            else:
                if stack:
                    stack.pop()
                else:
                    isVPS = False
                    break

        if not stack and isVPS:
            print("YES")
        elif stack or not isVPS:
            print("NO")


answer4(n)
