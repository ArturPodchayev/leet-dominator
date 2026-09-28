class Solution {
    public long maximumTotalSum(int[] height) {
        Arrays.sort(height); long ans = 0;
        int last = Integer.MAX_VALUE;

        for (int i = height.length - 1; i >= 0; i--) {
            if (height[i] < last) last = height[i];
            else if (last == 0) return -1;
            
            ans += last--;
        }

        return ans;
    }
}
