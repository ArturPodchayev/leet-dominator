
public class Solution
{
    public long CountPalindromePaths(IList<int> parent, string s)
    {
        var n = parent.Count;
        var counts = new int[1 << 26];
        var adj = new List<List<int>>(n);

        for (var i = 0; i < n; i++)
            adj.Add(new List<int>());

        for (var i = 1; i < n; i++)
            adj[parent[i]].Add(i);

        var result = 0L;
        var visitedValues = new List<int>();

        Dfs(0, 0);

        return result;

        void Dfs(int i, int v)
        {
            visitedValues.Add(v);
            result += counts[v];

            for (var bit = 0; bit < 26; bit++)
                result += counts[v ^ 1 << bit];

            counts[v]++;

            foreach (var u in adj[i])
                Dfs(u, v ^ 1 << s[u] - 'a');
        }
    }
}
