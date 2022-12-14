mylist = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
new_list = list(map(list, zip(*mylist)))

# new_list = [[], [], []]

# for i in range(len(mylist)):
#     for j in range(len(mylist[i])):
#         print(mylist[j][i])
#         new_list[i].append(mylist[j][i])

print(new_list)
arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

for i in range(4):
    original = arr[::-1]
    arr = list(zip(*original))
    print(arr)
