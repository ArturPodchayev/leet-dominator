class Solution {
    public boolean[] pathExistenceQueries(int n, int[] nums, int maxDiff, int[][] queries) {

        boolean[] res = new boolean[queries.length];

        int[] comp = new int[n];

        int com = 0;
        comp[0] = com;

        for (int i = 1; i < n; i++) {

            if (nums[i] - nums[i - 1] > maxDiff) {
                com++;
            }

            comp[i] = com;
        }

        for (int i = 0; i < queries.length; i++) {
            int source = queries[i][0];
            int dest = queries[i][1];

            if (source == dest || comp[source] == comp[dest]) {
                res[i] = true;
            }
        }

        return res;
    }
}
