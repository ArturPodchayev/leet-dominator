class Solution {
public:
    bool allequal(vector<int>&v){
        int comm=-1;
        for(int i=0;i<26;i++){
            if(v[i] == 0) continue;
            if(comm == -1){
                comm=v[i];
            }
            else if(v[i]!=comm){
                return false;
            }
        }
        return true;
    }
    int minimumSubstringsInPartition(string s) {
        int n=s.length();
        vector<int>dp(n+1,-1);
        dp[n]=0;
        for(int i=n-1;i>=0;i--){
            vector<int>v(26,0);
            int ans=INT_MAX;
            for(int x=i;x<s.length();x++){
               v[s[x]-'a']++;
                if(allequal(v)){
                   int k=dp[x+1];
                   if(k!=INT_MAX) ans=min(ans,1+k);
                }
           }
           dp[i]=ans;
        }
        return dp[0];
    }
};
