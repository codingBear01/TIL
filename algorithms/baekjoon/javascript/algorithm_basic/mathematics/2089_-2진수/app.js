const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = parseInt(fs.readFileSync(filePath).toString().trim());

const solution1 = (data) => {
    let n = data;
    if (!n) return 0;

    let result = '';
    while (n) {
        result = Math.abs(n % -2) + result;
        n = Math.ceil(n / -2);
    }

    return result;
};

console.log('solution1');
console.log(solution1(input));
