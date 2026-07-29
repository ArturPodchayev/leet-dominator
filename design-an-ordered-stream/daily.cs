public class Solution {
    public string SmallestPalindrome(string s, long k) {
        int partition = s.Length / 2;
        int[] bucket = new int[26];

        for (int i = 0; i < partition; i++) {
            bucket[s[i] - 97] += 1;
        }

        long C(long n, long m) {
            long res = 1;
            m = Math.Min(m, n - m);

            for (long i = 1; i <= m; i++) {
                res = res * (n - i + 1) / i;
                if (res > k) {
                    return k + 1;
                }
            }
            return res;
        }

        long Permutations(int rem) {
            long ways = 1;
            for (int i = 0; i < 26; i++) {
                if (bucket[i] == 0) {
                    continue;
                }

                ways *= C(rem, bucket[i]);
                if (ways > k) {
                    break;
                }
                rem -= bucket[i];
            }
            return ways;
        }

        var left = new StringBuilder();
        long startIndex = 1;

        for (int pos = 0; pos < partition; pos++) {
            for (int i = 0; i < 26; i++) {
                if (bucket[i] == 0) {
                    continue;
                }

                bucket[i] -= 1;

                long ways = Permutations(partition - pos - 1);
                if (startIndex + ways > k) {
                    left.Append((char)(i + 97));
                    break;
                }

                bucket[i] += 1;
                startIndex += ways;
            }
        }

        if (left.Length < partition) {
            return "";
        }

        if (s.Length % 2 != 0) {
            left.Append(s[partition]);
        }

        for (int i = partition - 1; i >= 0; i--) {
            left.Append(left[i]);
        }

        return left.ToString();
    }
}
