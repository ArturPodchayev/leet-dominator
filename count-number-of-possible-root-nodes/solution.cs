public class Solution {
    Dictionary<(int, int), bool> guessSet = new();
    List<int>[] tree;
    int res = 0, k;

    public int RootCount(int[][] edges, int[][] guesses, int k) {
        int n = edges.Length + 1;
        this.k = k;

        tree = new List<int>[n];
        for (int i = 0; i < n; i++) tree[i] = new List<int>();
        foreach (var e in edges) {
            tree[e[0]].Add(e[1]);
            tree[e[1]].Add(e[0]);
        }

        foreach (var g in guesses)
            guessSet[(g[0], g[1])] = true;

        int correct = DFS1(0, -1);
        DFS2(0, -1, correct);

        return res;
    }

    int DFS1(int u, int parent) {
        int count = 0;
        foreach (var v in tree[u]) {
            if (v == parent) continue;
            if (guessSet.ContainsKey((u, v))) count++;
            count += DFS1(v, u);
        }
        return count;
    }

    void DFS2(int u, int parent, int curr) {
        if (curr >= k) res++;

        foreach (var v in tree[u]) {
            if (v == parent) continue;

            int next = curr;
            if (guessSet.ContainsKey((u, v))) next--;
            if (guessSet.ContainsKey((v, u))) next++;

            DFS2(v, u, next);
        }
    }
}
