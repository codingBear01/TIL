const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = parseInt(input[0]);
const data = input
    .splice(1)[0]
    .split(' ')
    .map((val) => parseInt(val));

const mySolution = (n, nums) => {
    result = 0;

    for (let num of nums) {
        if (num !== 2 && num % 2 === 0) continue;

        let cnt = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) cnt++;
        }

        if (cnt === 2) result++;
    }

    return result;
};

console.log('mySolution', mySolution(n, data));

const answer1 = (n, nums) => {
    let result = 0;

    for (let num of nums) {
        if (num == 1) continue;

        let cnt = 0;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) cnt++;
        }

        if (cnt === 0) result++;
    }

    return result;
};

console.log('answer1', answer1(n, data));

const answer2 = (n, nums) => {
    const isPrime = (num) => {
        if (num === 1) return false;
        else if (num === 2) return true;

        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }

        return true;
    };

    let result = 0;
    for (let num of nums) {
        if (isPrime(num)) result++;
    }

    return result;
};

console.log('answer2', answer2(n, data));

const answer3 = (n, nums) => {
    let result = 0;

    for (let num of nums) {
        for (let i = 2; i <= num; i++) {
            if (num % i === 0) {
                if (num === i) result++;
                break;
            }
        }
    }

    return result;
};

console.log('answer3', answer3(n, data));
