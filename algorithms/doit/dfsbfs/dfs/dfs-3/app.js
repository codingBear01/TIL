const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input2.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input3.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input4.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

/*
주어진 모든 노드에 DFS를 수행하고 재귀의 깊이가 5 이상(S개의 노드가 재귀 형태로 연결)이면 1, 아니 라면 0을 출력합니다.
*/

const n = +input[0].split(' ')[0]; // 노드 개수
const m = +input[0].split(' ')[1]; // 에지 개수
const visited = new Array(n).fill(false); // 방문 기록 저장 배열
// 도착 확인 변수
const nums = [];
for (let i = 1; i < input.length; i++) {
  const el = input[i].split(' ').map((val) => +val);
  nums.push(el);
}

const solution = (n, m, visited) => {
  let arrive = false; // 도착 여부 확인 변수
  // dfs 구현
  const dfs = (current, depth) => {
    // depth 5가 되면 함수 종료
    if (depth === 5 || arrive) {
      arrive = true;
      return;
    }
    // 방문 배열에 현재 노드 방문 기록하기
    visited[current] = true;
    // 현재 노드의 연결 노드 중 방문하지 않은 노드 있다면 dfs 실행
    for (let i of graph[current]) {
      // 재귀 dfs가 호출될 때 마다 depth 1씩 증가
      if (!visited[i]) dfs(i, depth + 1);
    }
    visited[current] = false;
  };

  const graph = []; // 그래프 데이터 저장 인접 리스트
  // 인접 리스트의 각 ArrayList 초기화
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }
  // 인접 리스트에 그래프 데이터 저장하기
  for (let i = 0; i < m; i++) {
    const [from, to] = nums[i];
    graph[from].push(to);
    graph[to].push(from);
  }
  for (let i = 0; i < n; i++) {
    dfs(i, 1); // 각 노드마다 dfs 실행하기. depth 1부터 시작
    if (arrive) break; // depth가 5에 도달하면 반복문 종료
  }
  if (arrive) console.log(1);
  else console.log(0); // 깊이가 5가 아니라면 0 출력
};
solution(n, m, visited);
