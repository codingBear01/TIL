const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = parseInt(input[0]);
const data = input.splice(1).map((val) => val.trim());

const solution1 = (n, data) => {
    for (let i of data) {
        let result = '';
        for (let j of i.split(' ')) {
            let reversed = '';
            for (let k of j) {
                reversed = k + reversed;
            }
            result += reversed + ' ';
        }
        console.log(result);
    }
};

console.log('solution1');
solution1(n, data);

const solution2 = (n, data) => {
    for (let i of data) {
        let result = '';
        for (let j of i.split(' ')) {
            result += j.split('').reverse().join('') + ' ';
        }
        console.log(result);
    }
};

console.log('solution2');
solution2(n, data);

const solution3 = (n, data) => {
    for (let i of data) {
        let result = '';
        for (let j of i.split(' ')) {
            for (let k of j.split('').reverse()) {
                result += k;
            }
            result += ' ';
        }
        console.log(result);
    }
};

console.log('solution3');
solution3(n, data);

const solution4 = (n, data) => {
    for (let i of data) {
        let result = '';
        for (let j of i.split(' ')) {
            for (let k = j.length - 1; k >= 0; k -= 1) {
                result += j[k];
            }
            result += ' ';
        }
        console.log(result);
    }
};

console.log('solution4');
solution4(n, data);
