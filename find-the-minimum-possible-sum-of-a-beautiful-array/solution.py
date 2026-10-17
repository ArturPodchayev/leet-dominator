class Solution:
    def minimumPossibleSum(self, n: int, target: int) -> int:
        MOD = 1_000_000_007
        mid = target // 2
        
        # Case 1: All required elements fall within the safe lower half
        if n <= mid:
            return (n * (n + 1) // 2) % MOD
            
        # Case 2: We need elements beyond the safe lower half
        sum_first_half = mid * (mid + 1) // 2
        
        k = n - mid # Remaining elements needed
        sum_second_half = k * (2 * target + k - 1) // 2
        
        return (sum_first_half + sum_second_half) % MOD
