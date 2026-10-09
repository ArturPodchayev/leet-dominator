public class Solution {
    public long MaximumTotalCost(int[] nums) {
        int n=nums.Length;
        long positiveSignSum=nums[0];
        long negativeSignSum=nums[0];
        for(int i=1;i<n;i++)
        {            
            long val=Math.Max(positiveSignSum,negativeSignSum);
            long q1=val+nums[i];
            long q2=Math.Max(positiveSignSum-nums[i],negativeSignSum+nums[i]);
            positiveSignSum=q1;
            negativeSignSum=q2;
        }
        return Math.Max(positiveSignSum,negativeSignSum);
    }
}
