public class Solution {
    public bool CanSplitArray(IList<int> nums, int m) {
        if(nums.Count <= 2) return true;
        for(int i = 0; i < nums.Count - 1 ;i++){
            if(nums[i] + nums[i + 1 ] >= m) return true;
        }
        return false;
    }
}
