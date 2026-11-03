public class Solution {
    private const int MOD = 1000000007;
    
    public int Count(string num1, string num2, int min_sum, int max_sum) {
        string num1_minus_1 = SubtractOne(num1);
        int count_num2 = CountUpto(num2, min_sum, max_sum);
        int count_num1_minus_1 = CountUpto(num1_minus_1, min_sum, max_sum);
        int ans = (count_num2 - count_num1_minus_1 + MOD) % MOD; // Ensure non-negative
        return ans;
    }
    
    private int CountUpto(string n_str, int min, int max) {
        char[] digits = n_str.ToCharArray();
        int n = digits.Length;
        int[,,] memo = new int[n, 2, 208]; // pos, tight (0/1), sum_so_far
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < 2; j++) {
                for (int k = 0; k <= 207; k++) {
                    memo[i, j, k] = -1;
                }
            }
        }
        return Dp(0, true, 0, digits, min, max, memo);
    }
    
    private int Dp(int pos, bool tight, int sum_so_far, char[] digits, int min, int max, int[,,] memo) {
        if (pos == digits.Length) {
            return (sum_so_far >= min && sum_so_far <= max) ? 1 : 0;
        }
        int tightVal = tight ? 1 : 0;
        if (memo[pos, tightVal, sum_so_far] != -1) {
            return memo[pos, tightVal, sum_so_far];
        }
        int res = 0;
        int maxDigit = tight ? (digits[pos] - '0') : 9;
        for (int d = 0; d <= maxDigit; d++) {
            int newSum = sum_so_far + d;
            if (newSum > max) continue;
            bool newTight = tight && (d == maxDigit);
            res = (res + Dp(pos + 1, newTight, newSum, digits, min, max, memo)) % MOD;
        }
        memo[pos, tightVal, sum_so_far] = res;
        return res;
    }
    
    private string SubtractOne(string s) {
        char[] arr = s.ToCharArray();
        int i = arr.Length - 1;
        while (i >= 0) {
            if (arr[i] > '0') {
                arr[i]--;
                break;
            } else {
                arr[i] = '9';
                i--;
            }
        }
        string result = new string(arr).TrimStart('0');
        return result.Length == 0 ? "0" : result;
    }
}
