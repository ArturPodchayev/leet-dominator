class Solution:
    def minimumPushes(self, word: str) -> int:
        freq = [0] * 26

        for ch in word:
            freq[ord(ch) - ord('a')] += 1

        freq.sort(reverse=True)

        ans = 0
        for i in range(26):
            if freq[i] == 0:
                break
            ans += freq[i] * (i // 8 + 1)

        return ans
