class Solution {

    int[] parents;
    int[] ranks;

    public int find(int x) {
        if (parents[x] == x) {
            return x;
        }
        return parents[x] = find(parents[x]);
    }

    public void union(int x, int y) {
        int x_par = find(x);
        int y_par = find(y);
        if (x_par == y_par) {
            return;
        }
        if (ranks[x_par] > ranks[y_par]) {
            parents[y_par] = x_par;
        } else if (ranks[y_par] > ranks[x_par]) {
            parents[x_par] = y_par;
        } else {
            parents[x_par] = y_par;
            ranks[y_par]++;
        }
    }

    public long countPairs(int n, int[][] edges) {
        parents = new int[n];
        ranks = new int[n];
        HashMap<Integer, Integer> freq = new HashMap<>();
        Arrays.fill(ranks, 0);
        for (int i = 0; i < n; i++) {
            parents[i] = i;
        }
        for (int[] e : edges) {
            int first = e[0];
            int second = e[1];
            if (find(first) != find(second)) {
                union(first, second);
            }
        }
        for (int i = 0; i < n; i++) {
            int root = find(i);
            freq.put(root, freq.getOrDefault(root, 0) + 1);
        }
        ArrayList<Integer> values = new ArrayList<>(freq.values());

        long ans = 0;
        long sum = 0;

        for (int size : values) {
            ans += sum * size;
            sum += size;
        }

        return ans;
       
    }
}
