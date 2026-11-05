public class Solution {

    private static int Best(string value, char letter) {
        List<int> sizes = new List<int>();

        int count = 0;

        for (int i = 0; i < value.Length; ++i) 
            if (value[i] == letter)
                count += 1;
            else if (count > 0) {
                sizes.Add(count);

                count = 0;
            }
        
        if (count > 0) 
            sizes.Add(count);

        if (sizes.Count <= 0)
            return -1;

        sizes.Sort((a, b) => b.CompareTo(a));
        
        int result = sizes[0] - 2;   

        if (sizes.Count > 1) 
            result = Math.Max(result, Math.Min(sizes[0] - 1, sizes[1]));
        
        if (sizes.Count > 2) 
            result = Math.Max(result, Math.Min(Math.Min(sizes[0], sizes[1]), sizes[2]));

        return result <= 0 ? -1 : result;
    }

    public int MaximumLength(string s) {
        return Enumerable
            .Range('a', 'z' - 'a' + 1)
            .Max(c => Best(s, (char)c));
    }
}
