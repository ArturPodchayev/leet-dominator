class Solution {
    public int strangePrinter(String s) {
        int n = s.length();
        int[][] minTurns = new int[n][n];
        for (int i = 0; i < n; i++) {
            minTurns[i][i] = 1;
        }
        for (int length = 2; length <= n; length++) {
            for (int start = 0; start + length - 1 < n; start++) {
                int end = start + length - 1;
                minTurns[start][end] = 1 + minTurns[start + 1][end];
                for (int split = start + 1; split <= end; split++) {
                    if (s.charAt(split) == s.charAt(start)) {
                        int turns = minTurns[start][split - 1] + (split == end ? 0 : minTurns[split + 1][end]);
                        minTurns[start][end] = Math.min(minTurns[start][end], turns);
                    }

                }
            }
        }
        return minTurns[0][n - 1];
    }
}
