public class Solution
{
    public int[] FindSubtreeSizes(int[] p, string s)
    {
        int n = p.Length;

        List<int>[] adj = new List<int>[n];
        List<int>[] tree = new List<int>[n];

        for (int i = 0; i < n; i++)
        {
            adj[i] = new List<int>();
            tree[i] = new List<int>();
        }

        int[] ans = new int[n];
        int[] last = Enumerable.Repeat(-1, 26).ToArray();

        // Original tree
        for (int i = 1; i < n; i++)
        {
            adj[p[i]].Add(i);
        }

        void Dfs(int u)
        {
            int c = s[u] - 'a';
            int old = last[c];

            if (u != 0 && old != -1)
            {
                p[u] = old;
            }

            last[c] = u;

            foreach (int v in adj[u])
            {
                Dfs(v);
            }

            last[c] = old;
        }

        int Calc(int u)
        {
            int size = 1;

            foreach (int v in tree[u])
            {
                size += Calc(v);
            }

            ans[u] = size;
            return size;
        }

        // Modify parents
        Dfs(0);

        // Build modified tree
        for (int i = 1; i < n; i++)
        {
            tree[p[i]].Add(i);
        }

        // Calculate subtree sizes
        Calc(0);

        return ans;
    }
}
