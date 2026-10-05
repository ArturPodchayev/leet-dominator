public class Solution {
    public string[] ShortestSubstrings(string[] arr) {
        var rs = new string[arr.Length];
        for (int i = 0; i < arr.Length; i++)
        {
            rs[i] = ShortestSubstrings(i, arr);
        }
        return rs;
    }
    private string ShortestSubstrings(int index, string[] arr)
    {
        for (int i = 1; i <= arr[index].Length; i++)
        {
            var candidates = new List<string>();
            for (int j = 0; j < arr[index].Length - (i - 1); j++)
            {
                var substring = arr[index].Substring(j, i);
                if (!IsSubstring(substring, index, arr)) candidates.Add(substring);
            }
            if (candidates.Count > 0)
            {
                candidates.Sort();
                return candidates[0];
            }
        }
        return "";
    }
    private bool IsSubstring(string substring, int index, string[] arr)
    {
        for (int i = 0; i < arr.Length; i++)
        {
            if (i != index && arr[i].IndexOf(substring) != -1) return true;
        }
        return false;
    }
}
