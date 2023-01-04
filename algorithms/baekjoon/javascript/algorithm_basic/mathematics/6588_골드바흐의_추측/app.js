const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map((val) => parseInt(val));

const answer1 = (nums) => {
    console.log('answer1');

    const n = 1000000;
    let arr = Array(n + 1).fill(true);

    for (let i = 2; i <= parseInt(n ** 0.5); i++) {
        if (arr[i]) {
            for (let j = i * 2; j <= n + 1; j += i) {
                arr[j] = false;
            }
        }
    }

    for (let num of nums) {
        if (num === 0) break;

        for (let i = 3; i < arr.length; i++) {
            if (arr[i] && arr[num - i]) {
                console.log(`${num} = ${i} + ${num - i}`);
                break;
            }
        }
    }
};

answer1(input);

const answer2 = (nums) => {
    console.log('answer2');

    n = 1000000;
    let arr = [false, false];
    arr = arr.concat(Array(n).fill(true));

    for (let i = 2; i <= parseInt(n ** 0.5); i++) {
        if (arr[i]) {
            for (let j = i * 2; j <= n + 1; j += i) {
                arr[j] = false;
            }
        }
    }

    for (let num of nums) {
        if (num === 0) break;

        let a = 0;
        let b = num;

        let isAnswer = false;
        for (let i = 0; i < n; i++) {
            if (arr[a] && arr[b]) {
                console.log(`${num} = ${i} + ${num - i}`);
                isAnswer = true;
                break;
            }
            a++;
            b--;
        }

        if (!isAnswer) console.log("Goldbach's conjecture is wrong.");
    }
};

answer2(input);

const answer3 = (nums) => {
    console.log('answer3');

    const isPrime = (num) => {
        if (num === 1) return false;

        for (let i = 2; i <= parseInt(num ** 0.5); i++) {
            if (num % i === 0) return false;
        }

        return true;
    };

    for (let num of nums) {
        if (num === 0) break;

        for (let i = 3; i <= num; i += 2) {
            if (isPrime(i) && isPrime(num - i)) {
                console.log(`${num} = ${i} + ${num - i}`);
                break;
            }
        }
    }
};

answer3(input);
