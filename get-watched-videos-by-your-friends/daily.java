class Solution {
    public int minimumDeletions(int[] nums) {
        int min=1,max=1;
        for(int i=1;i<nums.length;i++){
            if(nums[min-1]>nums[i])min=i+1;
            else if(nums[max-1]<nums[i])max=i+1;
        }
        if(max==min)return Math.min(max,nums.length+1-max);
        else if(min>max){
            return Math.min(Math.min(min,max+(nums.length+1-min)),nums.length+1-max);
        }else{
            return Math.min(Math.min(max,min+(nums.length+1-max)),nums.length+1-min);
        }
        
    }
}
