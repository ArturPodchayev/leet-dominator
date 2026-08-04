class Solution
{
    public int[][] BuildMatrix(int k, int[][] rowConditions, int[][] colConditions)
    {
        var rows = BuildIndex(k, rowConditions);
        if (rows == null)
            return Array.Empty<int[]>();
            
        var cols = BuildIndex(k, colConditions);
        if (cols == null)
            return Array.Empty<int[]>();
        
        var result = new int[k][];
        for (var i = 0; i < k; ++i) result[i] = new int[k];
        for (var i = 0; i < k; ++i)
        {
            var r = rows[i] - 1;
            var c = cols[i] - 1;
            result[r][c] = i + 1;
        }

        return result;
    }

    private static int[]? BuildIndex(int k, int[][] conditions)
    {
        var matrix = new byte[k,k];

        foreach (var condition in conditions)
            matrix[condition[0] - 1, condition[1] - 1] = 1;

        var result = new int[k];
        for (var i = k - 1; i >= 0; --i)
        {
            var maxIsFound = false;
            for (var rowIndex = 0; !maxIsFound && rowIndex < k; ++rowIndex)
            {
                if (result[rowIndex] == 0)
                {
                    var isMax = true;
                    for (var columnIndex = 0; isMax && columnIndex < k; ++columnIndex) 
                        isMax = result[columnIndex] != 0 || matrix[rowIndex, columnIndex] == 0;
                    if (isMax)
                    {
                        result[rowIndex] = i + 1;
                        maxIsFound = true;
                    }
                }
            }

            if (!maxIsFound)
                return null;
        }

        return result;
    }
}
