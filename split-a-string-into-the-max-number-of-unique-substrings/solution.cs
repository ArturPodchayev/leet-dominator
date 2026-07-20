public class Solution {
    public int MaxUniqueSplit(string s) 
    {
       return Backtrack(0, s, []);
    }

    private int Backtrack(int idx, string s, HashSet<string> set)
    {
        if(idx == s.Length) return set.Count;

        int maxCount = 0;
        for(int i = idx+1; i <= s.Length; i++)
        {
            string subStr = s[idx..i];
            if(!set.Contains(subStr))
            {
                set.Add(subStr);

                maxCount = Math.Max(maxCount, Backtrack(i, s, set));
                set.Remove(subStr);
            }
        }
        return maxCount;
    }
}
