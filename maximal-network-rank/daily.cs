public class Solution {
    private int LCM(int a, int b)
    {
        return a*b/GCD(a,b);
    }

    private int GCD(int a, int b)
    {
        if(a < b)
            return GCD(b, a);
        else if(a == b || b == 0)
            return a;
        else
            return GCD(a-b, b);
    }

    public int MaxLength(int[] nums) {
        int len = nums.Length;
        int maxLen = 0;
        for(int i = 0; i <= len-2; i++)
        {
            int prod = nums[i];
            int lcm = nums[i];
            int gcd = nums[i];

            for(int j = i+1; j < len; j++)
            {
                prod *= nums[j];
                lcm = LCM(lcm, nums[j]);
                gcd = GCD(gcd, nums[j]);
                if(prod == lcm*gcd)
                {
                    maxLen = Math.Max(maxLen, j-i+1);
                }
                else
                    break;
            }
        }

        return maxLen;
    }
}
