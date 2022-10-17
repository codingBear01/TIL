const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input2.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input3.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input4.txt';
const [input, ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const n = +input.split(' ')[0];
const m = +input.split(' ')[1];
const graph = inputs.map((val) =>
  val.split('').filter((val) => !isNaN(parseInt(val)))
);

const solution = (n, m, graph) => {
  // 상하좌우 탐색을 위한 좌푯값 배열 선언
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  const visited = Array.from(Array(n), () => Array(m).fill(false));

  // bfs
  const bfs = (r, c) => {
    const queue = [];
    queue.push([r, c]);

    while (queue.length > 0) {
      const node = queue.shift();
      visited[r][c] = true;

      // 상하좌우 탐색
      for (let i = 0; i < 4; i++) {
        let x = node[0] + dx[i];
        let y = node[1] + dy[i];

        // 좌표 유효성 검사
        if (x >= 0 && y >= 0 && x < n && y < m) {
          // 이동 가능한 좌표 1이면서, 방문하지 않았다면
          if (+graph[x][y] === 1 && !visited[x][y]) {
            // 방문 기록
            visited[x][y] = true;
            graph[x][y] = +graph[node[0]][node[1]] + 1; // 깊이 갱신
            queue.push([x, y]);
          }
        }
      }
    }
  };
  bfs(0, 0);
  console.log(graph[n - 1][m - 1]);
};
solution(n, m, graph);
