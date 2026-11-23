class Solution {
public:
    int countElements(vector<int>& nums, int k) {
    if(k == 0)
    return nums.size();

    sort(nums.begin(),nums.end());
    int i = nums.size()-k-1;
    while(i >= 0){
    if(nums[i] < nums[i+1])
    return i+1;
    i--;
    }    

    return 0;
    }
};
