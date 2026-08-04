const build = (src, k) => {
    const hash = new Map(), set = new Set();
    for (const [s, e] of src) {
        hash.set(s, (hash.get(s) ?? new Set()).add(e));
        set.add(s);
    }

    for (let i = 1; i <= k; i++) {
        if (!set.has(i)) {
            hash.set(i, new Set());
        }
    }
    return hash;
};

function buildMatrix(k: number, rowConditions: number[][], colConditions: number[][]): number[][] {
    const matrix = [], rowHash = build(rowConditions, k), colHash = build(colConditions, k);
    for (let i = 0; i < k; i++) {
        matrix.push(new Array(k).fill(0));
    }

    const dfs = (root, graph, seen, order) => {
        seen.set(root, 1);

        for (const node of (graph.get(root) ?? new Set()).values()) {
            if (seen.get(node) === 1 || (!seen.has(node) && dfs(node, graph, seen, order))) {
                return true;
            }
        }

        seen.set(root, 2);
        order.push(root);

        return false;
    };

    const seen = new Map(), rowOrder = [], colOrder = [];
    for (let i = 1; i <= k; i++) {
        if (!seen.has(i) && dfs(i, rowHash, seen, rowOrder)) {
            return [];
        }
    }
    rowOrder.reverse();

    seen.clear();

    for (let i = 1; i <= k; i++) {
        if (!seen.has(i) && dfs(i, colHash, seen, colOrder)) {
            return [];
        }
    }
    colOrder.reverse();

    for (let i = 1; i <= k; i++) {
        const row = rowOrder.indexOf(i);
        const col = colOrder.indexOf(i);
        if (row >= 0 && col >= 0) {
            matrix[row][col] = i;
        }
    }

    return matrix;
};
