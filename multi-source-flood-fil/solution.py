class Solution:
    def colorGrid(self, rows: int, cols: int, sources: list[list[int]]) -> list[list[int]]:
        grid = [[0] * cols for _ in range(rows)]
        for r, c, col in sources:
            grid[r][c] = col
        
        q = deque([(r, c, col) for r, c, col in sources])
        
        while q:
            h = []
            added_this_time = set()
            
            for _ in range(len(q)):
                r, c, col = q.popleft()

                for nr, nc in [(r+1, c), (r-1, c), (r, c+1), (r, c-1)]:
                    if not (0 <= nr < rows and 0 <= nc < cols):
                        continue
                    if grid[nr][nc] != 0:
                        continue

                    added_this_time.add((nr, nc))
                    heappush(h, (nr, nc, col))
            
            while h:
                r, c, col = heappop(h)
                grid[r][c] = col

            for (r, c) in added_this_time:
                q.append((r, c, grid[r][c]))

        return grid
                    
                    
                
        
