class Solution:
    def maximumLengthSubstring(self, s: str) -> int:
        freq = {}
        left = max_len = 0
        
        for right, char in enumerate(s):
            freq[char] = freq.get(char, 0) + 1
            while freq[char] > 2:
                freq[s[left]] -= 1
                left += 1
            max_len = max(max_len, right - left + 1)
            
        return max_len
