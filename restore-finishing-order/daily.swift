class Solution {
    func shortestPath(_ n: Int, _ edges: [[Int]], _ labels: String, _ k: Int) -> Int {
        let lab = Array(labels.utf8)
        var adj = [[(Int, Int)]](repeating: [], count: n)
        for e in edges { adj[e[0]].append((e[1], e[2])) }

        let w = k + 1
        var dist = [Int](repeating: Int.max, count: n * w)
        var heap: [(Int, Int)] = []

        func push(_ x: (Int, Int)) {
            heap.append(x)
            var i = heap.count - 1
            while i > 0 {
                let p = (i - 1) / 2
                if heap[p].0 <= heap[i].0 { break }
                heap.swapAt(p, i); i = p
            }
        }
        func pop() -> (Int, Int) {
            let top = heap[0]
            let last = heap.removeLast()
            if !heap.isEmpty {
                heap[0] = last
                var i = 0
                while true {
                    let l = 2 * i + 1, r = l + 1
                    var m = i
                    if l < heap.count && heap[l].0 < heap[m].0 { m = l }
                    if r < heap.count && heap[r].0 < heap[m].0 { m = r }
                    if m == i { break }
                    heap.swapAt(m, i); i = m
                }
            }
            return top
        }

        dist[1] = 0
        push((0, 1))
        while !heap.isEmpty {
            let (d, s) = pop()
            if d > dist[s] { continue }
            let u = s / w, run = s % w
            if u == n - 1 { return d }
            for (v, cost) in adj[u] {
                let nr = lab[v] == lab[u] ? run + 1 : 1
                if nr > k { continue }
                let ns = v * w + nr
                let nd = d + cost
                if nd < dist[ns] {
                    dist[ns] = nd
                    push((nd, ns))
                }
            }
        }
        return -1
    }
}
