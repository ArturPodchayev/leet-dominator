class Solution:
    def strangePrinter(self, s: str) -> int:
        memo = {}
        
        def min_turns(start, end):
            if start > end:
                return 0
            if (start, end) in memo:
                return memo[(start, end)]
            result = min_turns(start, end - 1) + 1
            for middle in range(start, end):
                if s[end] == s[middle]:
                    result = min(result, min_turns(start, middle) + min_turns(middle + 1, end - 1))
            memo[(start, end)] = result
            return result
        
        return min_turns(0, len(s) - 1)
