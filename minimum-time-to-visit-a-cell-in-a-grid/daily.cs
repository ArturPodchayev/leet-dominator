public class Solution {
    public long MaxTotalValue(int[] nums, int k) {
        long minv = long.MaxValue;
        long maxv = 0;
        for(int i = 0; i < nums.Count(); i++){
            if(minv > nums[i]) minv = nums[i];
            if(maxv < nums[i]) maxv = nums[i];
        }
        return k*(maxv-minv);
    }
}
