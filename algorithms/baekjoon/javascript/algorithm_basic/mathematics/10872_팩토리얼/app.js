const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

input = parseInt(input);

const answer1 = (num) => {
    return num > 1 ? num * answer1(num - 1) : 1;
};

console.log('answer1', answer1(input));

const answer2 = (num) => {
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result *= i;
    }

    return result;
};

console.log('answer2', answer2(input));
