class Solution:
    def totalNumbers(self, digits: List[int]) -> int:
        
        # 3 digits
        # x % 2 == 0 (even)
        # cant start with 0

        n = len(digits)
        result = set()

        for i in range(n):
            for j in range(n):
                for k in range(n):

                    if (i in (j, k) or  # distinct indexes
                        j in (i, k) or  # distinct indexes
                        digits[i] == 0 or  # cant start with 0
                        digits[k] % 2 != 0 ): # Last digit odd -> SKIP
                        
                            continue

                    num = (digits[i] * 100) + (digits[j] * 10) + digits[k]

                    result.add(num)
        
        return len(result)
