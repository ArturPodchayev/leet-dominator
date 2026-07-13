class Solution:
    def sequentialDigits(self, low: int, high: int) -> List[int]:
        digits = "123456789"
        ans = []

        minLen = len(str(low))
        maxLen = len(str(high))

        for length in range(minLen, maxLen + 1):
            for start in range(10 - length):
                num = int(digits[start:start + length])
                if low <= num <= high:
                    ans.append(num)

        return ans
