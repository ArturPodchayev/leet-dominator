class Solution {
    public int minNumberOfSemesters(int n, int[][] relations, int k) {
        int[] prereq = new int[n];
        for(int[] r : relations){
            int prev = r[0] - 1;
            int next = r[1] - 1;
            prereq[next] |= (1 << prev);
        }
        int total = 1 << n;
        int[] dp = new int[total];
        Arrays.fill(dp, Integer.MAX_VALUE);
        dp[0] = 0;

        for(int state = 0; state < total; state++){
            if(dp[state] == Integer.MAX_VALUE){
                continue;
            }
            int cantake = 0;
            for(int i = 0; i < n; i++){
                if((state & (1 << i)) == 0 && ((prereq[i] & state) == prereq[i])){
                    cantake |= (1 << i);
                }
            }
            for(int sub = cantake; sub > 0; sub = (sub - 1) & cantake){
                if(Integer.bitCount(sub) <= k){
                    int curstate = state | sub;
                    dp[curstate] = Math.min(dp[curstate], dp[state] + 1);
                }
            }
        }
        return dp[total - 1];
    }
}
