class Solution {
    public int maximumPossibleSize(int[] nums) {
        int previousGreatest = nums[0];
        int toRemove = 0;
        for (int i = 0; i < nums.length; i++){
            if (nums[i] >= previousGreatest){
                previousGreatest = nums[i];
            } else {
                toRemove +=1;
            }

        }

        return nums.length - toRemove;
        
    }
}
