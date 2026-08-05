import java.util.*;

class Solution {
    public List<Integer> remainingMethods(int n, int k, int[][] invocations) {
        List<Integer>[] graph = new ArrayList[n];
        for (int i = 0; i < n; i++) graph[i] = new ArrayList<>();
        for (int[] inv : invocations) graph[inv[0]].add(inv[1]);

        boolean[] suspicious = new boolean[n];
        dfs(k, graph, suspicious);

        for (int[] inv : invocations) {
            // If a clean method calls a suspicious method, we can't remove anything
            if (!suspicious[inv[0]] && suspicious[inv[1]]) {
                List<Integer> all = new ArrayList<>();
                for (int i = 0; i < n; i++) all.add(i);
                return all;
            }
        }

        List<Integer> ans = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            if (!suspicious[i]) ans.add(i);
        }
        return ans;
    }

    private void dfs(int u, List<Integer>[] graph, boolean[] suspicious) {
        suspicious[u] = true;
        for (int v : graph[u]) {
            if (!suspicious[v]) dfs(v, graph, suspicious);
        }
    }
}
