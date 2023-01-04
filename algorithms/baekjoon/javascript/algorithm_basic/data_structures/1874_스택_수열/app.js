const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(' ')
    .map((val) => parseInt(val));

const [n, k] = input;

const mySolution = (n, k) => {
    let nums = [];
    const result = [];

    for (let i = 1; i <= n; i++) nums.push(i);

    let idx = k - 1;

    while (nums.length) {
        const left = [];
        const right = [];

        if (nums.length >= k) {
            const popped = nums.splice(idx, 1)[0];
            result.push(popped);

            for (let i = idx; i < nums.length; i++) {
                left.push(nums[i]);
            }
            for (let i = 0; i < idx; i++) {
                right.push(nums[i]);
            }

            nums = left.concat(right);
        } else {
            const popped = nums.shift();
            result.push(popped);

            for (let num of nums) {
                left.push(num);
            }

            nums = left;
        }
    }

    return `<${result.map((val) => String(val)).join(', ')}>`;
};

console.log('mySolution', mySolution(n, k));

const answer1 = (n, k) => {
    const people = [];
    for (let i = 1; i <= n; i++) people.push(i);
    const result = [];

    while (people.length) {
        for (let i = 0; i < k - 1; i++) {
            people.push(people.shift());
        }
        result.push(people.shift());
    }

    return `<${result.map((val) => String(val)).join(', ')}>`;
};

console.log('answer1', answer1(n, k));

const answer2 = (n, k) => {
    const people = [];
    for (let i = 1; i <= n; i++) people.push(i);
    const result = [];

    let idx = 0;

    for (let i = 0; i < n; i++) {
        idx += k - 1;

        if (idx >= people.length) {
            idx %= people.length;
        }

        result.push(people.splice(idx, 1)[0]);
    }

    return `<${result.map((val) => String(val)).join(', ')}>`;
};

console.log('answer2', answer2(n, k));

const answer3 = (n, k) => {
    const queue = [...new Array(n)].map((item, index) => (item = index + 1));
    const result = [];
    let count = 1;

    while (queue.length) {
        const shifted = queue.shift();

        if (count % k === 0) {
            result.push(shifted);
        } else {
            queue.push(shifted);
        }

        count++;
    }

    return `<${result.map((val) => String(val)).join(', ')}>`;
};

console.log('answer3', answer3(n, k));

const answer4 = (n, k) => {
    const arr = Array.from({ length: n }, (v, i) => i + 1);
    const result = [];

    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= k; j++) {
            if (j === k) {
                result.push(arr.shift());
            } else {
                arr.push(arr.shift());
            }
        }
    }

    return `<${result.map((val) => String(val)).join(', ')}>`;
};

console.log('answer4', answer4(n, k));

const answer5 = (n, k) => {
    const arr = Array.from({ length: n }, (v, i) => i + 1);
    const result = [];

    let cnt = 0;

    while (arr.length) {
        cnt = (cnt + k - 1) % arr.length;
        result.push(arr[cnt]);
        arr.splice(cnt, 1);
    }

    return '<' + result.join(', ') + '>';
};

console.log('answer5', answer5(n, k));
