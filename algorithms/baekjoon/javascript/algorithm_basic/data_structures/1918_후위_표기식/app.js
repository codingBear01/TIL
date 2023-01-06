const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const answer1 = (data) => {
    const stack = [];
    let result = '';

    for (let c of data) {
        if (c >= 'A' && c <= 'Z') {
            result += c;
        } else {
            if (c === '(') {
                stack.push(c);
            } else if (c === ')') {
                while (stack.length && stack[stack.length - 1] !== '(') {
                    result += stack.pop();
                }
                stack.pop();
            } else if (c === '+' || c === '-') {
                while (stack.length && stack[stack.length - 1] !== '(') {
                    result += stack.pop();
                }
                stack.push(c);
            } else if (c === '*' || c === '/') {
                while (
                    stack.length &&
                    (stack[stack.length - 1] === '*' ||
                        stack[stack.length - 1] === '/')
                ) {
                    result += stack.pop();
                }
                stack.push(c);
            }
        }
    }

    while (stack.length) {
        result += stack.pop();
    }

    return result;
};

console.log('answer1', answer1(input));

const answer2 = (data) => {
    const priority = (operator) => {
        if (operator === '+' || operator === '-') return 1;
        else if (operator === '*' || operator === '/') return 2;
        else return 0;
    };

    const stack = [];
    let result = '';

    for (let c of data) {
        if (c >= 'A' && c <= 'Z') result += c;
        else {
            if (c === '(') stack.push(c);
            else if (c === ')') {
                while (stack.length && stack[stack.length - 1] !== '(')
                    result += stack.pop();

                stack.pop();
            } else {
                while (
                    stack.length &&
                    priority(stack[stack.length - 1]) >= priority(c)
                )
                    result += stack.pop();
                stack.push(c);
            }
        }
    }

    while (stack.length) result += stack.pop();

    return result;
};

console.log('answer2', answer2(input));
