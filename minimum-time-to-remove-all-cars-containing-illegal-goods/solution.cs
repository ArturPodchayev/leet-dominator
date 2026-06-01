public class Solution {
    public int MinimumTime(string s) {
        int n = s.Length;
        int[] left = new int[n];
        int[] right = new int[n];
        
        // Compute the left prefix costs
        for (int i = 0; i < n; i++) {
            if (i == 0) {
                left[i] = s[i] == '1' ? 2 : 0;
            } else {
                left[i] = left[i - 1] + (s[i] == '1' ? 2 : 0);
            }
            left[i] = Math.Min(left[i], i + 1);
        }
        
        // Compute the right suffix costs
        for (int i = n - 1; i >= 0; i--) {
            if (i == n - 1) {
                right[i] = s[i] == '1' ? 2 : 0;
            } else {
                right[i] = right[i + 1] + (s[i] == '1' ? 2 : 0);
            }
            right[i] = Math.Min(right[i], n - i);
        }
        
        // Calculate the minimum combined cost
        int minTime = Math.Min(left[n - 1], right[0]);
        for (int i = 0; i < n - 1; i++) {
            minTime = Math.Min(minTime, left[i] + right[i + 1]);
        }
        
        return minTime;
    }
}
