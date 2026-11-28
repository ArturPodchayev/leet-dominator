class Solution {
    func strangePrinter(_ s: String) -> Int {

        let s: [Int] = {
            var res = [Int]()
            for c in s {
                let c = Int(c.asciiValue! - 97)
                if c != res.last { res.append(c) }
            }
            return res
        }()

        var dpm = Array(
            repeating: Array(repeating: Int.max, count: s.count),
            count: s.count
        )

        func solve(_ l: Int = 0, _ r: Int = s.count - 1) -> Int {
            guard r - l > 1 else { return r - l + 1 }
            guard dpm[l][r] == Int.max else { return dpm[l][r] }

            var dp = Array(repeating: Int.max, count: s.count)
            dp[l] = 1

            for i in 1 + l...r {
                dp[i] = 1 + dp[i - 1]

                for j in l..<i
                    where s[i] == s[j] {
                        dp[i] = min(dp[i], dp[j] + solve(j + 1, i - 1))
                    }
            }

            dpm[l][r] = dp[r]
            return dp[r]
        }

        return solve()
    }
}
