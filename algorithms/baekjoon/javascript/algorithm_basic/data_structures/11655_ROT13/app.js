const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

const solution1 = (data) => {
    let result = '';

    for (let i of data) {
        const idx = i.charCodeAt();

        if ((idx >= 97 && idx < 110) || (idx >= 65 && idx < 78))
            result += String.fromCharCode(idx + 13);
        else if ((idx >= 110 && idx < 123) || (idx >= 78 && idx < 91))
            result += String.fromCharCode(idx - 13);
        else result += i;
    }

    return result;
};

console.log('solution1');
console.log(solution1(input));

const solution2 = (data) => {
    let result = '';

    for (let i of data) {
        if (i >= 'a' && i <= 'z')
            result += String.fromCharCode(
                i <= 'm' ? i.charCodeAt() + 13 : i.charCodeAt() - 13
            );
        else if (i >= 'A' && i <= 'Z')
            result += String.fromCharCode(
                i <= 'M' ? i.charCodeAt() + 13 : i.charCodeAt() - 13
            );
        else result += i;
    }

    return result;
};

console.log('solution2');
console.log(solution2(input));
