/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} s
 * @param {string[]} queries
 * @return {boolean[]}
 */
var palindromePath = function(n, edges, s, queries) {
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const LOG = 17;
    const up = Array.from({ length: LOG }, () => new Int32Array(n));
    const depth = new Int32Array(n);
    const tin = new Int32Array(n);
    const tout = new Int32Array(n);

    // Iterative DFS
    const idx = new Int32Array(n);
    const stack = [0];
    let timer = 0;
    up[0][0] = 0;
    tin[0] = ++timer;
    while (stack.length) {
        const u = stack[stack.length - 1];
        if (idx[u] < adj[u].length) {
            const v = adj[u][idx[u]++];
            if (v === up[0][u] && u !== 0) continue;
            if (u === 0 && v === 0) continue;
            up[0][v] = u;
            depth[v] = depth[u] + 1;
            tin[v] = ++timer;
            stack.push(v);
        } else {
            tout[u] = timer;
            stack.pop();
        }
    }

    for (let k = 1; k < LOG; k++) {
        for (let v = 0; v < n; v++) {
            up[k][v] = up[k - 1][up[k - 1][v]];
        }
    }

    const lca = (a, b) => {
        if (depth[a] < depth[b]) [a, b] = [b, a];
        let diff = depth[a] - depth[b];
        for (let k = 0; diff; k++, diff >>= 1) {
            if (diff & 1) a = up[k][a];
        }
        if (a === b) return a;
        for (let k = LOG - 1; k >= 0; k--) {
            if (up[k][a] !== up[k][b]) {
                a = up[k][a];
                b = up[k][b];
            }
        }
        return up[0][a];
    };

    // Fenwick tree: range XOR update, point query
    const bit = new Int32Array(n + 2);
    const add = (i, d) => {
        for (; i <= n + 1; i += i & -i) bit[i] ^= d;
    };
    const rangeXor = (l, r, d) => {
        add(l, d);
        add(r + 1, d);
    };
    const point = (i) => {
        let res = 0;
        for (; i > 0; i -= i & -i) res ^= bit[i];
        return res;
    };

    const chars = s.split('');
    const mask = (c) => 1 << (c.charCodeAt(0) - 97);

    for (let u = 0; u < n; u++) {
        rangeXor(tin[u], tout[u], mask(chars[u]));
    }

    const ans = [];
    for (const q of queries) {
        const parts = q.split(' ');
        if (parts[0] === 'update') {
            const u = parseInt(parts[1]);
            const c = parts[2];
            const d = mask(chars[u]) ^ mask(c);
            if (d !== 0) {
                rangeXor(tin[u], tout[u], d);
                chars[u] = c;
            }
        } else {
            const u = parseInt(parts[1]);
            const v = parseInt(parts[2]);
            const l = lca(u, v);
            const m = point(tin[u]) ^ point(tin[v]) ^ mask(chars[l]);
            ans.push((m & (m - 1)) === 0);
        }
    }
    return ans;
};
