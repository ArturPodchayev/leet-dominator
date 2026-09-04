class Solution {
    int[][][]dp;
    public int maximumLength(int[] nums, int k) {
        dp = new int[nums.length][nums.length+1][26];
        for(int[][]arr : dp){
            for(int[]ar : arr) Arrays.fill(ar, -1);
        }
        return rec(0, -1, nums, k);
    }
    int rec(int i, int prev, int[]nums, int k){
        if(i == nums.length) return 0;
        if(dp[i][prev+1][k] != -1) return dp[i][prev+1][k];
        int ans = 0;
        
        if(prev == -1){
            ans = Math.max(1+rec(i+1, i, nums, k), rec(i+1, prev, nums, k));
        }
        else if(nums[prev] != nums[i]){
            if(k > 0) ans = Math.max(ans, 1+rec(i+1, i, nums, k-1));
            ans = Math.max(ans, rec(i+1, prev, nums, k));
        }
        else ans = Math.max(ans, 1+rec(i+1, i, nums, k));
        return dp[i][prev+1][k]=ans;
    }
}
