import sys

data = sys.stdin.readline().rstrip()


def answer1(data):
    stack = []
    result = ""

    for c in data:
        if c.isalpha():
            result += c
        else:
            if c == "(":
                stack.append(c)
            elif c == ")":
                while stack and stack[-1] != "(":
                    result += stack.pop()
                stack.pop()
            elif c == "+" or c == "-":
                while stack and stack[-1] != "(":
                    result += stack.pop()
                stack.append(c)
            elif c == "*" or c == "/":
                while stack and (stack[-1] == "*" or stack[-1] == "/"):
                    result += stack.pop()
                stack.append(c)

    while stack:
        result += stack.pop()

    return result


print("answer1", answer1(data))


def answer2(data):
    def priority(operator):
        if operator == "+" or operator == "-":
            return 1
        elif operator == "*" or operator == "/":
            return 2
        else:
            return 0

    stack = []
    result = ""

    for c in data:
        if c.isalpha():
            result += c
        else:
            if c == "(":
                stack.append(c)
            elif c == ")":
                while stack and stack[-1] != "(":
                    result += stack.pop()
                stack.pop()
            else:
                while stack and priority(stack[-1]) >= priority(c):
                    result += stack.pop()
                stack.append(c)

    while stack:
        result += stack.pop()

    return result


print("answer2", answer2(data))
