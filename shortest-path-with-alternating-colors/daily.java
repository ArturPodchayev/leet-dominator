class Solution {
    public int missingMultiple(int[] nums, int k) {
        int[] miss = new int[nums.length+1];
        for(int num: nums){
            if(num%k == 0 && num/k <= nums.length){
                miss[num/k] = num;
            }
        }
        for(int i = 1; i <= nums.length; i++){
            if(miss[i] == 0){
                return i*k;
            }
        }
        return (nums.length+1)*k;
    }
}
