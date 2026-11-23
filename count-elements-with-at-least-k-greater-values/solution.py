class Solution:
    def countElements(self, nums: List[int], k: int) -> int:

        freq = Counter(nums)
        unique_vals = sorted(freq.keys(), reverse=True)

        greater = 0
        ans = 0

        for v in unique_vals:
            if greater >= k:
                ans += freq[v]
            greater += freq[v]

        return ans
