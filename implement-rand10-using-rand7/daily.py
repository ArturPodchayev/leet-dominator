class Solution:
    def totalWaviness(self, num1: int, num2: int) -> int:

        waves = 0

        for num in range(num1, num2 + 1):
            digits = str(num)

            for a, b, c in zip(digits, digits[1:], digits[2:]):
                waves+= a < b > c  or  a > b < c
            
        return waves
