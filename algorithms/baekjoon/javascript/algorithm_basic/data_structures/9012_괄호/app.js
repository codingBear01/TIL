const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = parseInt(input[0]);
const data = input.splice(1).map((val) => val.trim());

const answer1 = (n, data) => {
    for (let i of data) {
        let cnt = 0;

        for (let j of i.split('').filter((val) => val !== '\r')) {
            if (j === '(') cnt++;
            else cnt--;

            if (cnt < 0) {
                console.log('NO');
                break;
            }
        }

        if (cnt > 0) console.log('NO');
        else if (cnt === 0) console.log('YES');
    }
};

console.log('answer1');
answer1(n, data);

const answer2 = (n, data) => {
    for (let i of data) {
        let tmp = i;

        while (tmp.includes('()')) tmp = tmp.replace('()', '');

        tmp.length > 0 ? console.log('NO') : console.log('YES');
    }
};

console.log('answer2');
answer2(n, data);

const answer3 = (n, data) => {
    for (let i of data) {
        const stack = [];

        let isVPS = true;
        for (let j of i) {
            if (j === '(') stack.push(j);
            else {
                if (stack.length) stack.pop();
                else {
                    isVPS = false;
                    break;
                }
            }
        }

        if (isVPS && !stack.length) console.log('YES');
        else if (!isVPS || stack.length) console.log('NO');
    }
};

console.log('answer3');
answer3(n, data);
