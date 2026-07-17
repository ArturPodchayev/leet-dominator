class Solution {
    func gcdValues(_ nums: [Int], _ queries: [Int]) -> [Int] {
        let maxVal = nums.max()!

        var freq = Array(repeating: 0, count: maxVal + 1)
        for x in nums {
            freq[x] += 1
        }

        var cnt = Array(repeating: 0, count: maxVal + 1)
        if maxVal >= 1 {
            for d in 1...maxVal {
                var m = d
                while m <= maxVal {
                    cnt[d] += freq[m]
                    m += d
                }
            }
        }

        var exactPairs = Array(repeating: Int64(0), count: maxVal + 1)

        if maxVal >= 1 {
            for g in stride(from: maxVal, through: 1, by: -1) {
                let c = Int64(cnt[g])
                var pairs = c * (c - 1) / 2

                var multiple = g * 2
                while multiple <= maxVal {
                    pairs -= exactPairs[multiple]
                    multiple += g
                }

                exactPairs[g] = pairs
            }
        }

        var prefix = Array(repeating: Int64(0), count: maxVal + 1)
        if maxVal >= 1 {
            for g in 1...maxVal {
                prefix[g] = prefix[g - 1] + exactPairs[g]
            }
        }

        var ans = [Int]()
        ans.reserveCapacity(queries.count)

        for q in queries {
            let target = Int64(q + 1)

            var lo =amaxVal

            while lo < hi {
                let mid = (lo + hi) / 2
                if prefix[mid] >= target {
                    hi = mid
                } else {
                    lo = mid + 1
                }
            }

            ans.append(lo)
        }

        return ans
    }
}
