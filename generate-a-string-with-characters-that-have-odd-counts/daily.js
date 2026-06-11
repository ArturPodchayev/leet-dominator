const assignEdgeWeights = (edges) => {
    const MODULO = BigInt(10 ** 9 + 7);
    const depth = depthOfTree(edges);
    return Number(2n ** BigInt(depth - 1) % MODULO);
};

const depthOfTree = (edges) => {
    edges = edges.map(([a, b]) => b > a ? [a, b] : [b, a])
    edges.sort(([x], [y]) => x - y);
    const depths = { 1: 0 };
    for (let [u, v] of edges) {
        depths[v] = depths[u] + 1;
    }
    return Math.max(...Object.values(depths));
};
