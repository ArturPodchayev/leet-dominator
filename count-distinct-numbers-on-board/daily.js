var pathExistenceQueries = function(n, nums, maxDiff, queries) {
    // comp[i] = component id of node i
    const comp = new Int32Array(n);
    for (let i = 1; i < n; i++) {
        comp[i] = comp[i - 1] + (nums[i] - nums[i - 1] > maxDiff ? 1 : 0);
    }

    return queries.map(([u, v]) => comp[u] === comp[v]);
};
