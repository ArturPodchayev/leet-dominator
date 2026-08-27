public class Solution {
    public string LexGreaterPermutation(string s, string target)
    {
        var map = new int[26];
        foreach (var chr in s)
        {
            map[chr - 'a']++;
        }
        var perm = new char[s.Length];
        return GetNextPerm(perm, 0, target.ToCharArray(), map, false);
    }
    
    private string GetNextPerm(char[] perm, int permPosition, char[] target, int[] map, bool areWeHigh)
    {
        if (permPosition >= perm.Length)
        {
            return new string(perm) == new string(target) ? "" : new string(perm);
        }
        int minPermPosition = areWeHigh ? 0 : target[permPosition] - 'a'; // You need to force yourself to find higher value
        for (int i = minPermPosition; i < map.Length; i++)
        {
            if (map[i] > 0)
            {
                perm[permPosition] = (char)('a' + i);
                map[i]--;
                var finalPerm = GetNextPerm(perm, permPosition + 1, target, map, areWeHigh || perm[permPosition] > target[permPosition]);
                if (!string.IsNullOrEmpty(finalPerm))
                {
                    return finalPerm; // We were able to build the closest higher perm
                }
                //back tracking
                perm[permPosition] = '\0';
                map[i]++;
            }
        }
        return "";
    }
}
