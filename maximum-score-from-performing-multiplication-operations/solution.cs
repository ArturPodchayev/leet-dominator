public class Solution {
    

    int[] nums;
    int[] multipliers;
    int[,] memo;
    

    public int MaximumScore(int[] nums, int[] multipliers) {
       this.nums = nums;
       this.multipliers = multipliers;
        this.memo = new int[multipliers.Length,multipliers.Length];
       return Dp(0,0) ;
    }

    public int Dp(int m, int left)
    {
         //return max of adding from left or right   
        int right = this.nums.Length - 1 -(m-left);
         if(m == multipliers.Length -1)
         {
             return Math.Max(this.nums[left] * this.multipliers[m], this.nums[right] * this.multipliers[m]);
         }

         if(this.memo[m,left]!= 0)
         {
             return this.memo[m,left];
         }
        
        this.memo[m,left] = Math.Max(this.nums[left] * this.multipliers[m] + Dp(m+1, left +1), this.nums[right] * this.multipliers[m] + Dp(m+1, left));
        return this.memo[m,left];
    }
}
