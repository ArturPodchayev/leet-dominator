class Solution {

    func closedIsland(_ grid: [[Int]]) -> Int {

        let cols = grid.count
        let rows = grid[0].count
        var count = 0

        if cols <= 2 && rows <= 2 { return 0 }
        var isVisited: [[Bool]] = Array(repeating: Array(repeating: false, count: rows), count: cols)

         for i in (1..<cols - 1) {
            for j in (1..<rows - 1) {
                if isVisited[i][j] { continue }

                if grid[i][j] == 0 && dfs(i, j) {
                    count += 1
                }
            }
         }

        func dfs(_ i: Int, _ j: Int) -> Bool {
            
            if i < 0 || i >= cols || j < 0 || j >= rows { return false }

            if grid[i][j] == 1 || isVisited[i][j] { return true }
        
            isVisited[i][j] = true

            return [dfs(i, j - 1), dfs(i + 1, j), dfs(i, j + 1), dfs(i - 1, j)].allSatisfy { $0 }
        }

        return count
    }
}
