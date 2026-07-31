public class Solution 
{
    public int MinimumPushes(string word)
    {
        int[] letters = new int[26];

        for (int i = 0; i < word.Length; i++)
        {
            letters[word[i] - 'a']++;
        }

        Array.Sort(letters, (a, b) => b.CompareTo(a));

        int result = 0;
        
        for (int i = 0; i < 26 && letters[i] > 0; i++)
        {
            result += ((i / 8) + 1) * letters[i];
        }

        return result;
    }
}
