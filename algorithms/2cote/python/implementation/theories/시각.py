n = int(input())


def mySolution(n):
    cnt = 0
    for h in range(n + 1):
        for m in range(60):
            for s in range(60):
                time = str(h) + str(m) + str(s)
                if "3" in time:
                    cnt += 1
    return cnt


print("mySolution", mySolution(n))
