const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

n = parseInt(n);
let data = input.map(Number);

const solution1 = (t, data) => {
    const max = Math.max(...data);
    let prime = Array(max + 1).fill(true);
    prime[0] = prime[1] = false;

    for (let i = 2; i <= Math.sqrt(max); i++)
        if (prime[i]) for (let j = i + i; j <= max; j += i) prime[j] = false;
    // for (let i = 2; i <= Math.floor(max / 2); i++)
    //     if (prime[i])
    //         for (let j = 2; j <= Math.floor(max / i); j++) prime[i * j] = false;

    let result = '';
    for (let num of data) {
        let cnt = 0;
        console.log('num', num);
        for (let j = 2; j <= Math.floor(num / 2); j++)
            if (prime[j] && prime[num - j]) {
                console.log('j', j);
                console.log('num - j', num - j);
                cnt++;
            }
        result += String(cnt) + '\n';
    }

    return result.trim();
};

console.log('solution1');
console.log(solution1(n, data));
