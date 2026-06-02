public class Solution {
    public int[] FindIndices(int[] nums, int indexDifference, int valueDifference) {
        int len = nums.Length;
        int[] res = [-1, -1];
        if(len < indexDifference)
            return res;

        for(int i = 0; i <= len-indexDifference; i++)
        {
            for(int j = i+indexDifference; j < len; j++)
            {
                int diff = Math.Abs(nums[i] - nums[j]);
                if(diff >= valueDifference)
                    return [i,j];
            }
        }

        return res;
    }
}
