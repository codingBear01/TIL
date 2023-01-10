const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, b] = fs.readFileSync(filePath).toString().trim().split(' ');

const solution1 = (n, b) => {
    return parseInt(n.toLowerCase(), b);
};

console.log('solution1');
console.log(solution1(n, parseInt(b)));

const solution2 = (n, b) => {
    const getNumber = (num) => {
        if (isNaN(parseInt(num))) return num.charCodeAt(0) - 55;
        else return parseInt(num);
    };

    const nums = n.split('').reverse();
    let result = 0;

    for (let i = 0; i < nums.length; i++) result += b ** i * getNumber(nums[i]);

    return result;
};

console.log('solution2');
console.log(solution2(n, parseInt(b)));

const solution3 = (n, b) => {
    const nums = n.split('').reverse();
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 'A' && nums[i] <= 'Z') {
            result += (nums[i].charCodeAt(0) - 55) * Math.pow(b, i);
        } else {
            result += nums[i] * Math.pow(b, i);
        }
    }

    return result;
};

console.log('solution3');
console.log(solution3(n, parseInt(b)));

const solution4 = (n, b) => {
    const chrs = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const nums = n.split('').reverse();
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        result += chrs.indexOf(nums[i]) * b ** i;
    }

    return result;
};

console.log('solution4');
console.log(solution4(n, parseInt(b)));

const solution5 = (n, b) => {
    const obj = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15,
        G: 16,
        H: 17,
        I: 18,
        J: 19,
        K: 20,
        L: 21,
        M: 22,
        N: 23,
        O: 24,
        P: 25,
        Q: 26,
        R: 27,
        S: 28,
        T: 29,
        U: 30,
        V: 31,
        W: 32,
        X: 33,
        Y: 34,
        Z: 35,
    };
    const nums = n.split('').reverse();
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        result += obj[nums[i]] * b ** i;
    }

    return result;
};

console.log('solution5');
console.log(solution5(n, parseInt(b)));
