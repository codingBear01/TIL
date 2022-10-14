const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input2.txt';
const input = fs.readFileSync(filePath).toString().trim();

/*
재귀 함수에 자릿수 개념을 붙여 구현

1. 한 자릿수인 소수는 2, 3, 5, 7. 4, 6, 8, 9를 제외한 가지치기
2. 현재 수 * 10 + a 하면서 소수인지 판단하고 소수라면 재귀로 자릿수를 하나 늘림.(일의 자리에는 홀수만 허용)
*/

const n = +input;

const solution = (n) => {
  const isPrime = (num) => {
    for (i = 2; i <= num / 2; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const dfs = (num, jarisu) => {
    if (jarisu === n) {
      if (isPrime(num)) {
        console.log(num);
      }
      return;
    }
    for (let i = 1; i < 10; i++) {
      // 짝수라면 더 이상 탐색할 필요가 없음
      if (i % 2 === 0) continue;
      // 소수라면 재귀함수로 자릿수를 늘림
      if (isPrime(num * 10 + i)) dfs(num * 10 + i, jarisu + 1);
    }
  };
  // 1의 자리 소수는 2, 3, 5, 7이므로 이 4개 수에서만 시작
  dfs(2, 1);
  dfs(3, 1);
  dfs(5, 1);
  dfs(7, 1);
};
solution(n);
