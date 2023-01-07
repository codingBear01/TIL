const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const solution1 = (data) => {
    let result = Array(26).fill(-1);

    for (let i in data) {
        if (result[data[i].charCodeAt() - 'a'.charCodeAt()] === -1)
            result[data[i].charCodeAt() - 'a'.charCodeAt()] = i;
    }

    return result.join(' ');
};

console.log('solution1');
console.log(solution1(input));

const solution2 = (data) => {
    let result = '';
    for (let i = 97; i <= 122; i++)
        result += data.indexOf(String.fromCharCode(i)) + ' ';

    return result.trim();
};

console.log('solution2');
console.log(solution2(input));
