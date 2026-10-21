public class Solution {
    public int MinOperations(string s) {
        if (s.Length == 1 || (s.Length == 2 && s[0] == s[1])) return 0;
        if (s.Length == 2 && s[0] > s[1])
            return -1;
        
        // Case1: string already sorted
        bool sorted = true;
        for (int i = 1; i < s.Length && sorted; i++)
            if (s[i] < s[i - 1]) 
                sorted = false;
        if (sorted)
            return 0;

        // Case2: [0...N-2]N-1
        sorted = true;
        char min = s[0], max = s[0];
        for (int i = 1; i < s.Length - 1; i++) {
            min = (char)Math.Min(min, s[i]);
            max = (char)Math.Max(max, s[i]);
            if (i > 0 && s[i] < s[i - 1])
                sorted = false;
        }
   
        int ops1 = sorted ? 0 : 1;
        if (s[^1] < min)
            ops1 += 2;
        else if (s[^1] >= max)
            ops1 += 0;  
        else ops1 += 1;

        // Case3: 0[1...N-1]
        min = max = s[1];
        sorted = true;
        for (int i = 1; i < s.Length; i++) {
            min = (char)Math.Min(s[i], min);
            max = (char)Math.Max(s[i], max);
            if (i > 1 && s[i] < s[i - 1])
                sorted = false;
        }
   
        int ops2 = sorted ? 0 : 1;
        if (s[0] <= min)
            ops2 += 0;
        else if (s[0] > max)
            ops2 += 2;
        else ops2 += 1;
   
        return Math.Min(ops1, ops2);
    }
}
