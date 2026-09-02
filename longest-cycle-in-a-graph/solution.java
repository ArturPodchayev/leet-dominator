class Solution {

    // 0 = Unvisited
    // 1 = Currently in the DFS recursion path
    // 2 = Completely processed
    int[] state;

    // Stores the count/depth when we first visited each node
    int[] count;

    // Stores the longest cycle found
    int longestCycle = -1;

    public int longestCycle(int[] edges) {

        int n = edges.length;

        // Initialize arrays
        state = new int[n];
        count = new int[n];

        // Start DFS from every unvisited node
        for (int i = 0; i < n; i++) {

            if (state[i] == 0) {

                // Start count from 0
                dfs(i, edges, 0);
            }
        }

        return longestCycle;
    }

    private void dfs(int node, int[] edges, int currentCount) {

        // Mark node as currently visiting
        state[node] = 1;

        // Store the count/depth at which we reached this node
        count[node] = currentCount;

        // Find the next node
        int next = edges[node];

        // If there is no outgoing edge,
        // this path cannot form a cycle
        if (next == -1) {

            // Mark node as completely processed
            state[node] = 2;

            return;
        }

        // If next node is unvisited,
        // continue DFS
        if (state[next] == 0) {

            dfs(next, edges, currentCount + 1);
        }

        // If next node is currently in our DFS path,
        // then we found a cycle
        else if (state[next] == 1) {

            // Cycle length =
            // current count + 1 - count when next was first visited
            int cycleLength = currentCount + 1 - count[next];

            // Update the longest cycle
            longestCycle = Math.max(longestCycle, cycleLength);
        }

        // DFS of this node is complete
        state[node] = 2;
    }
}
