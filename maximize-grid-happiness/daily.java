class Solution {
    private int n, timer;
    private int[] head, to, next;
    private int edgeCount;
    private int[] parent, depth, size, heavy, chainHead;
    private int[] pos, base, charMask;
    private int[] seg;

    public List<Boolean> palindromePath(
            int n, int[][] edges, String s, String[] queries) {
        this.n = n;

        head = new int[n];
        Arrays.fill(head, -1);
        to = new int[2 * (n - 1)];
        next = new int[2 * (n - 1)];

        for (int[] e : edges) {
            addEdge(e[0], e[1]);
            addEdge(e[1], e[0]);
        }

        parent = new int[n];
        depth = new int[n];
        size = new int[n];
        heavy = new int[n];
        chainHead = new int[n];
        pos = new int[n];
        base = new int[n];
        charMask = new int[n];
        Arrays.fill(heavy, -1);

        for (int i = 0; i < n; i++) {
            charMask[i] = 1 << (s.charAt(i) - 'a');
        }

        buildHLD();

        seg = new int[4 * n];
        build(1, 0, n - 1);

        List<Boolean> res = new ArrayList<>();

        for (String q : queries) {
            int a = q.indexOf(' ');
            int b = q.indexOf(' ', a + 1);
            int u = Integer.parseInt(q.substring(a + 1, b));

            if (q.charAt(0) == 'u') {
                int newMask = 1 << (q.charAt(b + 1) - 'a');
                charMask[u] = newMask;
                update(1, 0, n - 1, pos[u], newMask);
            } else {
                int v = Integer.parseInt(q.substring(b + 1));
                int mask = queryPath(u, v);
                res.add(mask == 0 || (mask & (mask - 1)) == 0);
            }
        }

        return res;
    }

    private void addEdge(int u, int v) {
        to[edgeCount] = v;
        next[edgeCount] = head[u];
        head[u] = edgeCount++;
    }

    private void buildHLD() {
        int[] order = new int[n];
        int[] stack = new int[n];
        int top = 0, count = 0;

        stack[top++] = 0;
        parent[0] = -1;

        while (top > 0) {
            int u = stack[--top];
            order[count++] = u;

            for (int e = head[u]; e != -1; e = next[e]) {
                int v = to[e];
                if (v == parent[u])
                    continue;

                parent[v] = u;
                depth[v] = depth[u] + 1;
                stack[top++] = v;
            }
        }

        for (int i = count - 1; i >= 0; i--) {
            int u = order[i];
            size[u] = 1;
            int maxSize = 0;

            for (int e = head[u]; e != -1; e = next[e]) {
                int v = to[e];
                if (v == parent[u])
                    continue;

                size[u] += size[v];
                if (size[v] > maxSize) {
                    maxSize = size[v];
                    heavy[u] = v;
                }
            }
        }

        timer = 0;
        int[] nodes = new int[n];
        int[] heads = new int[n];
        top = 0;
        nodes[top] = 0;
        heads[top++] = 0;

        while (top > 0) {
            int u = nodes[--top];
            int h = heads[top];

            while (u != -1) {
                chainHead[u] = h;
                pos[u] = timer;
                base[timer++] = charMask[u];

                for (int e = head[u]; e != -1; e = next[e]) {
                    int v = to[e];
                    if (v == parent[u] || v == heavy[u])
                        continue;

                    nodes[top] = v;
                    heads[top++] = v;
                }

                u = heavy[u];
            }
        }
    }

    private void build(int node, int l, int r) {
        if (l == r) {
            seg[node] = base[l];
            return;
        }

        int mid = (l + r) >>> 1;
        build(node * 2, l, mid);
        build(node * 2 + 1, mid + 1, r);
        seg[node] = seg[node * 2] ^ seg[node * 2 + 1];
    }

    private void update(int node, int l, int r, int p, int value) {
        if (l == r) {
            seg[node] = value;
            return;
        }

        int mid = (l + r) >>> 1;
        if (p <= mid) {
            update(node * 2, l, mid, p, value);
        } else {
            update(node * 2 + 1, mid + 1, r, p, value);
        }

        seg[node] = seg[node * 2] ^ seg[node * 2 + 1];
    }

    private int query(int node, int l, int r, int ql, int qr) {
        if (ql <= l && r <= qr)
            return seg[node];

        int mid = (l + r) >>> 1;
        int res = 0;

        if (ql <= mid) {
            res ^= query(node * 2, l, mid, ql, qr);
        }
        if (qr > mid) {
            res ^= query(node * 2 + 1, mid + 1, r, ql, qr);
        }

        return res;
    }

    private int queryPath(int u, int v) {
        int mask = 0;

        while (chainHead[u] != chainHead[v]) {
            if (depth[chainHead[u]] < depth[chainHead[v]]) {
                int temp = u;
                u = v;
                v = temp;
            }

            mask ^= query(1, 0, n - 1, pos[chainHead[u]], pos[u]);
            u = parent[chainHead[u]];
        }

        if (depth[u] > depth[v]) {
            int temp = u;
            u = v;
            v = temp;
        }

        mask ^= query(1, 0, n - 1, pos[u], pos[v]);
        return mask;
    }
}
