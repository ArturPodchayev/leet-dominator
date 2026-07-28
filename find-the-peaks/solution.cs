public class Solution {
    public IList<int> FindPeaks(int[] mountain)
    {
        var result = new List<int>();

        for (var i = 1; i < mountain.Length - 1; i++)
        {
            if (mountain[i - 1] < mountain[i] &&
                (mountain[i + 1] < mountain[i]))
            {
                result.Add(i);
            }
        }

        return result;    
    }
}
