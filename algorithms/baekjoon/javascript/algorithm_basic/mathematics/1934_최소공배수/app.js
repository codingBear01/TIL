const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = parseInt(input[0]);
const data = [];

for (let i = 1; i < input.length; i++) {
    const nums = input[i].split(' ').map((val) => parseInt(val));
    data.push(nums);
}

const answer1 = (n, data) => {
    const whileVer = (a, b) => {
        let r;
        while (b > 0) {
            r = a % b;
            a = b;
            b = r;
        }

        return a;
    };

    const recursionVer = (a, b) => {
        if (b === 0) return a;

        return recursionVer(b, a % b);
    };

    for (let i = 0; i < n; i++) {
        let a = data[i][0],
            b = data[i][1];

        multiple = a * b;

        // gcd = recursionVer(a, b);
        gcd = whileVer(a, b);

        lcm = parseInt(multiple / gcd);

        console.log(lcm);
    }
};

answer1(n, data);
