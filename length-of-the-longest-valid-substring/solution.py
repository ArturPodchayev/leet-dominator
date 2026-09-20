class Solution:
    def longestValidSubstring(self, word: str, forbidden: List[str]) -> int:
        trie = {}
        for w in forbidden:
            v = trie 
            for c in w:
                if c not in v:
                    v[c] = {}
                v = v[c]
            v['#'] = {}
        n = len(word)
        last = n - 1
        res = 0
        for i in range(n-1, -1, -1):
            v = trie 
            for j in range(i, min(i+10, last + 1)):
                if word[j] not in v: break 
                v = v[word[j]]
                if '#' in v:
                    last = j-1 
                    break 
            res = max(res, last - i + 1)
        return res
