class Solution {
    public int makeStringGood(String s) {
        int n = s.length();
        int[] count = new int[26];
        int[][] dp = new int[27][2];
        for(int i = 0; i < n; ++i) count[s.charAt(i)-'a']++;
        int res = n;
        for(int target = 1; target <= n; ++target){
            for(int i = 25; i >= 0; --i){
                for(int deleted = 0; deleted <= 1; ++deleted){
                    if(i == 0 && deleted == 1) break;
                    int x = count[i];
                    if(x == target){
                        dp[i][deleted] = dp[i+1][0];
                    }
                    else if(x > target){
                        dp[i][deleted] = x - target + dp[i+1][1];
                    }
                    else{
                        int delete_cost = x + dp[i+1][1];
                        int deleted_amount = deleted>0?(count[i-1]>target?count[i-1]-target:(count[i-1]==target?0:count[i-1])):0;
                        int insert_cost = Math.max(target-x-deleted_amount, 0)+dp[i+1][0];
                        dp[i][deleted] = Math.min(delete_cost, insert_cost);
                    }
                }
            }
            res = Math.min(res, dp[0][0]);
        }
        return res;
    }
}
