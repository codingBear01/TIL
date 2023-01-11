const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = parseInt(fs.readFileSync(filePath).toString().trim());

const solution1 = (data) => {
    let num = data;
    let i = 2;
    let result = '';
    while (num !== 1) {
        if (num % i === 0) {
            result += String(i) + '\n';
            num /= i;
        } else i++;
    }
    return result.trim();
};

console.log('solution1');
console.log(solution1(input));

const solution2 = (data) => {
    let num = data;
    let result = '';
    for (let i = 2; i <= num; i++) {
        while (num % i === 0) {
            result += String(i) + '\n';
            num /= i;
        }
    }
    return result.trim();
};

console.log('solution2');
console.log(solution2(input));
