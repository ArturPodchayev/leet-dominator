public class Solution {
    public string SortSentence(string s) {
        Dictionary<int, string> dict = new Dictionary<int, string>();
        string word = "";
        int count = 0;
        for (int i = 0; i < s.Length; i++)
        {
            if (Char.IsLetter(s[i])) word += s[i];

            else if (Char.IsNumber(s[i]))
            {
                dict.Add(s[i] - '0', word);
                word = "";
                count++;
            }
        }

        string result = "";
        for (int i = 1; i <= count; i++)
        {
            if (i != count) result = result + dict[i] + " ";
            else result += dict[i];
        }
        return result;
    }
}
