/**
 * @param {number[]} values
 * @param {number[][]} edges
 * @param {number} maxTime
 * @return {number}
 */
var maximalPathQuality = function (values, edges, maxTime) {
  const n = values.length;
  const graph = new Array(n).fill().map((_) => []);
  for (const [v1, v2, time] of edges) {
    graph[v1].push([v2, time]);
    graph[v2].push([v1, time]);
  }

  const visited = new Array(n).fill(0);
  visited[0] = 1;
  const ans = { val: 0 };
  backtrack(ans, graph, maxTime, values[0], 0, values, visited);

  return ans.val;
};

function backtrack(ans, graph, maxTime, sum, node, values, visited) {
  if (node === 0) {
    ans.val = Math.max(ans.val, sum);
  }

  for (const [next, time] of graph[node]) {
    const nextMaxTime = maxTime - time;
    if (nextMaxTime < 0) continue;

    visited[next]++;
    let nextSum = sum;
    if (visited[next] === 1) nextSum += values[next];
    backtrack(ans, graph, nextMaxTime, nextSum, next, values, visited);
    visited[next]--;
  }
}
