const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input2.txt';
const [input, ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const node = +input.split(' ')[0]; // 노드 개수
const edge = +input.split(' ')[1]; // 에지 개수
const start = +input.split(' ')[2]; // 시작점
const nums = inputs.map((val) => {
  const num = val.split(' ');
  return num.map((val) => +val);
});

const solution = (n, e, s, nums) => {
  const graph = [];
  for (let i = 1; i <= n; i++) {
    graph[i] = [];
  }
  nums.forEach((val) => {
    const [from, to] = val;
    graph[from].push(to);
    graph[to].push(from);
  });
  // 방문할 수 있는 노드가 여러 개일 경우 번호가 작은 것부터 방문하기 위해 오름차순 정렬
  for (let i = 1; i <= n; i++) {
    // 각 노드와 연결된 에지를 오름차순 정렬
    graph[i] = graph[i].sort((a, b) => a - b);
  }

  // dfs
  const dfsVisited = new Array(n + 1).fill(false);
  const dfsResult = [];
  const dfs = (v) => {
    if (dfsVisited[v]) return;
    dfsVisited[v] = true;
    // dfs 결괏값 출력을 위해 배열에 노드 삽입
    dfsResult.push(v);
    graph[v].forEach((node) => {
      if (!dfsVisited[node]) dfs(node);
    });
  };

  // bfs
  const bfsVisited = new Array(n + 1).fill(false);
  const bfsResult = [];
  const bfs = (v) => {
    // 큐에 시작 노드 삽입하기
    const queue = [];
    queue.push(v);
    bfsVisited[v] = true;
    // 큐가 빌 때까지
    while (queue.length > 0) {
      const shiftedNode = queue.shift();
      bfsResult.push(shiftedNode);
      graph[shiftedNode].forEach((node) => {
        if (!bfsVisited[node]) {
          bfsVisited[node] = true;
          queue.push(node);
        }
      });
    }
  };

  dfs(s);
  bfs(s);

  console.log('dfsResult', dfsResult.join(' '));
  console.log('bfsResult', bfsResult.join(' '));
};
solution(node, edge, start, nums);
