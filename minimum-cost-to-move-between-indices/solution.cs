public class Solution {
    public int[] MinCost(int[] nums, int[][] queries) {
        int len = nums.Length;
        long[] lToR = new long[len], rToL = new long[len];

        for(int i = 0; i < len-1; i++)
        {
            if(i == 0 || i > 0 && nums[i+1]-nums[i] < nums[i]-nums[i-1])
                lToR[i+1] = lToR[i]+1;
            else
                lToR[i+1] = lToR[i] + nums[i+1]-nums[i];
        }

        for(int i = len-1; i > 0; i--)
        {
            if(i == len-1 || i < len-1 && nums[i+1]-nums[i] >= nums[i]-nums[i-1])
                rToL[i-1] = rToL[i]+1;
            else
                rToL[i-1] = rToL[i] + nums[i]-nums[i-1];
        }

        int qLen = queries.Length;
        int[] res = new int[qLen];
        for(int i = 0; i < qLen; i++)
        {
            int[] q = queries[i];
            res[i] = (int)(q[1] > q[0] ? lToR[q[1]]-lToR[q[0]] : rToL[q[1]]-rToL[q[0]]);
        }

        return res;
    }
}
