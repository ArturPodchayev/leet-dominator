import Foundation

final class SegTree {
    let n: Int
    var maxv: [Int]
    var minv: [Int]

    init(_ nums: [Int]) {
        n = nums.count
        maxv = Array(repeating: 0, count: 4 * n)
        minv = Array(repeating: 0, count: 4 * n)
        build(1, 0, n - 1, nums)
    }

    private func build(_ node: Int, _ l: Int, _ r: Int, _ nums: [Int]) {
        if l == r {
            maxv[node] = nums[l]
            minv[node] = nums[l]
            return
        }

        let m = (l + r) / 2
        build(node * 2, l, m, nums)
        build(node * 2 + 1, m + 1, r, nums)

        maxv[node] = max(maxv[node * 2], maxv[node * 2 + 1])
        minv[node] = min(minv[node * 2], minv[node * 2 + 1])
    }

    func queryMax(_ node: Int, _ l: Int, _ r: Int, _ ql: Int, _ qr: Int) -> Int {
        if ql <= l && r <= qr {
            return maxv[node]
        }

        let m = (l + r) / 2
        var res = Int.min

        if ql <= m {
            res = max(res, queryMax(node * 2, l, m, ql, qr))
        }
        if qr > m {
            res = max(res, queryMax(node * 2 + 1, m + 1, r, ql, qr))
        }

        return res
    }

    func queryMin(_ node: Int, _ l: Int, _ r: Int, _ ql: Int, _ qr: Int) -> Int {
        if ql <= l && r <= qr {
            return minv[node]
        }

        let m = (l + r) / 2
        var res = Int.max

        if ql <= m {
            res = min(res, queryMin(node * 2, l, m, ql, qr))
        }
        if qr > m {
            res = min(res, queryMin(node * 2 + 1, m + 1, r, ql, qr))
        }

        return res
    }
}

struct HeapNode: Comparable {
    let value: Int
    let l: Int
    let r: Int

    static func < (lhs: HeapNode, rhs: HeapNode) -> Bool {
        lhs.value > rhs.value
    }
}

struct Heap<T: Comparable> {
    private var heap: [T] = []

    mutating func push(_ value: T) {
        heap.append(value)
        var i = heap.count - 1

        while i > 0 {
            let p = (i - 1) / 2
            if heap[i] < heap[p] {
                heap.swapAt(i, p)
                i = p
            } else {
                break
            }
        }
    }

    mutating func pop() -> T? {
        guard !heap.isEmpty else { return nil }

        if heap.count == 1 {
            return heap.removeLast()
        }

        let res = heap[0]
        heap[0] = heap.removeLast()

        var i = 0
        while true {
            let left = i * 2 + 1
            let right = i * 2 + 2
            var best = i

            if left < heap.count && heap[left] < heap[best] {
                best = left
            }
            if right < heap.count && heap[right] < heap[best] {
                best = right
            }

            if best == i { break }

            heap.swapAt(i, best)
            i = best
        }

        return res
    }
}

class Solution {
    func maxTotalValue(_ nums: [Int], _ k: Int) -> Int {
        let n = nums.count
        let seg = SegTree(nums)

        var pq = Heap<HeapNode>()

        for l in 0..<n {
            let value =
                seg.queryMax(1, 0, n - 1, l, n - 1)
                - seg.queryMin(1, 0, n - 1, l, n - 1)

            pq.push(HeapNode(value: value, l: l, r: n - 1))
        }

        var ans = 0
        var k = k

        while k > 0 {
            guard let top = pq.pop() else { break }

            ans += top.value
            k -= 1

            if top.r > top.l {
                let newR = top.r - 1
                let value =
                    seg.queryMax(1, 0, n - 1, top.l, newR)
                    - seg.queryMin(1, 0, n - 1, top.l, newR)

                pq.push(HeapNode(value: value, l: top.l, r: newR))
            }
        }

        return ans
    }
}
