'''
[Example Input]
15
push_back 1
push_front 2
front
back
size
empty
pop_front
pop_back
pop_front
size
empty
pop_back
push_front 3
empty
front

[Example Output]
2
1
2
0
2
1
-1
0
1
-1
0
3

[Example Input]
22
front
back
pop_front
pop_back
push_front 1
front
pop_back
push_back 2
back
pop_front
push_front 10
push_front 333
front
back
pop_back
pop_back
push_back 20
push_back 1234
front
back
pop_back
pop_back

[Example Output]
-1
-1
-1
-1
1
1
2
2
333
10
10
333
20
1234
1234
20
'''

from collections import deque
import sys

def mySolution():
    def push_front(num):
        deq.appendleft(num)
    def push_back(num):
        deq.append(num)
    def pop_front():
        return deq.popleft() if deq else -1
    def pop_back():
        return deq.pop() if deq else -1
    def size():
        return len(deq)
    def empty():
        return 1 if not deq else 0
    def front():
        return deq[0] if deq else -1
    def back():
        return deq[-1] if deq else -1
    
    deq = deque()
    
    for _ in range(int(sys.stdin.readline().rstrip())):
        data = sys.stdin.readline().rstrip().split()
        oper = data[0]

        if oper == 'push_front':
            push_front(data[1])
        elif oper == 'push_back':
            push_back(data[1])
        elif oper == 'pop_front':
            print(pop_front())
        elif oper == 'pop_back':
            print(pop_back())
        elif oper == 'size':
            print(size())
        elif oper == 'empty':
            print(empty())
        elif oper == 'front':
            print(front())
        elif oper == 'back':
            print(back())
            


mySolution()