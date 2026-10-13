/*
4076. Longest Resilient Subarray II
Solved
Medium
premium lock icon
Companies
Hint
You are given an integer array nums and an integer k.

A subarray is resilient if, for every position in it, deleting the element at that position leaves the remaining elements with a sum divisible by k.

For a subarray of length 1, the remaining sum is 0, which is divisible by k.

Return the length of the longest resilient subarray
*/
public class Solution {
    public int ResilientSubarray(int[] nums, int k) {
        int bestone = 1;
        int i = 0;
        while(i<nums.Length){
            int r = nums[i] %k;
            int j = i;
            while(j<nums.Length && nums[j] % k == r) j++;
            int m = j - i;
            int step = k / Gcd(r,k); //r=0: gcd = k and step = 1 
            int len = ((m-1) / step) * step + 1;

            bestone = Math.Max(bestone, len);
            i=j;
        }

        return bestone;
    }
    private int Gcd(int a, int b){
        while (b!=0){
            int t = a % b;
            a = b;
            b = t;
        //b!=0    
        }
        return a;
    }
}
