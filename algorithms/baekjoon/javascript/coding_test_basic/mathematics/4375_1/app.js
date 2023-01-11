const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const solution1 = (nums) => {
    for (let n of nums) {
        let num = 0;
        let i = 1;
        while (true) {
            num = num * 10 + 1;
            console.log('1로만 이루어진 배수', num);
            num %= n;
            console.log('나머지', num);
            console.log('자릿수', i);

            if (num === 0) {
                console.log(i);
                break;
            }
            i++;
        }
        /* for ver.*/
        // for (let j = 1; ; j++) {
        //     num = num * 10 + 1;
        //     num %= n;
        //     if (num === 0) {
        //         console.log(j);
        //         break;
        //     }
        // }
    }
};

console.log('solution1');
solution1(input);
