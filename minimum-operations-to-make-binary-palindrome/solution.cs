public class Solution {
    public int[] MinOperations(int[] nums)
    {
        var bpn = GetBinaryPalindromeNumbers(nums.Min(), nums.Max());
        var rs = new int[nums.Length];
        for (int i = 0; i < nums.Length; i++)
        {
            var index = CalculateIndexToInsert(nums[i], bpn);
            if (nums[i] == bpn[index])
            {
                rs[i] = 0;
            }
            else
            {
                rs[i] = Math.Min(Math.Abs(nums[i] - bpn[index]), Math.Abs(nums[i] - bpn[index + 1]));
            }
        }
        return rs;
    }
    private int CalculateIndexToInsert(int num, List<int> list)
    {
        // list[index0] <= num < list[index1]
        var index0 = 0;
        var index1 = list.Count - 1;
        while (index1 - index0 > 1)
        {
            var indexMid = (index0 + index1) / 2;
            if (list[indexMid] <= num)
            {
                index0 = indexMid;
            }
            else
            {
                index1 = indexMid;
            }
        }
        return index0;
    }
    private List<int> GetBinaryPalindromeNumbers(int min, int max)
    {
        var rs = new List<int>();
        for (int i = min; i <= max; i++)
        {
            var binStr = Convert.ToString(i, 2);
            if (IsPalindrome(binStr))
            {
                rs.Add(i);
            }
        }
        while (!IsPalindrome(Convert.ToString(min, 2))) min--;
        if (rs.Count == 0 || min < rs[0]) rs.Insert(0, min);
        while (!IsPalindrome(Convert.ToString(max, 2))) max++;
        if (rs[rs.Count - 1] < max) rs.Add(max);
        return rs;
    }
    private bool IsPalindrome(string s)
    {
        for (int i = 0; i < s.Length / 2; i++)
        {
            if (s[i] != s[s.Length - 1 - i]) return false;
        }
        return true;
    }
}
