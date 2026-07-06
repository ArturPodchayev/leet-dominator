class Solution {
    public int minCost(int[] nums, int k) {
        int n = nums.length;
        int[] dp = new int[n];
        Arrays.fill(dp, -1);
        return dpMemo(0, nums, dp, k);
    }

    private int dpMemo(int i, int[] nums, int[] dp, int k) {
        if(i == nums.length) return 0;
        if(dp[i] != -1) return dp[i];

        Map<Integer, Integer> freq = new HashMap<>();
        int uniquesCount = 0;

        int localAns = Integer.MAX_VALUE;

        for(int j = i; j < nums.length; j++) {
            int val = nums[j];
            int valFreq = freq.getOrDefault(val, 0);
            if(valFreq == 0) uniquesCount++;
            if(valFreq == 1) uniquesCount--;

            freq.put(val, valFreq + 1);

            localAns = Math.min(localAns, dpMemo(j + 1, nums, dp, k) + (j - i + 1 - uniquesCount) + k);
        }
        return dp[i] = localAns;
    }
}
