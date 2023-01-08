const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const solution1 = (data) => {
    let result = [];

    for (let i in data) {
        let tmp = '';
        for (let j = i; j < data.length; j++) tmp += data[j];
        result.push(tmp);
    }

    for (let i of result.sort()) console.log(i);
};

console.log('solution1');
solution1(input);

const solution2 = (data) => {
    let result = [];
    for (let i in data) result.push(data.split('').splice(i).join(''));
    result.sort().forEach((el) => console.log(el));
};

console.log('solution2');
solution2(input);
