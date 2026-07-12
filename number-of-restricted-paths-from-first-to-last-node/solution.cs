public class Solution {
    const int MOD = 1_000_000_007;
    public int CountRestrictedPaths(int n, int[][] edges) {
        var graph = new List<(int to, int wt)>[n+1];
        for(int i = 1; i<=n; i++) graph[i] = new List<(int to, int wt)>();

        foreach(var e in edges)
        {
            graph[e[0]].Add((e[1], e[2]));
            graph[e[1]].Add((e[0], e[2]));
        }

        #region Dijkstra--calculates min dist from n to all nodes.stores in dist[]
        int[] dist = new int[n+1];
        Array.Fill(dist, int.MaxValue);
        dist[n] = 0;

        var pq = new PriorityQueue<(int node, int w), int>();
        pq.Enqueue((n,0),0);

        while(pq.Count > 0)
        {
            var (u,du) = pq.Dequeue();

            if(du > dist[u]) continue;

            foreach(var (v,w) in graph[u])
            {
                if(dist[v] > du+w)
                {
                    dist[v] = du+w;
                    pq.Enqueue((v, dist[v]), dist[v]);
                }
            }
        }
        #endregion
        
        #region DP+Topo--Restricted Paths go from larger to smaller dist to n,it simplifies to DAG
        int[] dp = new int[n+1];//dp counts restricted path from u to n
        dp[n] = 1;//r path from n to n is 1

        var nodes = new List<int>();
        for(int i = 1; i<=n; i++) nodes.Add(i);
        nodes.Sort((a,b)=> dist[a].CompareTo(dist[b]));

        //Convert rec to DP
        foreach(var u in nodes)
        {
            foreach(var (v, _) in graph[u])
            {
                if(dist[v] < dist[u])//though we are traversing in reversing, but check condition is same as DFS.because when we move from back and reach at u,its neighbors have already been computed by now
                {
                    dp[u] = (dp[u]+ dp[v])%MOD;
                }
            }
        }

        return dp[1];// return DFS(1, n, graph, dist, memo);//solve recursively from start i.e. 1. return count of restricted paths
        #endregion
    }
}

