class Solution {
    public int maxScore(List<List<Integer>> arr) {
        int n = arr.size();
        int m = arr.get(0).size();
        int dp[][]  = new int[n][m];
        int ans = -(int)(1e9);
        for(int j=0; j<m; j++){
            int diff = -(int)(1e9);
            for(int k=j+1; k<m; k++){
                diff = Math.max(diff,arr.get(n-1).get(k)-arr.get(n-1).get(j));
            }
            dp[n-1][j] = diff;
            ans = Math.max(ans,dp[n-1][j]);
        }

        for(int i=0; i<n; i++){
            int diff = -(int)(1e9);
            for(int k=i+1; k<n; k++){
                diff = Math.max(diff,arr.get(k).get(m-1)-arr.get(i).get(m-1));
            }
            dp[i][m-1] = diff;
            ans = Math.max(ans,dp[i][m-1]);
        }

        dp[n-1][m-1] = 0;

        for(int i=n-2; i>=0; i--){
            for(int j=m-2; j>=0; j--){
                int a = arr.get(i+1).get(j)-arr.get(i).get(j);
                int b = arr.get(i).get(j+1)-arr.get(i).get(j);

                int x = Math.max(a,a+dp[i+1][j]);
                int y = Math.max(b,b+dp[i][j+1]);
                dp[i][j] = Math.max(x,y);
                ans = Math.max(ans,dp[i][j]);
            }
        }

        return ans;
    }
}
