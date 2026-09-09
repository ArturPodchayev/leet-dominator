class Solution {
public:
    long long shiftDistance(string s, string t, vector<int>& nextCost, vector<int>& previousCost) {
        vector<vector<long long>> dp(26,(vector<long long>(26,-1)));
        long long ans=0;
        for(int i=0;i<s.size();i++){
            if(s[i]!=t[i]){
                int fStep = ((t[i]-'a')-(s[i]-'a') + 26) % 26;
                int bStep = ((s[i]-'a')-(t[i]-'a') + 26) % 26;
                if(dp[s[i]-'a'][t[i]-'a']!=-1){
                    ans+=dp[s[i]-'a'][t[i]-'a'];
                }
                else{
                    long long nCost=0,pCost=0;
                    for(int j=0;j<fStep;j++){
                        nCost+=nextCost[((s[i]-'a')+j)%26];
                    }
                    for(int j=0;j<bStep;j++){
                        pCost+=previousCost[((s[i]-'a')- j + 26)%26];
                    }
                    dp[s[i]-'a'][t[i]-'a'] = min(nCost,pCost);
                    ans+=dp[s[i]-'a'][t[i]-'a'];
                }
            }
        }
        return ans;
    }
};
