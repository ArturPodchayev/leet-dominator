public class Solution {
    public long MinOperations(int[] nums, int x, int k) {
        int n = nums.Length;
        PriorityQueue<int, int> left = new PriorityQueue<int, int>();
        PriorityQueue<int, int> right = new PriorityQueue<int, int>();
        Dictionary<int, int> delayed = new Dictionary<int, int>();
        int leftSize = 0, rightSize = 0;
        long sumL = 0, sumR = 0;
        long[] ops = new long[n];

        void Prune(PriorityQueue<int, int> heap) {
            while (heap.Count > 0 &&
                   delayed.TryGetValue(heap.Peek(), out int count) &&
                   count > 0) {
                int num = heap.Dequeue();
                delayed[num] = count - 1;
            }
        }

        void Balance() {
            if (leftSize > rightSize + 1) {
                int num = left.Dequeue();
                right.Enqueue(num, num);
                sumR += num;
                sumL -= num;
                ++rightSize;
                --leftSize;
                Prune(left);
            } else if (rightSize > leftSize) {
                int num = right.Dequeue();
                left.Enqueue(num, -num);
                sumL += num;
                sumR -= num;
                ++leftSize;
                --rightSize;
                Prune(right);
            }
        }

        for (int i = 0; i < n; ++i) {
            int num = nums[i];
            if (left.Count == 0 || num <= left.Peek()) {
                left.Enqueue(num, -num);
                ++leftSize;
                sumL += num;
            } else {
                right.Enqueue(num, num);
                ++rightSize;
                sumR += num;
            }
            Balance();
            if (i >= x) {
                num = nums[i - x];
                delayed.TryGetValue(num, out int count);
                delayed[num] = count + 1;
                if (num <= left.Peek()) {
                    --leftSize;
                    sumL -= num;
                    if (num == left.Peek()) {
                        Prune(left);
                    }
                } else {
                    --rightSize;
                    sumR -= num;
                    if (num == right.Peek()) {
                        Prune(right);
                    }
                }
                Balance();
            }
            if (i >= x - 1) {
                long mid = left.Peek();
                ops[i] = sumR - sumL + mid * (leftSize - rightSize);
            }
        }

        long[,] dp = new long[n, k + 1];
        for (int i = 0; i < n; ++i) {
            for (int j = 1; j <= k; ++j) {
                dp[i, j] = long.MaxValue;
            }
        }
        for (int j = 1; j <= k; ++j) {
            if (j == 1) {
                dp[x - 1, j] = ops[x - 1];
            } else {
                dp[j * x - 1, j] = dp[(j - 1) * x - 1, j - 1] + ops[j * x - 1];
            }
        }
        for (int j = 1; j <= k; ++j) {
            for (int i = j * x; i < n; ++i) {
                dp[i, j] = Math.Min(dp[i - x, j - 1] + ops[i], dp[i - 1, j]);
            }
        }
        return dp[n - 1, k];
    }
}
