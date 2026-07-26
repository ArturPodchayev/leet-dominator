public class Solution {
    public int EvenNumberBitwiseORs(int[] nums) {
        int b=0;
        for(int i=0;i<nums.Length;i++)
        {
            if(nums[i]%2==0)
            {
                int a=nums[i];
                b=b|a;
            }
        }
        return b;
    }
}
