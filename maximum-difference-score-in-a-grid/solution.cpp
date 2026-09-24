class Solution {
public:
vector<vector<vector<int>>>dp;
    int f(vector<vector<int>>&grid,int i,int j,int s){
        if(i>=grid.size()||j>=grid[0].size()){
            if(s==2)return 0;
            return -1e6;
        }
        if(dp[i][j][s]!=-1e9)return dp[i][j][s];
        int val = 0;
        if(s){
            val = max({grid[i][j],f(grid,i+1,j,2),f(grid,i,j+1,2)});
            return dp[i][j][s]=val;
        }
        val = max({f(grid,i+1,j,s),f(grid,i,j+1,s),f(grid,i+1,j,1)-grid[i][j],f(grid,i,j+1,1)-grid[i][j]});
        return dp[i][j][s]=val;
    }
    int maxScore(vector<vector<int>>& grid) {
        dp.assign(grid.size(),vector<vector<int>>(grid[0].size(),vector<int>(3,-1e9)));
       return f(grid,0,0,0); 
    }
};
