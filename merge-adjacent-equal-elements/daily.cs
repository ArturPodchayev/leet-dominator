public class Solution {
    public IList<int> TargetIndices(int[] nums, int target) {
        Array.Sort(nums);
        var result = new List<int>();
        var tarIndex = nums.IndexOf(target);
        if(tarIndex == -1) return result;
        for(int i = 0; i < nums.Length; i++){
            if(nums[i] == nums[tarIndex]){
                result.Add(i);
            }
        }
        return result;
    }
}
