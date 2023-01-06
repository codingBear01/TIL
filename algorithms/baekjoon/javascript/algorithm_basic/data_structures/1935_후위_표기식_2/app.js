const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = parseInt(input[0]);
const string = input[1].split('').filter((val) => val !== '\r');
const data = input.splice(2).map((val) => parseFloat(val));

// const mySolution = (n, string, data) => {
//     const keys = [];
//     const obj = {};

//     for (let c of string) {
//         if (c >= 'A' && c <= 'Z') keys.push(c);
//     }

//     for (let i in data) {
//         i = parseInt(i);
//         obj[keys[i]] = parseInt(data[i]);
//     }

//     for (let i in string) {
//         i = parseInt(i);
//         if (obj[string[i]]) string[i] = obj[string[i]];
//     }

//     const numStack = [];
//     for (let c of string) {
//         if (typeof c === 'number') numStack.push(parseFloat(c));
//         else {
//             const right = numStack.pop();
//             const left = numStack.pop();

//             if (c === '+') numStack.push(left + right);
//             else if (c === '-') numStack.push(left - right);
//             else if (c === '*') numStack.push(left * right);
//             else if (c === '/') numStack.push(left / right);
//         }
//     }

//     return numStack[0].toFixed(2);
// };

// console.log('mySolution', mySolution(n, string, data));

const answer1 = (n, string, data) => {
    const stack = [];

    for (let i in string) {
        i = parseInt(i);
        if (string[i] >= 'A' && string[i] <= 'Z') {
            let idx = string[i].charCodeAt() - 'A'.charCodeAt();
            stack.push(data[idx]);
        } else {
            const right = stack.pop();
            const left = stack.pop();

            stack.push(eval(String(left) + string[i] + String(right)));
        }
    }

    return stack[0].toFixed(2);
};

console.log('answer1', answer1(n, string, data));

const answer2 = (n, string, data) => {
    const obj = {};
    const stack = [];
    let startCode = 65;

    for (let i = 0; i < n; i++) {
        obj[String.fromCharCode(startCode)] = data[i];
        startCode++;
    }

    const command = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    };

    string.forEach((val) => {
        if (val >= 'A' && val <= 'Z') stack.push(obj[val]);
        else {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(command[val](a, b));
        }
    });

    return stack[0].toFixed(2);
};

console.log('answer2', answer2(n, string, data));

const answer3 = (n, string, data) => {
    let ASCII = 65;
    const stack = [];
    const operators = ['-', '/', '+', '*'];
    const obj = {};

    const command = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    };

    for (let i = 0; i < n; i++) {
        const alphabet = String.fromCharCode(ASCII++);
        obj[alphabet] = data[i];
    }

    const transformedString = string.map((val) =>
        !operators.includes(val) ? obj[val] : val
    );

    for (let i of transformedString) {
        let pushVal = i;
        if (operators.includes(i)) {
            const b = stack.pop();
            const a = stack.pop();
            pushVal = command[pushVal](a, b);
        }
        stack.push(pushVal);
    }

    return stack[0].toFixed(2);
};

console.log('answer3', answer3(n, string, data));
