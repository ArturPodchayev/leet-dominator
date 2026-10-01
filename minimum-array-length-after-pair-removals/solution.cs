public class Solution {
    public int MinLengthAfterRemovals(IList<int> nums) {
        var list = CreateCountList(nums);
        var max = list.Max();
        if (max <= nums.Count / 2)
        {
            return nums.Count % 2;
        }
        var rs = max - (nums.Count - max);
        return rs;
    }
    private List<int> CreateCountList(IList<int> nums)
    {
        var rs = new List<int> { 1 };
        for (int i = 1; i < nums.Count; i++)
        {
            if (nums[i - 1] == nums[i])
            {
                rs[rs.Count - 1]++;
            }
            else
            {
                rs.Add(1);
            }
        }
        return rs;
    }
}
