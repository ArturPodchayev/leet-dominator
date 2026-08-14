public class Solution
{
    public int MaximumLengthSubstring(string s)
    {
        int[] frequency = new int[26];
        int left = 0;
        int maxLength = 0;

        for (int right = 0; right < s.Length; right++)
        {
            int index = s[right] - 'a';
            frequency[index]++;

            while (frequency[index] > 2)
            {
                frequency[s[left] - 'a']--;
                left++;
            }

            maxLength = Math.Max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}
