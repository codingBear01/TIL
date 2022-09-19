const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
const data = input[1].split(' ');

function mySolution(_n, _data) {
  const arr = [];

  for (let i = 0; i < _n; i++) {
    arr.push([]);
    for (let j = 0; j < _n; j++) {
      arr[i].push([i + 1, j + 1]);
    }
  }

  let x = 0;
  let y = 0;

  for (let i of _data) {
    if (i === 'R' && x <= _n) {
      x += 1;
    } else if (i === 'L' && x >= _n) {
      x -= 1;
    } else if (i === 'U' && y >= _n) {
      y -= 1;
    } else if (i === 'D' && y <= _n) {
      y += 1;
    }
  }

  console.log('my sol', arr[y][x][0], arr[y][x][1]);
}
mySolution(n, data);

function answer(_n, _data) {
  let [x, y] = [1, 1];

  dx = [0, 0, -1, 1];
  dy = [-1, 1, 0, 0];
  moveTypes = ['L', 'R', 'U', 'D'];

  for (let data of _data) {
    for (let i in moveTypes) {
      if (data === moveTypes[i]) {
        nx = x + dx[i];
        ny = y + dy[i];
      }
    }

    if (nx < 1 || y < 1 || nx > n || ny > n) continue;

    x = nx;
    y = ny;
  }

  console.log('ans', x, y);
}
answer(n, data);
