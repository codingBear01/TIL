const adjaMatrix = () => {
    const INF = 999999999;

    const graph = [
        [0, 7, 5],
        [7, 0, INF],
        [5, INF, 0],
    ];

    return graph;
};
console.log('adjaMatrix', adjaMatrix());

const adjaList = () => {
    // 행이 3개인 2차원 리스트로 인접 리스트 표현
    const graph = [];
    for (let i = 0; i < 3; i++) {
        graph.push([]);
    }
    // 노드 0, 1, 2에 연결된 노드 정보 저장(노드, 거리)
    graph[0].push([1, 7]);
    graph[0].push([2, 5]);

    graph[1].push([0, 7]);

    graph[2].push([0, 5]);

    return graph;
};
console.log('adjaList', adjaList());

console.log('👇👇👇👇👇dfs normal ver. by recursion👇👇👇👇👇');
// 각 노드가 연결된 정보를 배열으로 표현(2차원 배열)
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

const dfs = (graph, v, visited) => {
    // 현재 노드를 방문 처리
    visited[v] = true;
    console.log('end = ', v);
    // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
    for (let i of graph[v]) {
        console.log('graph', graph[v]);
        console.log('i', i);
        console.log('visited', visited);
        console.log('visited[i]', visited[i]);
        if (!visited[i]) dfs(graph, i, visited);
    }
};
dfs(graph, 1, visited);
