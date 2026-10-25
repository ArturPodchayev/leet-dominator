public class Solution {
    public int[][] ColorGrid(int n, int m, int[][] sources) {
        var borders = CreateBorders(sources);
        var countColored = sources.Length;
        var rs = InitResult(n, m, sources);
        while (countColored < n * m)
        {
            for (int i = 0; i < borders.Length; i++)
            {
                var newBorder = new List<(int row, int col)>();
                var color = borders[i].color;
                for (int j = 0; j < borders[i].border.Count; j++)
                {
                    var row = borders[i].border[j].row;
                    var col = borders[i].border[j].col;
                    if (CouldBeColored(row - 1, col, rs))
                    {
                        rs[row - 1][col] = color;
                        countColored++;
                        newBorder.Add((row - 1, col));
                    }
                    if (CouldBeColored(row + 1, col, rs))
                    {
                        rs[row + 1][col] = color;
                        countColored++;
                        newBorder.Add((row + 1, col));
                    }
                    if (CouldBeColored(row, col - 1, rs))
                    {
                        rs[row][col - 1] = color;
                        countColored++;
                        newBorder.Add((row, col - 1));
                    }
                    if (CouldBeColored(row, col + 1, rs))
                    {
                        rs[row][col + 1] = color;
                        countColored++;
                        newBorder.Add((row, col + 1));
                    }
                }
                borders[i].border = newBorder;
            }
        }
        return rs;
    }
    private bool CouldBeColored(int row, int col, int[][] rs)
    {
        if (row < 0 || rs.Length <= row || col < 0 || rs[row].Length <= col) return false;
        return rs[row][col] == 0;
    }
    private int[][] InitResult(int n, int m, int[][] sources)
    {
        var rs = new int[n][];
        for (int i = 0; i < rs.Length; i++) rs[i] = new int[m];
        for (int i = 0; i < sources.Length; i++)
        {
            rs[sources[i][0]][sources[i][1]] = sources[i][2];
        }
        return rs;
    }
    private (int color, List<(int row, int col)> border)[] CreateBorders(int[][] sources)
    {
        var dic = new Dictionary<int, List<(int row, int col)>>();
        for (int i = 0; i < sources.Length; i++)
        {
            if (!dic.ContainsKey(sources[i][2]))
            {
                dic.Add(sources[i][2], new List<(int row, int col)> { (sources[i][0], sources[i][1]) });
            }
            else
            {
                dic[sources[i][2]].Add((sources[i][0], sources[i][1]));
            }
        }
        var rs = new (int color, List<(int row, int col)> border)[dic.Count];
        var index = 0;
        foreach (var item in dic)
        {
            rs[index] = (item.Key, item.Value);
            index++;
        }
        rs = rs.OrderByDescending(p => p.color).ToArray();
        return rs;
    }
}
