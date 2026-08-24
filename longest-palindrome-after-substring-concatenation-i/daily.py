class Solution:
    def stoneGameVIII(self, stones: List[int]) -> int:
        left_sum = sum(stones)
        score_diff = left_sum
        for i in range(len(stones) - 1, 1, -1):
            left_sum -= stones[i]
            if left_sum - score_diff > score_diff:
                score_diff = left_sum - score_diff
        return score_diff
