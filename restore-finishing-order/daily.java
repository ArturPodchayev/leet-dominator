import java.util.Arrays;
import java.util.PriorityQueue;

class Solution {
    // Custom compact state class for Dijkstra's PriorityQueue
    private static class State implements Comparable<State> {
        int cost;
        int u;
        int c;

        State(int cost, int u, int c) {
            final int cost1 = cost;
            this.cost = cost1;
            this.u = u;
            this.c = c;
        }

        @Override
        public int compareTo(State other) {
            return Integer.compare(this.cost, other.cost);
        }
    }

    public int shortestPath(int n, int[][] edges, String labels, int k) {
        int m = edges.length;
        
        // Build adjacency list using primitive arrays (Forward Star)
        int[] head = new int[n];
        Arrays.fill(head, -1);
        int[] to = new int[m];
        int[] weight = new int[m];
        int[] next = new int[m];
        
        for (int i = 0; i < m; i++) {
            int u = edges[i][0];
            int v = edges[i][1];
            int w = edges[i][2];
            to[i] = v;
            weight[i] = w;
            next[i] = head[u];
            head[u] = i;
        }

        // dist[u][c] stores the minimum cost to reach node 'u' with 'c' consecutive identical labels
        int[][] dist = new int[n][k + 1];
        for (int i = 0; i < n; i++) {
            Arrays.fill(dist[i], Integer.MAX_VALUE);
        }

        PriorityQueue<State> pq = new PriorityQueue<>();
        
        // Base case: Starting at node 0, the first character has a consecutive run of 1
        dist[0][1] = 0;
        pq.offer(new State(0, 0, 1));

        while (!pq.isEmpty()) {
            State curr = pq.poll();
            int cost = curr.cost;
            int u = curr.u;
            int c = curr.c;

            // If we found a shorter path to this state already, skip it
            if (cost > dist[u][c]) {
                continue;
            }

            // Since it's a min-heap, the first time we pop the destination node, it's the global minimum
            if (u == n - 1) {
                return cost;
            }

            char currLabel = labels.charAt(u);

            // Traverse neighbors using the forward star array
            for (int e = head[u]; e != -1; e = next[e]) {
                int v = to[e];
                int w = weight[e];
                
                // Determine the next consecutive identical character count
                int nc = (currLabel == labels.charAt(v)) ? c + 1 : 1;

                // Validate against constraint and relaxation check
                if (nc <= k && cost + w < dist[v][nc]) {
                    dist[v][nc] = cost + w;
                    pq.offer(new State(dist[v][nc], v, nc));
                }
            }
        }

        return -1;
    }
}
