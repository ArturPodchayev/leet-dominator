/*
4075. Longest Resilient Subarray I
Solved
Medium
premium lock icon
Companies
Hint
You are given an integer array nums and an integer k.

A subarray is resilient if, for every position in it, deleting the element at that position leaves the remaining elements with a sum divisible by k.

For a subarray of length 1, the remaining sum is 0, which is divisible by k.

Return the length of the longest resilient subarray.
*/

public class Solution {
    public int ResilientSubarray(int[] nums, int k) {
        int bestone = 1;
        for(int i = 0; i<nums.Length; i++){
            int r = nums[i] % k;
            for(int j=i; j<nums.Length; j++){
                if(nums[j] % k !=r) break; //changed
                
                int len = j - i +1;
                if((long)(len-1) * r % k==0){
                    bestone = Math.Max(bestone, len);
                }
            }
        }
        return bestone;
    }
}
