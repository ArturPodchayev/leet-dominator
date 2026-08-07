function countPairs(n: number, edges: number[][]): number {
  let graph: Array<Array<number>> = Array.from(
    { length: n },
    (_) => new Array()
  );

  // build a undirected graph
  for (var [n1, n2] of edges) {
    graph[n1].push(n2);
    graph[n2].push(n1);
  }

  let groups = new Array();
  let visited = new Array(n).fill(false);

  // transform the problem into finding isolated groups
  // e.g. n = 7,  edges = [[0,2],[0,5],[2,4],[1,6],[5,4]]
  // there are three groups
  for (let i = 0; i < n; i++) {
    if (visited[i]) {
      continue;
    }

    // find a new group
    visited[i] = true;
    // how many nodes in this group
    let count = 0;
    let findNodeInThisGroup = () => {
      count += 1;
    };
    // add this node
    findNodeInThisGroup();

    // mark all connected nodes
    markVisited(graph, i, visited, findNodeInThisGroup);

    // add this group
    groups.push(count);
  }

  // e.g. n = 7, edges = [[0,2],[0,5],[2,4],[1,6],[5,4]]
  // groups will be [4, 1, 2]
  // first group is [0, 2, 4, 5]
  // second group is [3]
  // third group is [1, 6]
  let res = 0;
  for (let i = 0; i < groups.length; i++) {
    for (let j = i + 1; j < groups.length; j++) {
      res += groups[i] * groups[j];
    }
  }

  return res;
}

function markVisited(
  graph: Array<Array<number>>,
  i: number,
  visited: Array<boolean>,
  callback: () => void
) {
  for (var node of graph[i]) {
    if (visited[node]) {
      continue;
    }
    visited[node] = true;
    callback();
    markVisited(graph, node, visited, callback);
  }
}
