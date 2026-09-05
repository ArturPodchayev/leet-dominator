public class Solution {
    public int CountPyramids(int[][] grid) {
        var inv = new int[grid.Length][];
        for (var i = 0; i < inv.Length; i += 1)
        {
            inv[i] = new int[grid[i].Length];
            Array.Copy(grid[i], 0, inv[i], 0, grid[i].Length);
        }
        var deq = new LinkedList<int>();
        for (var i = grid.Length - 1; i > 0; i -= 1)
        {
            for (var j = 0; j < grid[i].Length; j += 1)
            {
                var num = grid[i][j];
                while ((deq.Count > 0) && (grid[i][deq.Last.Value] >= num))
                    deq.RemoveLast();
                deq.AddLast(j);
                while ((deq.Count > 0) && (deq.First.Value <= (j - 3)))
                    deq.RemoveFirst();
                if ((j > 1) && (grid[i - 1][j - 1] > 0))
                    grid[i - 1][j - 1] += grid[i][deq.First.Value];
            }
            deq.Clear();
        }
        for (var i = 0; i < inv.Length - 1; i += 1)
        {
            for (var j = 0; j < inv[i].Length; j += 1)
            {
                var num = inv[i][j];
                while ((deq.Count > 0) && (inv[i][deq.Last.Value] >= num))
                    deq.RemoveLast();
                deq.AddLast(j);
                while ((deq.Count > 0) && (deq.First.Value <= (j - 3)))
                    deq.RemoveFirst();
                if ((j > 1) && (inv[i + 1][j - 1] > 0))
                    inv[i + 1][j - 1] += inv[i][deq.First.Value];
            }
            deq.Clear();
        }
        var count = 0;
        for (var i = 0; i < grid.Length; i += 1)
            for (var j = 0; j < grid[i].Length; j += 1)
                count += Math.Max(0, grid[i][j] - 1);        
        for (var i = 0; i < inv.Length; i += 1)
            for (var j = 0; j < inv[i].Length; j += 1)
                count += Math.Max(0, inv[i][j] - 1);
        return count;
    }
}
