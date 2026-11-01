public class Solution {
    public int MinMoves0(int[] nums) { 
        Array.Sort(nums);
        int minMoves = 0;
        for(int i = 0; i < nums.Length; i++) {
             minMoves += nums[i]  - nums[0]; 
        }

        return minMoves;
    }    

    public int MinMoves(int[] nums) { 
        int min = nums.Min(), tot = nums.Sum();
  
        return tot - (nums.Length * min);
    }    
    
    public int MinMovesBF(int[] nums) { //TLE
        int minMoves = 0;
        while(true) {
            int diff = nums.Max() - nums.Min();
            if(diff == 0) break;
            for(int i = 0; i < nums.Length; i++) {
                nums[i] += diff;
            }   
        }

        return minMoves;
    }
}
