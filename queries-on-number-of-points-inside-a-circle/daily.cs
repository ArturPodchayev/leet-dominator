public class Solution {
    public int[] CountPoints(int[][] points, int[][] queries) {
        int n = queries.Length;
        int[] ans = new int[n];
        for(int i = 0;i<n;i++)
        {
            var query = queries[i];
            foreach(var point in points)
            {
                int x = (point[0]-query[0])*(point[0]-query[0]);
                int y = (point[1]-query[1])*(point[1]-query[1]);
                if(x+y<=query[2]*query[2])
                {
                    ans[i]++;
                }
            }
        }

        return ans;
    }
}
