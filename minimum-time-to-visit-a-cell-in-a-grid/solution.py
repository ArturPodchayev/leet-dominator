class Solution:
    def minimumTime(self, grid: List[List[int]]) -> int:
        if grid[0][1] > 1 and grid[1][0] > 1:
            return -1

        m, n = len(grid), len(grid[0])
        heap = [(0, 0, 0)]
        min_time = [[inf] * n for _ in range(m)]
        min_time[0][0] = 0
        
        while heap:
            curr_time, r, c = heappop(heap)
            for dr, dc in [[-1, 0], [1, 0], [0, -1], [0, 1]]:
                if 0 <= r + dr < m and 0 <= c + dc < n:
                    if curr_time + 1 >= min_time[r + dr][c + dc]:
                        continue
                    else:
                        if (curr_time + 1 - grid[r + dr][c + dc]) % 2 == 0:
                            min_time[r + dr][c + dc] = max(curr_time + 1, grid[r + dr][c + dc])
                        else:
                            min_time[r + dr][c + dc] = max(curr_time + 1, grid[r + dr][c + dc] + 1)
                        heappush(heap, (min_time[r + dr][c + dc], r + dr, c + dc))
        return min_time[-1][-1]
