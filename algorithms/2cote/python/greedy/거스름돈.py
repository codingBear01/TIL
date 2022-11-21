# n = int(input())
n = 1260
cnt = 0

# 큰 단위의 화폐부터 차례대로 확인
coins = [500, 100, 50, 10]

for coin in coins:
    cnt += n // coin  # 해당 화폐로 거슬러 줄 수 있는 동전의 개수 세기
    n %= coin

print(cnt)
