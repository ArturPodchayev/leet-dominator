class Solution {
    static final int MOD = 1000000007;
    long[][] dp;

    public int numOfWays(int[] nums) {
        int n = nums.length;
        dp = new long[n + 1][n + 1];

        for (int i = 0; i <= n; i++) {
            dp[i][0] = dp[i][i] = 1;

            for (int j = 1; j < i; j++) {
                dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j]) % MOD;
            }
        }

        java.util.List<Integer> list = new java.util.ArrayList<>();
        for (int x : nums) {
            list.add(x);
        }

        return (int) ((solve(list) - 1 + MOD) % MOD);
    }

    private long solve(java.util.List<Integer> nums) {
        int n = nums.size();

        if (n <= 2) {
            return 1;
        }

        int root = nums.get(0);
        java.util.List<Integer> left = new java.util.ArrayList<>();
        java.util.List<Integer> right = new java.util.ArrayList<>();

        for (int i = 1; i < n; i++) {
            int x = nums.get(i);

            if (x < root) {
                left.add(x);
            } else {
                right.add(x);
            }
        }

        long leftWays = solve(left);
        long rightWays = solve(right);

        long ways = dp[n - 1][left.size()];
        ways = ways * leftWays % MOD;
        ways = ways * rightWays % MOD;

        return ways;
    }
}
