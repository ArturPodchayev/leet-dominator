public class Solution {
    public int CountElements(int[] nums, int k) {
        Array.Sort(nums);
        int count = 0;
        int n = nums.Length;
        int duplicate = 1;
        
        if(k == 0) return n;
        if(n == 0 || n == 1) return 0;
        for(int i = 0; i < n; i++){
            if(i < (n - 1) && nums[i] == nums[i+1]){
                duplicate++;
                continue;
            };
            if(k < n - i){
                count = count + duplicate;
                duplicate = 1;
            }
        }
        return count;
    }
}
