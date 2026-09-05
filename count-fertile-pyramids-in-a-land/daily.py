class Solution:
    def firstStableIndex(self, nums: list[int], k: int) -> int:
        maxi = [*accumulate(nums, max)]
        mini = [*accumulate(nums[::-1], min)][::-1]
        return next((i for i in range(len(nums)) if maxi[i] - mini[i] <= k), -1)
