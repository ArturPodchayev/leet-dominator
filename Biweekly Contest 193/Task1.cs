/*
4074. Maximum Product Pair With Target Sum
Solved
Easy
premium lock icon
Companies
Hint
You are given an integer array nums and an integer target.

A pair of distinct indices (i, j) is valid if:

nums[i] + nums[j] == target
nums[i] > nums[j]
Return a valid pair [i, j] whose product nums[i] * nums[j] is maximum among all valid pairs. If no valid pair exists, return [-1, -1].

If multiple valid pairs achieve the maximum product, you may return any of them.
*/

public class Solution {
    public int[] MaxProductPair(int[] nums, int target) {
        int[] result = new int[] {-1, -1};
        long best = long.MinValue; //it can be not positive num

        for(int i=0; i<nums.Length; i++){
            for(int j=0; j<nums.Length; j++){
                if(nums[i] + nums[j] != target) continue;
                if(nums[i] <= nums[j]) continue; //j!=i
                long product = (long)nums[i] * nums[j];
                if(product > best){
                    best = product;
                    result = new int[] {i,j};
                }
            }
        }
        return result; 
    }
}
