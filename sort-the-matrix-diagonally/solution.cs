public class Solution {
    public int[][] DiagonalSort(int[][] arr) {
        int row = arr.Length;
        int col = arr[0].Length;
        Dictionary<int , List<int>> dict = new Dictionary<int , List<int>>();
 
        for(int i = 0; i < row; i++)
        {
             for(int j = 0; j < col; j++)
                 {
                    if (!dict.ContainsKey(i - j))
                        {
                            dict.Add((i - j), new List<int>());
                        }               
                        dict[i - j].Add(arr[i][j]);
                    }
        }

        foreach(var i in dict)
            {
                i.Value.Sort();
            }

        for (int i = 0; i < row; i++) // Iterate from top to bottom
        {
            for (int j = 0; j < col; j++) // Iterate left to right
            {
                int key = i - j;

                // Place sorted elements back into the array
                arr[i][j] = dict[key].First();

                // Remove placed element from the dictionary list
                dict[key].RemoveAt(0);
            }

            }
        
        return arr;
    }
}
