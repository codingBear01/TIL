const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0].split(' ')[0]; // 세로
const m = +input[0].split(' ')[1]; // 가로
// 2차원 배열로 맵 정보 입력받기
const graph = [];
for (let i = 1; i < input.length; i++) {
  const nums = input[i].split('').map((val) => +val);
  graph.push(nums);
}

// 이동할 네 방향 정의(상, 하, 좌, 우)
dx = [-1, 1, 0, 0];
dy = [0, 0, -1, 1];

const solution = (x, y, n, m, graph) => {
  // 큐 구현을 위해 빈 배열을 선언
  const queue = [];
  queue.push([0, 0]);
  // 큐가 빌 때까지 반복
  while (queue.length > 0) {
    const shift = queue.shift();
    x = shift[0];
    y = shift[1];
    // 현재 위치에서 네 방향으로 위치 확인
    for (let i = 0; i < 4; i++) {
      nx = x + dx[i];
      ny = y + dy[i];
      // 미로 찾기 공간을 벗어난 경우 무시
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      // 괴물이 있는 경우 무시
      if (graph[nx][ny] === 0) continue;
      // 해당 노드를 처음 방문하는 경우에만 최단 거리 기록
      if (graph[nx][ny] === 1) {
        graph[nx][ny] = graph[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
  // 가장 오른쪽 아래까지 최단 거리 반환
  return graph[n - 1][m - 1];
};

console.log(solution(0, 0, n, m, graph));
