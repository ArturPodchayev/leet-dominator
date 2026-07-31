public class Solution {
    public string DecodeMessage(string key, string message) {
        Dictionary<char, char> table = new Dictionary<char, char>();
        int i = 97;

        foreach(char c in key) {
            if(c == ' ' || table.ContainsKey(c)) {
                continue;
            }
            table[c] = (char)(i++);
        }

        StringBuilder res = new StringBuilder();

        foreach(char c in message) {
            if(c != ' ')
               res.Append(table[c]);
            else
                res.Append(' ');
        }

        return res.ToString();
    }
}
