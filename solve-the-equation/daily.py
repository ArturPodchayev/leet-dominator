class Solution:
    def countCommas(self, n: int) -> int:
        return n - 999 if n >= 1000 else 0
