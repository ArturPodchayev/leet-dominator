class Solution:
    def maximumLength(self, s: str) -> int:
        freq = defaultdict(list)
        N = len(s)
        count = 1
        freq[s[0]].append(1)  # first character count
        res = -1 
        for i in range(1, N):
            if s[i-1] == s[i]:
                count += 1
                freq[s[i]].append(count)  # consecutive count
            else:
                count = 1
                freq[s[i]].append(1)  # reset count for new character
        for c in freq:
            if len(freq[c]) >= 3:
                # take third largest block
                res = max(res, min(sorted(freq[c])[-3:]))
        return res
