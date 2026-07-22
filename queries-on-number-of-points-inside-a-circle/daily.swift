class Solution {
    func maxActiveSectionsAfterTrade(_ s: String, _ queries: [[Int]]) -> [Int] {
        let chars = Array(s)
        let n = chars.count

        // Prefix sum of '1's in the entire string
        var pref = [Int](repeating: 0, count: n + 1)
        for i in 0..<n {
            pref[i + 1] = pref[i] + (chars[i] == "1" ? 1 : 0)
        }
        let totalOnes = pref[n]   // original active sections in whole string

        // Run‑length encoding: (bit, length, start, end)
        var runs: [(bit: Character, len: Int, start: Int, end: Int)] = []
        var i = 0
        while i < n {
            let ch = chars[i]
            var j = i
            while j < n && chars[j] == ch { j += 1 }
            runs.append((ch, j - i, i, j - 1))
            i = j
        }

        let m = runs.count

        // runAtPos[pos] = index of the run containing position pos
        var runAtPos = [Int](repeating: 0, count: n)
        for idx in 0..<m {
            for pos in runs[idx].start...runs[idx].end {
                runAtPos[pos] = idx
            }
        }

        // vals[idx] = net gain if we convert the internal '1'-run at idx
        // (only valid for idx > 0 and idx < m-1 and runs[idx].bit == '1')
        var vals = [Int](repeating: 0, count: m)
        for idx in 0..<m {
            if runs[idx].bit == "1" && idx > 0 && idx < m - 1 {
                vals[idx] = runs[idx - 1].len + runs[idx + 1].len
            }
        }

        // Segment tree for range maximum query on vals
        struct SegTree {
            private let size: Int
            private var tree: [Int]

            init(_ arr: [Int]) {
                size = arr.count
                tree = Array(repeating: 0, count: 2 * size)
                for i in 0..<size {
                    tree[size + i] = arr[i]
                }
                for i in stride(from: size - 1, through: 1, by: -1) {
                    tree[i] = max(tree[2 * i], tree[2 * i + 1])
                }
            }

            func query(_ l: Int, _ r: Int) -> Int {
                guard l <= r else { return 0 }
                var l = l + size
                var r = r + size
                var res = 0
                while l <= r {
                    if l & 1 == 1 {
                        res = max(res, tree[l])
                        l += 1
                    }
                    if r & 1 == 0 {
                        res = max(res, tree[r])
                        r -= 1
                    }
                    l >>= 1
                    r >>= 1
                }
                return res
            }
        }

        let seg = SegTree(vals)
        var answer = [Int]()

        for q in queries {
            let l = q[0]
            let r = q[1]

            let a = runAtPos[l]
            let b = runAtPos[r]

            var gain = 0

            // If the whole query lies inside a single run, no trade can increase the count
            if a == b {
                // gain stays 0
            } else {
                // Lengths of zero‑run fragments at the edges of the query
                let leftZeroLen  = runs[a].bit == "0" ? (runs[a].end - l + 1) : 0
                let rightZeroLen = runs[b].bit == "0" ? (r - runs[b].start + 1) : 0

                // Consider the first internal '1'-run (if it exists)
                if a + 1 < b {
                    let idx = a + 1
                    if runs[idx].bit == "1" {
                        let rightAdj: Int
                        if idx + 1 == b {
                            rightAdj = rightZeroLen
                        } else {
                            rightAdj = runs[idx + 1].len
                        }
                        gain = max(gain, leftZeroLen + rightAdj)
                    }
                }

                // Consider the last internal '1'-run (if it exists)
                if b - 1 > a {
                    let idx = b - 1
                    if runs[idx].bit == "1" {
                        let leftAdj: Int
                        if idx - 1 == a {
                            leftAdj = leftZeroLen
                        } else {
                            leftAdj = runs[idx - 1].len
                        }
                        gain = max(gain, leftAdj + rightZeroLen)
                    }
                }

                // All fully internal '1'-runs (their adjacent zero‑runs are fully inside)
                let L = a + 2
                let R = b - 2
                if L <= R {
                    gain = max(gain, seg.query(L, R))
                }
            }

            // Total active sections = original ones + net gain (if positive)
            answer.append(totalOnes + max(0, gain))
        }

        return answer
    }
}
