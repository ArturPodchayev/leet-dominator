public class Solution {
    public long MaxTotal(int[] nums, string s) {
        var rs = 0L;
        var intervals = GetIntervals(s);
        for (int i = 0; i < intervals.Count; i++)
        {
            var min = nums[intervals[i][1]];
            for (int j = Math.Max(0, intervals[i][0]); j <= intervals[i][1]; j++)
            {
                rs += nums[j];
                min = Math.Min(min, nums[j]);
            }
            if (intervals[i][0] != -1) rs -= min;
        }
        return rs;
    }
    private List<int[]> GetIntervals(string s)
    {
        var rs = new List<int[]>();
        if (s[0] == '1') rs.Add(new[] { 0, 0 });
        for (int i = 1; i < s.Length; i++)
        {
            if (s[i] == '1')
            {
                if (s[i - 1] == '1')
                {
                    rs[rs.Count - 1][1] = i;
                }
                else
                {
                    rs.Add(new[] { i, i });
                }
            }
        }
        for (int i = 0; i < rs.Count; i++)
        {
            rs[i][0]--;
        }
        return rs;
    }
}
