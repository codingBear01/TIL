const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [jinBeops, m, nums] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map((val) => val.split(' ').map(Number));

const solution1 = (a, b, m, nums) => {
    // a진법 -> 10진법
    const reversed = nums.reverse();
    let ten = 0;
    for (let i in reversed) ten += reversed[i] * a ** i;

    // 10진법 -> b진법
    result = '';
    while (ten) {
        result = (ten % b) + ' ' + result;
        ten = Math.floor(ten / b);
    }

    return result.trim();
};

console.log('solution1');
console.log(solution1(jinBeops[0], jinBeops[1], m[0], nums));
