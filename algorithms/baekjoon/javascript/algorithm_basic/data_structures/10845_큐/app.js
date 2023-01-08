const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

n = parseInt(n);
const data = input.map((val) => val.split(' '));

const solution1 = (data) => {
    const push = (num) => queue.push(num);
    const pop = () => queue.shift() || -1;
    const size = () => queue.length;
    const empty = () => (queue.length ? 0 : 1);
    const front = () => queue[0] || -1;
    const back = () => queue[queue.length - 1] || -1;

    const queue = [];
    let result = '';

    for (let i of data) {
        const oper = i[0];

        switch (oper) {
            case 'push':
                push(i[1]);
                break;
            case 'pop':
                result += pop() + '\n';
                break;
            case 'size':
                result += size() + '\n';
                break;
            case 'empty':
                result += empty() + '\n';
                break;
            case 'front':
                result += front() + '\n';
                break;
            case 'back':
                result += back() + '\n';
                break;
        }
    }

    return result.trim();
};

console.log('solution1');
console.log(solution1(data));
