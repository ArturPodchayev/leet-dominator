public class Solution {
    public string MergeCharacters(string s, int k) {
        int[] preIds = Enumerable.Repeat(-1, 26).ToArray();
        string res = "";
        foreach(char c in s)
        {
            int preId = preIds[c-'a'];
            if(preId == -1 || res.Length-preId > k)
            {
                res += c;
                preIds[c-'a'] = res.Length-1;
            }
        }

        return res;
    }
}
