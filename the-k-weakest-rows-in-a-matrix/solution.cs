public class Solution {
    public int[] KWeakestRows(int[][] mat, int k) {
        var sorted = mat
        .Select((row,i) => new {
            Row = row,
            Index = i
        }).OrderBy(o => o.Row.Count(n => n == 1)).ToArray();

        return sorted.Take(k).Select(o => o.Index).ToArray();
    }
}
