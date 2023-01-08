const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const solution1 = (data) => {
    const isAlpha = (s) => {
        if (data[i] >= 'a' && data[i] <= 'z') return true;
        return false;
    };
    const isNum = (s) => {
        if (data[i] >= '0' && data[i] <= '9') return true;
        return false;
    };

    let result = data.split('');
    let i = 0;
    let start = 0;

    while (i < result.length) {
        if (result[i] === '<') {
            i++;
            while (result[i] !== '>') i++;
            i++;
        } else if (isAlpha(result[i]) || isNum(result[i])) {
            start = i;
            while (
                i < result.length &&
                (isAlpha(result[i]) || isNum(result[i]))
            )
                i++;
            let tmp = result.slice(start, i).reverse();
            for (let j = 0; j < tmp.length; j++) {
                result[start] = tmp[j];
                start++;
            }
        } else i++;
    }

    return result.join('');
};

console.log('solution1');
console.log(solution1(input));

const solution2 = (data) => {
    const string = data.split('');

    let isTag = false;
    let result = '';
    let stack = '';

    for (let i of string) {
        if (i === '<') {
            isTag = true;
            result += stack.split('').reverse().join('');
            stack = '';
            result += i;
            continue;
        } else if (i === '>') {
            isTag = false;
            result += i;
            continue;
        } else if (i === ' ') {
            result += stack.split('').reverse().join('') + ' ';
            stack = '';
            continue;
        }

        isTag ? (result += i) : (stack += i);
    }

    if (stack) result += stack.split('').reverse().join('');

    return result;
};

console.log('solution2');
console.log(solution2(input));

const solution3 = (data) => {
    const string = data.split('');

    let isTag = false;
    let result = '';
    let stack = '';

    for (let i of string) {
        if (!isTag) {
            if (i === '<') {
                isTag = true;
                stack += i;
            } else if (i === ' ') {
                stack += i;
                result += stack;
                stack = '';
            } else stack = i + stack;
        } else {
            stack += i;
            if (i === '>') {
                isTag = false;
                result += stack;
                stack = '';
            }
        }
    }

    return result + stack;
};

console.log('solution3');
console.log(solution3(input));

const solution4 = (data) => {
    const string = data.split('');

    let result = [];
    let stack = [];

    for (let i of string) {
        if (i === '>') {
            stack.push(i);
            result.push(stack.join(''));
            stack = [];
        } else if (i === '<' && stack.length) {
            result.push(stack.reverse().join(''));
            stack = [i];
        } else if (i === ' ' && !stack.includes('<')) {
            result.push(stack.reverse().join('') + ' ');
            stack = [];
        } else stack.push(i);
    }

    if (stack.length) result.push(stack.reverse().join('') + ' ');

    return result.join('');
};

console.log('solution4');
console.log(solution4(input));
