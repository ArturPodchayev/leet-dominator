class Solution {
    public long maxProduct(int[] nums) {
        int n=nums.length;
        for(int i=0 ; i<n ; i++){
            nums[i] = Math.abs(nums[i]);
        }
        Arrays.sort(nums);
        return (long)nums[n-1]*nums[n-2]*100000;
    }
}
