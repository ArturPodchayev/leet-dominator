public class Solution {
    public int MinGroups(int[][] intervals) {
        var ordered = intervals.OrderBy(x=>x[0]).ToArray();

        SortedDictionary<int, int> freq = new();
        foreach(int[] id in ordered)
        {
            int start = id[0], end = id[1];
            if(freq.Count > 0)
            {
                int first = freq.Keys.First();
                if(first < start)
                {
                    if(--freq[first] == 0)
                        freq.Remove(first);
                }
            }
            freq.TryAdd(end, 0);
            freq[end]++;
        }

        int res = 0;
        foreach(var kvp in freq)
        {
            res += kvp.Value;
        }

        return res;
    }
}
