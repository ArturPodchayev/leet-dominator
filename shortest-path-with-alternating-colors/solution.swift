class Solution {
    func shortestAlternatingPaths(_ n: Int, _ redEdges: [[Int]], _ blueEdges: [[Int]]) -> [Int] {
        
        let reds = redEdges.reduce(into: [Int: [Int]]()) { $0[$1[0], default: []].append($1[1]) }
        let blues = blueEdges.reduce(into: [Int: [Int]]()) { $0[$1[0], default: []].append($1[1]) }

        var br = Array(repeating: Int.max, count: n)
        var bb = Array(repeating: Int.max, count: n)

        br[0] = 0
        bb[0] = 0

        var stack = [0]

        while !stack.isEmpty {
            let p = stack.removeLast()

            if br[p] != Int.max {
                for q in blues[p] ?? []
                    where bb[q] > br[p] + 1 {
                        bb[q] = br[p] + 1
                        stack.append(q)
                    }
            }

            if bb[p] != Int.max {
                for q in reds[p] ?? []
                    where br[q] > bb[p] + 1 {
                        br[q] = bb[p] + 1
                        stack.append(q)
                    }
            }
        }

        return zip(br, bb).map { a, b in
            let r = min(a, b)
            return r == Int.max ? -1 : r
        }
    }
}
