const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const solution1 = (data) => {
    for (let i of data) {
        if (!i) continue;
        let [low, up, num, space] = [0, 0, 0, 0];
        for (let j of i) {
            if (j >= 'a' && j <= 'z') low++;
            else if (j >= 'A' && j <= 'Z') up++;
            else if (j >= '0' && j <= '9') num++;
            else if (j === ' ') space++;
        }

        console.log(low, up, num, space);
    }
};

console.log('solution1');
solution1(input);

const solution2 = (data) => {
    const t = input.filter((str) => str.length < 1);

    if (t.length) {
        input.splice(input.indexOf(t[0]), 1);
    }

    input.forEach((str) => {
        const lower = str.length - str.replace(/[a-z]/g, '').length;
        const upper = str.length - str.replace(/[A-Z]/g, '').length;
        const num = str.length - str.replace(/[0-9]/g, '').length;
        const blank = str.length - str.replace(/\ /g, '').length;

        console.log(lower, upper, num, blank);
    });
};

console.log('solution2');
solution2(input);
