// Fibonacci Numbers

// recursive ver.
const recurFib = (n) => {
  if (n < 2) return n;
  else return recurFib(n - 1) + recurFib(n - 2);
};

console.log('recur', recurFib(10));

// dynamic programming ver.
const dynFib = (n) => {
  const val = [];
  for (let i = 0; i <= n; i++) {
    val[i] = 0;
  }
  if (n === 1 || n === 2) return 1;
  else {
    val[1] = 1;
    val[2] = 2;

    for (let i = 3; i <= n; i++) {
      val[i] = val[i - 1] + val[i - 2];
    }
  }
  return val[n - 1];
};

console.log('dyn', dynFib(10));

// iterative ver.
const iterFib = (n) => {
  let last = 1;
  let nextLast = 1;
  let result = 1;
  for (let i = 2; i < n; i++) {
    result = last + nextLast;
    nextLast = last;
    last = result;
  }
  return result;
};

console.log('iterative', iterFib(10));

console.log('-----timing test-----');

// timing test
start = new Date().getTime();
console.log(recurFib(30));
stop = new Date().getTime();
console.log(`recursive time - ${stop - start} milliseconds`);
start = new Date().getTime();
console.log(dynFib(30));
stop = new Date().getTime();
console.log(`dynamic programming time - ${stop - start} milliseconds`);
start = new Date().getTime();
console.log(iterFib(30));
stop = new Date().getTime();
console.log(`iterative time - ${stop - start} milliseconds`);
