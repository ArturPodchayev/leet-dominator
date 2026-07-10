public class Solution {
    public int[] PathExistenceQueries(int n, int[] nums, int maxDiff, int[][] queries) {
        int[][] pairs = new int[n][];

        for(int i=0; i<n; i++)
            pairs[i] = new int[]{nums[i],i};
        
        Array.Sort(pairs, (a,b)=>a[0].CompareTo(b[0]));

        const int LOG = 20;
        int[][] jump = new int[n][];

        for(int i=0; i<n; i++)
            jump[i] = new int[LOG];
        
        int right = n-1;

        //Build Binary Lifting table
        for(int left = n-1; left >=0; left--)
        {
            while(pairs[right][0] - pairs[left][0] > maxDiff)
                right--;
            
            int u = pairs[left][1];
            int v = pairs[right][1];

            jump[u][0] = v;

            for(int k=1; k<LOG; k++)
                jump[u][k] = jump[jump[u][k-1]][k-1];
        }

        int[] ans = new int[queries.Length];

        for(int t=0; t<queries.Length; t++)
        {
            int u = queries[t][0];
            int v = queries[t][1];

            if(nums[u] > nums[v])
                (u,v) = (v,u);

            if(u==v)
            {
                ans[t] = 0;
                continue;
            }

            if(nums[u] == nums[v])
            {
                ans[t] = 1;
                continue;
            }

            int dist = 0;

            for(int k = LOG-1; k>=0; k--)
            {
                if(nums[jump[u][k]] < nums[v])
                {
                    dist += (1 << k);
                    u = jump[u][k];
                }
            }

            if(nums[jump[u][0]] < nums[v])  
                ans[t] = -1;
            else
                ans[t] = dist +1;
        }
        return ans;
    }
}
