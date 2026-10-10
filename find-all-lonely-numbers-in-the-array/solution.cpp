class Solution {
public:
    vector<int> findLonely(vector<int>& nums) {
        sort(nums.begin(),nums.end());
        vector<int> result;

        if(nums.size()==1){
            return nums;
        }

        for(int i=0;i<nums.size();i++){
            if(i==nums.size()-1){
                if(nums[i]-nums[i-1]>1){
                    result.push_back(nums[i]);
                }
                continue;
            }
            if(nums[i+1]-nums[i]<=1){
                i++;
                continue;
            }
            else if(i>0 && nums[i]-nums[i-1]<=1){
                continue;
            }

            result.push_back(nums[i]);

        }

        return result;
    }
};
