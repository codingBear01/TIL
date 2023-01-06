const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [a, b] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map((val) => val.split(' ').map((val) => parseInt(val)));

const n = a[0];
const s = a[1];
const data = b;

const solution1 = (n, s, data) => {
    const getGcd = (a, b) => {
        while (b) {
            [a, b] = [b, a % b];
        }
        return a;
    };

    const distance = [];
    for (let i of data) {
        distance.push(Math.abs(s - i));
    }

    let ans = distance[0];
    for (let i = 1; i < n; i++) {
        ans = getGcd(ans, distance[i]);
    }

    return ans;
};

console.log('solution1', solution1(n, s, data));
