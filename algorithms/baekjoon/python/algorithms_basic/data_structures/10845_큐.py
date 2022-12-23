from collections import deque
import sys

n = int(sys.stdin.readline().rstrip())


def mySolution(n):
    def push(num):
        queue.append(num)

    def pop():
        return queue.popleft() if queue else -1

    def size():
        return len(queue)

    def empty():
        return 1 if not queue else 0

    def front():
        return queue[0] if queue else -1

    def back():
        return queue[-1] if queue else -1

    queue = deque()

    for _ in range(n):
        data = sys.stdin.readline().rstrip().split()
        oper = data[0]

        if oper == "push":
            push(data[1])
        elif oper == "pop":
            print(pop())
        elif oper == "size":
            print(size())
        elif oper == "empty":
            print(empty())
        elif oper == "front":
            print(front())
        elif oper == "back":
            print(back())


mySolution(n)
