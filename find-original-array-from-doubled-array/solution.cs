public class Solution {
    public int[] FindOriginalArray(int[] changed) {
        int len = changed.Length;
        int[] empty = new int[0];
        if(len%2 == 1)
            return empty;

        int[] freq = new int[100001];
        foreach(int n in changed)
        {
            freq[n]++;
        }
        if(freq[0] %2 == 1)
            return empty;

        List<int> res = new();
        for(int f = 0; f < freq[0]/2; f++)
        {
            res.Add(0);
        }

        for(int i = 1; i <100001; i++)
        {
            int cur = freq[i];
            if(cur > 0)
            {
                int twice = 2*i;
                if(twice > 100000 || freq[twice] < cur)
                    return empty;

                freq[twice] -= cur;
                res.AddRange(Enumerable.Repeat(i, cur).ToList());
            }
        }

        return res.ToArray();
    }
}
