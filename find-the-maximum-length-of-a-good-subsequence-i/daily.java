class Solution {
    public int mini(int [] nums,int j){
        int min=Integer.MAX_VALUE;
        for(int i=j;i<nums.length;i++){
            if(min>nums[i])min=nums[i];
        }
        return min;
    }
    public int firstStableIndex(int[] nums, int k) {
        int max=Integer.MIN_VALUE;
        for(int i=0;i<nums.length;i++){
            if(nums[i]>max)max=nums[i];
            int min=mini(nums,i);
            if((max-min)<=k)return i;
        }
        return -1;
        
    }
}
