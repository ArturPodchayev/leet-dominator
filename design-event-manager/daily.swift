class Solution {
    func countIslands(_ grid: [[Int]], _ k: Int) -> Int {
        var grid = grid
        let (m, n) = (grid.count, grid[0].count)
        var ans = 0
        for r in 0..<m {
            for c in 0..<n {
                if grid[r][c] > 0 && dfs(r, c) % k == 0 { ans += 1 }
            }
        }
        return ans

        func dfs(_ r: Int, _ c: Int) -> Int {
            var total = grid[r][c]
            grid[r][c] = 0
            for (dr, dc) in [(1,0),(0,1),(-1,0),(0,-1)] {
                let (nr, nc) = (r+dr, c+dc)
                if 0 <= nr && nr < m && 0 <= nc && nc < n && grid[nr][nc] > 0 {
                    total += dfs(nr, nc)
                }
            }
            return total
        }
    }
}
