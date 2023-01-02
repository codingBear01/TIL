const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

input = parseInt(input);

const mySolution = (n) => {
    const factorial = (n) => {
        if (n === 0) return 1n;

        return BigInt(n) * factorial(n - 1);
    };

    let result = factorial(n);
    let cnt = 0;

    result = String(result);
    let length = result.length;
    let i = 0;

    while (i < length) {
        if (result[length - 1] === '0') cnt++;
        else break;

        length--;
        i++;
    }
    // for (let i = result.length - 1; i >= 0; i--) {
    //     if (result[i] === '0') cnt++;
    //     else break;
    // }

    return cnt;
};

console.log('mySolution', mySolution(input));

const answer1 = (n) => {
    let count = 0;

    while (n >= 5) {
        count += Math.floor(n / 5);
        n = Math.floor(n / 5);
    }

    return count;
};

console.log('answer1', answer1(input));

const answer2 = (n) => {
    return Math.floor(n / 5) + Math.floor(n / 25) + Math.floor(n / 125);
};

console.log('answer2', answer2(input));
