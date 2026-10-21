public class Solution {
    private int[,] freq1737 = new int[2, 26];
    private int[] maxF = new int[2];
    private void BuildFreq(string s, int idx)
    {
        foreach (char c in s)
        {
            int curId = c - 'a';
            freq1737[idx, curId]++;
            maxF[idx] = Math.Max(maxF[idx], freq1737[idx, curId]);
        }
    }

    public int MinCharacters(string a, string b) {
        BuildFreq(a, 0);
        BuildFreq(b, 1);

        int lenA = a.Length, lenB = b.Length, res = int.MaxValue, sumA = 0, sumB = 0;
        for(int i = 0; i < 25; i++)
        {
            sumA += freq1737[0,i];
            sumB += freq1737[1,i];
            res = Math.Min(res, lenA-sumA+sumB);  // a -> smaller than i, b->larger than i
            res = Math.Min(res, lenB-sumB+sumA);  // b-> smaller than i, a -> larger than i;
        }

        res = Math.Min(res, lenA-maxF[0] + lenB-maxF[1]);
        
        return res;
    }
}
