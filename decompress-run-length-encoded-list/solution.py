class Solution:
    def decompressRLElist(self, nums: List[int]) -> List[int]:
        generated = []  # just a starter array
        for i in range(0, len(nums), 2):  # skip by 2 because...
            freq = nums[i]
            val = nums[i+1]  # that's why
            generated += [val] * freq  # shortcut to get freq vals
        return generated
