class Solution:
    def removeOuterParentheses(self, s: str) -> str:
        d = 0
        return ''.join(c for c in s if min(d, d := d + ' ('.find(c)))
