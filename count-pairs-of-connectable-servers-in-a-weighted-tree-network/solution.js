var countPairsOfConnectableServers = function (edges, signalSpeed) {
    const n = edges.length + 1;

    const g = Array.from({ length: n }, () => []);
    for (const [u, v, w] of edges) {
        g[u].push([v, w]);
        g[v].push([u, w]);
    }

    function countConnectableServersInBranch(u, parent, distance) {
        let connectableServersInUVBranch = distance % signalSpeed === 0 ? 1 : 0;

        for (const [v, w] of g[u]) {
            if (v === parent) continue;
            connectableServersInUVBranch += countConnectableServersInBranch(v, u, distance + w);
        }

        return connectableServersInUVBranch;
    }

    const result = [];
    for (let uCenter = 0; uCenter < n; uCenter++) {
        let pairs = 0;
        let previousTotal = 0;

        for (const [v, w] of g[uCenter]) {
            const connectableServersInUVBranch = countConnectableServersInBranch(v, uCenter, w);

            pairs += previousTotal * connectableServersInUVBranch;
            previousTotal += connectableServersInUVBranch;
        }
        result.push(pairs);
    }

    return result;
};
