public class Solution {
    public int LongestWPI(int[] hours) {
        int n = hours.Length;
        int[] prefix = new int[n + 1];
        
        // Step 1: build prefix sum
        for (int i = 0; i < n; i++) {
            prefix[i + 1] = prefix[i] + (hours[i] > 8 ? 1 : -1);
        }

        // Step 2: build monotonic decreasing stack
        Stack<int> stack = new Stack<int>();
       for (int i = 0; i <= n; i++) {
        if (stack.Count == 0 || prefix[stack.Peek()] > prefix[i]) {
                stack.Push(i);
            }
        }

        // Step 3: traverse from right to left
        int res = 0;
        for (int j = n; j >= 0; j--) {
        while (stack.Count > 0 && prefix[j] > prefix[stack.Peek()]){
                res = Math.Max(res, j - stack.Pop());
            }
        }

        return res;
    }
}
