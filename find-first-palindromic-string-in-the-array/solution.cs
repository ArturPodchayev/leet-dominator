public class Solution {
    public string FirstPalindrome(string[] words) {
        return words.FirstOrDefault(IsPalindromic, "");
    }

    public bool IsPalindromic(string str) 
    {
        (var left, var right) = (0, str.Length - 1);
        while (left < right) 
        {
            if (str[left++] != str[right--]) 
            {
                return false;
            }
        }
        return true;
    }
}
