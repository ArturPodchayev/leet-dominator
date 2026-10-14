class Solution:
    def maxSumOfSquares(self, num: int, sum: int) -> str:
        ans = ""
        while sum > 0 and num > 0:
            if sum <= 9:
                ans += str(sum)
                sum -= sum
                num -= 1
                break
            ans += "9"
            num -= 1
            sum -= 9

        while num > 0:
            ans += "0"
            num -= 1
        
        if sum > 0:
            return ""
        return ans
