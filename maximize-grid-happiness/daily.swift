class Solution {
    func palindromePath(_ n: Int, _ edges: [[Int]], _ s: String, _ queries: [String]) -> [Bool] {
        var adj = [[Int]](repeating: [], count: n)
        for e in edges {
            adj[e[0]].append(e[1])
            adj[e[1]].append(e[0])
        }
        
        var sArr = Array(s)
        
        var tin = [Int](repeating: 0, count: n)
        var tout = [Int](repeating: 0, count: n)
        var depth = [Int](repeating: 0, count: n)
        var initial_mask = [Int](repeating: 0, count: n)
        var up = [Int](repeating: 0, count: n * 20)
        
        // Iterative DFS
        var timer = 0
        var stack = [(Int, Int, Int)]()
        stack.reserveCapacity(n)
        stack.append((0, 0, 0)) // (node, parent, child_index)
        
        initial_mask[0] = 1 << Int(sArr[0].asciiValue! - 97)
        
        while !stack.isEmpty {
            let (u, p, idx) = stack.removeLast()
            
            if idx == 0 {
                timer += 1
                tin[u] = timer
                
                up[u * 20 + 0] = p
                for i in 1...19 {
                    let prev = up[u * 20 + i - 1]
                    up[u * 20 + i] = up[prev * 20 + i - 1]
                }
            }
            
            var next_idx = idx
            var found_child = false
            
            while next_idx < adj[u].count {
                let v = adj[u][next_idx]
                next_idx += 1
                if v != p {
                    stack.append((u, p, next_idx))
                    
                    depth[v] = depth[u] + 1
                    initial_mask[v] = initial_mask[u] ^ (1 << Int(sArr[v].asciiValue! - 97))
                    
                    stack.append((v, u, 0))
                    found_child = true
                    break
                }
            }
            
            if !found_child {
                tout[u] = timer
            }
        }
        
        func lca(_ u: Int, _ v: Int) -> Int {
            var a = u, b = v
            if depth[a] < depth[b] { swap(&a, &b) }
            for i in stride(from: 19, through: 0, by: -1) {
                if depth[a] - (1 << i) >= depth[b] {
                    a = up[a * 20 + i]
                }
            }
            if a == b { return a }
            for i in stride(from: 19, through: 0, by: -1) {
                if up[a * 20 + i] != up[b * 20 + i] {
                    a = up[a * 20 + i]
                    b = up[b * 20 + i]
                }
            }
            return up[a * 20 + 0]
        }
        
        // Fenwick Tree / Binary Indexed Tree
        var bit = [Int](repeating: 0, count: n + 2)
        func add(_ i: Int, _ val: Int) {
            var idx = i
            while idx <= n {
                bit[idx] ^= val
                idx += idx & -idx
            }
        }
        func bitQuery(_ i: Int) -> Int {
            var res = 0
            var idx = i
            while idx > 0 {
                res ^= bit[idx]
                idx -= idx & -idx
            }
            return res
        }
        
        var ans = [Bool]()
        
        for q in queries {
            let parts = q.split(separator: " ")
            if parts[0] == "update" {
                let u = Int(parts[1])!
                let c = parts[2].first!
                let old_c = sArr[u]
                
                if old_c != c {
                    let old_val = 1 << Int(old_c.asciiValue! - 97)
                    let new_val = 1 << Int(c.asciiValue! - 97)
                    let diff = old_val ^ new_val
                    
                    sArr[u] = c
                    
                    add(tin[u], diff)
                    add(tout[u] + 1, diff) // +1 
                }
            } else if parts[0] == "query" {
                let u = Int(parts[1])!
                let v = Int(parts[2])!
                let l = lca(u, v)
                
                let mask_u = initial_mask[u] ^ bitQuery(tin[u])
                let mask_v = initial_mask[v] ^ bitQuery(tin[v])
                let char_l = 1 << Int(sArr[l].asciiValue! - 97)
                
                let path_mask = mask_u ^ mask_v ^ char_l
                
                if path_mask & (path_mask - 1) == 0 {
                    ans.append(true)
                } else {
                    ans.append(false)
                }
            }
        }
        
        return ans
    }
}
