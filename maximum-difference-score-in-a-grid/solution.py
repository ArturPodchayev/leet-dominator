class Solution:
    def maxScore(self, grid: List[List[int]]) -> int:
        
        rows = len(grid)
        cols = len(grid[0])
        largestMax = [[0 for _ in range(cols)] for _ in range(rows)]

        @cache
        def findMax(row, col):
            if row >= rows or col >= cols:
                return -int(1E9)
            largestMax[row][col] = max(findMax(row + 1, col), findMax(row, col + 1))
            return max(grid[row][col], largestMax[row][col])

        findMax(0, 0)
        res = -int(1E9)
        for row in range(rows):
            for col in range(cols):
                res = max(res, largestMax[row][col] - grid[row][col])
        return res
