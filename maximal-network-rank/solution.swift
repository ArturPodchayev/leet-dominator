class Solution {
    func maximalNetworkRank(_ n: Int, _ roads: [[Int]]) -> Int {
        var adj = [[Int]](repeating: [Int](), count: n)
        for road in roads {
            adj[road[0]].append(road[1])
            adj[road[1]].append(road[0])
        }
        var maxRank = 0
        for i in 0..<n {
            for j in i+1..<n {
                var rank = adj[i].count + adj[j].count
                if adj[i].contains(j) {
                    rank -= 1
                }
                maxRank = max(maxRank, rank)
            }
        }
        return maxRank
    }
}
