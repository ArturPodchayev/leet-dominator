class Solution {
public:
    unordered_map<int,vector<int>> m;
    Solution(vector<int>& nums) {
        for(int i=0;i<nums.size();i++)
        {
            m[nums[i]].push_back(i);
        }
    }
    
    int pick(int target) {
        int x=m[target].size();
        x=rand()%x;
        return m[target][x];
    }
};
