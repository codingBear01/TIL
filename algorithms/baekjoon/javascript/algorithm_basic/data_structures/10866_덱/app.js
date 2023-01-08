const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

n = parseInt(n);
const data = input.map((val) => val.split(' '));

const solution1 = (data) => {
    const push_front = (num) => deque.unshift(num);
    const push_back = (num) => deque.push(num);
    const pop_front = () => deque.shift() || -1;
    const pop_back = () => deque.pop() || -1;
    const size = () => deque.length;
    const empty = () => (deque.length ? 0 : 1);
    const front = () => deque[0] || -1;
    const back = () => deque[deque.length - 1] || -1;

    const deque = [];
    let result = '';

    for (let i of data) {
        const oper = i[0];

        switch (oper) {
            case 'push_front':
                push_front(i[1]);
                break;
            case 'push_back':
                push_back(i[1]);
                break;
            case 'pop_front':
                result += pop_front() + '\n';
                break;
            case 'pop_back':
                result += pop_back() + '\n';
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
