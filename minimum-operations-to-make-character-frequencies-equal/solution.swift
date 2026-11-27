class Solution {
    func makeStringGood(_ s: String) -> Int {
        var cnt = [Int](repeating: 0, count: 26)
        let bytes = Array(s.utf8)
        let n = bytes.count
        var mx = 0
        for b in bytes {
            let idx = Int(b - 97)
            cnt[idx] += 1
            if cnt[idx] > mx { mx = cnt[idx] }
        }

        var result = n
        let INF = 1_000_000_000

        if mx >= 1 {
            for f in 1...mx {
                var dp0 = 0, dp1 = INF, dp2 = INF

                for i in 0..<26 {
                    let prevMin = min(dp0, min(dp1, dp2))
                    var nextDp0 = INF, nextDp1 = INF, nextDp2 = INF

                    if cnt[i] == 0 {
                        nextDp0 = prevMin
                    } else if cnt[i] >= f {
                        let excess = cnt[i] - f
                        nextDp0 = prevMin + excess
                        nextDp1 = prevMin + excess
                        nextDp2 = prevMin + cnt[i]
                    } else {
                        let need = f - cnt[i]
                        let c1 = (i > 0 && cnt[i - 1] >= f) ? (cnt[i - 1] - f) : 0
                        let c2 = (i > 0) ? cnt[i - 1] : 0

                        let op0 = dp0 + need
                        let op1 = (dp1 < INF) ? dp1 + max(0, need - c1) : INF
                        let op2 = (dp2 < INF) ? dp2 + max(0, need - c2) : INF

                        nextDp0 = min(op0, min(op1, op2))
                        nextDp2 = prevMin + cnt[i]
                    }

                    dp0 = nextDp0
                    dp1 = nextDp1
                    dp2 = nextDp2
                }

                result = min(result, min(dp0, min(dp1, dp2)))
            }
        }

        return result
    }
}
