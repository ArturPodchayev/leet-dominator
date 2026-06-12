function assignEdgeWeights(edges: number[][], queries: number[][]): number[] {
    const MOD = 1_000_000_007;
    const n = edges.length + 1;

    const graph: number[][] = Array.from({ length: n + 1 }, () => []);

    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    let log = 1;
    while ((1 << log) <= n) {
        log++;
    }

    const up: number[][] = Array.from(
        { length: log },
        () => Array(n + 1).fill(0)
    );

    const depth: number[] = Array(n + 1).fill(0);
    const stack: number[] = [1];

    while (stack.length > 0) {
        const node = stack.pop()!;

        for (const next of graph[node]) {
            if (next === up[0][node]) continue;

            up[0][next] = node;
            depth[next] = depth[node] + 1;
            stack.push(next);
        }
    }

    for (let j = 1; j < log; j++) {
        for (let node = 1; node <= n; node++) {
            up[j][node] = up[j - 1][up[j - 1][node]];
        }
    }

    const pow2: number[] = Array(n + 1).fill(0);
    pow2[0] = 1;

    for (let i = 1; i <= n; i++) {
        pow2[i] = (pow2[i - 1] * 2) % MOD;
    }

    function lca(aStart: number, bStart: number): number {
        let a = aStart;
        let b = bStart;

        if (depth[a] < depth[b]) {
            [a, b] = [b, a];
        }

        const diff = depth[a] - depth[b];

        for (let j = 0; j < log; j++) {
            if (((diff >> j) & 1) === 1) {
                a = up[j][a];
            }
        }

        if (a === b) return a;

        for (let j = log - 1; j >= 0; j--) {
            if (up[j][a] !== up[j][b]) {
                a = up[j][a];
                b = up[j][b];
            }
        }

        return up[0][a];
    }

    const answer: number[] = [];

    for (const [u, v] of queries) {
        const ancestor = lca(u, v);
        const distance = depth[u] + depth[v] - 2 * depth[ancestor];

        if (distance === 0) {
            answer.push(0);
        } else {
            answer.push(pow2[distance - 1]);
        }
    }

    return answer;
}
