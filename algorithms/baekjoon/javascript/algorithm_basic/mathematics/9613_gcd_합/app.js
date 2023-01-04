const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

t = parseInt(t);

const mySolution = (t, data) => {
    const gcd = (a, b) => {
        // let r;

        // while (b > 0) {
        //     r = a % b;
        //     a = b;
        //     b = r;
        // }

        // return a;

        if (b === 0) return a;

        return gcd(b, a % b);
    };

    for (let i = 0; i < t; i++) {
        const nums = data[i].split(' ');
        const n = parseInt(nums[0]);
        let sum = 0;

        for (let j = 1; j < n; j++) {
            const a = parseInt(nums[j]);

            for (let k = j + 1; k <= n; k++) {
                const b = parseInt(nums[k]);
                sum += gcd(a, b);
            }
        }

        console.log(sum);
    }
};

console.log('mySolution');
mySolution(t, input);

const answer1 = (t, input) => {
    const gcd = (a, b) => {
        if (a % b === 0) return b;
        return gcd(b, a % b);
    };

    const getSum = (n, ...arr) => {
        let sum = 0;

        arr.sort((a, b) => b - a);
        arr.forEach((v, i) => {
            while (i < n - 1) {
                sum += gcd(v, arr[++i]);
            }
        });

        console.log(sum);
    };

    input.forEach((v) => {
        getSum(...v.split(' ').map((val) => parseInt(val)));
    });
};

console.log('answer1');
answer1(t, input);

const answer2 = (t, input) => {
    const gcd = (a, b) => {
        if (b === 0) return a;

        return a > b ? gcd(b, a % b) : gcd(a, b % a);
    };

    input.forEach((v) => {
        v = v.split(' ');
        const n = parseInt(v.splice(0, 1));
        const nums = v.map((val) => parseInt(val));
        let sum = 0;

        for (let i = 0; i < n - 1; i++) {
            for (let j = i + 1; j < n; j++) {
                sum += gcd(nums[i], nums[j]);
            }
        }

        console.log(sum);
    });
};

console.log('answer2');
answer2(t, input);
