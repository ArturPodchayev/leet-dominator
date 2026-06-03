class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        runningSum = []
        sum = 0
        for int in nums:
            sum += int
            runningSum.append(sum)
        return runningSum
