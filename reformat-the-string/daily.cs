public class Solution 
{
    public int MinScore(int n, int[][] roads)
    {
        Dictionary<int, List<int>> graph = new();
        foreach (int[] road in roads)
        {
            graph.TryAdd(road[0], new List<int>());
            graph[road[0]].Add(road[1]);

            graph.TryAdd(road[1], new List<int>());
            graph[road[1]].Add(road[0]);
        }

        bool[] visited = new bool[n + 1];
        Dfs(1, graph, visited);

        int min = int.MaxValue;
        foreach (int[] road in roads)
        {
            if (visited[road[0]] || visited[road[1]])
                min = Math.Min(min, road[2]);
        }
        return min;
    }

    private void Dfs(int currNode, Dictionary<int, List<int>> graph, bool[] visited)
    {
        if (visited[currNode])
            return;
        visited[currNode] = true;
        if (graph.ContainsKey(currNode))
        {
            foreach (int next in graph[currNode])
            {
                Dfs(next, graph, visited);
            }
        }
        return;
    }
}
