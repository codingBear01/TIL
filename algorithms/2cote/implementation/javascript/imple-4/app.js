const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// N, M 입력받기
const n = +input[0][0]; // 세로 크기
const m = +input[0][2]; // 가로 크기
// 방문한 위치를 저장하기 위한 맵을 생성하여 0으로 초기화
const d = [];
for (let i = 0; i < n; i++) {
  d.push([]);
  for (let j = 0; j < m; j++) {
    d[i].push(0);
  }
}
// 현재 캐릭터의 X, Y좌표 및 방향 입력받기
const splited = input[1].split(' ');
let x = +splited[0]; // x
let y = +splited[1]; // y
let direction = +splited[2]; // 0: 북쪽, 1: 동쪽, 2: 남쪽, 3: 서쪽
// 현재 좌표 방문 처리
d[x][y] = 1;
// 전체 맵 정보 입력받기
const map = input.slice(2).map((val) => val.split(' ').map((val) => +val));
// 북, 동, 남, 서 움직일 방향 정의
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

// 왼쪽으로 회전

function answer(_x, _y, _d, _dx, _dy, _map, _direction) {
  // 시뮬레이션 시작
  let count = 1;
  let turn_time = 0;

  function turn_left() {
    _direction -= 1;
    if (_direction === -1) {
      _direction = 3;
    }
  }

  while (true) {
    // 왼쪽으로 회전
    turn_left();
    console.log('direct', _direction);
    console.log('x', _x);
    console.log('y', _y);
    nx = _x + _dx[_direction];
    ny = _y + _dy[_direction];

    // 회전한 이후 정면에 가보지 않은 칸이 존재하는 경우 이동
    if (_d[nx][ny] === 0 && _map[nx][ny] === 0) {
      _d[nx][ny] = 1;
      _x = nx;
      _y = ny;
      count++;
      turn_time = 0;
      continue;
      // 회전한 이후 정면에 가보지 않은 칸이 없거나 바다인 경우
    } else {
      turn_time++;
    }
    // 네 방향 모두 갈 수 없는 경우
    if (turn_time === 4) {
      nx = _x - _dx[_direction];
      ny = _y - _dy[_direction];
      // 뒤로 갈 수 있다면 이동하기
      if (_map[nx][ny] === 0) {
        _x = nx;
        _y = ny;
      } else {
        break;
      }
      turn_time = 0;
    }
  }

  return count;
}
console.log('ans', answer(x, y, d, dx, dy, map, direction));
