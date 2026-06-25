class Solution:
    def countMajoritySubarrays(self, nums: List[int], target: int) -> int:
        n = len(nums)
        res = 0
        for i in range(n):
            freq = 0
            for j in range(i, n):
                if nums[j] == target:
                    freq += 1
                if (j - i + 1) / 2 < freq: res += 1
        return res
