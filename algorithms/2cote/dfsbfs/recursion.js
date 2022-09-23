let i = 0;

function recursiveFunction() {
  if (i === 10) return;

  console.log(`${i + 1}번째 재귀 함수를 호출한다능`);
  i++;

  recursiveFunction();
}
recursiveFunction();

console.log('========== 경계선 ==========');

function recursiveFunction2(i) {
  if (i === 100) return;

  console.log(`${i}번째 재귀 함수에서 ${i + 1}번째 재귀 함수를 호출합니다.`);
  recursiveFunction2(i + 1);
  console.log(`${i}번째 재귀 함수를 종료합니다.`);
}
recursiveFunction2(1);

console.log('========== 경계선 ==========');

const facotorialIterative = (n) => {
  result = 1;
  // 1부터 n까지의 수를 차례대로 곱하기
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};
console.log('fac_iterative', facotorialIterative(5));

const factorialRecursive = (n) => {
  /* 팩토리얼 수학적 점화식
  1. n이 0 혹은 1일 때: factorial(n) = 1
  2. n이 1보다 클 때: factorial(n) = n * factorial(n - 1)
  */
  if (n <= 1) return 1;
  return n * factorialRecursive(n - 1); // n! = n * (n-1)!
};
console.log('fac_recursive', factorialRecursive(5));
