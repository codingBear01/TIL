const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

n = parseInt(n);
const nums = input[0].split(' ').map(Number);

const solution1 = (n, nums) => {
    return Math.min(...nums) * Math.max(...nums);
};

console.log('solution1');
console.log(solution1(n, nums));

const solution2 = (n, nums) => {
    const sorted = [...nums].sort((a, b) => a - b);
    return sorted[0] * sorted[sorted.length - 1];
};

console.log('solution2');
console.log(solution2(n, nums));

const solution3 = (n, nums) => {
    let [min, max] = [nums[0], nums[0]];
    for (let num of nums) {
        if (max < num) max = num;
        if (min > num) min = num;
    }
    return min * max;
};

console.log('solution3');
console.log(solution3(n, nums));
