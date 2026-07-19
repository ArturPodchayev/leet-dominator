public class Solution {
    public int RootCount(int[][] edges, int[][] guesses, int k) {
        int n = edges.Length + 1;
        
        List<int>[] adj = new List<int>[n];
        for (int i = 0; i < n; i++) adj[i] = new List<int>();
        foreach (var e in edges) {
            adj[e[0]].Add(e[1]);
            adj[e[1]].Add(e[0]);
        }

        
        var guessSet = new HashSet<(int, int)>();
        foreach (var g in guesses) {
            guessSet.Add((g[0], g[1]));
        }

        
        int root = 0;
        int[] parent = new int[n];
        bool[] visited = new bool[n];
        Queue<int> q = new Queue<int>();
        q.Enqueue(root);
        visited[root] = true;
        parent[root] = -1;

        int initialCount = 0;

        while (q.Count > 0) {
            int u = q.Dequeue();
            foreach (var v in adj[u]) {
                if (!visited[v]) {
                    parent[v] = u;
                    visited[v] = true;
                    q.Enqueue(v);
                    if (guessSet.Contains((u, v))) {
                        initialCount++;
                    }
                }
            }
        }

        
        int[] counts = new int[n];
        counts[root] = initialCount;

        //BFS to compute counts for all nodes
        Queue<int> q2 = new Queue<int>();
        q2.Enqueue(root);
        visited = new bool[n];
        visited[root] = true;

        while (q2.Count > 0) {
            int u = q2.Dequeue();
            foreach (var v in adj[u]) {
                if (v == parent[u]) continue; // Skip parent
                // Compute delta between u and v
                int delta = 0;
                if (guessSet.Contains((v, u))) delta += 1;
                if (guessSet.Contains((u, v))) delta -= 1;
                counts[v] = counts[u] + delta;
                if (!visited[v]) {
                    visited[v] = true;
                    q2.Enqueue(v);
                }
            }
        }

        // Count results
        int result = 0;
        for (int i = 0; i < n; i++) {
            if (counts[i] >= k) result++;
        }

        return result;
    }
}
