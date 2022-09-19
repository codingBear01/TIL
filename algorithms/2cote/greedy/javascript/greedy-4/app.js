const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

/* input 
25 5 // 2

17 4 // 3

25 3 // 6

N에서 1을 빼거나
N을 K로 나누어 
1을 만드는 연산의 횟수

단 K로 나누는 것은 K로 N을 나누었을 때 나머지가 남지 않을 경우 가능ㅇㅅㅇ!
*/

const n = +input[0];
const k = +input[1];

function mySolution(_n, _k) {
  let cnt = 0;
  let ret = 0;

  while (true) {
    if (ret === 1) return cnt;

    if (_n % _k === 0) {
      ret = _n / _k;
      _n = ret;
      cnt++;
    } else {
      ret = _n - 1;
      _n = ret;
      cnt++;
    }
  }
}
console.log('my sol', mySolution(n, k));

function simpleAnswer(_n, _k) {
  let cnt = 0;

  while (_n >= _k) {
    while (_n % _k !== 0) {
      _n -= 1;
      cnt++;
    }
    _n = Math.floor(_n / _k);
    cnt++;
  }

  while (_n > 1) {
    _n -= 1;
    cnt++;
  }

  return cnt;
}
console.log('simple ans', simpleAnswer(n, k));

function normalAnswer(_n, _k) {
  let ret = 0;

  while (true) {
    target = Math.floor(_n / _k) * _k;
    ret += _n - target;
    _n = target;

    if (_n < _k) break;

    ret++;
    _n = Math.floor(_n / _k);
  }

  ret += _n - 1;

  return ret;
}
console.log('normal ans', normalAnswer(n, k));
