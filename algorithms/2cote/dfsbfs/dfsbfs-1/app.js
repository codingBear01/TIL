const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = input[0].split(' ')[0]; // 세로
const m = input[0].split(' ')[1]; // 가로
