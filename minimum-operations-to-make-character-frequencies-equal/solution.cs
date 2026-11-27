public class Solution {
    private int[] count;
    private Dictionary<(int i, int deleted, int target), int> memo;
    
    public int MakeStringGood(string s) {
        count = new int[26];
        foreach (char c in s) {
            count[c - 'a']++;
        }
        
        memo = new Dictionary<(int i, int deleted, int target), int>();
        
        int maxCount = 0;
        foreach (int x in count) {
            maxCount = Math.Max(maxCount, x);
        }
        
        int minOperations = int.MaxValue;
        for (int target = 0; target <= maxCount; target++) {
            minOperations = Math.Min(minOperations, DP(0, 0, target));
        }
        
        return minOperations;
    }
    
    private int DP(int i, int deleted, int target) {
        if (i == 26) {
            return 0;
        }
        
        var key = (i, deleted, target);
        if (memo.ContainsKey(key)) {
            return memo[key];
        }
        
        int x = count[i];
        int ans;
        
        if (x <= target) {
            ans = DP(i + 1, x, target) + x;
            int increase = Math.Min(deleted, target - x);
            int cand = DP(i + 1, 0, target) + target - x - increase;
            ans = Math.Min(ans, cand);
        } else {
            ans = DP(i + 1, x - target, target) + x - target;
        }
        
        memo[key] = ans;
        return ans;
    }
}
