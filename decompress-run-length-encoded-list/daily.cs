public class Solution {
    public int LongestSubsequence(int[] nums) {
        int xor = 0,cnt0=0;
        foreach(int n in nums)
        {
         xor ^= n;
         if(n==0)cnt0++;
        }
        
        if(xor!=0)return nums.Length;
        if(cnt0!=nums.Length)return nums.Length-1;
        return 0;
    }
}
