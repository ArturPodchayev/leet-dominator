class Solution:
    def diagonalSort(self, grid: List[List[int]]) -> List[List[int]]:
        n = len(grid)
        m=len(grid[0])
        diagonals = defaultdict(list)
        for i in range(n):
            for j in range(m):
                diagonals[i - j].append(grid[i][j])
        for key in diagonals:   
            diagonals[key].sort()
        for i in range(n):
            for j in range(m):
                grid[i][j] = diagonals[i - j].pop(0)

        return grid
        
