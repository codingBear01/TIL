const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map((val) => parseInt(val));

const n = input.splice(0, 1);

const answer1 = (n, data) => {
    const stack = [];
    const result = [];
    let count = 1;

    for (let num of data) {
        while (count <= num) {
            stack.push(count);
            result.push('+');
            count++;
        }

        if (stack.pop() === num) {
            result.push('-');
        } else {
            return 'NO';
        }
    }

    return result.join('\n');
};

console.log('answer1', answer1(n, input));

const answer2 = (n, data) => {
    const [stack, result] = [[], []];
    let [count, isPossible] = [1, true];

    for (let num of data) {
        while (count <= num) {
            stack.push(count);
            result.push('+');
            count++;
        }

        if (stack.pop() === num) {
            result.push('-');
        } else {
            isPossible = false;
            break;
        }
    }

    if (!isPossible) {
        return 'NO';
    } else {
        return result.join('\n');
    }
};

console.log('answer2', answer2(n, input));
