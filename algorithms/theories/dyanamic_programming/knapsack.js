// recursive ver.
const max = (a, b) => (a > b ? a : b);

const knapsack = (capa, size, val, n) => {
  if (n === 0 || capa === 0) return 0;
  if (size[n - 1] > capa) return knapsack(capa, size, val, n - 1);
  else
    return max(
      val[n - 1] + knapsack(capa - size[n - 1], size, val, n - 1),
      knapsack(capa, size, val, n - 1)
    );
};

const capa = 16;
const size = [3, 4, 7, 8, 9];
const val = [4, 5, 10, 11, 13];
const n = 5;

console.log(knapsack(capa, size, val, n));

// dynamic programming ver.
const dynMax = (a, b) => (a > b ? a : b);

const dynKnapsack = (capa, size, val, n) => {
  const K = [];

  for (let i = 0; i <= capa + 1; i++) {
    K[i] = [];
  }

  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= capa; w++) {
      if (i === 0 || w === 0) K[i][w] = 0;
      else if (size[i - 1] <= w)
        K[i][w] = dynMax(val[i - 1] + K[i - 1][w - size[i - 1]], K[i - 1][w]);
      else K[i][w] = K[i - 1][w];
    }
  }

  return K[n][capa];
};

const dynCapa = 16;
const dynSize = [3, 4, 7, 8, 9];
const dynVal = [4, 5, 10, 11, 13];
const dynN = 5;

console.log(knapsack(dynCapa, dynSize, dynVal, dynN));
