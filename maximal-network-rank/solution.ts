function maximalNetworkRank(n: number, roads: number[][]): number {
    // Create an adjacency map to represent the network connections between cities.
    let adj = new Map<number, Set<number>>();

    // Populate the adjacency map with road connections.
    for (let [a, b] of roads) {
        if (!adj.has(a)) {
            adj.set(a, new Set());
        }
        adj.get(a)!.add(b);

        if (!adj.has(b)) {
            adj.set(b, new Set());
        }
        adj.get(b)!.add(a);
    }

    let maxNetworkRank = 0;

    // Calculate the network rank for each pair of cities and update the maximum.
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // Calculate the network rank for the current pair of cities.
            const networkRank = adj.get(i)?.size + adj.get(j)?.size - (adj.get(i)?.has(j) ? 1 : 0);
            
            // Update the maximum network rank encountered so far.
            maxNetworkRank = Math.max(maxNetworkRank, networkRank || 0);
        }
    }

    return maxNetworkRank;
};
