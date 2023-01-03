const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(' ')
    .map((val) => parseInt(val));

const n = input[0];
const m = input[1];

const mySolution = (n, m) => {
    const getCount = (num, k) => {
        cnt = 0;

        while (num) {
            num = parseInt(num / k);
            cnt += num;
        }

        return cnt;
    };

    const twoCnt = getCount(n, 2) - getCount(m, 2) - getCount(n - m, 2);
    const fiveCnt = getCount(n, 5) - getCount(m, 5) - getCount(n - m, 5);

    return Math.min(twoCnt, fiveCnt);
};

console.log('mySolution', mySolution(n, m));
