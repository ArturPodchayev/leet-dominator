public class Solution {
    
    public int MaxScore(IList<IList<int>> grid) {
        var max = int.MinValue; 
        for(var row = 0; row < grid.Count; row++)
        {
            for(var col = 0; col < grid[0].Count; col++)
            {
                max = Math.Max(max, GetMaxInSubArray(grid, row, col));
            }
        }
        return max;
    }

    private int GetMaxInSubArray(IList<IList<int>> grid, int targetRow, int targetCol)
    {
        var max = int.MinValue;
        var target = grid[targetRow][targetCol];

        var min = int.MaxValue;
        if(targetRow-1>=0) min = Math.Min(min, grid[targetRow-1][targetCol]);
        if(targetCol-1>=0) min = Math.Min(min, grid[targetRow][targetCol-1]);
        max = Math.Max(max, target - min);
        min = Math.Min(min, grid[targetRow][targetCol]);
        grid[targetRow][targetCol] = min;
        return max;
    }

    private void Print(IList<IList<int>> grid)
    {
        Console.Write("[");
        foreach(var row in grid)
        {
            Console.Write("[");
            foreach(var col in row)
            {
                Console.Write("{0},",col);
            }
            Console.Write("],");
        }
        Console.Write("]\n");
    }
}
