public class Solution {
    public int NumOfStrings(string[] patterns, string word) {
        HashSet<string> combinations = new();
        int length = word.Length;
        string combination;
        for (int i = 0; i < length; i++)
        {
            for (int j = i; j < length; j++)
            {
                combination = word.Substring(i, j - i + 1);
                combinations.Add(combination);
            }
        }

        int count = 0;
        foreach (string pattern in patterns)
        {
            if (combinations.Contains(pattern))
            {
                count++;
            }
        }

        return count;
    }
}
