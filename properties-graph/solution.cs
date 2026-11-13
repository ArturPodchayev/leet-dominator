public class Solution {
    private bool ValidComm(HashSet<int> h1, HashSet<int> h2, int k)
    {
        int len1 = h1.Count, len2 = h2.Count;
        if(len1 > len2)
            return ValidComm(h2, h1, k);

        if(len1 < k)
            return false;

        foreach(int cur in h1)
        {
            if(h2.Contains(cur))
                k--;
        }

        return k <= 0;
    }
    private int[] par;
    private int FindPar(int x)
    {
       if(par[x] != x)
            par[x] = FindPar(par[x]);

        return par[x];
    }

    private void Union(int x, int y)
    {
        int parX = FindPar(x), parY = FindPar(y);
        par[parX] = par[parY];
    }

    public int NumberOfComponents(int[][] properties, int k) {
        int n = properties.Length, res = 0;
        par = Enumerable.Range(0, n).ToArray();
        bool[,] dp = new bool[n, n];
        HashSet<int> visited = new();
        for(int i = 0; i < n; i++)
        {
            for(int j = i+1; j < n; j++)
            {
                if(ValidComm(properties[i].ToHashSet(), properties[j].ToHashSet(), k))
                    Union(i, j);
            }
        }

        HashSet<int> parSets = new();
        for(int i = 0; i < n; i++)
        {
            int curPar = FindPar(i);
            Console.WriteLine($"{i}th item's par is {curPar}");
            parSets.Add(curPar);
        }

        return parSets.Count;
    }
}
