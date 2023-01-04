const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const str = input
    .splice(0, 1)[0]
    .split('')
    .filter((val) => val !== '\r');

const n = parseInt(input.splice(0, 1));

const mySolution = (str, data) => {
    let idx = str.length;

    for (let d of data) {
        const oper = d[0];

        if (oper === 'P') {
            const d1 = d[2];

            if (idx >= str.length) {
                str.push(d1);
            } else {
                str.splice(idx, 0, d1);
            }

            idx++;
        } else if (oper === 'L' && idx > 0) {
            idx--;
        } else if (oper === 'D' && idx < str.length) {
            idx++;
        } else if (oper === 'B' && idx > 0) {
            str.splice(idx - 1, 1);
            idx--;
        }
    }

    return str.join('');
};

console.log('mySolution', mySolution(str, input));

const answer1 = (str, data) => {
    let lStack = str;
    let rStack = [];

    for (let d of data) {
        const oper = d[0];

        if (oper === 'P') {
            lStack.push(d[2]);
        } else if (oper === 'L' && lStack.length) {
            rStack.push(lStack.pop());
        } else if (oper === 'D' && rStack.length) {
            lStack.push(rStack.pop());
        } else if (oper === 'B' && lStack.length) {
            lStack.pop();
        }
    }

    return lStack.concat(rStack.reverse()).join('');
};

console.log(answer1(str, input));
