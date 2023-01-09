const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const solution1 = (data) => {
    let binary = data;
    let result = '';
    while (binary.length >= 3) {
        result =
            parseInt(binary.slice(binary.length - 3), 2).toString(8) + result;
        binary = binary.slice(0, binary.length - 3);
    }

    return binary
        ? (result = parseInt(binary, 2).toString(8) + result)
        : result;
};

console.log('solution1');
console.log(solution1(input));

const solution2 = (data) => {
    let binary = data.split('').map((val) => parseInt(val));
    let result = '';

    while (binary.length > 0) {
        let tmp;
        tmp =
            binary.length >= 3
                ? binary.splice(binary.length - 3, 3)
                : binary.splice(0, binary.length);

        let sum = 0;
        for (let i = 0; i < tmp.length; i++) {
            sum += tmp[i] * 2 ** (tmp.length - 1 - i);
        }
        result = String(sum) + result;
    }

    return result;
};

console.log('solution2');
console.log(solution2(input));
