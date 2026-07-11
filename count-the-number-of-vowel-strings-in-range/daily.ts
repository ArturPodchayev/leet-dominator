function countCompleteComponents(n: number, edges: number[][]): number {
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293];


    const adjacencyList: Array<Array<number>> = [];
    const hashList: Array<{ sum: number, size: number }> = [];

    for (let i = 0; i < n; ++i) {
        adjacencyList.push([]);
        hashList.push({
            sum: i,
            size: 1
        });
    }

    for (const edge of edges) {
        adjacencyList[edge[0]].push(edge[1]);
        adjacencyList[edge[1]].push(edge[0]);

        hashList[edge[0]].sum += edge[1];
        hashList[edge[1]].sum += edge[0];
        ++hashList[edge[0]].size;
        ++hashList[edge[1]].size;
    }

    let components = 0;
    const visited: Set<number> = new Set();
    for (let i = 0; i < n; ++i) {
        if (visited.has(i))
            continue;

        visited.add(i)

        const rootHash = hashList[i];
        let isComplete = true;
        for (const neighbour of adjacencyList[i]) {
            if (visited.has(neighbour)) {
                isComplete = false;
                break;
            }
            visited.add(neighbour);

            const neighbourHash = hashList[neighbour];
            if (neighbourHash.sum != rootHash.sum || neighbourHash.size != rootHash.size)
                isComplete = false;
        }

        if (isComplete)
            ++components;
    }

    return components;
};
