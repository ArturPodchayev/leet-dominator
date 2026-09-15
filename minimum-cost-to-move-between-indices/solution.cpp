class Solution {
public:
    vector<int> minCost(vector<int>& nums, vector<vector<int>>& queries) {
        int n = nums.size();
        vector<int> closest(n, 0);
        closest[0] = 1;
        closest[n-1] = n-2;
        for(int i = 1; i< n-1; i++) {
            int left = nums[i]-nums[i-1];
            int right = nums[i+1]-nums[i];
            if(left <= right) closest[i] = i-1;
            else closest[i] = i+1;
        }
        vector<int> lToR(n,0);
        for(int i = 1; i < n; i++) {
            if(i == closest[i-1]) lToR[i] = 1;
            else lToR[i] = abs(nums[i]-nums[i-1]);
        }
        vector<int>rToL(n,0);
        for(int i = n-2; i >= 0; i--) {
            if(i == closest[i+1]) rToL[i] = 1;
            else rToL[i] = abs(nums[i]-nums[i+1]);
        }
        for(int i = 1; i < n; i++) lToR[i] += lToR[i-1];
        for(int i = n-2; i >= 0; i--) rToL[i] += rToL[i+1];

        int m = queries.size();
        vector<int>ans(m,0);
        for(int i = 0; i < m; i++) {
            int l = queries[i][0];
            int r = queries[i][1];
            if(l == r) continue;
            if(l < r) ans[i] = abs(lToR[r]-lToR[l]);
            else ans[i] = abs(rToL[l]-rToL[r]);
        }
        return ans;
    }
};
