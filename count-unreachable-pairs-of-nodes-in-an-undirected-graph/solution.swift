class Solution {
    func traverse(_ node: Int, _ store: [Int: [Int]], _ visited: inout [Int]) -> Int {
        var ans = 1
        visited[node] = 1

        if let _ = store[node] {
            for iterator in store[node]! {
                if visited[iterator] == -1 {
                    ans = ans + traverse(iterator, store, &visited)
                }
            }
        }

        return ans
    }

    func countPairs(_ n: Int, _ edges: [[Int]]) -> Int {
        var edgesLength = edges.count
        var visited = Array(repeating: -1, count: n)
        var ans = 0
        var store = [Int: [Int]]()

        for iterator in 0..<edgesLength {
            if let _ = store[edges[iterator][0]] {
                store[edges[iterator][0]]!.append(edges[iterator][1])
            } else {
                store[edges[iterator][0]] = [Int]()
                store[edges[iterator][0]]!.append(edges[iterator][1])
            }

            if let _ = store[edges[iterator][1]] {
                store[edges[iterator][1]]!.append(edges[iterator][0])
            } else {
                store[edges[iterator][1]] = [Int]()
                store[edges[iterator][1]]!.append(edges[iterator][0])
            }
        }

        var previousSum = 0
        for iterator in 0..<n {
            if visited[iterator] == -1 {
                var value = traverse(iterator, store, &visited)
                ans = ans + (previousSum * value)
                previousSum = previousSum + value
            }
        }

        return ans
    }
}
