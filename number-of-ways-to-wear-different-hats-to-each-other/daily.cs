public class Solution {
    public int TotalNumbers(int[] digits) {
        HashSet<int> res = new();
        int len = digits.Length, cnt = 0;
        if(len <3)
            return cnt;

        Array.Sort(digits);
        for(int h = 0; h < len; h++)
        {
            if(digits[h] == 0)
                continue;

            for(int t = 0; t < len; t++)
            {
                if(t == h)
                    continue;

                for(int d = 0; d < len; d++)
                {
                    if(d == t || d == h || digits[t]%2 == 1)
                        continue;

                    res.Add(digits[h]*100+digits[t]*10+digits[d]);
                    cnt++;
                }
            }
        }
        
        return res.Count;
    }
}
