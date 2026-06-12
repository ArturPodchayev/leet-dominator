class Solution {
    func assignEdgeWeights(_ edges: [[Int]], _ queries: [[Int]]) -> [Int] {
        let n = edges.count
        var tree: [[Int]] = Array(repeating: [], count: n + 2)
        for e in edges {
            tree[e[0]].append(e[1])
            tree[e[1]].append(e[0])
        }
        var depth: [Int] = Array(repeating: 0, count: n + 2)
        var parent: [Int] = Array(repeating: 0, count: n + 2)
        dfs(
            tree: tree,
            parent: &parent, 
            d: &depth,
            curr: 1,
            par: -1,
            depth: 0
        )
        var ancestors: [[Int]] = []
        parent[1] = 1
        buildAncestors(ancestors: &ancestors, parent: parent, numNodes: n + 1)

        var res: [Int] = []
        for q in queries {
            let u = q[0]
            let v = q[1]
            let depthU = depth[u] 
            let depthV = depth[v]
            let lca = lca(
                ancestors: ancestors, 
                depth: depth, 
                u: u, 
                v: v
            )
            let len = depth[u] + depth[v] - 2 * depth[lca]
            if len > 0 {
                let ways = fastExp(base: 2, pow: len - 1)
                res.append(ways)
            } else {
                res.append(0)
            }
        }

        return res
    }

    private func dfs(tree: [[Int]], parent: inout [Int], d: inout [Int], curr: Int, par: Int, depth: Int) {
        d[curr] = depth
        for node in tree[curr] where node != par {
            parent[node] = curr
            dfs(
                tree: tree,
                parent: &parent,
                d: &d,
                curr: node,
                par: curr,
                depth: depth + 1
            )
        }
    }
    
    private func buildAncestors(ancestors: inout [[Int]], parent: [Int], numNodes: Int) {
        let maxPower = Int(log2(Double(numNodes))) + 1

        ancestors = Array(repeating: Array(repeating: 0, count: numNodes + 1), count: maxPower)

        let n = ancestors.count
        let m = ancestors[0].count
        
        for i in 0 ..< m {
            if i < parent.count {
                ancestors[0][i] = parent[i]
            }
        }
        for i in 1 ..< n {
            for j in 1 ..< m {
                let intermediate = ancestors[i - 1][j]
                ancestors[i][j] = ancestors[i - 1][intermediate]
            }
        }
    }
    
    private func lca(ancestors: [[Int]], depth: [Int], u: Int, v: Int) -> Int {
        var nodeU = u
        var nodeV = v
        let depthU = depth[nodeU]
        let depthV = depth[nodeV]
        
        if depthU < depthV {
            swap(&nodeU, &nodeV)
        }
        let diff = abs(depthU - depthV)
        var mask = 1
        var idx = 0
        
        while mask <= diff {
            if (mask & diff) > 0 {
                nodeU = ancestors[idx][nodeU]
            }
            mask <<= 1
            idx += 1
        }

        if nodeU == nodeV {
            return nodeU
        }
        
        var maxJumps = ancestors.count - 1
        while maxJumps >= 0 {
            if ancestors[maxJumps][nodeU] != ancestors[maxJumps][nodeV] {
                nodeU = ancestors[maxJumps][nodeU]
                nodeV = ancestors[maxJumps][nodeV]
            }
            maxJumps -= 1
        }
        
        return ancestors[0][nodeU]
    }

    private func fastExp(base: Int, pow: Int) -> Int {
        let MOD = 1_000_000_007
        var base = base
        var pow = pow
        var x = 1

        while pow > 0 {
            if pow % 2 != 0 {
                x *= base
                x %= MOD
            }
            base *= base
            base %= MOD
            pow /= 2
        }

        return x
    }
}
