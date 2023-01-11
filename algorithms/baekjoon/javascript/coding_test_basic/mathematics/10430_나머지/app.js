const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [a, b, c] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(' ')
    .map(Number);

const solution1 = (a, b, c) => {
    const ans1 = (a + b) % c;
    const ans2 = ((a % c) + (b % c)) % c;
    const ans3 = (a * b) % c;
    const ans4 = ((a % c) * (b % c)) % c;

    return [ans1, ans2, ans3, ans4].join('\n').trim();
};

console.log('solution1');
console.log(solution1(a, b, c));
