class Solution {
    func remainingMethods(_ n: Int, _ k: Int, _ invocations: [[Int]]) -> [Int] {
        var methodMap = [Int: [Int]]()
        for i in 0..<n {
            methodMap[i] = []
        }
        
        for invocation in invocations {
            let src = invocation[0]
            let dst = invocation[1]
            methodMap[src]?.append(dst)
        }

        var stack = [k]
        var visited = Set([k])
        
        while !stack.isEmpty {
            let current = stack.removeLast()
            if let neighbors = methodMap[current] {
                for neighbor in neighbors {
                    if !visited.contains(neighbor) {
                        visited.insert(neighbor)
                        stack.append(neighbor)
                    }
                }
            }
        }
        
        var remainingMethods = [Int]()
        for method in 0..<n {
            if visited.contains(method) { continue }
            if let neighbors = methodMap[method] {
                for neighbor in neighbors {
                    if visited.contains(neighbor) {
                        return Array(0..<n)
                    }
                }
            }
            remainingMethods.append(method)
        }
        
        return remainingMethods
    }
}
