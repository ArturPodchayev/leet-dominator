public class Solution {
    public int MinimumPushes(string word) {
        int len = word.Length;
        return len + Math.Max(len-8,0) + Math.Max(len-16,0) + Math.Max(len-24,0);
    }
}
