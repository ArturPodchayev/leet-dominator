/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(n, edges, labels, k) {
    const graph = createGraph(n, edges);

    const min = [Infinity];

    const pathVisited = new Array(n).fill(false);

    dfs(graph, 0, n - 1, pathVisited, labels, k, "", 0, min);

    if(min[0] === Infinity) {
        return -1;
    }

    return min[0];
};

function dfs(graph, src, dest, pathVisited, labels, k, path, weight, min) {
    if(src === dest) {
        path += labels[dest];

        let count = 1;
        let max = 1;
        for(i = 1; i < path.length; i++) {
            if(path[i] === path[i - 1]) {
                count++;
            } else {
                count = 1;
            }

            max = Math.max(max, count);
        }

        if(max <= k) {
            min[0] = Math.min(min[0], weight);
        }

        return;
    }
    pathVisited[src] = true;

    for(let i = 0; i < graph[src].length; i++) {
        const [nbr, w] = graph[src][i];

        if(pathVisited[nbr] === false) {
            dfs(graph, nbr, dest, pathVisited, labels, k, path + labels[src], weight + w, min);
        }
    }

    pathVisited[src] = false;
}

function createGraph(n, edges) {
    const graph = [];

    for(let i = 0; i < n; i++) {
        graph.push([]);
    }

    for(let i = 0; i < edges.length; i++) {
        const [u, v, w] = edges[i];

        graph[u].push([v, w]);
    }

    return graph;
}
