class Solution:
    def maximumTotalCost(self, nums: List[int]) -> int:
        N = len(nums)

        @cache
        def dfs(i, mul):
            if i == N:
                return 0

            cont = mul * nums[i] + dfs(i+1, -mul)
            stop = mul * nums[i] + dfs(i+1, 1)

            return max(cont, stop)

            # can be simplified into the following:
            # return mul * nums[i] + max(dfs(i+1, -mul), dfs(i+1, 1))

        return dfs(0, 1)
