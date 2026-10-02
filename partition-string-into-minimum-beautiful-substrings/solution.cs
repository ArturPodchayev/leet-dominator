public class Solution {
    private static HashSet<string> known = new() {
        "1", "101", "11001", "1111101", "1001110001", "110000110101", "11110100001001"}; 

    private static int Solve(string value) {
        if (known.Contains(value))
           return 1;

        int result = 1000;

        for (int i = value.Length - 1; i >= 1; --i) 
            if (known.Contains(value.Substring(0, i)))
                result = Math.Min(result, 1 + Solve(value.Substring(i)));
        
        return result;
    }

    public int MinimumBeautifulSubstrings(string s) {
        int result = Solve(s);

        return result >= 1000 ? -1 : result;
    }
}
