# 숫자 배열로 받기
listInt = list(map(int, input().split()))  # [1, 2, 3, 4 ,5]
# 여러 숫자 한꺼번에 받기
num1, num2, num3 = map(int, input().split())  # num1 = 1, num2 = 2, num3 = 3
# 속도 빠른 입력
import sys

fasterInput = sys.stdin.readline().rstrip()

# 리스트
print("===== 리스트 =====")

# <리스트 기본 문법>
listA = [1, 3, 2]

# append()
listA.append(4)
print("append()", listA)

# sort()
listA.sort()
print("sort()", listA)

listA.sort(reverse=True)
print("sort(reverse=True)", listA)

# insert(index, element) 특정 위치에 원소 삽입
listA.insert(0, 100)
print("insert(0, 100)", listA)

listA.insert(-1, 100)
print("insert(-1, 100)", listA)

# count() 특정 원소 개수 세기
cnt100 = listA.count(100)
print("count(100)", cnt100)

# remove() 특정 원소 제거. 여러 개 존재 시 가장 첫 번째 요소만 제거
listA.remove(100)
print("remove(100)", listA)

# 특정 원소들을 모두 제거하는 방법
listB = [1, 2, 3, 3, 4, 5, 6, 5]
remove_set = {3, 5}
removed35 = [i for i in listB if i not in remove_set]
print("removed35", removed35)

# <빈 리스트 선언>
emptyArr1 = list()
# OR
emptyArr2 = []
print("list()", emptyArr1)
print("[]", emptyArr2)

# <리스트 초기화>
# 크기가 N이고 모든 값이 0인 1차원 리스트 만들기
listSize = 10
listSized10 = [0] * listSize
print("크기가 N이고 모든 값이 0인 1차원 리스트 만들기", listSized10)

# <리스트 컴프리헨션>
# 0부터 19까지 수 중에서 홀수만 포함하는 리스트
odd0To19 = [i for i in range(20) if i % 2 == 1]
print("0부터 19까지 수 중에서 홀수만 포함하는 리스트", odd0To19)

# 1부터 9까지 수의 제곱 값을 포함하는 리스트
sqr1To9 = [i * i for i in range(1, 10)]
print("1부터 9까지 수의 제곱 값을 포함하는 리스트", sqr1To9)

# n * m 크기의 2차원 리스트
twoDimenN = 3
twoDimenM = 4
twoDimen = [[0] * twoDimenM for _ in range(twoDimenN)]
print("n * m 크기의 2차원 리스트", twoDimen)

# <리스트 슬라이싱>
# list[n : m] n번 인덱스부터 m - 1번 인덱스 요소 출력
beforSlicedList = [1, 2, 3, 4, 5, 6, 7, 8, 9]
afterSlicedList = beforSlicedList[1:4]
print("n번 인덱스부터 m - 1번 인덱스 요소 출력", afterSlicedList)


# 문자열
print("===== 문자열 =====")

# 문자열 더하기
varInStr = 10
print("정답은 " + str(varInStr) + "입니다.")  # 정답은 10입니다.
print("정답은", str(varInStr), "입니다.")  # 정답은 10 입니다.
print(f"정답은 {varInStr}입니다.")  # 정답은 10입니다.

multiStr = "multipleStr!"
print("multiStr * 3", multiStr * 3)


# 사전 자료형
print("===== 사전 자료형 =====")

dict = dict()
dict["사과"] = "Apple"
dict["바나나"] = "Banana"
dict["코코넛"] = "Coconut"

# 키 데이터만 담은 리스트
keys = dict.keys()
print("keys", keys)
# 값 데이터만 담은 리스트
values = dict.values()
print("values", values)

# 리스트 내 값들을 하나씩 출력
for key in keys:
    print("key", key)
    print("val", dict[key])


# 집합 자료형
print("===== 집합 자료형 =====")

# 집합 자료형을 활용하여 리스트 내 중복값 제거하기
setList = [1, 1, 2, 3, 4, 4, 5]
setted = set(setList)
print("setted", setted)
setttedList = list(set(setList))
print("setttedList", setttedList)

# 집합 자료형의 연산
set1 = set([1, 2, 3, 4, 5])
set2 = set([3, 4, 5, 6, 7])

# 합집합
print("set 합집합", set1 | set2)
# 교집합
print("set 교집합", set1 & set2)
# 차집합
print("set 차집합", set1 - set2)

# 새로운 원소 하나 추가
set2.add(8)
print("set.add(8)", set2)

# 새로운 원소 여러 개 추가
set2.update([9, 0])
print("set.update([9, 0])", set2)

# 특정 원소 제거
set2.remove(3)
print("set.remove(3)", set2)
