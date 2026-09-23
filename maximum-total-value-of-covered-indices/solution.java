class Solution {
    public long maxTotal(int[] nums, String s) {
        int n = nums.length;
        long NEG = -(long) 4e18;

        long[] dp = new long[2];
        dp[0] = 0;
        dp[1] = 0;

        for (int i = 0; i < n - 1; i++) {
            long[] nd = { NEG, NEG };

            for (int cur = 0; cur < 2; cur++) {
                for (int nxt = 0; nxt < 2; nxt++) {
                    boolean covered = (s.charAt(i) == '1' && cur == 1) ||
                            (s.charAt(i + 1) == '1' && nxt == 0);

                    long add = covered ? nums[i] : 0;

                    nd[nxt] = Math.max(nd[nxt], dp[cur] + add);
                }
            }

            dp = nd;
        }

        long res = 0;
        for (int last = 0; last < 2; last++) {
            boolean covered = (s.charAt(n - 1) == '1' && last == 1);
            long add = covered ? nums[n - 1] : 0;
            res = Math.max(res, dp[last] + add);
        }

        return res;
    }
}
