public class Solution
{
  public int MaxTrailingZeros(int[][] grid)
  {
    var m = grid.Length;
    var n = grid[0].Length;
    var z = new Zeros[m, n];
    for (var i = 0; i < m; i++)
    for (var j = 0; j < n; j++)
      z[i, j] = new Zeros(grid[i][j]);
    var rowSum = new Zeros[m, n];
    var colSum = new Zeros[m, n];
    for (var i = 0; i < m; i++)
    {
      rowSum[i, 0] = z[i, 0];
      for (var j = 1; j < n; j++)
        rowSum[i, j] = rowSum[i, j - 1] + z[i, j];
    }
    for (var j = 0; j < n; j++)
    {
      colSum[0, j] = z[0, j];
      for (var i = 1; i < m; i++)
        colSum[i, j] = colSum[i - 1, j] + z[i, j];
    }
    var result = 0;
    for (var i = 0; i < m; i++)
    for (var j = 0; j < n; j++)
    {
      result = Max(result,
        rowSum[i, j] + colSum[i, j] - z[i, j],
        rowSum[i, n - 1] - rowSum[i, j] + colSum[i, j],
        rowSum[i, j] + colSum[m - 1, j] - colSum[i, j],
        rowSum[i, n - 1] - rowSum[i, j] + colSum[m - 1, j] - colSum[i, j] + z[i, j]);
    }
    return result;
  }

  private static int Max(params int[] values) => values.Max();

  private struct Zeros
  {
    private readonly int _twos;
    private readonly int _fives;

    private static int NumCount(int n, int x)
    {
      var count = 0;
      while (n % x == 0)
      {
        count++;
        n /= x;
      }
      return count;
    }

    public static Zeros operator +(Zeros x, Zeros y) => new(x._twos + y._twos, x._fives + y._fives);
    public static Zeros operator -(Zeros x, Zeros y) => new(x._twos - y._twos, x._fives - y._fives);

    public static implicit operator int(Zeros x) => Math.Min(x._twos, x._fives);

    private Zeros(int twos, int fives)
    {
      _twos = twos;
      _fives = fives;
    }

    public Zeros(int value)
      : this(NumCount(value, 2), NumCount(value, 5))
    {
    }
  }
}
