public class Solution {
    public int[] TransformArray(int[] nums) {
        List<int> even = new List<int>();
        List<int> odd = new List<int>();
        for (int i = 0; i < nums.Length; i++) {
            if (nums[i] % 2 == 0) {
                nums[i] = 0;
                even.Add(nums[i]);
            }
            else {
                nums[i] = 1;
                odd.Add(nums[i]);
            }
        }
        even.AddRange(odd);
        return even.ToArray();
    }
}
