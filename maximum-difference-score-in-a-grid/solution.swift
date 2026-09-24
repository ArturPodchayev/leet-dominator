class Solution {
    func maxScore(_ grid: [[Int]]) -> Int {
        let (m, n) = (grid.count, grid.first?.count ?? 0)

        // For each cell, compute the min value to its left, above or in the first
        // quadrant.
        var mins = Array(repeating: Array(repeating: 0, count: n), count: m)
        for row in 0..<m {
            for col in 0..<n {
                var minValue = Int.max
                if row > 0 { minValue = min(minValue, grid[row - 1][col], mins[row - 1][col]) }
                if col > 0 { minValue = min(minValue, grid[row][col - 1], mins[row][col - 1]) }

                mins[row][col] = minValue
            }
        }

        // For each cell, compute the score from the min value to the cell.
        var res = Int.min
        for row in 0..<m {
            for col in 0..<n {
                res = max(res, grid[row][col] - mins[row][col])
            }
        }
        return res
    }
}
