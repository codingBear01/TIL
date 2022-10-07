const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input2.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0].split(' ')[0]; // 세로
const m = +input[0].split(' ')[1]; // 가로
// 2차원 배열의 맵 정보 입력받기
const graph = [];
for (let i = 1; i < input.length; i++) {
  const nums = input[i].split('').map((val) => +val);
  graph.push(nums);
}

const solution = (n, m, graph) => {
  // DFS로 특정한 노드를 방문한 뒤에 연결된 모든 노드들도 방문
  const dfs = (x, y) => {
    // 주어진 범위를 벗어나는 경우에는 즉시 종료
    if (x <= -1 || x >= n || y <= -1 || y >= m) {
      return false;
    }
    // 현재 노드를 아직 방문하지 않았다면
    if (graph[x][y] === 0) {
      // 해당 노드 방문 처리
      graph[x][y] = 1;
      // 상, 하, 좌, 우의 위치도 모두 재귀적으로 호출
      dfs(x - 1, y);
      dfs(x, y - 1);
      dfs(x + 1, y);
      dfs(x, y + 1);
      return true;
    }
    return false;
  };

  // 모든 위치에 음료수 채우기
  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // 현재 위치에서 DFS 수행
      if (dfs(i, j) === true) {
        result++;
      }
    }
  }
  // 정답 출력
  return result;
};
console.log(solution(n, m, graph));
