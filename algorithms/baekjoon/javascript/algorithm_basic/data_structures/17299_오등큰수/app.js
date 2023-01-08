const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

n = parseInt(n);
const data = input[0].split(' ').map((val) => parseInt(val));

const solution1 = (data) => {
    let ngf = Array(n).fill(-1);
    const stack = [];
    const appear = {};

    for (let num of data) {
        if (!appear[num]) appear[num] = 1;
        else appear[num]++;
    }

    for (let i in data) {
        while (
            stack.length &&
            appear[data[stack[stack.length - 1]]] < appear[data[i]]
        )
            ngf[stack.pop()] = data[i];
        stack.push(i);
    }

    return ngf.map((val) => String(val)).join(' ');
};

console.log('solution1');
console.log(solution1(data));
