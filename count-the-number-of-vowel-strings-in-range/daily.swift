class Solution {
    func countCompleteComponents(_ n: Int, _ edges: [[Int]]) -> Int {
        var adj = [[Int]](repeating: [], count: n)
        for edge in edges {
            adj[edge[0]].append(edge[1])
            adj[edge[1]].append(edge[0])
        }
        
        var visited = [Bool](repeating: false, count: n)
        var completeComponentCount = 0
        
        for i in 0..<n {
            if visited[i] { continue }
            
            var queue = [i]
            var head = 0
            visited[i] = true
            
            var vertexCount = 0
            var edgeCount = 0
            
            while head < queue.count {
                let u = queue[head]
                head += 1
                
                vertexCount += 1
                edgeCount += adj[u].count
                
                for v in adj[u] {
                    if !visited[v] {
                        visited[v] = true
                        queue.append(v)
                    }
                }
            }
            
            if edgeCount == vertexCount * (vertexCount - 1) {
                completeComponentCount += 1
            }
        }
        
        return completeComponentCount
    }
}
