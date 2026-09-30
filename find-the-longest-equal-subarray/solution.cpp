class Solution {
public:
    int longestEqualSubarray(vector<int>& nums, int k) {
        unordered_map<int, vector<int>> numIndx;
        int sz = nums.size();
        for(int indx = 0; indx < sz; indx++){
            numIndx[nums[indx]].push_back(indx);
        }
        int maxCnt = 0;
        for(auto &pr : numIndx){
            auto &indVc = pr.second;
            int left = 0;
            for(int right = 0; right < indVc.size(); right++){
                while(indVc[right] - indVc[left] + 1 - (right - left + 1) > k)left++;
                maxCnt = max(maxCnt, right - left + 1);
            }
        }
        return maxCnt;
    }
};
