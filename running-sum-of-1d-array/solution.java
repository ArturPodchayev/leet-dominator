class Solution {
    public int[] runningSum(int[] nums) {
        int sum = 0;
        int i = 0;
        int[] sumarr = new int[nums.length];
        for(int num : nums){
            sumarr[i] = (sum += num);
            i++;
        }
        return sumarr;
    }
}
