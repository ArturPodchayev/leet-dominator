public class Solution {
    public string SmallestPalindrome(string s) {
        int[] arr = new int[26];

        foreach (char c in s) 
        {
            arr[c - (int)('a')] += 1;
        }

        char[] res = new char[s.Length];
        int startIndex = 0;

        for (int i = 0; i < arr.Length; i++) 
        {
            char c = (char)(i + (int)('a'));
            if ((arr[i] & 1) == 1) 
            {
                res[(s.Length >> 1)] = c;
            }

            int len = arr[i] >> 1;
            for (int j = 0; j < len; j++)
            {
                res[startIndex + j] = c;
                res[res.Length - (startIndex + j + 1)] = c;
            }
            startIndex += len;
        }

        return new String(res);
    }
}
