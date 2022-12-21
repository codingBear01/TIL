"""
[Example Input]
2
I am happy today
We want to win the first prize

[Example Output]
I ma yppah yadot
eW tnaw ot niw eht tsrif ezirp
"""

import sys

n = int(sys.stdin.readline().rstrip())

for _ in range(n):
    result = ""
    for s in sys.stdin.readline().split():
        # 방법 1
        reversed = ""
        for c in s:
            reversed = c + reversed
        result += reversed + " "

        # 방법 2
        # result += "".join(reversed(s)) + " "

        # 방법 3
        # for c in reversed(s):
        # result += c

        # 방법 4
        # for i in range(len(s) - 1, -1, -1):
        # result += s[i]
    # result += " "
    print(result)

# for _ in range(n):
#     words = sys.stdin.readline().rstrip().split()

#     for word in words:
#         # print(word[::-1], end=' ') # 단어 뒤집고 끝 값을 end로써 개행문자 -> 공백으로 처리
#         print("".join(reversed(word)), end=" ")
#     print()  # 한 문장 끝나면 행갈이
