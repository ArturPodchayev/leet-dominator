class Solution {
    func countServers(_ grid: [[Int]]) -> Int {
        var grid = grid 

        let m = grid.count 
        let n = grid[0].count 

        var count = 0

        for i in 0..<m {
            var sum = 0
            for j in 0..<n {
                sum = sum + grid[i][j]
            }

            if sum > 1 {
                for j in 0..<n {
                    if sum > 1 {
                        grid[i][j] = grid[i][j] != 0 ? 2 : 0
                    }
                }
            }
        }

        for j in 0..<n {
            var sum = 0
            for i in 0..<m {
                sum = sum + grid[i][j]
            }

            if sum > 1 {
                for i in 0..<m {
                    if sum > 1 {
                        grid[i][j] = grid[i][j] != 0 ? 2 : 0
                    }
                }
            }
        }

        for i in 0..<m {
            for j in 0..<n {
                if grid[i][j] == 2 {
                    count += 1
                }
            }
        }

        return count
    }
}
