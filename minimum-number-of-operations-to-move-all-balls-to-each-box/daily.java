import java.util.*;

class Solution {
    // Max value of x according to constraints
    private static final int MAX_X = 50000; 
    private int[] tree = new int[4 * (MAX_X + 1)];

    // Segment Tree: Update value at a specific index
    private void update(int node, int start, int end, int idx, int val) {
        if (start == end) {
            tree[node] = val;
            return;
        }
        int mid = start + (end - start) / 2;
        if (idx <= mid) {
            update(2 * node, start, mid, idx, val);
        } else {
            update(2 * node + 1, mid + 1, end, idx, val);
        }
        tree[node] = Math.max(tree[2 * node], tree[2 * node + 1]);
    }

    // Segment Tree: Query max value in range [l, r]
    private int query(int node, int start, int end, int l, int r) {
        if (r < start || end < l) {
            return 0;
        }
        if (l <= start && end <= r) {
            return tree[node];
        }
        int mid = start + (end - start) / 2;
        int leftMax = query(2 * node, start, mid, l, r);
        int rightMax = query(2 * node + 1, mid + 1, end, l, r);
        return Math.max(leftMax, rightMax);
    }

    public List<Boolean> getResults(int[][] queries) {
        List<Boolean> results = new ArrayList<>();
        TreeSet<Integer> obstacles = new TreeSet<>();
        obstacles.add(0);
        obstacles.add(MAX_X);
        update(1, 0, MAX_X, MAX_X, MAX_X);

        for (int[] q : queries) {
            int type = q[0];
            
            if (type == 1) {
                int x = q[1];
                
                // Find adjacent obstacles
                int prev = obstacles.floor(x);
                int next = obstacles.ceiling(x);
                
                // Add new obstacle
                obstacles.add(x);
                
                // Update segments in Segment Tree
                update(1, 0, MAX_X, x, x - prev);
                update(1, 0, MAX_X, next, next - x);
                
            } else if (type == 2) {
                int x = q[1];
                int sz = q[2];

                int prev = obstacles.floor(x);
                int maxGapInSegmentTree = query(1, 0, MAX_X, 0, prev);
                int lastGap = x - prev;
                int maxAvailableGap = Math.max(maxGapInSegmentTree, lastGap);
                
                results.add(maxAvailableGap >= sz);
            }
        }
        
        return results;
    }
}
