const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];
const visited = new Array(graph.length).fill(false);

const bfs = (graph, start, visited) => {
  // 큐(Queue) 구현을 위해 빈 배열을 선언하고 시작 node를 push
  let queue = [];
  queue.push(start);
  // 현재 노드를 방문 처리
  visited[start] = true;
  // 큐가 빌 때까지 반복해서 실행
  while (queue.length !== 0) {
    // 큐에서 하나의 원소를 뽑아 출력
    const v = queue.shift();
    console.log('v', v);
    console.log('queue', queue);
    console.log('visited', visited);
    console.log('end =', v);
    //  해당 원소와 연결되었으나 아직 방문하지 않은 원소들을 큐에 삽입
    for (let i of graph[v]) {
      console.log('graph[v]', graph[v]);
      if (!visited[i]) {
        queue.push(i);
        visited[i] = true;
      }
    }
  }
};
bfs(graph, 1, visited);
