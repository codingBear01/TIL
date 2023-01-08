const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

n = parseInt(n);
const data = input.map((val) => val.split(' '));

const solution1 = (n, data) => {
    const stack = [];
    let result = '';

    for (let i = 0; i < data.length; i++) {
        if (data[i].includes('push')) stack.push(data[i][1]);
        else {
            if (data[i][0] === 'top' && stack.length)
                result += stack[stack.length - 1] + '\n';
            else if (data[i][0] === 'top' && !stack.length) result += -1 + '\n';
            else if (data[i][0] === 'pop' && stack.length)
                result += stack.pop() + '\n';
            else if (data[i][0] === 'pop' && !stack.length) result += -1 + '\n';
            else if (data[i][0] === 'size') result += stack.length + '\n';
            else if (data[i][0] === 'empty' && stack.length) result += 0 + '\n';
            else if (data[i][0] === 'empty' && !stack.length)
                result += 1 + '\n';
        }
    }

    return result.trim();
};

console.log('solution1');
console.log(solution1(n, data));

const solution2 = (n, data) => {
    const push = (num) => stack.push(num);
    const pop = () => (stack.length ? stack.pop() : -1);
    const size = () => stack.length;
    const empty = () => (stack.length ? 0 : 1);
    const top = () => (stack.length ? stack[stack.length - 1] : -1);

    const stack = [];
    let result = '';

    for (let i = 0; i < data.length; i++) {
        switch (data[i][0]) {
            case 'push':
                push(data[i][1]);
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
            default:
                result += top() + '\n';
        }
    }

    return result.trim();
};

console.log('solution2');
console.log(solution2(n, data));
