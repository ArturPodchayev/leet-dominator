class Solution {
    boolean ispalindrome(int x) {
        String bin = Integer.toBinaryString(x);
        int r = bin.length()-1;
        int l = 0;
        while (r >= l) {
            if (bin.charAt(l) != bin.charAt(r)) {
                return false;
            }
            r--;
            l++;
        }
        return true;
    }

    int numberofmoves(int x) {
        int increase = x + 1;
        int decrease = x;
        while (true) {
            if (ispalindrome(decrease)) {
                return x - decrease;
            }
            if (ispalindrome(increase)) {
                return increase - x;
            }
            decrease--;
            increase++;
        }

    }

    public int[] minOperations(int[] nums) {
        int l = nums.length;
        int[] ans = new int[l];

        for (int i = 0; i < l; i++) {
            ans[i] = numberofmoves(nums[i]);
        }
        return ans;
    }
}
