class Solution {
public:
    int dp[21][10005];
    int f(int i,int var,vector<int> &rods){
        if(i == rods.size()){
            if(var == 0)return 0;
            return INT_MIN;
        }
        if(dp[i][var+5000] != -1)return dp[i][var+5000];
        int temp1 = rods[i] + f(i+1,var + rods[i],rods);
        int temp2 = f(i+1,var - rods[i],rods);
        int temp3 = f(i+1,var,rods);
        return dp[i][var+5000] = max(temp1,max(temp2,temp3));
    }

    int tallestBillboard(vector<int>& rods) {
        memset(dp,-1,sizeof(dp));
        int n = rods.size();
        return f(0,0,rods);
    }
};
