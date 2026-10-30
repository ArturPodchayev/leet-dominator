public class Solution {
    public int ShortestPath(int n, int[][] edges, string labels, int k) {
        // Build adjacency list
        List<int[]>[] adj = new List<int[]>[n];
        for (int i = 0; i < n; i++) {
            adj[i] = new List<int[]>();
        }
        
        foreach (var edge in edges) {
            int u = edge[0];
            int v = edge[1];
            int w = edge[2];
            adj[u].Add(new int[] { v, w });
        }
        
        // dist[node][consecutive_count] tracking table
        int[,] dist = new int[n, k + 1];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j <= k; j++) {
                dist[i, j] = int.MaxValue;
            }
        }
        
        var pq = new PriorityQueue<(int node, int consecCount), int>();
        
        // Initialize state for node 0
        dist[0, 1] = 0;
        pq.Enqueue((0, 1), 0);
        
        while (pq.Count > 0) {
            if (pq.TryDequeue(out var state, out int d)) {
                int currNode = state.node;
                int currConsec = state.consecCount;
                
                if (currNode == n - 1) {
                    return d;
                }
                
                if (d > dist[currNode, currConsec]) {
                    continue;
                }
                
                foreach (var edge in adj[currNode]) {
                    int nextNode = edge[0];
                    int weight = edge[1];
                    
                    int nextConsec = (labels[nextNode] == labels[currNode]) ? currConsec + 1 : 1;
                    
                    if (nextConsec <= k) {
                        int nextDist = d + weight;
                        if (nextDist < dist[nextNode, nextConsec]) {
                            dist[nextNode, nextConsec] = nextDist;
                            pq.Enqueue((nextNode, nextConsec), nextDist);
                        }
                    }
                }
            }
        }
        
        return -1;
    }
}
