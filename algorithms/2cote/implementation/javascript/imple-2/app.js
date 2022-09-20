const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const n = +input;

function answer(_n) {
  let cnt = 0;

  for (let i = 0; i <= _n; i++) {
    for (let j = 0; j < 60; j++) {
      for (let k = 0; k < 60; k++) {
        if ((i.toString() + j.toString() + k.toString()).includes('3')) {
          cnt++;
        }
      }
    }
  }
  return cnt;
}
console.log('ans', answer(n));
