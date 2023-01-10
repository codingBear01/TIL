const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, b] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const solution1 = (n, b) => {
    return n.toString(b).toUpperCase();
};

console.log('solution1');
console.log(solution1(n, b));

const solution2 = (n, b) => {
    let result = [];
    let tmp = n;
    while (tmp !== 0) {
        result.unshift(tmp % b);
        tmp = Math.floor(tmp / b);
    }
    for (let i = 0; i < result.length; i++) {
        if (result[i] >= 10 && result[i] <= 35)
            result[i] = String.fromCharCode(result[i] + 55);
    }
    return result.join('').trim();
};

console.log('solution2');
console.log(solution2(n, b));

const solution3 = (n, b) => {
    let num = n;
    const chrs = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    while (num) {
        result = chrs[num % b] + result;
        num = Math.floor(num / b);
    }
    return result;
};

console.log('solution3');
console.log(solution3(n, b));
