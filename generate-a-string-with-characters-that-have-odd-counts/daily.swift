import Foundation

class Solution {
    func assignEdgeWeights(_ edges: [[Int]]) -> Int {
        let MOD = 1_000_000_007
        let n = edges.count + 1

        var g = Array(repeating: [Int](), count: n + 1)

        for e in edges {
            let u = e[0], v = e[1]
            g[u].append(v)
            g[v].append(u)
        }

        var q: [(Int, Int)] = [(1, 0)]
        var head = 0
        var vis = Set<Int>([1])
        var maxDepth = 0

        while head < q.count {
            let (node, depth) = q[head]
            head += 1

            maxDepth = max(maxDepth, depth)

            for nei in g[node] {
                if !vis.contains(nei) {
                    vis.insert(nei)
                    q.append((nei, depth + 1))
                }
            }
        }

        func modPow(_ base: Int, _ exp: Int) -> Int {
            var result = 1
            var b = base % MOD
            var e = exp

            while e > 0 {
                if e & 1 == 1 {
                    result = Int((Int64(result) * Int64(b)) % Int64(MOD))
                }
                b = Int((Int64(b) * Int64(b)) % Int64(MOD))
                e >>= 1
            }

            return result
        }

        return modPow(2, maxDepth - 1)
    }
}
