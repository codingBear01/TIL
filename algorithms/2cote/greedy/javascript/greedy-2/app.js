const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

/* input 
5 8 3
2 4 5 4 6

5 7 2
3 4 3 4 3
*/

const n = +input[0].split(' ')[0]; // 배열의 크기
const m = +input[0].split(' ')[1]; // 더하기 실행 횟수
const k = +input[0].split(' ')[2]; // 연속 더하기 한계 횟수
const data = input[1].split(' ').map((val) => +val);

// function mySolution(_n, _m, _k, _arr) {
//   let ans = [];
//   _arr = _arr.sort((a, b) => b - a);
//   const max = _arr[0];
//   const next = _arr[1];

//   if (max > next) {
//     while (ans.length < _m) {
//       for (let i = 0; i < _k; i++) {
//         ans.push(max);
//       }
//       ans.push(next);
//     }
//   } else if (max === next) {
//     while (ans.length < _m) {
//       ans.push(max);
//     }
//   }

//   return ans.reduce((prev, curr) => prev + curr, 0);
// }

// console.log(mySolution(n, m, k, data));

function answer(_n, _m, _k, _arr) {
  _arr.sort((a, b) => a - b);
  const first = _arr[_n - 1];
  const second = _arr[_n - 2];

  ret = 0;

  while (true) {
    for (let i = 0; i < _k; i++) {
      if (_m === 0) break;
      ret += first;
      _m -= 1;
    }
    if (_m === 0) break;
    ret += second;
    _m -= 1;
  }

  return ret;
}

console.log(answer(n, m, k, data));
