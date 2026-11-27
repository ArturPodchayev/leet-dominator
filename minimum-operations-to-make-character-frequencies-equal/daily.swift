class Solution {
    func maximumSaleItems(_ items: [[Int]], _ budget: Int) -> Int {
        let n = items.count
        var bonus = [Int](repeating: 0, count: n)
        for i in 0..<n {
            var cnt = 0
            for j in 0..<n {
                if i != j && items[j][0] % items[i][0] == 0 {
                    cnt += 1
                }
            }
            bonus[i] = cnt
        }

        var dp = [Int](repeating: 0, count: budget + 1)
        for i in 0..<n {
            let cost = items[i][1]
            let freeCopies = bonus[i]
            if cost <= budget {
                for b in stride(from: budget, through: cost, by: -1) {
                    dp[b] = max(dp[b], dp[b - cost] + 1 + freeCopies)
                }
                for b in cost...budget {
                    dp[b] = max(dp[b], dp[b - cost] + 1)
                }
            }
        }

        return dp.max() ?? 0
    }
}
