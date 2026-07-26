class Solution {
    public int evenNumberBitwiseORs(int[] nums) {
        int ans = 0;
        for(int n : nums){
            if((n & 1) == 0) ans |= n;
        }
        return ans;
    }
}
