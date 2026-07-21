public class SubrectangleQueries {
    private int[][] sample;
    public SubrectangleQueries(int[][] rectangle) {
        int m = rectangle.Length, n = rectangle[0].Length;
        sample = new int[m][];
        for(int i = 0 ; i < m; i++)
        {
            sample[i] = rectangle[i];
        }
    }
    
    public void UpdateSubrectangle(int row1, int col1, int row2, int col2, int newValue) {
        for(int i = row1; i <= row2; i++)
        {
            for(int j = col1; j <= col2; j++)
            {
                sample[i][j] = newValue;
            }
        }
    }
    
    public int GetValue(int row, int col) {
        return sample[row][col];
    }
}
