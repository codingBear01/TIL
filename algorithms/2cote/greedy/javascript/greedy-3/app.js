const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

/* input 
3 3
3 1 2
4 1 4
2 2 2

2 4
7 3 1 8
3 3 3 4
*/

const n = +input[0].split(' ')[0]; // 행
const m = +input[0].split(' ')[1]; // 열
const data = [];
for (let i = 1; i < input.length; i++) {
  data.push(input[i].split(' '));
}

function mySolution(_n, _m, _data) {
  const ans = [];

  for (let i = 0; i < _n; i++) {
    let min = +_data[i][0];

    for (let j = 0; j < _data[i].length; j++) {
      if (min === 0) continue;
      let next = +_data[i][j];

      if (min > next) {
        min = next;
      }
    }
    ans.push(min);
  }

  return ans.sort((a, b) => b - a)[0];
}
console.log('my sol', mySolution(n, m, data));

function minMaxSolution(_n, _m, _data) {
  const ans = [];

  for (let i of _data) {
    const arr = i;
    const min = Math.min(...arr);
    ans.push(min);
  }

  return Math.max(...ans);
}
console.log('min max sol', minMaxSolution(n, m, data));

function forLoopSolution(_n, _m, _data) {
  const ans = [];

  for (let i of _data) {
    const arr = i;
    let min = 10001;

    for (let j of arr) {
      if (min > +j) {
        min = j;
      }
    }
    ans.push(min);
  }

  return Math.max(...ans);
}
console.log('for loop sol', forLoopSolution(n, m, data));
