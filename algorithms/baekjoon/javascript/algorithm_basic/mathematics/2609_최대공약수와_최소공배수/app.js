const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(' ')
    .map((val) => parseInt(val));

const a = input[0];
const b = input[1];

const answer1 = (a, b) => {
    console.log('answer1');

    const gcd = (a, b) => {
        if (b === 0) return a;

        const r = a % b;
        return gcd(b, r);
    };

    const lcm = (a, b) => {
        return parseInt((a * b) / gcd(a, b));
    };

    console.log(gcd(a, b) + '\n' + lcm(a, b));
};

answer1(a, b);

const answer2 = (a, b) => {
    console.log('answer2');

    const gcd = (a, b) => {
        while (b != 0) {
            r = a % b;
            a = b;
            b = r;
        }

        return a;
    };

    const lcm = (a, b) => {
        return parseInt((a * b) / gcd(a, b));
    };

    console.log(gcd(a, b) + '\n' + lcm(a, b));
};
answer2(a, b);
