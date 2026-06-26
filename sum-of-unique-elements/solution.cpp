class Solution {
public:
    int sumOfUnique(vector<int>& nums) {
        int n = nums.size();
        unordered_map<int,int> mp;
        int sumUnique = 0;

        for(int num : nums){
            mp[num]++;
        }

        for(auto &pair : mp){
            if(pair.second == 1) sumUnique += pair.first;
        }
        return sumUnique;
    }
};
