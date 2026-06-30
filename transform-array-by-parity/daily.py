class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        last_seen = {'a': -1, 'b': -1, 'c': -1}
        count = 0
        
        for i, char in enumerate(s):
            last_seen[char] = i
            
            if last_seen['a'] != -1 and last_seen['b'] != -1 and last_seen['c'] != -1:
                min_idx = min(last_seen['a'], last_seen['b'], last_seen['c'])
                count += min_idx + 1
                
        return count
