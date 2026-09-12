public class Solution {
    public int[] ColorTheArray(int n, int[][] queries) {
        var rs = new int[queries.Length];
        var nums = new int[n];
        nums[queries[0][0]] = queries[0][1];
        for (int i = 1; i < queries.Length; i++)
        {
            var shift = 0;
            if (nums[queries[i][0]] != 0)
            {
                if (0 < queries[i][0] && nums[queries[i][0] - 1] == nums[queries[i][0]]) shift--;
                if (queries[i][0] + 1 < nums.Length && nums[queries[i][0]] == nums[queries[i][0] + 1]) shift--;
            }
            nums[queries[i][0]] = queries[i][1];
            if (0 < queries[i][0] && nums[queries[i][0] - 1] == nums[queries[i][0]]) shift++;
            if (queries[i][0] + 1 < nums.Length && nums[queries[i][0]] == nums[queries[i][0] + 1]) shift++;
            rs[i] = rs[i - 1] + shift;
        }
        return rs;
    }
}
