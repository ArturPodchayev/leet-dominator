public class Solution {
    public int MaximumLength(int[] nums) {
        Dictionary<long, int> freq = new Dictionary<long, int>();

        foreach (int num in nums) {
            if (!freq.ContainsKey(num))
                freq[num] = 0;

            freq[num]++;
        }

        int ans = 1;

        foreach (long num in freq.Keys) {
            
            if (num == 1) {
                int count = freq[num];
                if (count % 2 == 0) count--;
                ans = Math.Max(ans, count);
                continue;
            }

            long x = num;
            int length = 0;

            while (freq.ContainsKey(x) && freq[x] >= 2) {
                length += 2;
                x = x * x;

                if (x > 1000000000L) break;
            }

            if (freq.ContainsKey(x) && freq[x] >= 1) {
                length += 1;
            } else {
                length -= 1;
            }

            ans = Math.Max(ans, length);
        }

        return ans;
    }
}
