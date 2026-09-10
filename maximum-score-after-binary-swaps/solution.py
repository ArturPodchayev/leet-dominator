class Solution:
    def maximumScore(self, nums: List[int], s: str) -> int:
        heap = []
        total = 0
        for i in range(len(nums)):
            heapq.heappush(heap, -nums[i])
            if s[i] == '1':
                e = heapq.heappop(heap)
                total -= e
        return total
