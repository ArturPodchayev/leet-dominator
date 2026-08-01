public class Solution {
    private static char[] TrailingVowels = ['a', 'e', 'i', 'o', 'u'];

    public string TrimTrailingVowels(string s) 
    {
        for (var i = s.Length - 1; i >= 0; i--)
        {
            if (!TrailingVowels.Contains(s[i]))
                return s[..(i + 1)];
        }

        return string.Empty;
    }
}
