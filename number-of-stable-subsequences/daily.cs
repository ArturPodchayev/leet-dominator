public class Solution 
{
    public int SumCounts(IList<int> nums) 
    {
        var n = nums.Count;

        var ans = 0;

        for(int i = 0; i < n; i++)
        {
            var s = new HashSet<int>();
            
            for(int j = i; j < n; j++)
            {
                s.Add(nums[j]);
                ans += s.Count * s.Count;
            }
        }

        return ans;
    }
}
