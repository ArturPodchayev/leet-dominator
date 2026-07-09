public class Solution {
    public bool[] PathExistenceQueries(int n, int[] nums, int maxDiff, int[][] queries) {
        int[] rightBound = Enumerable.Range(0, n).ToArray();
        int qLen = queries.Length;
        for(int i = n-2; i >= 0; i--)
        {
            if(nums[i+1] - nums[i] <= maxDiff)
                rightBound[i] = rightBound[i+1];
        }

        bool[] res = new bool[qLen];
        for(int i = 0; i < qLen; i++)
        {
            int[] cur = queries[i];
            int n1 = Math.Min(cur[0], cur[1]), n2 = Math.Max(cur[0], cur[1]);
            if(rightBound[n1] >= n2)
                res[i] = true;
        }

        return res;
    }
}
