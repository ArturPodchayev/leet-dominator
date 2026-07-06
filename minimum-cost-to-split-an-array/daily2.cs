public class Solution {
    public int RemoveCoveredIntervals(int[][] intervals) {
        var ordered = intervals.OrderBy(x=>x[0]).ThenByDescending(x=>x[1]).ToArray();
        int len = intervals.Length;
        int pre = 0, res = len;
        for(int i = 0; i < len; i++)
        {
            int curEnd = ordered[i][1];
            if(curEnd <= pre)
                res--;
            else
                pre = curEnd;
        }

        return res;
    }
}
