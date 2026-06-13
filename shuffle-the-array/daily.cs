public class Solution {
    public string MapWordWeights(string[] words, int[] weights) {
        var arr = new char[words.Length];
        for (int i = 0; i < words.Length; i++)
        {
            arr[i] = GetChar(words[i], weights);
        }
        var rs = new string(arr);
        return rs;
    }
    private char GetChar(string word, int[] weights)
    {
        var sum = 0;
        for (int i = 0; i < word.Length; i++)
        {
            sum += weights[(int)(word[i] - 'a')];
        }
        sum %= 26;
        var rs = (char)((int)'z' - sum);
        return rs;
    }
}
