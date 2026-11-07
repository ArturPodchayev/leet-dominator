class Solution {
    int maxQuality = 0;
    List<int[]>[] graph;
    int[] values;
    int maxTime;

    public int maximalPathQuality(int[] values, int[][] edges, int maxTime) {
        this.values = values;
        this.maxTime = maxTime;
        int n = values.length;

        graph = new ArrayList[n];
        for (int i = 0; i < n; i++) {
            graph[i] = new ArrayList<>();
        }
        for (int[] e : edges) {
            graph[e[0]].add(new int[]{e[1], e[2]});
            graph[e[1]].add(new int[]{e[0], e[2]});
        }

        boolean[] visited = new boolean[n];
        visited[0] = true;
        dfs(0, 0, values[0], visited);

        return maxQuality;
    }

    void dfs(int node, int timeSpent, int quality, boolean[] visited) {
        if (node == 0) {
            maxQuality = Math.max(maxQuality, quality);
        }

        for (int[] next : graph[node]) {
            int neighbor = next[0];
            int edgeTime = next[1];

            if (timeSpent + edgeTime > maxTime) continue;

            if (!visited[neighbor]) {
                visited[neighbor] = true;

                dfs(neighbor, timeSpent + edgeTime, quality + values[neighbor], visited);

                visited[neighbor] = false;
            } else {
                dfs(neighbor, timeSpent + edgeTime, quality, visited);
            }
        }
    }
}
