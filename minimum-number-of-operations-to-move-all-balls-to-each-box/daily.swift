import Foundation

class SegmentTree {
    let maxX = 50000
    var seg: [Int]

    init() {
        seg = Array(repeating: 0, count: 4 * (maxX + 1))
    }

    func update(_ node: Int, _ l: Int, _ r: Int, _ idx: Int, _ val: Int) {
        if l == r {
            seg[node] = val
            return
        }

        let mid = (l + r) / 2

        if idx <= mid {
            update(node * 2, l, mid, idx, val)
        } else {
            update(node * 2 + 1, mid + 1, r, idx, val)
        }

        seg[node] = max(seg[node * 2], seg[node * 2 + 1])
    }

    func query(_ node: Int, _ l: Int, _ r: Int, _ ql: Int, _ qr: Int) -> Int {
        if ql > r || qr < l {
            return 0
        }

        if ql <= l && r <= qr {
            return seg[node]
        }

        let mid = (l + r) / 2

        return max(
            query(node * 2, l, mid, ql, qr),
            query(node * 2 + 1, mid + 1, r, ql, qr)
        )
    }
}

class Solution {
    let maxX = 50000

    func getResults(_ queries: [[Int]]) -> [Bool] {
        let st = SegmentTree()

        var obstacles = Set<Int>()
        obstacles.insert(0)

        for q in queries {
            if q[0] == 1 {
                obstacles.insert(q[1])
            }
        }

        var pos = Array(obstacles).sorted()

        for i in 1..<pos.count {
            st.update(1, 0, maxX, pos[i], pos[i] - pos[i - 1])
        }

        var ans: [Bool] = []

        for qi in stride(from: queries.count - 1, through: 0, by: -1) {
            let q = queries[qi]

            if q[0] == 2 {
                let x = q[1]
                let sz = q[2]

                let idx = upperBound(pos, x) - 1
                let prevObstacle = pos[idx]

                var best = st.query(1, 0, maxX, 0, prevObstacle)
                best = max(best, x - prevObstacle)

                ans.append(best >= sz)
            } else {
                let x = q[1]

                guard let idx = pos.firstIndex(of: x) else { continue }

                let leftPos = pos[idx - 1]

                st.update(1, 0, maxX, x, 0)

                if idx + 1 < pos.count {
                    let rightPos = pos[idx + 1]
                    st.update(1, 0, maxX, rightPos, rightPos - leftPos)
                }

                pos.remove(at: idx)
            }
        }

        return ans.reversed()
    }

    private func upperBound(_ arr: [Int], _ target: Int) -> Int {
        var left = 0
        var right = arr.count

        while left < right {
            let mid = (left + right) / 2

            if arr[mid] <= target {
                left = mid + 1
            } else {
                right = mid
            }
        }

        return left
    }
}
