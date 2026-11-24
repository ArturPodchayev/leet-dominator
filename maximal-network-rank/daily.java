class Solution {
    public int maxLength(int[] nums) {
        int n = nums.length;
        int maxProductEq = Integer.MIN_VALUE;

        for (int i = 0; i<n; i++) 
        {
            long product = nums[i];
            long gcd = nums[i];
            long lcm = nums[i];
            for (int j = i+1; j<n; j++) {
                product *= nums[j];
                gcd = gcd(gcd, nums[j]);
                lcm = (lcm * nums[j]) / gcd(lcm, nums[j]);
                if (product > gcd * lcm)
                    break;
                if (product == gcd * lcm)
                    maxProductEq = Math.max(maxProductEq, j-i+1);
            }
        }

        return maxProductEq;
    }

    private long gcd(long a, long b) {
        if (a==0)
            return b;
        return gcd(b%a, a);
    }
}
