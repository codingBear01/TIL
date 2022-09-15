const mySolution = () => {
  let n = 1260;
  let coin = [500, 100, 50, 10].sort((a, b) => a - b);
  let tmp;
  let cnt = 0;

  while (true) {
    if (n === 0) return console.log('my sol', cnt);
    let idx = coin.length - 1;
    tmp = n;

    if (tmp >= coin[idx]) {
      n = tmp - coin[idx];
      cnt++;
    } else {
      coin = coin.slice(0, coin.length - 1);
    }
  }
};
mySolution();

const answer = () => {
  let n = 1260;
  let cnt = 0;
  const coinTypes = [500, 100, 50, 10];

  for (let coin of coinTypes) {
    cnt += Math.floor(n / coin);
    n %= coin;
  }

  console.log('ans', cnt);
};
answer();
