function pathExistenceQueries(
    n: number,
    nums: number[],
    maxDiff: number,
    queries: number[][]
): boolean[] {
    
    // 1. Array to store the "Island ID" for each index
    const component = new Array<number>(n);
    let id = 0;
    component[0] = 0;

    // 2. Preprocess the array to group connected elements
    for (let i = 1; i < n; i++) {
        // If the gap exceeds maxDiff, we start a new component (island)
        if (nums[i] - nums[i - 1] > maxDiff) {
            id++;
        }
        component[i] = id;
    }

    // 3. Answer queries instantly by comparing Component IDs
    return queries.map(
        ([u, v]) => component[u] === component[v]
    );
}
