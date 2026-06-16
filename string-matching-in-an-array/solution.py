class Solution:
    def stringMatching(self, words: List[str]) -> List[str]:
        a = " ".join(words)
        return [w for w in words if a.count(w)>1]
