const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const solution1 = (data) => {
    let result = 0;
    const stack = [];

    for (let i in data) {
        i = parseInt(i);

        if (data[i] === '(') stack.push(data[i]);
        else {
            stack.pop();
            if (data[i - 1] === '(') result += stack.length;
            else result++;
        }
    }

    return result;
};

console.log('solution1', solution1(input));

const solution2 = (data) => {
    let result = 0;
    const stack = [];
    let i = 0;

    while (i < data.length) {
        if (data[i] === '(') {
            if (data[i + 1] === ')') {
                result += stack.length;
                i += 2;
            } else {
                stack.push(data[i]);
                i++;
            }
        } else if (data[i] === ')') {
            result++;
            stack.pop();
            i++;
        }
    }

    return result;
};

console.log('solution2', solution2(input));

const solution3 = (data) => {
    let result = 0;
    const stack = [];
    let tmp = data;
    const pipe = tmp.replaceAll('()', '*');

    for (let i of pipe) {
        if (i === '(') stack.push(i);
        else if (i === ')') {
            stack.pop();
            result++;
        } else result += stack.length;
    }

    return result;
};

console.log('solution3', solution3(input));

const solution4 = (data) => {
    let result = 0;
    let left = 0;

    for (let i in data) {
        i = parseInt(i);

        if (data[i] === '(') left++;
        else {
            left--;
            if (data[i - 1] === '(') result += left;
            else result++;
        }
    }

    return result;
};

console.log('solution4', solution4(input));
