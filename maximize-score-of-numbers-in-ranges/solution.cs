public class Solution 
{
    public int MaxPossibleScore(int[] start, int d) 
    {
        Array.Sort(start);
        int l = 0, r = start[start.Length -1] + d;
        while(l < r) 
        {
            int mid = l + (r - l + 1) / 2;
            if (CheckMaxDiff(start, d, mid)) 
            {
                l = mid;
            }
            else 
            {
                r = mid - 1;
            }
        }
        return l;
    }
    private bool CheckMaxDiff(int[] vals, int d, int diff) 
    {
        long last = vals[0];    
        for (int i = 1; i < vals.Length; i++) 
        {
            if (last + (long)diff > vals[i] + d)
                return false;
            if (vals[i] > last + (long)diff)
                last = vals[i];
            else
                last = last + diff;
        }
        return true;
    }
}
