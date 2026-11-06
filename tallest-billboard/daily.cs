public class Solution {
    public int[] CountServers(int n, int[][] logs, int x, int[] queries) {
        int len = logs.Length;
        logs = logs.OrderBy(x=>x[1]).ThenBy(x=>x[0]).ToArray(); // Sort logs by request time
      
        int[] nodes = new int[n+1]; // Track request current node time
        int qLen = queries.Length;
        int[] res = new int[qLen];
        int[][] ids = new int[qLen][];
        
        for(int i = 0; i < qLen; i++)
        {
            ids[i] = [i, queries[i]];
        }

        ids = ids.OrderBy(x=>x[1]).ToArray();

        // Slide Window:
        int left = 0, right = 0, used = 0;
        foreach(int[] q in ids)
        {
            int id = q[0], time = q[1];

            // expand right:
            while(right < len && logs[right][1] <= time)
            {
                used += (++nodes[logs[right][0]] == 1) ? 1 : 0;
                right++;
            }

            while(left < len && logs[left][1] < q[1]-x)
            {
                used -= (--nodes[logs[left][0]] == 0) ? 1 : 0;
                left++;
            }

            res[id] = n-used;
        }

        return res;
    }
}
