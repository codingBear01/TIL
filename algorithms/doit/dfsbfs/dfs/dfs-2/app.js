const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input2.txt';
const input = fs.readFileSync(filePath).toString().trim();

/*
재귀 함수에 자릿수 개념을 붙여 구현
*/

const n = +input;
