public class Solution {
    public IList<IList<int>> ShiftGrid(int[][] grid, int k) {
        var rs = new List<IList<int>>();
        var list = GetList(grid, k);
        for (int i = 0; i < grid.Length; i++)
        {
            rs.Add(new List<int>());
            for (int j = 0; j < grid[i].Length; j++)
            {
                rs[i].Add(list[i * grid[i].Length + j]);
            }
        }
        return rs;
    }
    private List<int> GetList(int[][] grid, int k)
    {
        var rs = new List<int>();
        for (int i = 0; i < grid.Length; i++)
        {
            for (int j = 0; j < grid[i].Length; j++)
            {
                rs.Add(grid[i][j]);
            }
        }
        for (int i = 0; i < k; i++)
        {
            rs.Insert(0, rs[rs.Count - 1]);
            rs.RemoveAt(rs.Count - 1);
        }
        return rs;
    }
}
