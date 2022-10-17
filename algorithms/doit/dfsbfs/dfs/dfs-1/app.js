const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input2.txt';
const [input, ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

/*
모든 노드를 탐색하는 데 실행한 DFS의 실행 횟수가 곧 연결 요소 개수와 같습니다.
*/

const n = +input.split(' ')[0]; // 노드 개수
const m = +input.split(' ')[1]; // 에지 개수
const visited = new Array(n).fill(false); // 방문 기록 저장 배열

const solution = (n, m, visited) => {
  /* 그래프 데이터 저장 인접 리스트 */
  const graph = [];
  for (let i = 1; i <= n; i++) {
    /* 그래프 데이터 각 요소 초기화 */
    graph[i] = [];
  }

  /* 인접 데이터에 그래프 데이터 저장하기 */
  for (let i = 0; i < m; i++) {
    const [from, to] = inputs[i].split(' ').map((val) => +val);
    /* 양방향 에지이므로 양쪽에 에지를 더하기. from에 해당하는 index에 to 값을 넣고, 다시 to에 해당하는 index에 from 값을 넣어 구현 */
    graph[from].push(to);
    graph[to].push(from);
  }

  const dfs = (v) => {
    if (visited[v]) return;
    visited[v] = true;
    console.log(visited);
    for (let i = 0; i < graph[v].length; i++) {
      const next = graph[v][+i];
      /* 연결 노드 중 방문하지 않았던 노드만 탐색 */
      if (!visited[next]) {
        dfs(next);
      }
    }
  };

  let cnt = 0; // dfs 수행 횟수
  for (let i = 1; i <= n; i++) {
    /* 방문하지 않은 노드가 없을 때까지 dfs 반복 */
    if (!visited[i]) {
      cnt++;
      dfs(i);
    }
  }

  return cnt;
};
console.log(solution(n, m, visited));
