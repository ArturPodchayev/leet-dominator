
class Solution {
public:
    long long countPalindromePaths(vector<int>& parent, string s) {
        long long result = 0;
        int n = parent.size();
        unordered_map<int,vector<int>> child;
        for(int i=1;i<n;i++){
            child[parent[i]].push_back(i);
        }
        unordered_map<int,bitset<26>> dp;
        unordered_map<bitset<26>,int> cnt;
        dp[0] = 0;
        queue<int> q;
        for(int i=0;i<child[0].size();i++){
            q.push(child[0][i]);
        }
        cnt[0]=1;
        while(q.size()>0){
            int l = q.size();
            for(int k=0;k<l;k++){
                int node = q.front();
                q.pop();
                bitset<26> mask(0);
                mask[s[node]-'a'] = 1;
                dp[node] = dp[parent[node]] ^ mask;
                result += cnt[dp[node]];
                cnt[dp[node]]+=1;
                for(int i = 0; i<26;i++){
                    auto bit_with_one_diff = dp[node];
                    bit_with_one_diff[i].flip();
                    result += cnt[bit_with_one_diff];
                }
                for(int j=0;j<child[node].size();j++){
                    q.push(child[node][j]);
                }
            }
        }
        return result;
    }
};
 
