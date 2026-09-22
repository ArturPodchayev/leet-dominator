class Solution {
    static class Node {
        int prod;
        int[] cnt;

        Node(int k) {
            cnt = new int[k];
        }
    }
    int n, k;
    Node[] tree;
    Node merge(Node a, Node b) {
        Node res = new Node(k);
        res.prod = (int) ((long) a.prod * b.prod % k);
        for (int r = 0; r < k; r++) {
            res.cnt[r] += a.cnt[r];
        }
        for (int r = 0; r < k; r++) {
            int rem = (int) ((long) a.prod * r % k);
            res.cnt[rem] += b.cnt[r];
        }

        return res;
    }

    void build(int node, int l, int r, int[] nums) {
        if (l == r) {
            tree[node] = new Node(k);

            int rem = nums[l] % k;

            tree[node].prod = rem;
            tree[node].cnt[rem] = 1;
            return;
        }
        int mid = (l + r) / 2;
        build(node * 2, l, mid, nums);
        build(node * 2 + 1, mid + 1, r, nums);
        tree[node] = merge(tree[node * 2], tree[node * 2 + 1]);
    }
    void update(int node, int l, int r, int idx, int value) {
        if (l == r) {
            tree[node] = new Node(k);
            int rem = value % k;
            tree[node].prod = rem;
            tree[node].cnt[rem] = 1;
            return;
        }
        int mid = (l + r) / 2;
        if (idx <= mid) {
            update(node * 2, l, mid, idx, value);
        } else {
            update(node * 2 + 1, mid + 1, r, idx, value);
        }
        tree[node] = merge(tree[node * 2], tree[node * 2 + 1]);
    }
    Node query(int node, int l, int r, int ql, int qr) {
        if (ql <= l && r <= qr) {
            return tree[node];
        }
        int mid = (l + r) / 2;
        if (qr <= mid) {
            return query(node * 2, l, mid, ql, qr);
        }
        if (ql > mid) {
            return query(node * 2 + 1, mid + 1, r, ql, qr);
        }
        Node left = query(node * 2, l, mid, ql, qr);
        Node right = query(node * 2 + 1, mid + 1, r, ql, qr);
        return merge(left, right);
    }
    public int[] resultArray(int[] nums, int k, int[][] queries) {
        this.n = nums.length;
        this.k = k;
        tree = new Node[4 * n];
        build(1, 0, n - 1, nums);
        int[] result = new int[queries.length];
        for (int i = 0; i < queries.length; i++) {
            int index = queries[i][0];
            int value = queries[i][1];
            int start = queries[i][2];
            int x = queries[i][3];
            nums[index] = value;
            update(1, 0, n - 1, index, value);
            Node ans = query(1, 0, n - 1, start, n - 1);
            result[i] = ans.cnt[x];
        }
        return result;
    }
}
