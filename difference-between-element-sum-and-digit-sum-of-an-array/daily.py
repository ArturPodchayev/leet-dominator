class Solution:
    def uniformArray(self, nums1: list[int]) -> bool:
        min_odd = float('inf')
        min_even = float('inf')

        for num in nums1:
            if num % 2 == 1:
                min_odd = min(min_odd, num)
            else:
                min_even = min(min_even, num)

        if min_odd == float('inf') or min_even == float('inf'):
            return True
        
        return min_odd < min_even
