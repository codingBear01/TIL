const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const solution1 = (data) => {
    if (data.length === 1 && data[0] === '0') return 0;
    else {
        let result = '';
        for (let i = 0; i < data.length; i++) {
            result += parseInt(data[i], 8).toString(2).padStart(3, 0);
        }
        result = result.split('');
        while (result[0] === '0') {
            result.shift();
        }
        return result.join('');
    }
};

console.log('solution1');
console.log(solution1(input));

const solution2 = (data) => {
    let result = '';
    let nums = data;
    while (nums.length !== 0) {
        if (nums.length > 1) {
            result =
                parseInt(nums.slice(nums.length - 1), 8)
                    .toString(2)
                    .padStart(3, '0') + result;
        } else {
            result =
                parseInt(nums.slice(nums.length - 1), 8).toString(2) + result;
        }
        nums = nums.slice(0, nums.length - 1);
    }
    return result;
};

console.log('solution2');
console.log(solution2(input));

const solution3 = (data) => {
    const nums = data.split('');
    let result = '';
    nums.forEach((num, idx) => {
        let binary = parseInt(num, 8).toString(2);
        while (idx !== 0 && binary.length < 3) binary = '0' + binary;
        result += binary;
    });

    return result;
};

console.log('solution3');
console.log(solution3(input));
