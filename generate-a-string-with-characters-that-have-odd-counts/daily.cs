public class Solution {
    public int AssignEdgeWeights(int[][] edges) {
        Dictionary<int, List<int>> adj = new Dictionary<int, List<int>>();
        int n = edges.Length+1;
        for(int i=0;i<n;i++)
        {
            adj.Add(i+1, new List<int>());
        }

        for(int i=0;i<n-1;i++)
        {
            adj[edges[i][0]].Add(edges[i][1]);
            adj[edges[i][1]].Add(edges[i][0]);
        }

        int [] visited = new int [n+1];

        int height = dfs(adj, 1, visited)-1;
        long ans = 1;
        for(int i=0;i<height-1;i++)
        {
            ans = (ans * 2)%1000000007;
        }
        return (int)ans;
    }

    public int dfs(Dictionary<int, List<int>> adj, int ind, int [] visited )
    {
        if(visited[ind] == 1)
            return 0;
        visited[ind] = 1;
        int height = 0;
        for(int i=0;i<adj[ind].Count;i++)
        {
            int trg = adj[ind][i];
            if(visited[trg] == 0)
            {
                height = Math.Max(dfs(adj, trg, visited), height);
            }
        }
        return height+1;
    }
}
