public class Solution {
    public long PerfectPairs(int[] nums) {
        int l = nums.Length;
        for(int i=0; i<l; i++)
            if(nums[i] < 0)
                nums[i] *= -1;
        Array.Sort(nums);
        // keep going from left to right with index
        int ind = 0;
        long ans = 0;
        for(int i=1; i<l; i++){
            while(ind<i && nums[ind] * 2 < nums[i]) ind++;
            ans += i - ind;
        }
        return ans;
    }
}
