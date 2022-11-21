# 숫자 배열로 받기
listInt = list(map(int, input().split()))
# 여러 숫자 한꺼번에 받기
num1, num2, num3 = map(int, input().split())
# 속도 빠른 입력
import sys

fasterInput = sys.stdin.readline().rstrip()

# 변수를 문자열로 바꾸어 출력하는 소스코드 예시들
num4 = 10
print("정답은 " + str(num4) + "입니다.")  # 정답은 10입니다.
print("정답은", str(num4), "입니다.")  # 정답은 10 입니다.
print(f"정답은 {num4}입니다.")  # 정답은 10입니다.
