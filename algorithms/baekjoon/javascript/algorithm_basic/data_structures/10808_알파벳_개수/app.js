const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const solution1 = (data) => {
    let result = Array(26).fill(0);

    for (let i of data) result[i.charCodeAt() - 'a'.charCodeAt()]++;

    return result.join(' ');
};

console.log('solution1');
console.log(solution1(input));

const solution2 = (data) => {
    let obj = {};
    const ASCII = 97;

    for (let i = ASCII; i < ASCII + 26; i++) obj[String.fromCharCode(i)] = 0;

    for (let i of data) {
        obj[i]++;
    }

    return Object.values(obj).join(' ');
};

console.log('solution2');
console.log(solution2(input));

const solution3 = (data) => {
    let result = Array(26).fill(0);

    for (let i of data) {
        result[i.charCodeAt() - 97] = data
            .split('')
            .filter((val) => val === i).length;
    }

    return result.join(' ');
};

console.log('solution3');
console.log(solution3(input));
