class Solution {
    func hasValidPath(_ grid: [[Character]]) -> Bool {
        
        guard grid[0][0] == "(" else { return false }

        let grid = grid.map {
            $0.map { $0 == "(" ? 1 : -1 }
        }

        var rest = grid.count + grid[0].count - 1
        guard rest % 2 == 0 else { return false }

        var dp = Array(
            repeating: Array(repeating: Set<Int>(), count: grid[0].count),
            count: grid.count
        )
        var from = Set([[0, 0]])

        dp[0][0].insert(1)

        for i in 1...rest {
            guard !from.isEmpty else { return false }

            var newFrom = Set<[Int]>()
            var newdp = dp

            for from in from {
                for old in dp[from[0]][from[1]] {
                    if from[0] + 1 < grid.count,
                        old + grid[from[0] + 1][from[1]] >= 0,
                        old + grid[from[0] + 1][from[1]] <= rest - i {
                        newdp[from[0] + 1][from[1]].insert(old + grid[from[0] + 1][from[1]])
                        newFrom.insert([from[0] + 1, from[1]])
                    }
                    if from[1] + 1 < grid[0].count,
                        old + grid[from[0]][from[1] + 1] >= 0,
                        old + grid[from[0]][from[1] + 1] <= rest - i {
                        newdp[from[0]][from[1] + 1].insert(old + grid[from[0]][from[1] + 1])
                        newFrom.insert([from[0], from[1] + 1])
                    }
                }
            }

            from = newFrom
            dp = newdp
        }

        return dp.last!.last!.contains(0)
    }
}
