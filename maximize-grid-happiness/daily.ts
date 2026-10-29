class Tree {
    parent: Int32Array;
    tin: Int32Array;
    tout: Int32Array;
    order: number[];
    first: number[][];

    constructor(n: number, edges: number[][]) {
        const graph: number[][] = Array.from({ length: n }, () => []);

        for (const [u, v] of edges) {
            graph[u].push(v);
            graph[v].push(u);
        }

        const parent = new Int32Array(n);
        const tin = new Int32Array(n);
        const tout = new Int32Array(n);
        const order: number[] = [];
        const stack = [0];

        // Iterative DFS. A negative entry marks the end of a subtree.
        while (stack.length) {
            const x = stack.pop()!;

            if (x < 0) {
                tout[~x] = order.length;
                continue;
            }

            tin[x] = order.length;
            order.push(x);
            stack.push(~x);

            for (const y of graph[x]) {
                if (y !== parent[x]) {
                    parent[y] = x;
                    stack.push(y);
                }
            }
        }

        // Sparse table over DFS-order positions of each node's parent.
        const first: number[][] = [
            order.map(x => tin[parent[x]])
        ];

        for (let k = 1; (1 << k) <= n; k++) {
            const prev = first[k - 1];
            const half = 1 << (k - 1);

            first.push(
                prev
                    .slice(0, n - (1 << k) + 1)
                    .map((a, i) => Math.min(a, prev[i + half]))
            );
        }

        this.parent = parent;
        this.tin = tin;
        this.tout = tout;
        this.order = order;
        this.first = first;
    }

    lca(u: number, v: number): number {
        if (u === v) return u;

        const l = Math.min(this.tin[u], this.tin[v]);
        const r = Math.max(this.tin[u], this.tin[v]);
        const k = 31 - Math.clz32(r - l);

        return this.order[
            Math.min(
                this.first[k][l + 1],
                this.first[k][r - (1 << k) + 1]
            )
        ];
    }
}

class RootPaths {
    tree: Tree;
    start: Int32Array;
    fenwick: Int32Array;

    constructor(tree: Tree, bit: number[]) {
        this.tree = tree;

        // Convert each node's letter bit into its root-path XOR mask.
        this.start = Int32Array.from(bit);

        for (const x of tree.order.slice(1)) {
            this.start[x] ^= this.start[tree.parent[x]];
        }

        this.fenwick = new Int32Array(bit.length + 1);
    }

    // Apply XOR delta to root-path masks for every node in x's subtree.
    flip(x: number, delta: number): void {
        for (let i of [
            this.tree.tin[x] + 1,
            this.tree.tout[x] + 1
        ]) {
            for (; i < this.fenwick.length; i += i & -i) {
                this.fenwick[i] ^= delta;
            }
        }
    }

    // Current XOR mask from root to x.
    get(x: number): number {
        let mask = this.start[x];

        for (
            let i = this.tree.tin[x] + 1;
            i > 0;
            i -= i & -i
        ) {
            mask ^= this.fenwick[i];
        }

        return mask;
    }
}

function palindromePath(
    n: number,
    edges: number[][],
    s: string,
    queries: string[]
): boolean[] {
    const tree = new Tree(n, edges);

    const bit = Array.from(
        s,
        c => 1 << (c.charCodeAt(0) - 97)
    );

    const paths = new RootPaths(tree, bit);
    const ans: boolean[] = [];

    for (const q of queries) {
        if (q[0] === "u") {
            // Format: "update x c"
            const x = parseInt(q.slice(7));
            const newBit = 1 << (q.charCodeAt(q.length - 1) - 97);

            paths.flip(x, bit[x] ^ newBit);
            bit[x] = newBit;
        } else {
            // Format: "query u v"
            const space = q.lastIndexOf(" ");
            const u = +q.slice(6, space);
            const v = +q.slice(space + 1);

            const p = tree.lca(u, v);
            const mask = paths.get(u) ^ paths.get(v) ^ bit[p];

            ans.push((mask & (mask - 1)) === 0);
        }
    }

    return ans;
}
