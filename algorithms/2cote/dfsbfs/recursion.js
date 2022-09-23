let i = 0;

function recursiveFunction() {
  if (i === 10) return;

  console.log(`${i + 1}번째 재귀 함수를 호출한다능`);
  i++;

  recursiveFunction();
}

recursiveFunction();
