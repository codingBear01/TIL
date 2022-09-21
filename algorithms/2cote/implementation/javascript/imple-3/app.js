const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('');

/*
a1 // 2
c2 // 6
*/

const chars = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
};
const arr = [
  [2, 1],
  [-2, -1],
  [2, -1],
  [-2, 1],
  [1, 2],
  [-1, 2],
  [1, -2],
  [-1, -2],
];
const x = chars[input[0]];
const y = +input[1];

function mySolution(_x, _y, _arr) {
  let cnt = 0;

  for (let el of _arr) {
    resX = _x + el[0];
    resY = _y + el[1];

    if (resX > 0 && resX < 9 && resY > 0 && resY < 9) {
      cnt++;
    }
  }

  return cnt;
}
console.log('my sol', mySolution(x, y, arr));
