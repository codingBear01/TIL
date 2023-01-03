const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(' ')
    .map((val) => parseInt(val));

const m = input[0];
const n = input[1];

const answer1 = (m, n) => {
    console.log('answer1');

    const isPrime = (num) => {
        if (num === 1) return false;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }

        return true;
    };

    for (let i = m; i <= n; i++) {
        if (isPrime(i)) console.log(i);
    }
};

answer1(m, n);

const answer2 = (m, n) => {
    console.log('answer2');

    let arr = Array(n + 1).fill(true);

    arr[0] = false;
    arr[1] = false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (arr[i]) {
            // for (let j = i * 2; j <= n; j += i) {
            //     arr[j] = false;
            // }
            let j = 2;
            while (i * j <= n) {
                arr[i * j] = false;
                j++;
            }
        }
    }

    for (let i = m; i <= n; i++) {
        if (arr[i]) console.log(i);
    }
};

answer2(m, n);

const answer3 = (m, n) => {
    console.log('answer3');

    for (let i = m; i <= n; i++) {
        if (i === 1) continue;

        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
            }
        }

        if (isPrime) console.log(i);
    }
};

answer3(m, n);
