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

const solution4 = (data) => {
    let map = new Map();

    for (let i = 97; i <= 122; i++) {
        map.set(i, 0);
    }

    for (let i of data) {
        const ascii = i.charCodeAt();

        if (map.has(ascii)) map.set(ascii, map.get(ascii) + 1);
    }

    return Array.from(map.values()).join(' ');
};

console.log('solution4');
console.log(solution4(input));
