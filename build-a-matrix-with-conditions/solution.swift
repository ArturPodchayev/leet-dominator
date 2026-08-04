class Solution {
    func buildMatrix(_ k: Int, _ rowConditions: [[Int]], _ colConditions: [[Int]]) -> [[Int]] {
    // Helper function to perform topological sort
    func topologicalSort(_ n: Int, _ conditions: [[Int]]) -> [Int]? {
        var indegree = [Int](repeating: 0, count: n)
        var graph = [[Int]](repeating: [], count: n)
        
        for condition in conditions {
            let u = condition[0] - 1
            let v = condition[1] - 1
            graph[u].append(v)
            indegree[v] += 1
        }
        
        var queue = [Int]()
        for i in 0..<n {
            if indegree[i] == 0 {
                queue.append(i)
            }
        }
        
        var order = [Int]()
        while !queue.isEmpty {
            let node = queue.removeFirst()
            order.append(node)
            for neighbor in graph[node] {
                indegree[neighbor] -= 1
                if indegree[neighbor] == 0 {
                    queue.append(neighbor)
                }
            }
        }
        
        return order.count == n ? order : nil
    }
    
    guard let rowOrder = topologicalSort(k, rowConditions),
          let colOrder = topologicalSort(k, colConditions) else {
        return []
    }
    
    var rowPosition = [Int](repeating: 0, count: k)
    var colPosition = [Int](repeating: 0, count: k)
    
    for i in 0..<k {
        rowPosition[rowOrder[i]] = i
        colPosition[colOrder[i]] = i
    }
    
    var matrix = [[Int]](repeating: [Int](repeating: 0, count: k), count: k)
    for i in 0..<k {
        matrix[rowPosition[i]][colPosition[i]] = i + 1
    }
    
    return matrix
}
}
