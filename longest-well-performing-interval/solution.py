class Solution:
    def longestWPI(self, hours: list[int]) -> int:
        score = 0
        seen = {}  
        max_len = 0

        for i, h in enumerate(hours):
            if h > 8:
                score += 1
            else:
                score -= 1

            if score > 0:
                max_len = i + 1 
            else:
                if score - 1 in seen:
                    max_len = max(max_len, i - seen[score - 1])
            if score not in seen:
                seen[score] = i

        return max_len
