public class UnionFind
{
    public int[] Parent;
    public int[] Rank;
    public int[] Size;

    public UnionFind(int n )
    {
        Parent = new int[n];
        Rank = new int[n];
        Size = new int[n];
        for(int i = 0; i < n; i++)
        {
            Parent[i] = i;
            Size[i] = 1;
        }
    }

    public int Find(int i)
    {
        if(Parent[i] == i)
            return i;
        
        Parent[i] = Find(Parent[i]);
        return Parent[i];
    }

    public void Union(int i, int j)
    {
        int pi = Find(i);
        int pj = Find(j);
        if(pi != pj)
        {
            if(Rank[pi] > Rank[pj])
            {
                Parent[pj] = pi;
                Size[pi] += Size[pj];
            }
            else if(Rank[pi] < Rank[pj])
            {
                Parent[pi] = pj;
                Size[pj] += Size[pi];
            }
            else
            {
                Parent[pi] = pj;
                Size[pj] += Size[pi];
                Rank[pj]++;
            }
        }
    }
}
public class Solution {
    public long CountPairs(int n, int[][] edges) {
        
        UnionFind uf = new UnionFind(n);
        foreach(var edge in edges)
        {
            uf.Union(edge[0],edge[1]);
        }

        long res = 0;
        for(int i = 0; i < uf.Parent.Length; i++)
        {
            if(uf.Parent[i] == i)
            {
                res += (long)uf.Size[i] * (n - uf.Size[i]);
                n -= uf.Size[i];
            }        
        }

        return res;
    }
}
