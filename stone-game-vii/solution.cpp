class Solution {
public:
    int dp[1001][1001];
    int rec(int low, int high, vector<int>&pref){
        if(low>=high) return 0;
        if(dp[low][high]!=-1) return dp[low][high];
        int left=(pref[high+1]-pref[low+1])-rec(low+1,high,pref);
        int right=(pref[high]-pref[low])-rec(low,high-1,pref);
        return dp[low][high]=max(left,right);
    }

    int stoneGameVII(vector<int>& stones) {
        int n=stones.size();
        memset(dp,-1,sizeof(dp));
        vector<int>pref(n+1);
        for(int i=0;i<n;i++){
            pref[i+1]=pref[i]+stones[i];
        }
        return rec(0,n-1,pref);
    }
};
