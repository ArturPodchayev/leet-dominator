public class Solution {
    public int[] GardenNoAdj(int n, int[][] paths) {
        var arr = CreatePaths(n, paths);
        var rs = new int[n];
        for (int i = 0; i < rs.Length; i++)
        {
            var neibColors = new HashSet<int>();
            for (int j = 0; j < arr[i].Count; j++)
            {
                if (rs[arr[i][j]] != 0) neibColors.Add(rs[arr[i][j]]);
            }
            for (int j = 1; j <= 4; j++)
            {
                if (!neibColors.Contains(j))
                {
                    rs[i] = j;
                    break;
                }
            }
        }
        return rs;
    }
    private List<int>[] CreatePaths(int n, int[][] paths)
    {
        var rs = new List<int>[n];
        for (int i = 0; i < n; i++)
        {
            rs[i] = new List<int>();
        }
        for (int i = 0; i < paths.Length; i++)
        {
            rs[paths[i][0] - 1].Add(paths[i][1] - 1);
            rs[paths[i][1] - 1].Add(paths[i][0] - 1);
        }
        return rs;
    }
}
