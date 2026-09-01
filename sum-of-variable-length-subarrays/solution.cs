public class Solution {
    public int SubarraySum(int[] nums) {
        int[] arr = new int[nums.Length];
        arr[0] = nums[0];
        for(int i = 1; i < nums.Length; i++){
            arr[i] = arr[i-1] + nums[i];
        }

        int sum = 0;
        for(int i = 0; i < arr.Length; i++){
            int l = Math.Max(0, i-nums[i]);

            if(l == 0)
                sum += arr[i];
            else
                sum += (arr[i] - arr[l-1]);
        }
        return sum;
    }
}
