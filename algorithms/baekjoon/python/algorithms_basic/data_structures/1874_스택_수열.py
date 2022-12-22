"""
[Example Input]
8
4
3
6
8
7
5
2
1

[Example Output]
+
+
+
+
-
-
+
+
-
+
+
-
-
-
-
-

[Example Input]
5
1
2
5
3
4

[Example Output]
NO
"""
import sys

n = int(sys.stdin.readline().rstrip())


def answer1(n):
    stack = []
    result = []
    count = 1

    for _ in range(n):
        data = int(sys.stdin.readline().rstrip())

        while count <= data:
            stack.append(count)
            result.append("+")
            count += 1

        if stack.pop() == data:
            result.append("-")
        else:
            print("NO")
            exit(0)

    print("\n".join(result))


answer1(n)


def answer2(n):
    stack, result, count, isPossible = [], [], 1, True

    for _ in range(n):
        data = int(sys.stdin.readline().rstrip())

        while count <= data:
            stack.append(count)
            result.append("+")
            count += 1

        if stack.pop() == data:
            result.append("-")
        else:
            isPossible = False
            break

    if not isPossible:
        print("NO")
    else:
        for ret in result:
            print(ret)


answer2(n)
