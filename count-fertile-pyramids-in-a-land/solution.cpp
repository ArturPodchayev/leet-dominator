class Solution {
public:
    int countPyramids(vector<vector<int>>& grid) {
        vector<vector<int>> dp=grid;
        int ans =0;
        for(int i=grid.size()-2;i>=0;i--){
            for(int j=1;j<grid[0].size()-1;++j){
                
                dp[i][j] = grid[i][j]*(1 + min(dp[i+1][j-1],min(dp[i+1][j],dp[i+1][j+1])));
                // ans += min(1,dp[i][j]);
                ans += max(0,dp[i][j]-1);

            }
        }

        dp =grid;
        for(int i=1;i<grid.size();++i){
            for(int j=1;j<grid[0].size()-1;++j){
                
                dp[i][j] = grid[i][j]*(1 + min(dp[i-1][j-1],min(dp[i-1][j],dp[i-1][j+1])));
                
                ans += max(0,dp[i][j]-1);

            }
        }
        return ans;
    }
};
