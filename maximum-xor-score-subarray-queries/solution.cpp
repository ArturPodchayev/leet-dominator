#define pii pair<int, int>
#define F first
#define S second

class Solution {
public:
    vector<int> maximumSubarrayXor(vector<int>& nums, vector<vector<int>>& queries) {
        int n = nums.size();
        vector<vector<int>> score(n+1, vector<int>(n+1, 0));
        
        for (int l = n-1; l >= 0; l --) {
            int last_pwr = 1;
            score[l][1] = nums[l];
            
            for (int r = l+1; r < n; r ++) {
                int len = r-l+1;
                score[l][len] = score[l][len-last_pwr] ^ score[l+last_pwr][len-last_pwr];
                
                if (last_pwr == len) last_pwr *= 2;
            }
        }
        
        vector<vector<int>> suffix(n+1, vector<int>(n+1, 0));
        for (int r = 0; r < n; r ++) 
            for (int c = r; c < n; c ++) suffix[r][c] = score[r][c-r+1];
        
        for (int r = 0; r < n; r ++) {
            for (int c = 1; c < n; c ++)
                suffix[r][c] = max (suffix[r][c], suffix[r][c-1]);
        }
        for (int c = 0; c < n; c ++) {
            for (int r = n-2; r >= 0; r --) {
                suffix[r][c] = max (suffix[r][c], suffix[r+1][c]);
            }
        }
        
        vector<int> result;
        for (auto q : queries) 
            result.push_back(suffix[q[0]][q[1]]);
        return result;
    }
};
