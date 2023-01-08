const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

n = parseInt(n);
const data = input[0].split(' ').map((val) => parseInt(val));

const solution1 = (data) => {
    let stack = '';

    for (let i = 0; i < n; i++) {
        let compared = -1;

        for (let j = i + 1; j < n; j++) {
            if (data[j] > data[i]) {
                compared = data[j];
                break;
            } else compared = -1;
        }

        stack += compared + '\n';
    }

    return stack.trim();
};

console.log('solution1');
console.log(solution1(data));

const solution2 = (data) => {
    let nge = Array(n).fill(-1);
    const stack = [];

    for (let i = 0; i < n; i++) {
        while (stack.length && data[stack[stack.length - 1]] < data[i])
            nge[stack.pop()] = data[i];
        stack.push(i);
    }

    return nge.map((val) => String(val)).join('\n');
};

console.log('solution2');
console.log(solution2(data));
